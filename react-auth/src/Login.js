import { React, useState } from 'react';
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

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
        setLogin(true);
      })
      .catch((error) => {
        error = new Error();
      });
    
  }
  return (
    <>
    <h2>Login</h2>
      <Form>
        {/* display success message */}
        {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email" />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control  name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" />
        </Form.Group>

        {/* submit button */}
        <Button variant="primary" 
        type="submit"
        onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>
      </Form>
    </>
  )
}

export default Login