const express = require('express');
const router = express.Router();

router.post('/fooddata', (req, res) => {
    console.log("fooddata route called");
    try {
        console.log("food_items:", global.food_items);
        console.log("foodCategory:", global.foodCategory);
        res.send([global.food_items, global.foodCategory]);
    } catch (error) {
        console.error(error.message);
        res.send("Server Error");
    }
});

module.exports = router;