import { authSession } from "@/app/libs/auth-libs";
import Link from "next/link";
import React from "react";

const UserAction = async () => {
  const user = await authSession();
  return (
    <div className="flex gap-5 items-center">
      {user ? (
        <Link
          href="/user/dashboard"
          className="bg-color-dark text-color-primary px-4 py-2 rounded-md"
        >
          Profile
        </Link>
      ) : (
        <Link
          href="/api/auth/signin"
          className="bg-color-dark text-color-primary px-4 py-2 rounded-md"
        >
          Sign in
        </Link>
      )}
    </div>
  );
};

export default UserAction;
