const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const filmSchema = new Schema({
    contactName: { 
        type: String,
        required: true
    },
    email: { 
        type: String,
        required: true
    },
    contactNumber: { 
        type: String 
    },
    company: { 
        type: String 
    },
    imdb: { 
        type: String 
    },
    title: { 
        type: String,
        required: true
    },
    year: { 
        type: String,
        required: true
    },
    genre: { 
        type: String,
        required: true
    },
    country: { 
        type: String,
        required: true
    },
    producer: { 
        type: String,
        required: true 
    },
    writer: { 
        type: String 
    },
    director: { 
        type: String,
        required: true
    },
    cast: { 
        type: String 
    },
    runtime: { 
        type: String 
    },
    format: { 
        type: String 
    },
    digibeta: { 
        type: String 
    },
    hdmaster: { 
        type: String 
    }
});

const submissionEntry = mongoose.model("submissionEntry", filmSchema);

module.exports = submissionEntry;
