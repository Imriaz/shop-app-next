import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((user: any) => {
    return { params: { id: user.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context:any) => {
    const id = context.params.id;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props: {user: data}
    }
}

const UserDetails = ({user}:any) => {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>User Details Page</h1>
      <h2>Name: {user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Website: {user.website}</p>
      <p>City: {user.address.city}</p>
    </div>
  );
};

export default UserDetails;
