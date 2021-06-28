import { ReactNode } from 'react';
import { Container } from './styles';

type BadgeProps = {
  textColor?: string;
  bagdeColor: string;
  children: ReactNode;
}

export function Badge({ textColor, bagdeColor, children }: BadgeProps) {
  return (
    <Container textColor={textColor} bagdeColor={bagdeColor}>{children}</Container>
  )
}
