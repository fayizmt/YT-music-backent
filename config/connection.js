const mongoose = require("mongoose");

async function dbConnect(){
    await mongoose
        .connect(process.env.MONGO_DB_URL,{
            dbName:"yt-music",
        })
        .then(()=>{
            console.log("connected to mongo db");
        })
        .catch((err) => {
            console.log("error while connecting to mongoDb", err);
        });
}

module.exports = dbConnect;