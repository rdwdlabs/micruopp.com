import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Layout from '../../components/layout';
import Date from '../../components/date';
import Image from 'next/image';
import Link from 'next/link';
import { Photo, getAllPhotoIds, getPhotoData } from '../../lib/photos';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const photo = await getPhotoData(params?.id as string);
  return {
    props: {
      photo,
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

export default function Photo({ photo }: { photo: Photo }) {
  let pageName = photo.id;
  let imageSize = 800;

  return (
    <Layout pageName={pageName}>
      <article>
        <div>
          <Image 
            src={`/images/${photo.filename}`}
            alt={photo.description}
            width={(photo.aspectRatio > 1) ? imageSize * photo.aspectRatio : imageSize}
            height={(photo.aspectRatio < 1) ? imageSize / photo.aspectRatio : imageSize}
          />
        </div>
        <p>{photo.description}</p>
      </article>
    </Layout>
  )
}
