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
        songs: "62387f64b596be15437e4a5c",
        img: "https://res.cloudinary.com/du4gfqqns/image/upload/v1647620376/Singers/the_cardigans_d2yg5f.jpg",
    },
    {
        name: "Melendi",
        country: "Spain",
        age: 43,
        songs: "62387f64b596be15437e4a5b",
        img: "https://res.cloudinary.com/du4gfqqns/image/upload/v1647611318/Singers/lc4mn8eojjl2o9bpl07q.jpg"
    } , {
        name: "Post Malone",
        country: "USA",
        age: 26,
        songs:"62387f64b596be15437e4a5a",
        img: "https://res.cloudinary.com/du4gfqqns/image/upload/v1647611848/Singers/x03f6sutvkiskyabnt1j.jpg"
    } , {
        name: "Aerosmith",
        country: "USA",
        age: 52,
        songs: "62387f64b596be15437e4a59",
        img: "https://res.cloudinary.com/du4gfqqns/image/upload/v1647620370/Singers/aerosmith_ekiljz.jpg"
    },
    {
        name: "Dua Lipa",
        country: "UK",
        age: 26,
        songs: "62387f64b596be15437e4a60",
        img: "https://res.cloudinary.com/du4gfqqns/image/upload/v1647869242/Singers/dua_lipa_jdt9np.jpg"
    },
    {
        name: "Dani Martín",
        country: "Spain",
        age: 45,
        songs: "62387f64b596be15437e4a5f",
        img: "https://res.cloudinary.com/du4gfqqns/image/upload/v1647869227/Singers/dani_martin_kkdqyk.jpg"
    },
    {
        name: "Back Street Boys",
        country: "EEUU",
        age: 29,
        songs: "62387f64b596be15437e4a5e",
        img: "https://res.cloudinary.com/du4gfqqns/image/upload/v1647869212/Singers/backstreet_boys_ardvs9.jpg"
    },
    {
        name: "Estopa",
        country: "Spain",
        age: 23,
        songs: "62387f64b596be15437e4a5d",
        img: "https://res.cloudinary.com/du4gfqqns/image/upload/v1647869192/Singers/estopa_c9illw.jpg"
    },
    

  

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