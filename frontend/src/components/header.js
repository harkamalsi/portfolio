import { Link } from 'gatsby';
import React from 'react';
import HeaderSVG from '../assets/Waihou.svg';
import { HeaderContainer } from './layoutComponents';

const Header = () => (
  <HeaderContainer>
    <HeaderSVG />
    <h1>
      <Link to='/'>Harkamal</Link>
    </h1>
    <h2>Student & Full Stack Developer</h2>
  </HeaderContainer>
);

export default Header;
