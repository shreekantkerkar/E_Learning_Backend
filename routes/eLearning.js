// routes/elearning.js

const express = require("express");
const router = express.Router();
const addSubject = require("../controllers/addSubject");
const addChapter = require("../controllers/addChapter");
//const updateLinks = require("../controllers/updateLinks");
const getSubjects = require("../controllers/getSubject");
const updateChapter = require("../controllers/updateChapter");
const deleteChapter = require("../controllers/deleteChapter");
const getChapter = require("../controllers/getChapter");

// Route for adding a subject
router.post("/addSubject", addSubject.addSubject);

// Route for adding a chapter to a subject
router.post("/addChapter/:subjectId", addChapter.addChapter);

// Route for updating chapter links
//router.put("/updateLink/:subjectId/:chapterId", updateLinks.updateLinks);

// Route for getting all subjects
router.get("/getSubjects", getSubjects.getSubjects);

router.put("/updateChapter/:subjectId/:chapterId",updateChapter.updateChapter);

router.delete("/deleteChapter/:subjectId/:chapterId", deleteChapter.deleteChapter);
router.get("/getChapter/:subjectId/:chapterId",getChapter.getChapter)

module.exports = router;
