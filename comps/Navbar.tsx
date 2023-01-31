import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div style={{display:'flex', gap:'10px'}}>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/product-list'>Product List</Link>
            <Link href='/Registration'>Registration</Link>
            <Link href='/Login/Login'>Login</Link>
        </div>
    );
};

export default Navbar;