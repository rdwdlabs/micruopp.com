import { GetStaticProps } from 'next';
import { Photo, getSortedPhotosData } from '../lib/photos';
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

export default function Photos({ allPhotosData }: { allPhotosData: Photo[] }) {
  let pageName = "photos";
  let thumbnailSize = 500;

  return (
    <Layout pageName={pageName}>
      <div>
        <p>some snapshots from my perspective</p>
        <section>
          <ul>
            {allPhotosData.map((photo: Photo) => (
              <li key={photo.id}>
                <Link href={`/photos/${photo.id}`}>
                  <Image
                    src={`/images/${photo.filename}`}
                    alt={photo.desc}
                    width={(photo.aspectRatio > 1) ? thumbnailSize * photo.aspectRatio : thumbnailSize}
                    height={(photo.aspectRatio < 1) ? thumbnailSize / photo.aspectRatio : thumbnailSize}
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
