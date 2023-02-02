import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar" style={{ display: "flex", justifyContent: "space-between", alignItems:"center" }}>
      <div>
        <Image src="/logo.png" height={50} width={100} alt="Logo" />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/User/User">User List</Link>
        <Link href="/product-list">Product List</Link>
        <Link href="/Contact">Contact Us</Link>
        <Link href="/Registration">Registration</Link>
        <Link href="/Login/Login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
