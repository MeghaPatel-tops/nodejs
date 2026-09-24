const { MongoClient } = require("mongodb");


const client = new MongoClient('mongodb+srv://meghapatel1tops:Megha123@cluster0.wfiv5.mongodb.net/');


async function  connectDB() {
    await client.connect();

    const db = client.db("25augecom");
    return db;
    
}

module.exports= connectDB;