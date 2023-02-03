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

const UserDetails = () => {
  return (
    <div>
      <h1>User Details Page</h1>
    </div>
  );
};

export default UserDetails;
