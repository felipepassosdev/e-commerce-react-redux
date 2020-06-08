import React from 'react';
import {  BrowserRouter as Router, Route, Link  } from 'react-router-dom'
import { MdShoppingBasket } from 'react-icons/md'
import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg'

function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

export default Header