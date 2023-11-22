import React, { useState,useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import LoginApi from '../Api/LoginApi';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
 const [flag,setflag] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   setflag(true)   
    
  };

  return (

    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          name="email"
          value={loginData.email}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          name="password"
          value={loginData.password}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
       <div>
        {
          flag && <LoginApi data={loginData}/>
        }
       </div>
    </>
  );
};

export default Login;
