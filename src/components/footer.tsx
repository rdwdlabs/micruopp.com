import Link from 'next/link';
import MainMenu from './main-menu';

export default function Footer() {
    return (
      <footer>
        <div>
          <div>
            <h3>pages</h3>
            <MainMenu></MainMenu>
          </div>
          <div>
            <h3>reach me</h3>
            <ul>
              <li><a href="mailto:micruopp@gmail.com">micruopp@gmail.com</a></li>
              <li><a href="https://github.com/micruopp" target="_blank">github.com:micruopp</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
}
