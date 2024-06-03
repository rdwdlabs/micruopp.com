import Link from 'next/link';
import MainMenu from './menus/main-menu';
import ContactMenu from './menus/contact-menu';

export default function Footer() {
    return (
      <footer>
        <div className="content">
          <div>
            <h3 className="menu-heading">pages</h3>
            <MainMenu></MainMenu>
          </div>
          <div>
            <h3 className="menu-heading">reach me</h3>
            <ContactMenu></ContactMenu>
          </div>
        </div>
      </footer>
    );
}
