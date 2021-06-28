import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import inProgressImg from '../../public/undraw_In_progress_re_m1l6.svg'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts.me</title>
      </Head>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <br />
        <h1>Working here...</h1>
        <Image src={inProgressImg} alt="In progress" width={900}/>
      </div>
    </>
  );
}
