# Chat Application

## Overview

This is a real-time chat application built to facilitate instant messaging between users. The application uses WebSocket communication to provide a seamless experience, allowing users to communicate in real-time through private and group chats.

## Features

- **Real-Time Messaging**: Instant message exchange using WebSocket technology.
- **User Authentication**: Secure login and registration.
- **Group Chats**: Support for multi-user group chats.
- **Private Messaging**: Direct one-on-one messaging.
- **Typing Indicators**: Shows when a user is typing.
- **Responsive Design**: Optimized for both mobile and desktop devices.

## Technologies Used

- **Frontend**:
  - React.js 
  - HTML5, CSS3, JavaScript
  - WebSocket (via Socket.IO)

- **Backend**:
  - Node.js with Express.js for the server
  - WebSocket (Socket.IO for real-time messaging)
  - MongoDB for message and user storage

- **Other**:
  - JWT (JSON Web Tokens) for secure user authentication
  - Docker 
  - Git for version control

## Installation

### Prerequisites

- Node.js (v12 or higher)
- MongoDB (ensure it's installed and running)
- npm or yarn

### Steps to Run

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/chat-app.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd chat-app
   ```

3. **Install Dependencies**:

   If using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

4. **Set Up Environment Variables**:

   Create a `.env` file in the root directory and include the following:

   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/chat-app
   JWT_SECRET=your_jwt_secret
   ```

5. **Start the Application**:

   Run the development server:

   ```bash
   npm run dev
   ```

   For production, use:

   ```bash
   npm start
   ```

6. **Access the Application**:

   Open your browser and go to `http://localhost:5000`.

## Project Structure

```plaintext
chat-app/
├── public/                     # Static files (HTML, images, etc.)
├── src/                        # Frontend source code
│   ├── components/             # React components
│   ├── pages/                  # Application pages
│   └── App.js                  # Main app component
├── server/                     # Backend source code
│   ├── controllers/            # API and socket controllers
│   ├── models/                 # Database models
│   ├── routes/                 # API routes
│   ├── sockets/                # WebSocket logic
│   └── server.js               # Entry point for backend server
├── .env                        # Environment variables
├── package.json                # Project dependencies and scripts
└── README.md                   # This file
```

## Features to Add

- **File Sharing**: Allow users to send files such as images and documents.
- **Push Notifications**: Notify users of new messages when they are not on the chat window.
- **Message Reactions**: Add emoji reactions to messages.
- **Audio/Video Calls**: Add WebRTC support for real-time voice and video communication.
