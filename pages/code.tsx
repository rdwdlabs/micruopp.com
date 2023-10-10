import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import { getPublicRepoData } from '../lib/github';

export const getStaticProps = async ({ params }) => {
  let repos = await getPublicRepoData();  
  console.log(repos);
  return {
    props: {
      repos,
    }
  };
};

export default function Code({ repos }: { repos: { name: String }[] }) {
  return (
    <Layout home>
      <Head>
        <title>Code</title>
      </Head>
      <h1>Code</h1>
      {repos.map(({ name }) => (
        <h2>{name}</h2>
      ))}
    </Layout>
  );
}
