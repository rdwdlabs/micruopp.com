import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Layout from '../../components/layout';
import Date from '../../components/date';
import Image from 'next/image';
import { getAllPhotoIds, getPhotoData } from '../../lib/photos';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const photoData = await getPhotoData(params?.id as string);
  return {
    props: {
      photoData,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPhotoIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Photo({ photoData }: { photoData: { filename: string }}) {
  const imageUrl = `/images/photos/${photoData.filename}`;
  return (
    <Layout>
      <Head>
        <title></title>
      </Head>
      <article>
        <h1>{photoData.filename}</h1>
        <div>
          <Image 
            src={imageUrl}
            alt=""
            width={250}
            height={500}
          />
        </div>
      </article>
    </Layout>
  )
}
