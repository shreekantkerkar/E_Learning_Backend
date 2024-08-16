// controllers/addChapter.js

const Subject = require('../models/subjectModel');

exports.addChapter = async (req, res) => {
    const { subjectId } = req.params;
    const { chapterName, description, videoLinks, driveLink } = req.body; // Update to include videoLinks

    try {
        const subject = await Subject.findById(subjectId);
        if (!subject) {
            return res.status(404).json({ message: 'Subject not found' });
        }

        // Create a new chapter object
        const newChapter = {
            chapterName,
            description,
            videoLinks,
            driveLink
        };

        // Push the new chapter to the chapters array
        subject.chapters.push(newChapter);

        // Save the updated subject
        await subject.save();

        res.json(subject); // Return the updated subject
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
