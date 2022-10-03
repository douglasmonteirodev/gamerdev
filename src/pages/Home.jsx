import React, { useState, useEffect } from "react";
import "../styles/home.css";

import Helmet from "../components/Helmet/Helmet";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
import Clock from "../components/UI/Clock";

import heroImg from "../assets/images/hero.png";
import counterImg from "../assets/images/montech.png";

import products from "../assets/data/products";

import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const [gpus, setGpus] = useState([]);
  const [processadores, setProcessadores] = useState([]);
  const [perifericos, setPerifericos] = useState([]);
  const [headsets, setHeadsets] = useState([]);
  const [gabinetes, setGabinetes] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredGpus = products.filter(
      (item) => item.category === "gpu"
    );
    const filteredProcessadores = products.filter(
      (item) => item.category === "processador"
    );
    const filteredPerifericos = products.filter(
      (item) => item.category === "perifericos"
    );
    const filteredHeadsets = products.filter(
      (item) => item.category === "headset"
    );
    const filteredGabinetes = products.filter(
      (item) => item.category === "gabinete"
    );

    setGpus(filteredGpus);
    setProcessadores(filteredProcessadores);
    setPerifericos(filteredPerifericos);
    setHeadsets(filteredHeadsets);
    setGabinetes(filteredGabinetes);
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className='hero__section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='hero__content'>
                <p className='hero__subtitle'>
                  Produto de tendência em {year}
                </p>

                <h2>Os melhores hardwares você encontra aqui.</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Debitis iure sunt aut vitae sint nostrum.
                </p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className='buy__btn'
                >
                  <Link to='/shop'>Compre agora</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className='hero__img'>
                <img src={heroImg} alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />

      <section className='trending__products'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-4'>
              <h2 className='section__title pb-4 mb-4'>Placas Gráficas</h2>
            </Col>
            <ProductList data={gpus} />
          </Row>
        </Container>
      </section>

      <section className='best__sales'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-4'>
              <h2 className='section__title pb-4 mb-4'>Mais vendidos</h2>
            </Col>
            <ProductList data={processadores} />
          </Row>
        </Container>
      </section>

      <section className='timer__count'>
        <Container>
          <Row>
            <Col lg='6' md='12' className='count__down-col'>
              <div className='clock__top-content'>
                <h4 className='text-white fs-6 mb-2'>Oferta Limitada</h4>
                <h3 className='text-white fs-5 mb-2'>
                  Qualidade Garantida
                </h3>
              </div>
              <Clock />

              <motion.button
                whileTap={{ scale: 1.2 }}
                className='buy__btn store__btn'
              >
                <Link to='/shop'>visitar Loja</Link>
              </motion.button>
            </Col>

            <Col lg='6' md='12' className='text-end counter__img'>
              <img src={counterImg} alt='' />
            </Col>
          </Row>
        </Container>
      </section>

      <section className='new__arrivals'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-4'>
              <h2 className='section__title pb-4 mb-4'>Novos Produtos</h2>
            </Col>
            <ProductList data={gabinetes} />
            <ProductList data={headsets} />
          </Row>
        </Container>
      </section>

      <section className='popular__category'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-4'>
              <h2 className='section__title pb-4 mb-4'>
                Os mais populares
              </h2>
            </Col>
            <ProductList data={perifericos} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
