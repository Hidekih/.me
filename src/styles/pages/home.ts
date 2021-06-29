import styled from 'styled-components';

export const Content = styled.main`
  margin: 1.5rem auto;
  padding: 0 1.5rem;
  width: 100%;
  max-width: 64rem;
`;

export const Profile = styled.section`
  background: ${props => props.theme.colors.outline};
  // Padding Bottom need only 1rem of padding because the badges have 0.5rem of margin bottom
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  border-radius: 1rem;

  > div:first-child {
    display: flex;

    img {
      border-radius: 50%;
    }
  }
`;

export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;

  p {
    display: flex;
    align-items: center;

    font-size: 1.1rem;
    color: ${props => props.theme.colors.title};

    & + p {
      margin-top: 0.5rem;
    }

    svg {
      margin-right: 1rem;
    }
  }
`

export const SkillsList = styled.div`
  display: block;
  flex: 1;
  margin-top: 1rem;

  h3 {
    letter-spacing: 0.5px;
    color: ${props => props.theme.colors.title};
    display: inline-block;
    font-weight: 500;
    font-size: 1rem;
    margin-right: 0.5rem;
  }
`

export const RepositoriesList = styled.div`
  background: ${props => props.theme.colors.outline};
  padding: 1.5rem;
  margin-top: 1.5rem ;
  border-radius: 1rem;

  h2 {
    text-align: center;
    color: ${props => props.theme.colors.title};




    margin-bottom: 2rem;
  }
`;

export const RepositoryCard = styled.div`
  h3 {
    color: ${props => props.theme.colors.title};
  }

  div:first-child {
    display: block;
    margin: 0 auto;
    width: max-content;

    box-shadow: 0 0 12px rgba(0, 0, 0, 0.6);
    border-radius: 0.5rem;
    overflow:hidden;
  }

  p {
    margin-top: 0.5rem;
    text-indent: 1rem;

    a {
      margin-left: 0.5rem;
      text-decoration: none;
      color: ${props => props.theme.colors.highlight};

      transition: filter 0.4s;

      &:hover {
        filter: brightness(0.6);
      }
    }
  }

  ul {
    margin-top: 0.5rem;

    li {
      margin-left: 1rem;
    }
  }
`;

export const RepositoryData = styled.div`
  flex: 1;
  margin-top: 2rem;



  li {
    list-style: none;
  }
`

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  margin-top: auto;
  border-top: 2px solid ${props => props.theme.colors.outline};

  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    padding: 1.5rem;
  }

  p {
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.title};

    svg {
      margin: 0 0.2rem;
    }
  }
`

export const Links = styled.section`
  display: flex;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.colors.highlight};

    transition: filter 0.4s;

    & + a {
      margin-left: 1rem;
    }

    &:hover {
      filter: brightness(0.6);
    }

    svg {
      margin-right: 0.5rem;
    }
  }
`
