import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);

    return {
props: {User: data}
    }
}



const User = ({User}:any) => {
    return (
        <>
        <Head>
        <title>Shop App | User</title>
        <meta name="User list" content="User list page created by create next app" />
      </Head>
        <div>
            <h1>User List</h1>
            {User?.map((user:any)=>(
                <div key={user.id}>
                    <Link href={`/User/${user.id}`} key={user.id}>
                    <h3>{user.name}</h3></Link>
                </div>
            ))}

        </div>
        </>
    );
};

export default User;
