const mongoose = require('mongoose');
const { findById } = require('./post');
const todoTaskSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    date: {
    type: Date,
    default: Date.now
    
    },
    completed: {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model('TodoTask', todoTaskSchema);