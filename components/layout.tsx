import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Mic Ruopp';
export const siteTitle = 'Mic Ruopp';

export default function Layout({ children, home }: { children: React.ReactNode, home?: boolean }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Thoughts from the mountain top" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={siteTitle}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={108}
              width={108}
              alt={siteTitle}
            />
            <h1 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h1>
          </>
        )}
      </header>
      <main>
        {children}
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to Home</Link>
          </div>
        )}
      </main>
    </div>
  );
}
