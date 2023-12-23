import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Posts({ allPostsData }) {
  let pageTitle = 'posts';
  let metaTitle = `${pageTitle} | ${siteTitle}`;

  return (
    <Layout>
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <div className="breadcrumbs">
        <p>index > <Link href="/posts">{pageTitle}</Link></p>
      </div>
      <h1>{pageTitle}</h1>
      <section>
        <ul>
          {allPostsData.map(({ id, Title, CreatedAt }) => (
            <li className="" key={id}>
              <Link href={`/posts/${id}`}>
                {Title}
              </Link>
              <br />
              <small className="">
                <Date dateString={CreatedAt} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
