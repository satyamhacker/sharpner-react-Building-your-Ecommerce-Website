import React from "react";

const Base_Url = import.meta.env.VITE_REACT_APP_FRONTEND_BASE_URL;

const Save_cart_item_api = async (product, email) => {
  console.log("expense", product, email);
  try {
    const response = await fetch(Base_Url + "/addcartitem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product, email }),
    });

    if (!response.ok) {
      throw new Error("Failed to post data");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default Save_cart_item_api;
