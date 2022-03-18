const SongRoutes = require('express').Router();

const { isAuth } = require('../../middlewares/auth.middleware');


const {
    getAll,
    getOne,
    postOne,
    patchOne,
    deleteOne
} = require('./songs.controller');


SongRoutes.get('/', getAll);

SongRoutes.get('/:id', getOne);

SongRoutes.post('/', [isAuth], postOne);

SongRoutes.patch('/:id', [isAuth], patchOne);

SongRoutes.delete('/:id', [isAuth], deleteOne);

module.exports = SongRoutes;