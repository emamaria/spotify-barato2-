const mongoose = require('mongoose');
const Singer = require('../../api/singers/singers.model');

const Song = require('../../api/singers/singers.model')

require('dotenv').config();

const URIDB = process.env.MONGO_DB;


const singers = [

    {
        name: "The Cardigans",
        country: "Sweden",
        age: 30,
        songs: "6234abd1a8e45150878685de",
        img: "https://res.cloudinary.com/du4gfqqns/image/upload/v1647620376/Singers/the_cardigans_d2yg5f.jpg",
    },
    {
        name: "Melendi",
        country: "Spain",
        age: 43,
        songs: "6234abd1a8e45150878685dd",
        img: "https://res.cloudinary.com/du4gfqqns/image/upload/v1647611318/Singers/lc4mn8eojjl2o9bpl07q.jpg"
    } , {
        name: "Post Malone",
        country: "USA",
        age: 26,
        songs:"6234abd1a8e45150878685dc",
        img: "https://res.cloudinary.com/du4gfqqns/image/upload/v1647611848/Singers/x03f6sutvkiskyabnt1j.jpg"
    } , {
        name: "Aerosmith",
        country: "USA",
        age: 52,
        songs: "6234abd1a8e45150878685db",
        img: "https://res.cloudinary.com/du4gfqqns/image/upload/v1647620370/Singers/aerosmith_ekiljz.jpg"
    }
    

  

]

mongoose.connect(URIDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(async () => {
    const allSingers = await Singer.find();
    if (allSingers.length) {
        await Singer.collection.drop();
        console.log('TODO BORRADO')
    }
}).catch((err) => console.error('HAY UN ERROR EN EL BORRADO')).then(async () => {
    await Singer.insertMany(singers);
    console.info('Creado')
}).catch((err) => console.error('HAY UN ERROR EN EL CREADO')).finally(() => mongoose.disconnect());