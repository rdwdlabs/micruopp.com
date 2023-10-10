import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function About() {
  return (
    <Layout home>
      <Head>
        <title>About Me</title>
      </Head>
      <h1>About</h1>
      <section className={utilStyles.headingMd}>
        <p>Lorem ipsum...</p>
        <p>
          (Some other sample paragraph. You can build this site too!)
        </p>
      </section>
    </Layout>
  );
}
