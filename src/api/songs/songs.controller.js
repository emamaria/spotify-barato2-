const Song = require('./songs.model');
const { setError } = require('../../utils/error/error');


const getAll = async (req, res, next) => {
    try {
      
        const song = await Song.find()
        res.status(200).json(song);
    } catch (error) {
        return next(setError(400, 'Cant get songs'))
    }
}


const getOne = async (req, res, next) => {
    console.log(req.params);
    try {
        const { id } = req.params;
        const song = await Song.findById(id)
        res.status(200).json(song);
    } catch (error) {
        return next(setError(400, 'Cant get song'))
    }
}


const postOne = async (req, res, next) => {
    try {
        const song = new Song(req.body);
       const songDB = await song.save();
        return res.status(201).json(songDB)
    } catch (error) {
        return next(setError(400, 'Cant post song'))
    }
}


const patchOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const song = new Song(req.body);
        song._id = id;
        const updateSong = await Song.findByIdAndUpdate(id, song);
        return res.status(200).json(updateSong);
    } catch (error) {
        return next(setError(400, 'Cant update song'));
    }
}


const deleteOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const song = await Song.findByIdAndDelete(id);
        return res.status(200).json(song);
    } catch (error) {
        return next(setError(400, 'Cant delete song'));
    }
}

module.exports = {
    getAll,
    getOne,
    postOne,
    patchOne,
    deleteOne
}