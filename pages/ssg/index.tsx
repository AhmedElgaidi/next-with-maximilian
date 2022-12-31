import Link from "next/link";
// Let's use the Static site generation SSG
// 1) here the getStaticProps run first and then the component renders!!!
// 2) Everything in hte getStaticProps is actually serverside code!!! which means it get executed on the build time (before deploying the project!! during lets' say npm run dev)
// So, when the user opens the browners and send a request the component is already have those data returned from getStaticProps and now show him the rendered component (of course after the pre-render/ inital render)

export default function SSG(props) {
  const { posts } = props;

  return (
    <>
      <h1>Test on SSG</h1>
      <ul>
        {posts.map((el) => (
          <Link href={`/users/${el.id}`}>
            <li>
            {el.name}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  try {
    let data = await fetch(`https://jsonplaceholder.typicode.com/users`).then(
      (res) => res.json()
    );

    // (1) Just an a typical example for when using the notFound operation!
    if (data.length < 1) {
      return {
        notFound: true,
      };
    }

    console.log("Re-generating.........");

    // const jsonData = await fs.readFile(
    //   path.join(process.cwd(), "data", "dummy_data.ts")
    // );
    // const users = JSON.parse(jsonData.toString()).users;

    return {
      props: {
        posts: data,
      },
      revalidate: 1, // this option is for making it regenerating after x ms
      // notFound: true, // if there is not data we can use it to render the 404 page!!
      // redirect: {
      // destination: "/sfsdfs"
      // }
    };
  } catch (error) {
    // What if something goes wrong with fetching data?

    // (2) As, we said, this function as as a server side code, so we could connect to our DB or so
    // and if the connection faild or what situatio we have in our project. I don't want to return
    // 404 page, but rediret the user to another page or so

    return {
      redirect: {
        destination: "/about",
      },
    };
  }
}
