const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const filmSchema = new Schema({
    contactName: { type: String},
    email: { type: String },
    contactNumber: { type: String },
    company: { type: String },
    imdb: { type: String },
    title: { type: String },
    year: { type: String },
    genre: { type: String },
    country: { type: String },
    producer: { type: String },
    writer: { type: String },
    director: { type: String },
    cast: { type: String },
    runtime: { type: String },
    format: { type: String },
    digibeta: { type: String },
    hdmaster: { type: String }
});

const submissionEntry = mongoose.model("submissionEntry", filmSchema);

module.exports = submissionEntry;
