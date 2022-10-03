import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

import { motion } from "framer-motion";

import "../styles/cart.css";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title='Carrinho'>
      <CommonSection title='Carrinho' />
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {cartItems.length === 0 ? (
                <h2 className='fs-4 text-center'>
                  Nenhum item adicionado no carrinho
                </h2>
              ) : (
                <table className='table bordered'>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Titulo</th>
                      <th>Preço</th>
                      <th>Qty</th>
                      <th>Deletar</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg='3'>
              <h6 className='d-flex align-items-center justify-content-between'>
                Subtotal
                <span className='fs-4 fw-bold'>R$ {totalAmount}.00</span>
              </h6>

              <p className='fs-6 mt-2'>
                Impostos e frete serão calculados no checkout
              </p>
              <div>
                <button className='buy__btn w-100 '>
                  <Link to='/checkout'>Checkout</Link>
                </button>

                <button className='buy__btn w-100 mt-3'>
                  <Link to='/shop'>Continuar comprando</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt='' />
      </td>
      <td>{item.productName}</td>
      <td>R${item.price}.00</td>
      <td>{item.quantity}</td>
      <td>
        <motion.i
          whileTap={{ scale: 1.2 }}
          className='ri-delete-bin-line'
          onClick={deleteProduct}
        ></motion.i>
      </td>
    </tr>
  );
};

export default Cart;
