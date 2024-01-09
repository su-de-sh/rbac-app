"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Admin = () => {
  const { data: session } = useSession();
  if (!session)
    return (
      <div>
        <h2>Not signed In</h2>
      </div>
    );
  return (
    <div>
      <h2> Signed in as:</h2>
      <p> {session?.user.name}</p>
      <p> {session?.user.email}</p>
      <Image
        src={session?.user.image}
        alt="user image"
        width="100"
        height="100"
      />
    </div>
  );
};

export default Admin;
