"use client";
import Image from "next/image";
import NavLink from "./NavLink";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const pathname = usePathname();
  const navLinks = [
    { title: "Home", href: "/home" },
    {
      title: "Admin",
      href: "/admin",
    },
    {
      title: "Users",
      href: "/users",
    },
  ];

  const [selectedOption, setSelectedOption] = useState(navLinks[0]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    if (window !== undefined) window.location.href = "/users/login";
  };

  return (
    <nav className="navbar navbar-primary bg-primary sticky top-0 z-[2] flex justify-between border-b-2 border-gray-200 px-8 py-1 hover:none">
      <div className="flex gap-10">
        <ul className="flex gap-8 ">
          {navLinks.map((link, index) => (
            <li key={index} className="leading-10">
              <NavLink
                href={link.href}
                title={link.title}
                active={pathname.startsWith(link.href)}
              />
            </li>
          ))}

          <li>
            <button onClick={() => signIn()}>Log in</button>
          </li>
          <li>
            <button
              className="text-white font-semibold"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
