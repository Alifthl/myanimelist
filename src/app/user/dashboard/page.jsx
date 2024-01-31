import { authSession } from "@/app/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const user = await authSession();

  return (
    <div className="text-color-primary flex justify-center items-center flex-col">
      <h1>Welcome {user.name}</h1>
      <Image src={user.image} width={250} height={250} alt="User Image" />
      <Link href="/user/dashboard/collection" className="bg-color-accent">
        My Collection
      </Link>
      <Link href="/api/auth/signout">Log Out</Link>
    </div>
  );
};

export default Page;
