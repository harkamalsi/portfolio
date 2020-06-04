import styled from 'styled-components';

const Button = styled.button`
  letter-spacing: 0.024em;
  cursor: pointer;
`;

export const ButtonPrimary = styled(Button)`
  font-family: Inter, -apple-system, sans-serif;
  font-size: 18px;
  line-height: 24px;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  border: none;
  background: #47535e;
  color: #ffffff;
  text-align: center;
`;

export const ButtonSecondary = styled(Button)`
  font-family: DM Serif Display;
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.045em;
  padding: 0;
  border: 0;
  background: none;
  color: #3b454f;
  text-align: start;
`;

export const ButtonTertiary = styled(Button)`
  font-family: Muli, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  padding: 0;
  border: 0;
  background: none;
  text-align: start;
  justify-self: stretch;
`;
