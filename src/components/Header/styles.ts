import styled from 'styled-components';

export const Container = styled.header`
  height: 5rem;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.outlines};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 60rem;
    height: 100%;
    margin: 0 auto;

    strong {
      font-weight: 900;
      font-size: 3rem;
      color: #F4F4F2;

      span {
        color: #9748A1;
      }
    }
  }
`;
