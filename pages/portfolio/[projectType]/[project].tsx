import { useRouter } from "next/router";

export default function Project() {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <h1>Certain Project</h1>
      <h3>Project Type: {router.query.projectType}</h3>
      <h3>Project Name: {router.query.project}</h3>
    </>
  );
}
