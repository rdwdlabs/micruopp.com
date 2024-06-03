import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';

interface Post {

}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}: any) {
  console.log(allPostsData);
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="">
        <h2 className="">recent</h2>
        <ul className="">
          {allPostsData.map(({ id, Title, CreatedAt }: any) => (
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
