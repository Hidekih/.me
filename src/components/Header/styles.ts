import styled from 'styled-components';

export const Container = styled.header`
  height: 5rem;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.outline};

  a {
    text-decoration: none;
  }

  nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 64rem;
    height: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;

    // As cores da logo tem que ser estáticas?
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

type PostLinkProps = {
  isCurrentPage: boolean;
}

export const PostsLink = styled.a<PostLinkProps>`
  display: block;
  position: relative;
  font-weight: 500;
  font-size: 1.1rem;
  color: ${
    props => props.isCurrentPage
    ? props.theme.colors.highlight
    : props.theme.colors.text
  };

  transition: color 0.4s;

  &:hover {
    color: ${props => props.theme.colors.highlight};
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -0.4rem;
    left: 0;
    width: 0px;
    height: 2px;
    background: ${props => props.theme.colors.text};

    transition:width 0.3s;
  }

  &:hover:after {
    width: 100%;
    background: ${props => props.theme.colors.highlight};
  }
`;
