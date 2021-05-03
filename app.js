const mongoose = require("mongoose");

// connect mongoose
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

// blue print structure of data
const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number,
    review: String


});




// name fruit will apply to schema
const Fruit =  mongoose.model("Fruit", fruitSchema);
//   created new fruit document, from  above model, from  above schema
const fruit = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "Pretty  solid as a fruit"

});
// saves fruit document into fruits connection inside fruits db

// commented out fruit.save for now because it will keep inserted apples into the data base collection
//fruit.save();

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number
    


});

// name person will apply to schema
const Person =  mongoose.model("Person", personSchema);
//   created new person document, from  above model, from  above schema
const person = new Person ({
    name: "John",
    age: 30 
});
// save new person document into collections into fruits db
person.save();

const kiwi = new Fruit({
    name: "Kiwi",
    score: 10,
    review: "The best fruit!"
});

const orange = new Fruit({
    name: "Orange",
    score: 6,
    review: "Sour taste!"
});



const banana = new Fruit({
    name: "Banana",
    score: 7,
    review: "great taste!"
});

// allows to insert an array of documents into a model into the collection
Fruit.insertMany([kiwi,orange,banana], function(err){
if (err){
    console.log(err);
} else{

    console.log("successfully saved all fruits to fruitsDB!")
}

});