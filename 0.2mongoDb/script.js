const mongoose  = require('mongoose');
const User  = require("./user")

mongoose.connect('mongodb://localhost/test');

async function run(){
    // const user = new User({name: "John Doe", age: 29, gender: "male"});
    // user.save();

    // Alternative way to create a user
    try {
            const user = await User.findOne({name: "John Doe"})
        // const user = await User.create({
        //     name: "Akwolu Innocent",
        //     gender: "male",
        //     age: 26,
        //     email: "innocent@test.com",
            // createdAt: 20,
            // updatedAt: 31,
            // bestFriend: "chinwe",
            // hobbies: ["Football", "Games", "Coding"],
            // address: {
            //     street: "No 10 Zakari way",
            //     houseNumber: 10,
            //     city: "Abuja"
            // }
        // })
        // user.age = 27
        // await user.save()
        console.log(user)
        user.welcome()
    } catch (error) {
        console.log(error.message)
    }
        
}
run()

