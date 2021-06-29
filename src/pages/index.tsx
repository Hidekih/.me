import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/Link';
import Image from 'next/image';
import { useTheme } from 'styled-components';
import { HiOutlineUserCircle, HiOutlineMail, HiOutlineLocationMarker, HiOutlineTag, HiHeart } from 'react-icons/hi';
import { SiInstagram, SiGithub } from 'react-icons/si';

import { Badge } from '../components/Bagde';
import clp from '../library/logo-color-picker';

import x from '../assets/gomove-light-mode.png'

import { Content, Footer, Profile, ProfileData, SkillsList, Links, RepositoriesList, RepositoryCard, RepositoryData } from '../styles/pages/home';

export default function Home() {
  const theme = useTheme();
  const [ w, setW ] = useState(352);
  const [ h, setH ] = useState(198);

  useEffect(() => {
    fetch('')
  })

  return (
    <>
      <Head>
        <title>About.me</title>
      </Head>

      <Content>
        <Profile>
          <div>
            <Image
              src="https://avatars.githubusercontent.com/u/59781045?v=4"
              alt="Alexandre Hideki Siroma"
              width={192}
              height={192}
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
            <h3>Techs:</h3>
            <Badge bagdeColor={clp.html.primary}>HTML</Badge>
            <Badge bagdeColor={clp.css.primary}>CSS</Badge>
            <Badge bagdeColor={clp.sass.primary}>SASS</Badge>
            <Badge bagdeColor={clp.javascript.primary} textColor="#222">JavaScript</Badge>
            <Badge bagdeColor={clp.typescript.primary}>Typescript</Badge>
            <Badge bagdeColor={clp.reactjs.primary} textColor="#222">ReactJs</Badge>
            <Badge bagdeColor='#fff' textColor='#000'>NextJs</Badge>
            <Badge bagdeColor="linear-gradient(to right, #EB6993,#FBB24F)" textColor="#222">styled-components</Badge>
            <Badge bagdeColor={clp.reactjs.primary} textColor="#222">React Native</Badge>
            <Badge bagdeColor={clp.nodejs.primary} textColor={clp.nodejs.secondary}>NodeJs</Badge>
          </SkillsList>
        </Profile>

        <RepositoriesList>
          <h2>Alguns dos meus repositórios no GitHub</h2>


          <RepositoryCard>
            <div>
              <Image src={x} width={818} height={460} quality={100}/>
            </div>
            <RepositoryData>
              <h3>GoMove</h3>
              <p>
                O GoMove é uma aplicação que tem como propósito te auxiliar a ter foco
                nos momementos que você precisa com a técnica de foco total por 25 minutos
                e descanso de 5 minutos e propondo exerxcícios para melhorar sua qualidade
                de vida durante esses 5 minutos.
              <p>
                O GoMove ainda conta com um sitema de Learderboard com o seu layout gameficado.</p>
              </p>
              <p>
                O GoMove é um projeto em <strong>NextJS</strong> baseado no move.it,
                construido durante o NLW4 (Workshop organizado pela Rocketseat). A diferença
                do GoMove para o projeto original (move.it) é que eu adicionei várias funcionalidades
                como:
              </p>
              <ul>
                <li>- Login com Github</li>
                <li>- Página Learderboard</li>
                <li>- Persistência dos dados no MongoDB</li>
                <li>- Serveless function para conectar a aplicação com o banco de dados</li>
                <li>- Tema dark (com styled-components)</li>
                <li>- Layout responsivo</li>
              </ul>

              <p>Link para o repositório:
                <Link href="https://github.com/Hidekih/gomove">
                  <a target="_blank" rel="noreferrer">GoMove</a>
                </Link>
              </p>
            </RepositoryData>
          </RepositoryCard>


        </RepositoriesList>

      </Content>

      <Footer>
        <div>
          <p>Made with <HiHeart color={theme.colors.highlight} size={24}/> by me - 2021</p>
          <Links>
            <Link href="https://www.instagram.com/hideki.siroma/" >
              <a target="_blank" rel="noreferrer"><SiInstagram />Instagram</a>
            </Link>
            <Link href="https://github.com/Hidekih" >
              <a target="_blank" rel="noreferrer"><SiGithub />GitHub</a>
            </Link>
          </Links>
        </div>
      </Footer>
    </>
  );
}
