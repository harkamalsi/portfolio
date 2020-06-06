import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { GlobalStyle } from './globalStyle';
import { MainContainer, SpaceDown } from './layoutComponents';
import Header from './header';
import Passion from './passion';
import Projects from './projects';
import Footer from './footer';

const Layout = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <GlobalStyle />
        <MainContainer>
          <Header />
          <SpaceDown space='10vh' />
          <Passion />
          <SpaceDown space='10vh' />
          <Projects />
          <SpaceDown space='20vh' />
          <Footer />
        </MainContainer>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
