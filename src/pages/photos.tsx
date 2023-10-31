import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';
import { getSortedPhotosData } from '../lib/photos';

export const getStaticProps: GetStaticProps = async () => {
  const allPhotosData = getSortedPhotosData();
  return {
    props: {
      allPhotosData,
    },
  };
}

export default function Photos({ allPhotosData }: { allPhotosData: { filename: string }[]}) {
  return (
    <Layout home>
      <Head>
        <title>Photos</title>
      </Head>
      <h1>Photos</h1>
      <section>
        <ul>
          {allPhotosData.map(({ id }) => (
            <li key={id}>
              <Link href={`/photos/${id}`}>
                <Image
                  src={`/images/photos/${id}.png`}
                  width={250}
                  height={250}
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
