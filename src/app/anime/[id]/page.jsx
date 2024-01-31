import CollectionButton from "@/app/components/AnimeList/CollectionButton";
import VideoPlayer from "@/app/components/utils/VideoPlayer";
import { getAnime } from "@/app/libs/api-libs";
import Image from "next/image";
import { authSession } from "@/app/libs/auth-libs";
import prisma from "@/app/libs/prisma";

const Page = async ({ params }) => {
  const { id } = params;

  const anime = await getAnime(`anime/${id}`);
  const user = await authSession();
  const valid = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });

  return (
    <>
      <div className="p-4">
        <h3 className="text-2xl text-color-primary">
          {anime.data.title} - {anime.data.year}
        </h3>
        {!valid && user ? (
          <CollectionButton
            anime_mal_id={id}
            anime_image={anime.data.images.webp.image_url}
            anime_title={anime.data.title}
            user_email={user?.email}
          />
        ) : null}
      </div>
      <div className="pt-4 px-4  flex gap-2 text-color-primary overflow-x-auto">
        <div className="w-36 p-2 flex flex-col justify-center items-center rounded border">
          <h3>Peringkat</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 p-2 flex flex-col justify-center items-center rounded border">
          <h3>Skor</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-36 p-2 flex flex-col justify-center items-center rounded border">
          <h3>Members</h3>
          <p>{anime.data.members}</p>
        </div>
        <div className="w-36 p-2 flex flex-col justify-center items-center rounded border">
          <h3>Episode</h3>
          <p>{anime.data.episodes}</p>
        </div>
        <div className="w-36 p-2 flex flex-col justify-center items-center rounded border">
          <h3>Episode</h3>
          <p>{anime.data.episodes}</p>
        </div>
        <div className="w-36 p-2 flex flex-col justify-center items-center rounded border">
          <h3>Episode</h3>
          <p>{anime.data.episodes}</p>
        </div>
      </div>
      <div className="p-4 flex justify-around sm:flex-nowrap flex-wrap gap-4 text-color-primary">
        <Image
          src={anime.data.images.webp.image_url}
          width={350}
          height={350}
          className="w-full rounded object-cover h-5/6"
        />
        <div className="">
          <p>{anime.data.synopsis}</p>
          <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
        </div>
      </div>
    </>
  );
};

export default Page;
