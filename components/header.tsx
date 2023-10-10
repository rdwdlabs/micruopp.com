import React from 'react';
import Nav from './nav.tsx';

export default function Header({ className }) {
  let [isNavHidden, setIsNavHidden] = React.useState(true);

  function toggleNav() {
    setIsNavHidden(!isNavHidden);
  }

  return (
    <>
      <Nav isHidden={isNavHidden}></Nav>
      <header className={className}>
        <h1>micruopp</h1>
        <button onClick={toggleNav}>NAV</button>
      </header>
    </>
  );
}
