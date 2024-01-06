import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Signup_api, login_api } from "../Api/Signup_Login_api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Context from "../Context/Context";

const Login = () => {
  // State to store input values
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const ContextData = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();

    const login_check = async () => {
      const response = await login_api(formData);
      //console.log(response);
      if (response[0] == "login successfull") {
        alert("login successfull");
        ContextData.makeUserLogin();
        ContextData.loginUserEmail(formData.email);
        navigate("/store");
      }
    };
    login_check();
  };

  // Update state when input values change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="signup-container">
        <h2 className="bg-blue-500 text-white p-2">Mail Box Login Page</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="bg-white-1000 text-black p-2 text-lg font-bold">
              Email address
            </Form.Label>

            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="bg-white-900 text-black p-2 text-lg font-bold">
              Password
            </Form.Label>
            {/* Use the value and onChange props to bind the input to state */}
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Login
          </Button>
        </Form>
        <div className="mt-4 active:bg-green-600 underline">
          <Link to="/" className="font-bold bg-white">
            Go to Signup page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
