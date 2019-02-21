var mongoose = require ("mongoose");

var Schema = mongoose.Schema;

var adminSchema = new Schema({
    movieTitle:{ type: String, required: true },
    ARGavailability: { type: String, required: true, default: "available" }, //Argentina
    AUSavailability: { type: String, required: true, default: "available" }, //AUS
    BENavailability: { type: String, required: true, default: "available" }, //Benelux
    BRAavailability: { type: String, required: true, default: "available" }, //Brazil
    BULavailability: { type: String, required: true, default: "available" }, //Bulgaria
    CHAavailability: { type: String, required: true, default: "available" }, //China
    CHLavailability: { type: String, required: true, default: "available" }, //Chile
    CISavailability: { type: String, required: true, default: "available" }, //CIS
    COLavailability: { type: String, required: true, default: "available" }, //Colombia
    CZEavailability: { type: String, required: true, default: "available" }, //Czech
    DRavailability: { type: String, required: true, default: "available" }, //Domincan Republic
    FINavailability: { type: String, required: true, default: "available" }, //Finland
    FRAavailability: { type: String, required: true, default: "available" }, //France
    GERavailability: { type: String, required: true, default: "available" }, //Germany
    GREavailability: { type: String, required: true, default: "available" }, //Greece
    HKavailability: { type: String, required: true, default: "available" }, //Hong Kong
    HUNavailability: { type: String, required: true, default: "available" }, //Hungary
    INDavailability: { type: String, required: true, default: "available" }, //India
    INDOavailability: { type: String, required: true, default: "available" }, //Indonesia
    ISRavailability: { type: String, required: true, default: "available" }, //Israel
    ITAavailability: { type: String, required: true, default: "available" }, //Italy
    JAPavailability: { type: String, required: true, default: "available" }, //Japan
    KORavailability: { type: String, required: true, default: "available" }, //Korea
    LAMavailability: { type: String, required: true, default: "available" }, //Latin America
    MALavailability: { type: String, required: true, default: "available" }, //Malaysia
    MEavailability: { type: String, required: true, default: "available" }, //Middle East
    MEXavailability: { type: String, required: true, default: "available" }, //Mexico
    NORavailability: { type: String, required: true, default: "available" }, //Norway
    PHIavailability: { type: String, required: true, default: "available" }, //Philipines
    POLavailability: { type: String, required: true, default: "available" }, //Poland
    PORavailability: { type: String, required: true, default: "available" }, //Portugal
    PRUavailability: { type: String, required: true, default: "available" }, //Peru
    ROMavailability: { type: String, required: true, default: "available" }, //Romania
    SAFavailability: { type: String, required: true, default: "available" }, //South Africa
    SINavailability: { type: String, required: true, default: "available" }, //Singapore
    SPAavailability: { type: String, required: true, default: "available" }, //Spain
    SWEavailability: { type: String, required: true, default: "available" }, //Sweden
    TAIavailability: { type: String, required: true, default: "available" }, //Taiwan
    THAavailability: { type: String, required: true, default: "available" }, //Thailand
    TURavailability: { type: String, required: true, default: "available" }, //Turkey
    UKavailability: { type: String, required: true, default: "available" }, //UK
    USavailability: { type: String, required: true, default: "available" }, //USA
    VENavailability: { type: String, required: true, default: "available" }, //Venezuela
    YUGavailability: { type: String, required: true, default: "available" } //Yugoslavia

})


//=======OLD SCHEMA=========//
// var adminSchema = new Schema({
//     movieTitle:{
//         type: String,
//         required: true
//     },
//     territories:{
//                 US:{    
//                     availability: String,
//                     dateTo: {
//                         type: String,
//                         default: 99-99-9999
//                         },
//                     company: String,
//                     },
//                 UK:{    
//                     availability: String,
//                     dateTo: {
//                         type: String,
//                         default: 99-99-9999
//                         },
//                     company: String,
//                     },
//                 AUS:{    
//                     availability: String,
//                     dateTo: {
//                         type: String,
//                         default: 99-99-9999
//                         },
//                     company: String,
//                     },    

//                 //end of territories    
//                 }   
// })

var movieEntry = mongoose.model("movieEntry", adminSchema);

module.exports = movieEntry;