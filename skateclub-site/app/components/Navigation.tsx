import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo">
          <h1>UW SKATECLUB</h1>
        </div>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/gallery">GALLERY</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
