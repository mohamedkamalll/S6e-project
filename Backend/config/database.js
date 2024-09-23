const mongoose = require("mongoose");

const url = "mongodb://localhost:27017";

const createConnection = async ()=>{
     try{
          mongoose.connect(url,{
               dbName:"School"
          })
          .then(console.log("connected to database"));
     }catch(err){
          console.log(err);
     }

}


module.exports = createConnection;
