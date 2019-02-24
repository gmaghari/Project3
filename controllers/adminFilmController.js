var db = require("../models/adminMovies");

exports.addFilm = function(req, res){
    console.log("post request for film");    
    db.create(req.body)
    .then(function(dbTest){
    console.log(dbTest);
  })
}

exports.getFilm = function(req, res){
  console.log("get request  2 for film");
  db.find(res.query)
  .then(function(dbRes){
    res.json(dbRes)
  })
}

exports.getFilmById = function(req, res){
  console.log("get by ID request");
  db.findById(req.params.id)
  .then(dbRes => res.json(dbRes))
  .catch(err => res.status(422).json(err))
}

exports.deleteFilm = function(req, res){
  console.log("delete request for film");
  db
  .findById({_id: req.params.id})
  .then(function(dbDel){
    console.log(dbDel)  
    dbDel.remove();
  })
  .then(function(dbRes){
    res.json(dbRes);
  })
  .catch(err => res.status(422).json(err))
}

exports.updateFilm = function(req, res){
  console.log("update request for film");
  console.log(req.body);
  db
  .findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
  .then(function(dbRes){
    console.log("then function update");
  })
  .catch(err => res.status(422).json(err))
}