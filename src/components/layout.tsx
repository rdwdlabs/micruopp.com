import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Nav from './nav';
import Header from './header';
import Footer from './footer';
import styles from './layout.module.css';

import { setupKeyboardDelegate, removeKeyboardDelegate, registerKey } from 'lib/keyboard';
// I want:
// import Keyboard from 'lib/keyboard';
import { toggleColorScheme } from 'lib/colorscheme';

const name = 'Mic Ruopp';
export const siteTitle = 'Mic Ruopp';

/*
function handleKeypress(e: any) {
  switch (e.key) {
    case 'd':
    case 't': e.preventDefault();
      toggleColorScheme();
      e.stopPropagation();
      break;
    default:
  }
}
*/

export default function Layout({ children, pageName }: { children: React.ReactNode, pageName?: string }) {
  useEffect(() => {
    /*
    // const systemScheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light');
    window.addEventListener('keyup', handleKeypress);
    return () => {
      window.removeEventListener('keyup', handleKeypress);
    }
    */
    setupKeyboardDelegate() 
    registerKey('d', toggleColorScheme);
    registerKey('t', toggleColorScheme);
    // iwant:
    // Keybord.init() // if I can't do this some automatic way
    // Keybord.register('d', toggleColorScheme);
    // Keybord.register('t', toggleColorScheme);

    return () => {
      removeKeyboardDelegate();
      // iwant:
      // Keybord.cleanup() // or .teardown() maybe?
    };
  });

  let siteName = "micruopp.com";
  let metaTitle = `${pageName} | ${siteName}`;
  let metaDesc = `a meaningful, search-engine optimized description describing how incredible of a person I am.`;

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
      </Head>
      <Header className="" />
      <main>
        <div className="content">
          <h1>{pageName}</h1>
          {children}
        </div>
      </main>
      <Footer/>
    </>
  );
}
