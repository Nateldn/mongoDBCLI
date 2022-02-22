const yargs = require("yargs"); //Imports from modules
const { client, connection } = require ("./db/connection.js"); //Imports from files
const Movie = require("./utils") // Imports from global scope


const app = async (yargsObj) => {
    const collection = await connection(); // this is call outside the app therefore requires an await
    try { // start error handling
        if (yargsObj.add) {
            const movie = new Movie(yargsObj.title, yargsObj.actor)
            // console.log(await movie.add(collection));
            // take movie info, add it to the mongodb database then console.log a success message
        } else if (yargsObj.list) {
            // list all movies in the database
            const movie = new Movie(yargsObj.title, yargsObj.actor)
            // console.log(await movie.list(collection));
        } else if (yargsObj.update) { // update an existing movie item
            const movie = new Movie(yargsObj.title, yargsObj.actor)
            console.log(await movie.update(collection));
        }
        else {
            console.log("Seems you've entered an incorrect command; try again.")
        }
        await client.close()
    } catch (error) {
        console.log(error);
    }
}


app(yargs.argv) // call the app with yargs argument vector as an arguement