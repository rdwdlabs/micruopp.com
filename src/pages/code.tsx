import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import { getPublicRepoData } from '../lib/github';

export const getStaticProps = async () => {
  let repos = await getPublicRepoData();  
  return {
    props: {
      repos,
    }
  };
};

export default function Code({ repos }: { repos: { name: string, desc: string, url: string, createdAt: string, updatedAt: string }[] }) {
  let pageName = "code";

  return (
    <Layout pageName={pageName}>
      <div>
        {repos.map(({ name, desc, url, createdAt, updatedAt }) => (
          <div key={name} className="repocard">
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
            <p><Date dateString={updatedAt} /></p>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
