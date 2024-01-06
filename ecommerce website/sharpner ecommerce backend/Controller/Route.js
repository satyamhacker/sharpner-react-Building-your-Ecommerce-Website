const express = require("express");
const app = express();
const signupLogin = require("./Signup_Login");
const addCartItem = require("./Add_cart_item");
const fetchCartItem = require("./Fetch_cart_item");

const cors = require('cors');
const port = 3000; // Port number on which your server will run
app.use(cors()); // Enable CORS for all routes
// Middleware to parse JSON requests
app.use(express.json());

app.post("/signup", signupLogin.signupCreate);
app.post("/login", signupLogin.login);
app.post("/addcartitem", addCartItem.addCartItemToDatabase);
app.post("/fetchcartitem",fetchCartItem.fetchCartItemFromDatabase);
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
