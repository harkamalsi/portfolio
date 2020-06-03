import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { GlobalStyle } from './globalStyle';
import { MainContainer, SpaceDown20 } from './layoutComponents';
import Header from './header';
import Passion from './passion';
import Footer from './footer';
import Projects from './projects';

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
          <SpaceDown20 />
          <Passion />
          <Projects />
          <SpaceDown20 />
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
