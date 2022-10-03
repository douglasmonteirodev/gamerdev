import React from "react";
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4' className='mb-4' md='6'>
            <div className='logo'>
              <div>
                <h1 className='text-white'>GAMERDEV</h1>
              </div>
            </div>
            <p className='footer__text mt-4 '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, accusantium expedita odio omnis molestias
              dolorum culpa sapiente doloremque sit laudantium. Deleniti
              quisquam autem tenetur excepturi aspernatur accusamus in
              fugit maxime!
            </p>
          </Col>

          <Col lg='3' md='3' className='mb-4'>
            <div className='footer__quick-links px-4'>
              <h4 className='quick__links-title '>
                Principais Categorias
              </h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Placas Gráficas</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Processadores</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Headsets</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Gabinetes</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Periféricos</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='2' md='2' className='mb-4'>
            <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Links Utéis</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Loja</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Carrinho</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Politicas e Privacidade</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='3' md='4'>
            <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Contato</h4>

              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                    <i className='ri-map-pin-line'></i>
                  </span>
                  <p>1234, Curitiba PARANÁ</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                    <i className='ri-phone-line'></i>
                  </span>
                  <p>+55 41 5685451548</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                    <i className='ri-mail-line'></i>
                  </span>
                  <p>gamerdev@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='12'>
            <p className='footer__copyright mb-3'>
              &copy; Todos os direitos reservados {year}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
