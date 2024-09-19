const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    age:{
        type:  Number, min: 10, max: 30
    },
    gender: String,
    email: {
        type: String,
        // required: true
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: ()=> Date.now()
    },
    updatedAt: {
        type: Date,
        default: ()=> Date.now()
    },
    bestFriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    hobbies: [String],
    address: {
        street: String,
        houseNumber: Number,
        city: String
    }
})

// Methods
userSchema.methods.welcome = function(){
    console.log(`Hello there, welcome ${this.name}`)
}

module.exports = mongoose.model("User", userSchema);