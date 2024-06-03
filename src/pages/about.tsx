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
          <h1>{pageName}</h1>
          <div>
            <Image 
              src="/images/profile.jpg"
              width={250}
              height={250}
              alt="Atop Pikes Peak"
            />
          </div>
          <p>Hey there, I'm Mic Ruopp.</p>
          <p>This is my website for posting random things.</p>
          <p>Feel free to <a href="/contact">reach out</a> if you're interested in collaborating.</p>
        </section>
      </div>
    </Layout>
  );
}
