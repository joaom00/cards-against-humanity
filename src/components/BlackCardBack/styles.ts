import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 64px;
  right: 64px;
  cursor: pointer;

  font-family: Nunito;
`;

export const BlackCard = styled.div`
  background-color: #000;
  color: #fff;
  width: 142px;
  height: 174px;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0px 20px 40px rgba(32, 32, 32, 0.08);

  p {
    font-size: 18px;
    font-weight: 700;
  }
`;
