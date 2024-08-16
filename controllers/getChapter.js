// controllers/getChapter.js
const Subject = require('../models/subjectModel');

exports.getChapter = async (req, res) => {
    const { subjectId, chapterId } = req.params;

    try {
        const subject = await Subject.findById(subjectId);
        if (!subject) {
            return res.status(404).json({ message: 'Subject not found' });
        }

        const chapter = subject.chapters.id(chapterId);
        if (!chapter) {
            return res.status(404).json({ message: 'Chapter not found' });
        }

        res.json(chapter);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
