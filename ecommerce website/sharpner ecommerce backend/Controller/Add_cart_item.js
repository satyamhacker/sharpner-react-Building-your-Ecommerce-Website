const addCartItem = require("../Models/Add_item");

const addCartItemToDatabase = async (req, res) => {
  //console.log(req.body)

  try {
    // Extract data from the request body
    const { product,email } = req.body;

    const {title,price,imageUrl}=product

    //console.log(product,email)

    // Create a new medicine data record in the database
    const addedData = await addCartItem.create({
      email,
      title,
      price,
      imageUrl
    });

    // // Respond with a success message
     res.status(201).json("true");
  } catch (error) {
    console.error("Error creating medicine data:", error);
    // Handle the error and respond with an error status code
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addCartItemToDatabase,
};
