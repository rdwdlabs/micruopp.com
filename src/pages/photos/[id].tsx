import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Layout from '../../components/layout';
import Date from '../../components/date';
import Image from 'next/image';
import Link from 'next/link';
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

export default function Photo({ photoData }: { photoData: { filename: string, description: string, height: number, width: number }}) {
  const photo = {
    url: `/images/${photoData.filename}`,
    name: photoData.filename.split('.')[0],
    desc: photoData.description,
    width: photoData.width,
    height: photoData.height
  };
  let pageName = photo.name;

  return (
    <Layout pageName={pageName}>
      <article>
        <div>
          <Image 
            src={ photo.url }
            alt={  photo.desc }
            width={ photo.width }
            height={ photo.height }
          />
        </div>
        <p>{ photo.desc }</p>
      </article>
    </Layout>
  )
}
