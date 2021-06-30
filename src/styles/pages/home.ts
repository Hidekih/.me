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
  margin-top: 1.5rem ;
  display: block;

  h2 {
    display: flex;
    justify-content: center;
    border-radius: 1rem;
    padding: 1.5rem;
    background: ${props => props.theme.colors.outline};
    text-align: center;
    color: ${props => props.theme.colors.title};
  }
`;

export const RepositoryCard = styled.div`
  padding: 1.5rem;
  border-radius: 1rem;
  background: ${props => props.theme.colors.outline};
  margin-top: 1.5rem;

  div:first-child {
    display: flex;
    margin: 0 auto;
    max-width: 100%;
    height: auto;

    box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
    border-radius: 0.5rem;
    overflow: hidden;
  }
`;

export const RepositoryData = styled.div`
  flex: 1;
  margin-top: 1.5rem;

  h3 {
    text-align: center;
    margin-bottom: 1rem;
    letter-spacing: 0.5px;
    font-size: 1.2rem;
    color: ${props => props.theme.colors.title};
  }

  p {
    margin-top: 0.5rem;
    text-indent: 1rem;

    a {
      text-decoration: none;
      color: ${props => props.theme.colors.highlight};

      transition: filter 0.4s;

      &:hover {
        filter: brightness(0.8);
        text-decoration: underline;
      }
    }
  }

  ul {
    margin-top: 0.5rem;

    li {
      margin-left: 2rem;
    }
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
      filter: brightness(0.9);
      text-decoration: underline;
    }

    svg {
      margin-right: 0.5rem;
    }
  }
`
