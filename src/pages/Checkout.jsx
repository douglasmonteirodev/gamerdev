import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/checkout.css";

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout' />
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold'>Informações de cobrança</h6>

              <Form className='billing__form'>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='Insira seu nome' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='email' placeholder='exemplo123@gmail.com' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='number' placeholder='+55 11 84**********' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='Endereço' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='Cep' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='Cidade' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='País' />
                </FormGroup>
              </Form>
            </Col>

            <Col lg='4'>
              <div className='checkout__cart'>
                <h6>
                  Total Qty:
                  <span>{totalQty} item</span>
                </h6>
                <h6>
                  Subtotal: <span>R$ {totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Frete: <br /> Frete grátis
                  </span>
                  <span>R$ 0</span>
                </h6>

                <h4>
                  Custo total <span>R$ {totalAmount}</span>
                </h4>

                <button className='buy__btn auth__btn w-100'>
                  Fazer o pedido
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
