import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import { getPublicRepoData } from '../lib/github';

export const getStaticProps = async () => {
  let repos = await getPublicRepoData();  
  console.log(repos);
  return {
    props: {
      repos,
    }
  };
};

export default function Code({ repos }: { repos: { name: string, desc: string, url: string }[] }) {
  return (
    <Layout home>
      <Head>
        <title>Code</title>
      </Head>
      <h1>Code</h1>
      {repos.map(({ name, desc, url }) => (
        <div className="repocard">
          <a href={url} target="_blank" rel="noopener noreferrer" className="repolink"></a>
          <h2>
            <a 
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </a>
          </h2>
          <p>{desc}</p>
        </div>
      ))}
    </Layout>
  );
}
