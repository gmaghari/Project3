//backend routes for administrator get and post request
const router = require("express").Router()
const adminController = require("../../controllers/adminFilmController");

//POST route to add movies to admin database.  This is for film distribution information, not submission through website portal.

//Matches with "/api/admin/getFilm"
router.route("/getFilm")
    .get(adminController.getFilm);

//Matches with "/api/admin/addFilm"
router.route("/addFilm")
    .post(adminController.addFilm);

//Match with "/api/admin/:id"
router.route("/:id")
    .get(adminController.getFilmById);

//Matches with "/api/admin/:id"
router.route("/:id")
    .delete(adminController.deleteFilm);

//Matches with "/api/admin/:id"
router.route("/:id")
    .put(adminController.updateFilm)    

module.exports = router;  