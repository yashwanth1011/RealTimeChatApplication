const express = require("express")
require('./db/connection');
const app = express();
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');

const port = process.env.PORT || 8000;

const Users = require('./models/users')




//app use
app.use(express.json());
app.use(express.urlencoded({entended: false}));

app.get('/', (req, res) => {
    res.send('welcome');
    
})

app.post('/api/register', async (req, res, next) => {

    const {fullname, email, password} = req.body;


    try{
        const {fullname, email, password} = req.body;
        if(!fullname || !email || !password)
                res.status(400).send('Please fill all required fields');
        else{
            const isAlreadyExist = await Users.findOne({email});
            if(isAlreadyExist){
                res.status(400).send('User already exists')
            }
            else   {
                const newUser = new Users({fullname, email})
                bcryptjs.hash(password, 10, (err, hashedPassword) => {
                    newUser.set('password', hashedPassword)
                    newUser.save();
                    next();
                })
                return res.status(200).send('User registered successfully');
            }
        }
    }
    catch(error){

    }
})


app.post('/api/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).send('Please fill all required fields');
        } else {
            const user = await Users.findOne({ email });
            if (!user) {
                res.status(400).send('User email or password is incorrect');
            } else {
                const validateUser = await bcryptjs.compare(password, user.password);
                if (!validateUser) {
                    res.status(400).send('User email or password is incorrect');
                } else {
                    const payload = {
                        userId: user._id,
                        email: user.email
                    }
                    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'THIS_IS_A_JWT_SECRET_KEY';

                    jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: 84600 }, async (err, token) => {
                        await Users.updateOne({ _id: user._id }, {
                            $set: { token }
                        })
                        user.save();
                        return res.status(200).json({ user: { id: user._id, email: user.email, fullName: user.fullName }, token: token })
                    })
                }
            }
        }

    } catch (error) {
        console.log(error, 'Error')
    }
})


app.listen(port, () => {
    console.log('listening on port' + port)
})