const mongoose = require("mongoose");

const chapterSchema = new mongoose.Schema({
    chapterName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    videoLinks: [{ 
        type: String,
        required: true,
    }],
    driveLink: {
        type: String,
        required: true,
    },
});

const subjectSchema = new mongoose.Schema({
    subName: {
        type: String,
        required: true,
    },
    semesters: {
        type: Number,
        required: true,
    },
    chapters: [chapterSchema],
});

module.exports = mongoose.model("Subject", subjectSchema);