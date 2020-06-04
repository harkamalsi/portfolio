import styled from 'styled-components';

export const MainContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: 100px;
  min-height: 100vh;
  color: #47535e;
  letter-spacing: 0.024em;
`;

export const SpaceDown = styled.div`
  padding-bottom: ${(props) => props.space};
`;

export const HeaderContainer = styled.div`
  height: 710px;
  left: 0px;
  right: 0px;
  top: 0px;
  overflow: hidden;
  background: #f8fbfd;

  h1 {
    /* Harkamal */

    position: absolute;
    width: 404px;
    height: 125px;
    top: 17vh;
    left: 9vw;
    font-size: 50px;
    line-height: 24px;
    font-family: DM Serif Display;
    font-weight: 400;
    letter-spacing: 0.05em;
  }

  h2 {
    position: absolute;
    width: 826px;
    height: 189px;
    top: 38.5vh;
    left: 14vw;
    font-size: 38px;
    line-height: 24px;
    font-family: DM Serif Display;
    font-weight: 400;
    letter-spacing: 0.03em;
  }

  h3 {
    position: absolute;
    top: 4vh;
    left: 90.75vw;
    font-size: 22px;
    line-height: 24px;
    font-family: DM Serif Display;
    font-weight: 400;
    letter-spacing: 0.03em;
    cursor: pointer;
    color: #ffbe00;
  }
`;
export const HeaderSvgContainer = styled.div`
  height: 100%;
  width: 100%;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  position: relative;
  left: 40%;
  bottom: 23%;
`;

export const PassionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(5, 1fr);
  height: 75vh;
`;
export const PassionSceneContainer = styled.div`
  grid-area: 2 / 1 / 6 / 6;
`;
export const PassionText = styled.div`
  grid-area: 2 / 7 / 4 / 10;

  h1 {
    font-family: Muli, sans-serif;
    font-style: normal;
    font-size: 38px;
    line-height: 24px;
    margin-bottom: 1.25em;
  }

  p {
    font-family: Inter, -apple-system, sans-serif;
    font-style: normal;
    font-size: 22px;
    line-height: 40px;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10vw;

  h1 {
    font-style: normal;
    font-size: 38px;
    line-height: 24px;
    font-family: Muli, sans-serif;
  }

  .col {
    margin: 10vh 0;
  }
`;
export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 7vh;

  /* For ProjectsContainer */
  align-content: space-between;
  justify-content: space-between;
`;
export const Project = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-self: ${(props) => props.justifySelf || 'center'};
  width: 520px;
  height: 500px;
  background-color: 'gray';

  img {
    background-color: ${(props) => props.bgcolor || 'gray'};
    height: 300px;
  }

  h2 {
    font-family: Muli, sans-serif;
    font-size: 28px;
    line-height: 24px;
    font-weight: 500;
  }

  p {
    font-family: Inter, -apple-system, sans-serif;
    font-size: 18px;
    line-height: 28px;
    color: #696969;
  }
`;

export const FooterContainer = styled.div`
  height: 90vh;
  background-color: #f8fbfd;
  display: grid;
  grid-template-columns: 1fr repeat(8, 1fr) 1fr;
  grid-template-rows: 1fr repeat(7, 1fr) 1fr;
  gap: 0;

  h1 {
    grid-area: 2 / 2 / 3 / 4;
    font-family: Muli, sans-serif;
    font-size: 38px;
    line-height: 24px;
    margin: 0;
  }

  p {
    grid-area: 3 / 2 / 4 / 6;
    font-family: Inter, -apple-system, sans-serif;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.024em;
    margin: 0;
  }
`;
export const FormContainer = styled.div`
  grid-area: 4 / 2 / 9 / 10;

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 0 2em;
`;
const formGridAreaDict = {
  name: '1 / 1 / 2 / 3',
  email: '1 / 3 / 2 / 5',
  subject: '2 / 1 / 3 / 5',
  message: '3 / 1 / 5 / 5',
  submit: '5 / 1 / 6 / 2',
  socialMedia: '5 / 4 / 6 / 5',
};
export const GridItemContainer = styled.div`
  grid-area: ${(props) => formGridAreaDict[props.gridArea] || 'auto'};
  align-self: ${(props) => props.alignSelf || 'auto'};
`;
export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const HumansAndSceneContainer = styled.div`
  grid-area: 1 / 6 / 6 / 10;
`;
export const LeavesContainer = styled.div`
  grid-area: 1 / 1 / 11 / 10;
  overflow: hidden;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 0px 1.0875rem;
  padding-top: 0;
`;
export const Row = styled.div`
  display: flex;
  flex: ${(props) => (props.flex ? props.flex : 'initial')};
  flex-direction: row;
  flex-wrap: ${(props) => (props.wrap ? props.wrap : 'initial')};
  align-content: ${(props) =>
    props.alignContent ? props.alignContent : 'initial'};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'initial'};
  @media screen and (max-width: 768px) {
    flex-direction: ${(props) => (props.mobile ? 'column' : 'row')};
  }
`;
export const Column = styled.div`
  flex: ${(props) => (props.flex ? props.flex : 'initial')};
  flex-direction: column;
  align-content: ${(props) =>
    props.alignContent ? props.alignContent : 'initial'};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'initial'};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  width: ${(props) => (props.width ? props.width : 'auto')};
`;
