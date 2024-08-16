// controllers/deleteChapter.js

const Subject = require('../models/subjectModel');

exports.deleteChapter = async (req, res) => {
    const { subjectId, chapterId } = req.params;

    try {
        const subject = await Subject.findById(subjectId);
        if (!subject) {
            return res.status(404).json({ message: 'Subject not found' });
        }

        // Filter out the chapter to be deleted from the chapters array
        subject.chapters = subject.chapters.filter(chapter => chapter._id.toString() !== chapterId);

        await subject.save();

        res.json(subject); // Return the updated subject without the deleted chapter
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
