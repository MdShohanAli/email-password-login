import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';
const auth = getAuth(app);


function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailBlur = e => {
    setEmail(e.target.value);
  }
  const handlePassword = e => {
    setPassword(e.target.value)
  }
  const handleFromSubmit = e => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user
        console.log(user);
      })
      .then(error => {
        console.log(error);
      })
    e.preventDefault()
  }

  return (
    <div>
      <div className='mx-auto w-50 mt-4 '>
        <h2 className='text-primary' > Please Registration</h2>
        <Form onSubmit={handleFromSubmit} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label  >Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
