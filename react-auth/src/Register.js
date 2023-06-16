import { React, useState } from 'react';
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "https://esther-auth-app.onrender.com",
      data: {
        email,
        password,
      },
    };
    axios(configuration)
      .then((result) => {
        setRegister(true);
      })
      .catch((error) => {
        error = new Error();
      });
    
  }
  return (
    <>
    <h2>Register</h2>
      <Form >
        {/* display success message */}
        {register ? (
          <p className="text-success">You Are Registered Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Registered</p>
        )}
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email" />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" />
        </Form.Group>

        {/* submit button */}
        <Button 
        variant="primary" 
        type="submit"
        onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
      </Form>
    </>
  )
}

export default Register