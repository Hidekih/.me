import styled from 'styled-components';

export const Content = styled.main`
  /* display: block; */
  margin: 3rem auto;
  padding: 0 1.5rem;
  width: 100%;
  max-width: 64rem;
`;

export const Profile = styled.section`
  /* display: block; */
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

  strong {
    color: ${props => props.theme.colors.title};
    display: inline-block;
    font-size: 1.1rem;
    margin-right: 0.5rem;
  }
`
