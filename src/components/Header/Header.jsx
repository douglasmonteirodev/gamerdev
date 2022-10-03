import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";

import { motion } from "framer-motion";
import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";

import useAuth from "../../custom-hooks/useAuth";
import logo from "../../assets/images/logo.png";
import userIcon from "../../assets/images/user.png";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import "./header.css";
import { toast } from "react-toastify";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Loja",
  },
  {
    path: "cart",
    display: "Carrinho",
  },
];
const Header = () => {
  const [headerShrink, setHeaderShrink] = useState(false);
  const [logout, setLogout] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const handlerLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout feito com sucesso");
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    const scrollListener = () => {
      window.scrollY > 80 ? setHeaderShrink(true) : setHeaderShrink(false);
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const navigateCart = () => {
    navigate("/cart");
  };

  const toggleProfileActions = () => {
    setLogout(!logout);
  };

  return (
    <header className={headerShrink ? "header header__shrink" : "header"}>
      <Container>
        <Row>
          <div className='nav__wrapper'>
            <div className='logo'>
              <img src={logo} alt='logo' />
              <h1>GAMERDEV</h1>
            </div>

            <div className='navigation' ref={menuRef} onClick={menuToggle}>
              <ul className='menu'>
                {nav__links.map((item, index) => (
                  <li className='nav__item' key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) => (navClass.isActive ? "nav__active" : "")}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className='nav__icons'>
              <span className='fav__icon'>
                <i className='ri-heart-line'></i>
                <span className='badge'>1</span>
              </span>
              <span className='cart__icon' onClick={navigateCart}>
                <i className='ri-shopping-bag-line'></i>
                <span className='badge'>{totalQuantity}</span>
              </span>
              <div className='profile'>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  alt='user'
                  onClick={toggleProfileActions}
                />
                <div
                  className={logout ? "profile__actions" : "profile__action-hide"}
                  onClick={toggleProfileActions}
                >
                  {currentUser ? (
                    <span onClick={handlerLogout}>Logout</span>
                  ) : (
                    <div className='d-flex align-items-center justify-content-center flex-column gap-2 fw-bold'>
                      <Link to='/signup'>Signup</Link>
                      <Link to='/login'>Login</Link>
                    </div>
                  )}
                </div>
              </div>
              <div className='mobile__menu'>
                <span onClick={menuToggle}>
                  <i className='ri-menu-line'></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
