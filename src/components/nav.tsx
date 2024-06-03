import Link from 'next/link';
import MainMenu from './menus/main-menu';

export default function Nav(props: { isHidden: boolean }) {
  console.log("rendering <Nav>");
  console.log(`isHidden => ${props.isHidden}`);
  return (
    <nav style={{ display: props.isHidden ? 'none' : 'block' }}>
      <MainMenu></MainMenu>
    </nav>
  );
}
