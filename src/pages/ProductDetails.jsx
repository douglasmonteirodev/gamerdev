import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import ProductList from "../components/UI/ProductList";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import "../styles/product-details.css";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const [tab, setTab] = useState("desc");

  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const dispatch = useDispatch();

  const { id } = useParams();
  const [rating, setRating] = useState(null);
  const product = products.find((item) => item.id === id);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const relatedProduct = products.filter(
    (item) => item.category === category
  );

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;
    const reviewObj = {
      author: reviewUserName,
      text: reviewUserMsg,
      rating,
    };

    console.log(reviewObj);
    toast.success("Mensagem enviada");
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success("Produto adicionado com sucesso");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />

      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='4' className='product__img mt-5'>
              <img src={imgUrl} alt={productName} />
            </Col>
            <Col lg='6'>
              <div className='product__details'>
                <h2>{productName}</h2>
                <div className='product__rating d-flex align-items-center gap-5 mb-3'>
                  <div>
                    <span>
                      <i className='ri-star-fill'></i>
                    </span>
                    <span>
                      <i className='ri-star-fill'></i>
                    </span>
                    <span>
                      <i className='ri-star-fill'></i>
                    </span>
                    <span>
                      <i className='ri-star-fill'></i>
                    </span>
                    <span>
                      <i className='ri-star-half-line'></i>
                    </span>
                  </div>
                  <p>
                    ( <span>{avgRating}</span> avaliações )
                  </p>
                </div>
                <div className='d-flex align-items-center gap-5'>
                  <span className='product__price'>R$ {price}.00</span>
                  <span> categoria : {category}</span>
                </div>

                <p className='mt-3'>{shortDesc}</p>

                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className='buy__btn'
                  onClick={addToCart}
                >
                  Adicionar ao carrinho
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className='tab__wrapper d-flex align-items-center gap-5'>
                <h6
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                  onClick={() => {
                    setTab("desc");
                  }}
                >
                  Descrição
                </h6>
                <h6
                  className={`${tab === "rev" ? "active__tab" : ""}`}
                  onClick={() => {
                    setTab("rev");
                  }}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>
              {tab === "desc" ? (
                <div className='tab__content mt-5'>
                  <p>{description}</p>
                </div>
              ) : (
                <div className='product__review mt-5'>
                  <div className='review__wrapper'>
                    <ul>
                      {reviews?.map((item, index) => (
                        <li key={index} className='mb-4'>
                          <h6>Mario Silva</h6>
                          <span>{item.rating} ( avaliações )</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>

                    <div className='review__form'>
                      <h4>Conte sua experienia</h4>
                      <form onSubmit={submitHandler}>
                        <div className='form__group'>
                          <input
                            type='text '
                            placeholder='Seu nome'
                            ref={reviewUser}
                            required
                          />
                        </div>

                        <div className='form__group d-flex align-items-center gap-5 rating__group'>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => {
                              setRating(1);
                            }}
                          >
                            1<i className='ri-star-s-fill'></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => {
                              setRating(2);
                            }}
                          >
                            2<i className='ri-star-s-fill'></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => {
                              setRating(3);
                            }}
                          >
                            3<i className='ri-star-s-fill'></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => {
                              setRating(4);
                            }}
                          >
                            4<i className='ri-star-s-fill'></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => {
                              setRating(5);
                            }}
                          >
                            5<i className='ri-star-s-fill'></i>
                          </motion.span>
                        </div>

                        <div className='form__group'>
                          <textarea
                            rows={4}
                            type='text '
                            placeholder='Escreva sua menssagem'
                            ref={reviewMsg}
                            required
                          />
                        </div>
                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          type='submit'
                          className='buy__btn'
                        >
                          Enviar
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg='12' className='mt-5'>
              <h2 className='related__title'>Você também pode gostar</h2>
            </Col>

            <ProductList data={relatedProduct} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
