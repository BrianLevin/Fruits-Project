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

// name fruit will apply to schema
const Person =  mongoose.model("Person", personSchema);
//   created new fruit document, from  above model, from  above schema
const person = new Person ({
    name: "John",
    age: 30 
});

person.save();



