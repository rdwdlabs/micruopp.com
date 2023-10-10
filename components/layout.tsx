import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Nav from './nav.tsx';
import Header from './header.tsx';
import Footer from './footer.tsx';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Mic Ruopp';
export const siteTitle = 'Mic Ruopp';

const buildNumber = '0';

export default function Layout({ children, home }: { children: React.ReactNode, home?: boolean }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Thoughts from the mountain top" />
      </Head>
      <Header className={styles.header}></Header>
      <main>
        {children}
        {/*
        // Rework this to be a 'previous' and 'next' post link and
        // move it to posts/[id]
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to Home</Link>
          </div>
        )}
        */}
      </main>
      <Footer></Footer>
    </div>
  );
}
