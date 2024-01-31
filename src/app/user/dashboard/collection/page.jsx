import Header from "@/app/components/Dashboard/Header";
import { authSession } from "@/app/libs/auth-libs";
import prisma from "@/app/libs/prisma";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const user = await authSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user?.email },
  });

  console.log(collection);
  return (
    <div className=" p-4 ">
      <Header title="My Collection" />
      <div className="grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {collection.map((data) => (
          <Link key={data.anime_mal_id} href={`/anime/${data.anime_mal_id}`}>
            <Image
              src={data.anime_image}
              alt="image"
              width={350}
              height={350}
              className="w-full h-[300px] object-cover  "
            />

            <h3 className="font-bold md:text-md text-sm p-2 text-color-primary">
              {data.anime_title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
