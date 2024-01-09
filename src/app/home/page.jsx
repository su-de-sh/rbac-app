"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Home = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    console.log("[page.jsx--[10]], session.user", session.user);
    return (
      <div>
        <h2> Signed in as:</h2>
        <p> {session.user.name}</p>
        <p> {session.user.email}</p>
        <p> {session.user.role}</p>
        <Image
          src={session.user.image}
          alt="user image"
          width="100"
          height="100"
        />
      </div>
    );
  }

  return (
    <div>
      <h2>Not signed In</h2>
    </div>
  );
};

export default Home;
