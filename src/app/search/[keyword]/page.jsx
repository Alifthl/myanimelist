import AnimeList from "@/app/components/AnimeList";
import Header from "@/app/components/AnimeList/header";
import { getAnime } from "@/app/libs/api-libs";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);

  const searchAnime = await getAnime("anime", `q=${keyword}`);

  return (
    <>
      <section>
        <Header title={`pencarian untuk ${decodedKeyword}`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
