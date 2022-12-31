import { useEffect, useState } from "react";

export default function UserDetails({ userId }) {
  const [user, setUser] = useState({
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
  });

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const fetchedUser = await response.json();
      setUser(fetchedUser);
    };
  }, [user]);

  return (
    <>
      <h1>User Details: Page</h1>
      <p>User Id: {userId}</p>
      <p> {user.name}</p>
      <p> {user.company.name}</p>
      <p> {user.name}</p>
      <p> {user.address.street}</p>
      <p> {user.email}</p>
    </>
  );
}

export async function getStaticProps(context) {
  // Throw the context parameter, we can acces the concrete values of the url (like, userId, we use!)
  const { userId } = context.params;

  return {
    props: {
      userId,
    },
  };
}

// this function is to tell next that we need to pre-render those exact components replicate
export async function getStaticPaths() {
  return {
    paths: [
      { params: { userId: "1" } },
      { params: { userId: "2" } },
      { params: { userId: "3" } },
      { params: { userId: "4" } },
      { params: { userId: "5" } },
      { params: { userId: "6" } },
      { params: { userId: "7" } },
      { params: { userId: "8" } },
      { params: { userId: "9" } },
      { params: { userId: "10" } },
    ],
    fallback: false, // this is option is just for non pre-rendering functionality
    // Note: Eitehr (true, false, blocking)
    // true => just oridnary react component (So you need to check if the props is found or not, or it will show you undefined error as you are accessing a props which aren't yet rendered!!)
    // false => render them all/ populate into our component
    // blocking => is just like false, but we dont' need to check if there is props or not as it blocks the component until the rendre finsish
  };
}
