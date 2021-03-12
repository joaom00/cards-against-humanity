import styled from 'styled-components';

export const Container = styled.div`
  max-width: 208px;
  width: 100%;
  margin: auto 0;
  padding-left: 32px;

  font-family: Nunito;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
  border-bottom: 1px solid #e0e0e0;

  p {
    font-size: 18px;
    color: #202020;
    font-weight: 700;
  }

  span {
    font-size: 18px;
    color: #202020;
    font-weight: 700;
  }
`;

export const Players = styled.ul`
  padding-top: 16px;

  li {
    list-style: none;
    color: #202020;

    font-family: Nunito;
    font-size: 16px;
    font-weight: 600;
  }

  li + li {
    margin-top: 8px;
  }
`;
