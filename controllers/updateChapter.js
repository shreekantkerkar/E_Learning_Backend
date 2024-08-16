// controllers/updateChapter.js

const Subject = require('../models/subjectModel');

exports.updateChapter = async (req, res) => {
    const { subjectId, chapterId } = req.params;
    const { chapterName, description, videoLinks, driveLink } = req.body;

    try {
        const subject = await Subject.findById(subjectId);
        if (!subject) {
            return res.status(404).json({ message: 'Subject not found' });
        }

        const chapter = subject.chapters.id(chapterId);
        if (!chapter) {
            return res.status(404).json({ message: 'Chapter not found' });
        }

        // Update the chapter's fields if provided
        if (chapterName) {
            chapter.chapterName = chapterName;
        }
        if (description) {
            chapter.description = description;
        }
        if (videoLinks) {
            chapter.videoLinks = videoLinks;
        }
        if (driveLink) {
            chapter.driveLink = driveLink;
        }

        await subject.save();

        res.json(subject); // Return the updated subject
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
