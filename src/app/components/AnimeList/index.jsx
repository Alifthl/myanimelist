import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data?.map((anime) => (
        <>
          <Link key={anime.mal_id} href={`/anime/${anime.mal_id}`}>
            <Image
              src={anime.images.webp.image_url}
              alt="image"
              width={350}
              height={350}
              className="w-full h-[300px] object-cover  "
            />

            <h3 className="font-bold md:text-md text-sm p-2 text-color-primary">
              {anime.title}
            </h3>
          </Link>
        </>
      ))}
    </div>
  );
};

export default AnimeList;
