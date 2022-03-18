
const mongoose = require('mongoose');


const songSchema = new mongoose.Schema(
    
    {
        name: { type: String, required: true, trim: true },
        year: { type: Number, required: true, trim: true },
        style: { type: String, required: true, trim: true }
     },
  
    {
        timestamps: true
    }
);


const Song = mongoose.model('song', songSchema);

module.exports = Song;