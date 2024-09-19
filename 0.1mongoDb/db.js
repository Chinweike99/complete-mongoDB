const {MongoClient} = require('mongodb')

let dbConnection
module.exports = {

    // Function to connect to db
    connectToDb: (cb) => {
        MongoClient.connect('mongodb://localhost:27017/Bookstore')
        .then((client) => {
            dbConnection = client.db();
            return cb()
        })
        .catch(err => {
            console.log(err);
            return cb(err)
        })
    },


    // Function to return the connection to the database
    getDb: () => dbConnection
}