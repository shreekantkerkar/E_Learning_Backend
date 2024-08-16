const Subject = require('../models/subjectModel');

exports.updateLinks = async (req, res) => {
    const { subjectId, chapterId } = req.params;
    const { videoLinks, driveLink } = req.body; // Update to include videoLinks

    try {
        const subject = await Subject.findById(subjectId);
        if (!subject) {
            return res.status(404).json({ message: 'Subject not found' });
        }

        const chapter = subject.chapters.id(chapterId);
        if (!chapter) {
            return res.status(404).json({ message: 'Chapter not found' });
        }

        // Update the chapter's links if provided
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
