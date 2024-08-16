const Subject = require('../models/subjectModel');

exports.addSubject = async (req, res) => {
    try {
        const { subName, semesters, chapters } = req.body;
        
        // Check if chapters are provided and are in the correct format
        if (!chapters || !Array.isArray(chapters) || chapters.length === 0) {
            return res.status(400).json({ error: "Chapters are required and must be provided as an array." });
        }

        // Create a new Subject instance with the provided data
        const subject = new Subject({ subName, semesters, chapters });

        // Save the new subject to the database
        const savedSubject = await subject.save();

        // Return the saved subject in the response
        res.json({ subject: savedSubject });
    } catch(error) {
        // Handle errors
        return res.status(400).json({ error: "Error while adding a Subject" });
    }
};
