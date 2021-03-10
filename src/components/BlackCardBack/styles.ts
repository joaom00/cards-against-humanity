import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 64px;
  right: 64px;
  cursor: pointer;
`;

export const WhiteCard = styled.div`
  background-color: #000;
  color: #fff;
  width: 129px;
  height: 158px;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0px 20px 40px rgba(32, 32, 32, 0.08);

  p {
    font-size: 18px;
    font-weight: 700;
  }
`;
