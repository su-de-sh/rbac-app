"use client";
import React from "react";
import Link from "next/link";

const NavLink = ({ title, href, active }) => {
  return (
    // <div className={``}>
    <Link
      href={href}
      className={`text  hover:bg-gray-200 px-3 py-2 rounded-md cursor-pointer  ${
        active ? "text-blue font-bold" : "text-gray-500"
      }`}
    >
      {title}
    </Link>
    // </div>
  );
};

export default NavLink;
