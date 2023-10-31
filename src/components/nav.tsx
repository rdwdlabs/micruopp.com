import Link from 'next/link';
import MainMenu from './main-menu';

export default function Nav(props: { isHidden: boolean }) {
  return (
    <nav style={{ display: props.isHidden ? 'none' : 'block' }}>
      <MainMenu></MainMenu>
    </nav>
  );
}
