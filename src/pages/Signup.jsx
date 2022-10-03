import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";

import "../styles/login.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;

      console.log(user);
    } catch (error) {}
  };

  return (
    <Helmet title='Signup'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold fs-4 mb-4'>Signup</h3>
              <Form className='auth__form' onSubmit={signup}>
                <FormGroup className='form__group'>
                  <input
                    type='text'
                    placeholder='Nome de usuário'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input
                    type='email'
                    placeholder='exemplo123@gmail.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input
                    type='password'
                    placeholder='Insira sua senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type='file' onChange={(e) => setFile(e.target.files[0])} />
                </FormGroup>

                <button type='submit' className='buy__btn auth__btn'>
                  Criar uma conta
                </button>
                <p>
                  Ja passui uma conta?
                  <Link to='/login'> Login</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Signup;
