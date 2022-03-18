
const mongoose = require('mongoose');


const singerSchema = new mongoose.Schema(
    
    {
        name: { type: String, required: true, trim: true },
        country: { type: String, required: false, trim: true },
        age: { type: Number, required: true, trim: true },
        songs: [{ type: mongoose.Schema.Types.ObjectId, ref: "song", required: true }],
        img: { type: String, required: false, trim: true }

      
    },
    
    {
        timestamps: true
    }
);


const Singer = mongoose.model('singer', singerSchema);

module.exports = Singer;