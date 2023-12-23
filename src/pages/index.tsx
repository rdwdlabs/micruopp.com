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

export default function Home({ allPostsData }) {
  console.log(allPostsData);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="">
        <p>welcome to my website. I post random things here. enjoy</p>
        <h2 className="">Recent</h2>
        <ul className="">
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
