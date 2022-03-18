const SingerRoutes = require('express').Router();
const { isAuth } = require('../../middlewares/auth.middleware');
const upload = require('../../middlewares/updateFile.middleware');

const {
    getAll,
    getOne,
    postOne,
    patchOne,
    deleteOne
} = require('./singers.controller');

SingerRoutes.get('/', getAll);

SingerRoutes.get('/:id', getOne);

SingerRoutes.post('/',[isAuth], upload.single('img'), postOne);

SingerRoutes.patch('/:id',[isAuth], upload.single('img'), patchOne);

SingerRoutes.delete('/:id', [isAuth], deleteOne);

module.exports = SingerRoutes;