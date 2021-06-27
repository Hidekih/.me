import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Header } from '../components/Header';


export default function Home() {

  return (
    <div>
      <Head>
        <title>About.me</title>
      </Head>

      <Header />
      <Image src="https://avatars.githubusercontent.com/u/59781045?v=4" alt="Eu" width={75} height={75} />

      <main>
        <h1>Hello World</h1>
      </main>
    </div>
  );
}
