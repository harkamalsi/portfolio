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
    <a
      href='http://localhost:1337/admin/auth/login'
      rel='noreferrer'
      target='_blank'
    >
      <h3>Admin</h3>
    </a>
  </HeaderContainer>
);

export default Header;
