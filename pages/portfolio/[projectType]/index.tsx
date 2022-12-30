import { useRouter } from "next/router";
import Link from "next/link";

export default function ProjectHomePage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <>
      <h1>All my project types page.</h1>
      <h3>Project type: {router.query.projectType} projects</h3>
      <ul>
        <li>
          <Link href={`/portfolio/${router.query.projectType}/project-one`}>
            project 1
          </Link>
        </li>

        <li>
          <Link href={`/portfolio/${router.query.projectType}/project-two`}>
            project 2
          </Link>
        </li>
      </ul>
    </>
  );
}
