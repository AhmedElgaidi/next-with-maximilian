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
        <li>
          <Link href="/ssg">SSG</Link>
        </li>
        <li>
          <Link href="/profile">profile</Link>
        </li>
        <li>
          <Link href="/client-side-data-fetching">Client Side Data Fetching</Link>
        </li>
      </ul>
    </>
  );
}
// start with video 8 in chapter 5
