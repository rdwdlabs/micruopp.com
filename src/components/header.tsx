import React from 'react';
import Nav from './nav';
import Link from 'next/link';

export default function Header({ className }: { className: string }) {
  let [isNavHidden, setIsNavHidden]: [boolean, any] = React.useState(true);

  function toggleNav(e: any) {
    e.preventDefault();
    setIsNavHidden(!isNavHidden);
  }

  return (
    <>
      <Nav isHidden={isNavHidden}></Nav>
      <header className={className}>
        <h1><Link
          href="/"
        >mic<span className="lastname">ruopp</span></Link></h1>
        <button onClick={toggleNav}>NAV</button>
      </header>
    </>
  );
}
