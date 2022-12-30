import Link from "next/link";

export default function Portfolio() {
  return (
    <>
      <h1>My Portfolio Home Page!</h1>
      <h3>Contains all my projects types:</h3>
      <ul>
        <li>
          <Link href="/portfolio/web">Web Projects</Link>
        </li>
        <li>
          <Link href="/portfolio/mobile">Mobile Projects</Link>
        </li>
      </ul>
    </>
  );
}
