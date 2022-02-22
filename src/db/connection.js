require("dotenv").config(); // this will all access to the .env file without exposing it to all and sundry.

const { MongoClient, Db } = require("mongodb"); // request the database

//String copied from Atlas https://cloud.mongodb.com/v2/6214c916e93a761cc78ffe57#clusters Never push this to GitHub or Publically!!!!
const client = new MongoClient(process.env.MONGO_URI); // Connect to URL via .env 


const connection = async () => {
    try  {
        await client.connect();// this is the database
        const db = client.db("Movies") // this is what is stored in the database
        return db.collection("Film")// the collection can now be accessed outside the function
    }   catch (error) {
        console.log(error);
    }
}


module.exports = { client, connection };