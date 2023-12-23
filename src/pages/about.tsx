import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';

export default function About() {
  let pageName = "about";
  return (
    <Layout
      pageName={pageName}
    >
      <div>
        <section>
          <div>
            <Image 
              src="/images/profile.jpg"
              width={250}
              height={250}
              alt="Atop Pikes Peak"
            />
          </div>
          <p>I'm Mic Ruopp.</p>
          <p>I do things 'n' stuff.</p>
        </section>
      </div>
    </Layout>
  );
}
