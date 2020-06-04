import { Link } from 'gatsby';
import React from 'react';
import HeaderSvg from '../assets/Waihou.svg';
import { HeaderContainer, HeaderSvgContainer } from './layoutComponents';

const Header = () => (
  <HeaderContainer>
    <HeaderSvgContainer>
      <HeaderSvg />
    </HeaderSvgContainer>
    <h1>
      <Link to='/'>Harkamal</Link>
    </h1>
    <h2>Student & Full Stack Developer</h2>
    <h3>Admin</h3>
  </HeaderContainer>
);

export default Header;
