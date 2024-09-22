const mongoose = require('mongoose');
const url = 'mongodb+srv://yashwanthchennu1412:123456!@cluster0.iv92p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(url, {}).then(() => console.log('Connected to DB')).catch((e) => console.log('Error', e))