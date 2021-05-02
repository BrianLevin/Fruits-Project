
const MongoClient = require('mongodb').MongoClient;

const assert= require('assert');

const url= 'mongodb://localhost:27017';

const dbName = 'fruitsDB';

const client = new MongoClient(url,{useUnifiedTopology: true});

client.connect(function(err){
assert.equal(null, err);
console.log('connected successfully to server');

const db= client.db(dbName);

client.close();

})



// const { MongoClient } = require("mongodb");
// // Connection URI
// const uri =
//   "mongodb+srv://brianlevin:127.0.0.1:27017/?poolSize=20&writeConcern=majority";
// // Create a new MongoClient
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// async function run() {
//   try {
//     // Connect the client to the server
//     await client.connect();
//     // Establish and verify connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Connected successfully to server");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);