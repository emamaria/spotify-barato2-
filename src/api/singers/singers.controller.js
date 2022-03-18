const Singer = require('./singers.model');

const { deleteImgCloudinary } = require('../../middlewares/deleteFile.middleware');

const { setError } = require('../../utils/error/error');


const getAll = async (req, res, next) => {

    try {
        
        const singers = await Singer.find().populate('songs');
        res.status(200).json(singers);
    } catch (error) {
        return next(setError(400, 'Cant get singers'))
    }
}


const getOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const singer = await Singer.findById(id).populate('songs');
        res.status(200).json(singer);
    } catch (error) {
        return next(setError(400, 'Cant get singer'))
    }
}

const postOne = async (req, res, next) => {
    console.log(req.body);
    try {
        const singer = new Singer(req.body);
        if (req.file) singer.img = req.file.path
        const singerDB = await singer.save();
        return res.status(201).json(singerDB)
    } catch (error) {
        return next(setError(400, 'Cant post singer'))
    }
}


const patchOne = async (req, res, next) => {
    console.log(req.body);
    try {
        const { id } = req.params;
        const singer = new Singer(req.body);
         if (req.file) singer.img = req.file.path
        singer._id = id;
        const updateSinger = await Singer.findByIdAndUpdate(id, singer);
        return res.status(200).json(updateSinger);
    } catch (error) {
        return next(setError(400, 'Cant update singer'));
    }
}


const deleteOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const singer = await Singer.findByIdAndDelete(id);
        if (singer.img) deleteImgCloudinary(singer.img)
        return res.status(200).json(singer);
    } catch (error) {
        return next(setError(400, 'Cant delete singer'));
    }
}

module.exports = {
    getAll,
    getOne,
    postOne,
    patchOne,
    deleteOne
}