import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { ProjectsContainer, ProjectsGrid, Project } from './layoutComponents';
import { ButtonTertiary, ButtonSecondary } from '../elements/button';

const mapGridAreaToJustifySelf = (gridArea = '') => {
  if (gridArea === 'project1' || gridArea === 'project3') {
    return 'start';
  }
  return 'end';
};

const Projects = ({ data }) => (
  <ProjectsContainer>
    <h1>What I've been working on</h1>
    <ProjectsGrid
      data-sal='slide-up'
      data-sal-duration='700'
      data-sal-easing='ease-out-quad'
    >
      {data.map(
        ({
          node: {
            bgColor,
            gridArea,
            imgAlt,
            title,
            description,
            cover, //image
            codeLink,
          },
        }) => (
          <Project
            justifySelf={mapGridAreaToJustifySelf(gridArea)}
            bgcolor={bgColor}
            gridArea={gridArea}
          >
            <a href={codeLink} rel='noreferrer' target='_blank'>
              <BackgroundImage
                className='project-img'
                alt={imgAlt}
                fluid={cover.childImageSharp.fluid}
              ></BackgroundImage>
              <h2>{title}</h2>
              <p>{description}</p>
              <ButtonTertiary>
                VIEW PROJECT <span style={{ fontSize: '20px' }}>›</span>
              </ButtonTertiary>
            </a>
          </Project>
        )
      )}
    </ProjectsGrid>
    <ButtonSecondary className='col'>See more</ButtonSecondary>
  </ProjectsContainer>
);

export default Projects;
