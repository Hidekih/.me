import Link from 'next/Link';
// import { useRouter } from 'next/router';

import { Container, PostsLink } from './styles';

export function Header() {
  // const { asPath } = useRouter();

  return (
    <Container>
      <nav>
        <Link href="/">
          <a>
            <strong>
              <span>.</span>
              me
              </strong>
          </a>
        </Link>

        {/* <Link href="/posts" passHref>
          <PostsLink isCurrentPage={asPath === '/posts'} >Minhas postagens</PostsLink>
        </Link> */}
      </nav>
    </Container>
  )
}
