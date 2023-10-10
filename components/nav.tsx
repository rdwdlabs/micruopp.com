import Link from 'next/link';

export default function Nav({ isHidden }: { boolean }) {
  return (
    <nav style={{ display: isHidden ? 'none' : 'block' }}>
      <ul>
        <li><Link href="/">index</Link></li>
        <li><Link href="/about">about</Link></li>
        <li><Link href="/code">code</Link></li>
        <li><Link href="/contact">contact</Link></li>
      </ul>
    </nav>
  );
}
