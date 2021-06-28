import styled, { css } from 'styled-components';

type ContainerProps = {
  textColor?: string;
  bagdeColor: string;
}

export const Container = styled.div<ContainerProps>`
  padding: 0.2rem .5rem;
  display: inline-block;

  color: ${props => props.theme.colors.title};

  ${props => props.textColor && css`
    color: ${props.textColor};
  `};

  background: ${props => props.bagdeColor};

  margin-right: 0.5rem;
  /* margin-bottom: 0.5rem; */
  line-height: 100%;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 1rem;
`
