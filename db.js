const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://GoByte:mern123@cluster0.y9hr2ih.mongodb.net/gobytemern?retryWrites=true&w=majority&appName=Cluster0';

const mongodb = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("connected");

        const fetched_data = await mongoose.connection.db.collection("food-items");
        const data = await fetched_data.find({}).toArray();

        const foodCategoryCollection = await mongoose.connection.db.collection("foodCategory");
        const catData = await foodCategoryCollection.find({}).toArray();

        global.food_items = data || [];
        global.foodCategory = catData || [];

    } catch (err) {
        console.log(" --- ", err);
    }
};

module.exports = mongodb;
