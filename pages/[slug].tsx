import { useRouter } from "next/router";

export default function Blog() {
  const router = useRouter();

  return (
    <>
      <h1>Certain Blog Page</h1>

      <h2>{router.query.slug} blog</h2>
      <p>From [slug].tsx file</p>
    </>
  );
}
