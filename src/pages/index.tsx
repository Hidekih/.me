import React from 'react';
import Head from 'next/head';
import Link from 'next/Link';
import Image from 'next/image';
import { HiOutlineUserCircle, HiOutlineMail, HiOutlineLocationMarker, HiOutlineTag } from 'react-icons/hi';

import { Badge } from '../components/Bagde';
import clp from '../library/logo-color-picker';
import { Content, Profile, ProfileData, SkillsList } from '../styles/pages/home';
import { useTheme } from 'styled-components';

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>About.me</title>
      </Head>

      <Content>
        <Profile style={{ display: 'block', width: '100%' }}>
          <div>
            <Image
              src="https://avatars.githubusercontent.com/u/59781045?v=4"
              alt="Alexandre Hideki Siroma"
              width={224}
              height={224}
              quality={85}
            />

            <ProfileData>
              <p><HiOutlineUserCircle size={26} color={theme.colors.highlight}/> Alexandre Hideki Siroma</p>
              <p><HiOutlineMail size={26} color={theme.colors.highlight}/> alexandresiroma@hotmail.com</p>
              <p><HiOutlineLocationMarker size={26} color={theme.colors.highlight}/> Santo André - SP</p>

              <p><HiOutlineTag size={26} color={theme.colors.highlight}/>Apaixonado por desenvolvimento web 🚀</p>
            </ProfileData>
          </div>

          <SkillsList>
            <strong>Skills:</strong>
            <Badge bagdeColor={clp.html.primary}>HTML</Badge>
            <Badge bagdeColor={clp.css.primary}>CSS</Badge>
            <Badge bagdeColor={clp.sass.primary}>SASS</Badge>
            <Badge bagdeColor={clp.javascript.primary} textColor="#000">JavaScript</Badge>
            <Badge bagdeColor={clp.typescript.primary}>Typescript</Badge>
            <Badge bagdeColor={clp.reactjs.primary} textColor="#000">ReactJs</Badge>
            <Badge bagdeColor='#fff' textColor='#000'>NextJs</Badge>
            <Badge bagdeColor="linear-gradient(to right, #EB6993,#FBB24F)" textColor="#000">styled-components</Badge>
          </SkillsList>
        </Profile>


      </Content>
      <footer>
        Rodapé xD
      </footer>
    </>
  );
}
