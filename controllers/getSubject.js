// controllers/getSubjects.js

const Subject = require('../models/subjectModel');

exports.getSubjects = async (req, res) => {
    try {
        // Fetch all subjects from the database
        const subjects = await Subject.find({}, { subName: 1, semesters: 1, chapters: 1 });

        res.json(subjects); // Send the subjects as JSON response
    } catch (error) {
        // If there's an error, send an error response with status code 500
        res.status(500).json({ message: error.message });
    }
};
