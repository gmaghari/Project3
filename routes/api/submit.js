//backend routes for administrator get and post request
const router = require("express").Router()
const submissionController = require("../../controllers/submissionController");

//POST route to add movies to admin database.  This is for film distribution information, not submission through website portal.

//Matches with "/api/contact/submission"

// POST
router.route("/submission")
    .post(submissionController.submitMovie);

// GET
router.route("/submitted")
    .get(submissionController.getMovies);

// DELETE
router.route("/:id")
    .delete(submissionController.remove);

module.exports = router;