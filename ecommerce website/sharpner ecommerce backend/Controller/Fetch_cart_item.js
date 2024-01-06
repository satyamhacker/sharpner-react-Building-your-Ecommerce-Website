const addCartItem = require("../Models/Add_item");

const fetchCartItemFromDatabase = async (req, res) => {
  try {
    // Extract data from the request body
    const { email } = req.body;

    // Fetch data from the database based on the email
    const fetchedData = await addCartItem.find({
      email: email
    });

   

    // Respond with the modified data and a success status code
    res.status(201).json(fetchedData);
  } catch (error) {
    console.error("Error fetching cart items:", error);
    // Handle the error and respond with an error status code
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  fetchCartItemFromDatabase,
};
