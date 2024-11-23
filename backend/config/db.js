const mongoose = require('mongoose');
require('dotenv').config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const dbUri = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.uv8b8.mongodb.net/${dbName}`;

const connectDB = async () => {
    try {
        await mongoose.connect(dbUri);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }

    mongoose.connection.on('error', err => {
        console.error('MongoDB error:', err);
    });
}

module.exports = connectDB;