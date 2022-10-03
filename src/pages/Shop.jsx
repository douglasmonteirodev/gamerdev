import React, { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import ProductList from "../components/UI/ProductList";

import { Container, Row, Col } from "reactstrap";
import products from "../assets/data/products";

import "../styles/shop.css";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "padrao") {
      const filteredProducts = products.filter(
        (item) => item.category !== ""
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "processador") {
      const filteredProducts = products.filter(
        (item) => item.category === "processador"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "gpu") {
      const filteredProducts = products.filter(
        (item) => item.category === "gpu"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "gabinete") {
      const filteredProducts = products.filter(
        (item) => item.category === "gabinete"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "headset") {
      const filteredProducts = products.filter(
        (item) => item.category === "headset"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "perifericos") {
      const filteredProducts = products.filter(
        (item) => item.category === "perifericos"
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts);
  };

  return (
    <Helmet title='Gabinetes'>
      <CommonSection title='Produtos' />

      <section>
        <Container>
          <Row>
            <Col lg='3' md='6'>
              <div className='filter__widget'>
                <select onChange={handleFilter}>
                  <option value='padrao'>Ordenar por</option>
                  <option value='processador'>Processadores</option>
                  <option value='gpu'>Placas de Video</option>
                  <option value='perifericos'>Periféricos</option>
                  <option value='gabinete'>Gabinetes</option>
                  <option value='headset'>Headsets</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='6' className='text-end'>
              <div className='filter__widget'>
                <select>
                  <option>Ordenar por</option>
                  <option value='ascending'>Crescente</option>
                  <option value='descending'>Decrescente</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='12'>
              <div className='search__box'>
                <input
                  type='text'
                  placeholder='Pesquisar ...'
                  onChange={handleSearch}
                />
                <span>
                  <i className='ri-search-line'></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className='text-center fs-4'>
                Produto não encontrado !
              </h1>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
