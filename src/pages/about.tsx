import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function About() {
  return (
    <Layout home>
      <Head>
        <title>About</title>
      </Head>
      <h1>About</h1>
      <section className={utilStyles.headingMd}>
        <Image 
          src="/images/profile.jpg"
          width={250}
          height={250}
          alt="Atop Pikes Peak"
        />
        <p>I'm Mic Ruopp.</p>
        <p>I do things 'n' stuff.</p>
      </section>
    </Layout>
  );
}
