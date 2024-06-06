import Link from 'next/link';
import MainMenu from './menus/main-menu';

export default function Nav(props: { isHidden: boolean }) {
  return (
    <nav style={{ display: props.isHidden ? 'none' : 'block' }}>
      <div className="content">
        <MainMenu></MainMenu>
      </div>
    </nav>
  );
}
