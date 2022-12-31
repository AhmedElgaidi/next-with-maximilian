import { useRouter } from "next/router";

export default function ProfilePage({ user }) {
  const router = useRouter();

  return (
    <>
      <h2>User Profile Page</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Request params: {router.query["lang"]}</p>
    </>
  );
}

// If you want to get access to the request object use this function
// this "context" in this getServerSideProps is more powerful than that of getStaticPaths as
// it give you access to the req, res objects and you can modify them, add headers, cookies, etc....

// We dont' need to use a fucntion as getStaticPaths, we just get the params from the context as usual
export async function getServerSideProps(context) {
  const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };

  return {
    props: {
      user,
    },
  };
}
