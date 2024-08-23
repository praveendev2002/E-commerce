
const mangoose = require('mongoose');

const connectDatabase= () =>{

    mangoose.connect(process.env.DB_URL).then ((con)=>{
        console.log("mangodb connect to host:" +con.connection.host);
        
    })
};

module.exports= connectDatabase;