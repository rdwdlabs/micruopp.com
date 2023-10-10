import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Contact() {
  return (
    <Layout home>
      <Head>
        <title>Contact Me</title>
      </Head>
      <h1>Contact</h1>
      <p>Contact form here</p>
    </Layout>
  );
}
