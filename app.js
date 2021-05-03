const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });


const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number,
    review: String


});
const Fruit =  mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "Pretty  solid as a fruit"

});

fruit.save();





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