import React, { useContext, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Context from "../Context/Context";
import { useNavigate } from "react-router-dom";
import Save_cart_item_api from "../Api/Save_cart_item_api";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function ProductList() {
  const navigate = useNavigate();
  const context = useContext(Context);

  useEffect(() => {
    if (!context.isLogin) {
      navigate("/");
      alert("please login first");
    }
  }, []);

  const increaseCartNumber = (product, index) => {
    context.increaseCartNumber(product);
    const loginEmail = context.returnLoginUserEmail();

    console.log("testing", loginEmail, product);

    const saveCartItem = async () => {
      const response = await Save_cart_item_api(product, loginEmail);
      console.log("response test", response);
    };
    saveCartItem();
  };

  return (
    <>
      <Row>
        {productsArr.map((product, index) => (
          <Col sm={6} md={4} lg={3} key={index}>
            <Card className="mb-3">
              <Card.Img
                variant="top"
                src={product.imageUrl}
                alt={product.title}
                style={{ maxHeight: "150px", objectFit: "contain" }} // Customize image size
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => increaseCartNumber(product, index)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ProductList;
