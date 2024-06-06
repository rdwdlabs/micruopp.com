import React from 'react';
import Nav from './nav';
import Link from 'next/link';

export default function Header({ className }: { className: string }) {
  let [isNavHidden, setIsNavHidden]: [boolean, any] = React.useState(true);

  function toggleNav(e: any) {
    e.preventDefault();
    console.log(`toggling nav visibility from ${isNavHidden} to ${!isNavHidden}`);
    setIsNavHidden(!isNavHidden);
  }

  return (
    <header>
      <Nav isHidden={isNavHidden}></Nav>
      <div className="content">
        {/* TODO: breadcrumbs to replace 'logo' */}
        <div className="logo">
          <Link href="/">
            <span className="firstname">mic</span>
            <span className="lastname">ruopp</span>
          </Link>
        </div>
        <button onClick={toggleNav}>...</button>
      </div>
    </header>
  );
}
