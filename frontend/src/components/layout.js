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
      query IndexQuery {
        allStrapiProjects {
          edges {
            node {
              id
              title
              imgAlt
              description
              justifySelf
              bgColor
              gridArea
              cover {
                id
                publicURL
              }
            }
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
          <Projects data={data.allStrapiProjects.edges} />
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
