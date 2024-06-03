import Link from 'next/link';

export default function MainMenu() {
    return(
      <>
        <ul>
          <li><Link href="/">#recent</Link></li>
          <li><Link href="/code">#code</Link></li>
          <li><Link href="/photos">#photos</Link></li>
          <li><Link href="/about">about</Link></li>
          <li><Link href="/contact">contact</Link></li>
        </ul>
      </>
    );
}
