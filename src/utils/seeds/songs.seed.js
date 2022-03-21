const mongoose = require('mongoose');

const Song = require('../../api/songs/songs.model')

require('dotenv').config();

const URIDB = process.env.MONGO_DB;


const songs = [
   { name: "Crazy",
     year: "1993" ,
    style: "Rock"} ,
    {name: "Congratulations",
     year: "2016",
     style: "Trap"
    },
    {name: "Caminando por la vida",
    year: "2005",
    style: "Rumba"
   },
   {   
   name: "Godspell3",
   year: "2005",
   style: "Pop rock"

   },
   {   
    name: "Como Camarón",
    year: "1999",
    style: "Pop-Rock"
 
    },
    {   
    name: "I want it that way",
    year: "1999",
    style: "R&B"
     
    },
    {   
    name: "Contigo",
    year: "2002",
    style: "Pop"
         
    },
    {   
    name: "New Rules",
    year: "2018",
    style: "Pop"
             
    }
        
    

]

mongoose.connect(URIDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(async () => {
    const allSongs = await Song.find();
    if (allSongs.length) {
        await Song.collection.drop();
        console.log('TODO BORRADO')
    }
}).catch((err) => console.error('HAY UN ERROR EN EL BORRADO')).then(async () => {
    await Song.insertMany(songs);
    console.info('Creado')
}).catch((err) => console.error('HAY UN ERROR EN EL CREADO')).finally(() => mongoose.disconnect());