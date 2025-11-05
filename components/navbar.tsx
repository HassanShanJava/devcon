import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <Image src="/icons/logo.png" alt="logo" width={24} height={24} />
          <p>DevCon</p>
        </Link>

        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/about">Create Event</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
