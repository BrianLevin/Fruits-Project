const mongoose = require("mongoose");

// connect mongoose
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

// blue print structure of data
const fruitSchema = new mongoose.Schema ({
    // validation check for name
    name: {
        type: String,
        required: [true,"Please check your data entry, no name specified" ]



    },
    // validation to make sure data is correct  during the application run
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String


});




// name fruit will apply to schema
const Fruit =  mongoose.model("Fruit", fruitSchema);
//   created new fruit document, from  above model, from  above schema
const fruit = new Fruit ({
    
    rating: 7,
    review: "Peaches are a solid fruit"

});
// saves fruit document into fruits connection inside fruits db

// commented out fruit.save for now because it will keep inserted apples into the data base collection
fruit.save();

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
//person.save();

// const kiwi = new Fruit({
//     name: "Kiwi",
//     score: 10,
//     review: "The best fruit!"
// });

// const orange = new Fruit({
//     name: "Orange",
//     score: 6,
//     review: "Sour taste!"
// });



// const banana = new Fruit({
//     name: "Banana",
//     score: 7,
//     review: "great taste!"
// });

// allows to insert an array of documents into a model into the collection
// Fruit.insertMany([kiwi,orange,banana], function(err){
// if (err){
//     console.log(err);
// } else{

//     console.log("successfully saved all fruits to fruitsDB!")
// }

// });

// will read into fruits db and show in terminal
Fruit.find(function(err, fruits){
if(err) {

    console.log(err);
} else {
// closes mongoose connection interminal once it runs
    mongoose.connection.close();

// will loop through fruits object and get the name of the fruits
    fruits.forEach(function(fruit){
        console.log(fruit.name);
    });
}

});

// update new document using the id name from terminal and then giving it a name

Fruit.updateOne({_id: "609020299f289e5a1fd9f5f7"},{name:"Peach"}, function(err){
if(err){
    console.log(err);
} else{
console.log("sucessfully updated the document!");

}

});
