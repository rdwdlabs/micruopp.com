import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Nav from './nav';
import Header from './header';
import Footer from './footer';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Mic Ruopp';
export const siteTitle = 'Mic Ruopp';

const buildNumber = '0';

function toggleColorScheme() {
  const root = document.documentElement;
  
  const setScheme = root.dataset.colorScheme || null;
  const sysScheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  const current = setScheme || sysScheme;

  root.dataset.colorScheme = current === 'dark' ? 'light' : 'dark';
}

function handleKeypress(e: any) {
  switch (e.key) {
    case 'd':
    case 't':
      e.preventDefault();
      toggleColorScheme();
      e.stopPropagation();
      break;
    default:
  }
}

export default function Layout({ children, home }: { children: React.ReactNode, home?: boolean }) {
  useEffect(() => {
    // const systemScheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light');
    window.addEventListener('keyup', handleKeypress);
    return () => {
      window.removeEventListener('keyup', handleKeypress);
    }
  });

  return (
    <div className={styles.container} onKeyUp={handleKeypress}>
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
