const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("Connection Successful");
    }).catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Arattai');
}

let allChats = [
    {
        from: "Manswi",
        to: "Priya",
        msg: "Give me your sheets",
        created_at: new Date()
    },
    {
        from: "Kavita",
        to: "Jayesh",
        msg: "Give me your books",
        created_at: new Date()
    },
    {
        from: "Suresh",
        to: "Kalyani",
        msg: "Where are you from",
        created_at: new Date()
    },
    {
        from: "Vijaya",
        to: "Anita",
        msg: "How are you",
        created_at: new Date()
    },
    {
        from: "Madhuri",
        to: "Rajendra",
        msg: "What is grandmother name?",
        created_at: new Date()
    },
    {
        from: "Ravindra",
        to: "Ronit",
        msg: "What is your age",
        created_at: new Date()
    },
];

Chat.insertMany(allChats);