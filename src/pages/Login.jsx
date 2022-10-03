import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";

import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Helmet title='Login'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold fs-4 mb-4'>Login</h3>
              <Form className='auth__form'>
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

                <button type='submit' className='buy__btn auth__btn'>
                  Login
                </button>
                <p>
                  Não possui uma conta ?
                  <Link to='/signup'> Crie uma conta agora</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
