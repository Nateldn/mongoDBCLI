class Movie {
    constructor (title, actor) {
        this.title = title;
        this.actor = actor;
        this.rating = rating;
    }

    async add (collection) { // this adds to our collection 
        await collection.insertOne(this);
        return "Success"
        // add movie item to the database
    }

    async update (collection) { //update a movie item in our collection
        // await collection.updateOne(this);
        const response = await Movies.updateOne(
            {title: this.title},
            {$set {rating: this.rating}}
            );
        // use Movies
        // Movies.updateOne( { title: "Top Gun" },
        // {
        // $set: {
        // rating: "Excellent"
        // }
        // { $currentDate: { lastUpdated: true } }
        // })
       
    }

    async list (collection) { // list all items in our collection
        return await collection.find().toArray(); // Get everything in the database find this in the docs
        // list all the movies in the database
    }
}

module.exports = Movie;