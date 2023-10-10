import Link from 'next/link';

export default function Footer() {
    return (
      <footer>
        <div>
          <div>
            <p><Link href="/">micruopp.com</Link></p>
          </div>
          <div>
            <h3>pages</h3>
            <ul>
              <li><Link href="/about">about</Link></li>
              <li><Link href="/code">code</Link></li>
              <li><Link href="/photos">photos</Link></li>
              <li><Link href="/contact">contact</Link></li>
            </ul>
          </div>
          <div>
            <h3>reach me</h3>
            <ul>
              <li><a href="mailto:micruopp@gmail.com">micruopp@gmail.com</a></li>
              <li><a href="https://github.com/micruopp" target="_blank">github.com:micruopp</a></li>
            </ul>
          </div>
        </div>
        <div>
          <p>Copyright &#169; Mic Ruopp</p>
          <p>build 0</p>
        </div>
      </footer>
    );
}
