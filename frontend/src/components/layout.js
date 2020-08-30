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
      query passionsAndProjects {
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
              codeLink
              cover {
                publicURL
                childImageSharp {
                  fluid(quality: 100, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }

        allStrapiPassions {
          edges {
            node {
              id
              passion_text
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
          <Passion data={data.allStrapiPassions.edges} />
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
