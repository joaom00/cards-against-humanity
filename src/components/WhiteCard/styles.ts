import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  span {
    font-size: 14px;
    color: #464646;
    margin-top: 16px;
    align-self: center;
  }
`;

export const WhiteCard = styled.div`
  background-color: #fff;
  width: 129px;
  height: 158px;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0px 20px 40px rgba(32, 32, 32, 0.08);
  display: flex;
  flex-direction: column;

  p {
    flex: 1;
    font-size: 14px;
    font-weight: 700;
  }

  img {
    align-self: start;
  }
`;
