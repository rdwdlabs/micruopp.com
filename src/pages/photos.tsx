import { GetStaticProps } from 'next';
import { getSortedPhotosData } from '../lib/photos';
import Layout from '../components/layout';
import Link from 'next/link';
import Image from 'next/image';

export const getStaticProps: GetStaticProps = async () => {
  const allPhotosData = getSortedPhotosData();
  return {
    props: {
      allPhotosData,
    },
  };
}

export default function Photos({ allPhotosData }: { allPhotosData: { id: string, filename: string, description: string, height: number, width: number }[]}) {
  let pageName = "photos";
  const thumbnails = [];
  //const sizeToThumbnail = (v) => {
  //  const thumbnail

  return (
    <Layout pageName={pageName}>
      <div>
        <p>some photos I've taken</p>
        <section>
          <ul>
            {allPhotosData.map(({ id, filename, desc, width, height }: any) => (
              <li key={id}>
                <Link href={`/photos/${id}`}>
                  <Image
                    src={ `/images/${filename}` }
                    alt={ desc }
                    width={ width }
                    height={ height }
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}
