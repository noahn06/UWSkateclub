import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <div className="container">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
