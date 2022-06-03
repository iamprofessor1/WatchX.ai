/**********************************************************************/
/********************** Exam API ******************************/
/********************************************************************/

/*
 * 1 Post request on /createExam creates an exam
 * 2 First a custom validator validates the requests
 * 3 Then we try to check if same exam code is present. If not then
 * 4 we create the exam else we display error
 */

const Exam = require("../../models/Exams");
const validateExamInput = require("../../validation/CreateExam");
const express = require("express");
const router = express.Router();




router.post("/createExam", (req, res) => {

    // validate exam data for errors
    const { errors, isValid } = validateExamInput(req.body);
    // Handling the Error
    // if there is some error return error code 400 with error description
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Exam.findOne({ exam_code: req.body.exam_code }).then(exam => {
        // if exam code is already present in the database return error
        if (exam) {
            return res.status(400).json({ name: "Exam with this code exists in database" });
        }
        else {

            const newExam = new Exam({
                name: req.body.name,
                prof_email: req.body.prof_email,
                exam_link: req.body.exam_link,
                date_time_start: req.body.date_time_start,
                duration: req.body.duration,
                exam_code: req.body.exam_code,
            });

            newExam.save().then(exam => res.join(exam)).catch(err => console.log(err));
            return res.status(200).json(newExam);

        }

    });


});

/**
 * Get requests on /examByCode with exam_code as the query parameter
 * return exam object if exam code is correct else an error is raised
 */
router.get("/examByCode", (req, res) => {
    const req_exam_code = req.query.exam_code;
    Exam.findOne({ exam_code: req_exam_code }).then(exam => {

        if (!exam) {
            return res.status(400).json("Exam Code is invalid ❌");
        }
        return res.status(200).json(exam);
    });
});

/*
 1. * Get requests on /examByProf with exam_code and prof_email as query parameter
 2 .* return exam object if the exam code is correct and it was created by the professor
 3 . * with prof_email id
 4 . * else returns an error
 */
router.get("/examsByProf", (req, res) => {
    const req_exam_code = req.query.exam_code;
    const req_prof_email = req.query.prof_email;
    Exam.findOne({ prof_email: req_prof_email, exam_code: req_exam_code }).then(doc => {
        if (!doc) {
            return res.status(400).json("Exam doesn't exist or professor doesnt have permission");
        }
        return res.status(200).json(doc);
    });
});

// export the router into module
module.exports = router;


/**********************************************************************/
/********************** Exam API ******************************/
/********************************************************************/

/*
 * 1 Post request on /createExam creates an exam
 * 2 First a custom validator validates the requests
 * 3 Then we try to check if same exam code is present. If not then
 * 4 we create the exam else we display error
 */


/*
 1. * Get requests on /examByProf with exam_code and prof_email as query parameter
 2 .* return exam object if the exam code is correct and it was created by the professor
 3 . * with prof_email id
 4 . * else returns an error
 */



