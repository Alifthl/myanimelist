import AnimeList from "@/app/components/AnimeList";
import Link from "next/link";
import Header from "./components/AnimeList/header";
import { getAnime, getNestedAnime, randomData } from "./libs/api-libs";

const Page = async () => {
  const topAnime = await getAnime("top/anime", "limit=12");
  let recAnime = await getNestedAnime("recommendations/anime", "entry");
  recAnime = randomData(recAnime, 12);

  return (
    <>
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/popular"
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recAnime} />
      </section>
    </>
  );
};

export default Page;
