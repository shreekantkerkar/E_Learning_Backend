const Subject = require('../models/subjectModel');

exports.addChapter = async (req, res) => {
    const { subjectId } = req.params;
    const { chapterName, description, videoLinks, driveLink } = req.body;

    try {
        const subject = await Subject.findById(subjectId);
        if (!subject) {
            return res.status(404).json({ message: 'Subject not found' });
        }

        
        const newChapter = {
            chapterName,
            description,
            videoLinks,
            driveLink
        };

        
        subject.chapters.push(newChapter);

        
        await subject.save();

        res.json(subject);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
