var db = require("../models/submitFilm");

// // Find by ID
// exports.findById = function (req, res) {
//   console.log("Finding by ID");
//     db.findById(req.params.id)
//     .then(function(dbFind) {
//       console.log(dbFind);
//     })
// }

// Submit movie
exports.submitMovie = function(req, res){
    console.log("Submit Movie Test");    
    db.create(req.body)
    .then(function(dbTest){
    console.log(dbTest); 
  })
}  

// Get all
exports.getMovies = function(req, res){
  console.log("Get request for submssion");    
  db.find(res.query)
  .then(function(dbTest){
    res.json(dbTest)
  })
}

// Remove Item
exports.remove = function(req, res){
  console.log("Delete request for Submission page");    
  db
  .findById({ _id: req.params.id})
  .then(function(dbDelete){
    dbDelete.remove()
  })
  .then(function(dbRes){
    res.json(dbRes)
  })
}

