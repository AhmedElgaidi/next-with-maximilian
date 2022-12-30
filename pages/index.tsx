import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>Blog Home Page</h1>
      <ul>
        <li>
          <Link href="/about">About Page</Link>
        </li>
        <li>
          <Link href="/portfolio">Porfolio</Link>
        </li>
      </ul>
    </>
  );
}
