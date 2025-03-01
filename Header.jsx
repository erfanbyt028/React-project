import React from "react";
import { Component } from 'react';
import {
  HeaderContainer,
  Nav,
  Ul,
  Logo,
  HeaderContent,
  HeaderImage,
  HeaderButton,
  Right,
  Left,
} from "./HeaderStyled";

import headerimg from '../assets/dark_gold_header.webp'
 // فرض کنید استایل‌ها در یک فایل جداگانه هستند


class Header extends Component{
  render() {
    return (
    <HeaderContainer>
      <Nav>
        <Logo>My Logo</Logo>
        <Ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </Ul>
      </Nav>
      <HeaderContent>
        <Left>
          <HeaderImage src={headerimg} alt="Header Image" />
          <h2>quality cars available</h2>
          <p>find the best detail on top brands</p>
          <HeaderButton >Browse</HeaderButton>
          <HeaderButton>Contact</HeaderButton>
        </Left>

        <Right>
          <h1>Welcome to My Website</h1>
          <p>explore our extensive inventory of high-quality vehicles. <br />
            your perfect ride is just a click away !</p>
          <HeaderButton>SALE & SHOP</HeaderButton>
        </Right>
        
      </HeaderContent>
    </HeaderContainer>
  );
}
}

export default Header;

