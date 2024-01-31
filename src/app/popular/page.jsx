"use client";
import { useEffect, useState } from "react";
import Pagination from "../components/utils/Pagination";
import AnimeList from "../components/AnimeList";
import HeaderMenu from "../components/utils/HeaderMenu";
import { getAnime } from "../libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [datas, setData] = useState([]);

  const fetchData = async () => {
    const popularAnime = await getAnime(`top/anime`, `page=${page}`);
    setData(popularAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  console.log;

  return (
    <>
      <HeaderMenu title={`Anime Terpopuler #${page}`} />
      <AnimeList api={datas} />
      <Pagination
        page={page}
        setPage={setPage}
        lastPage={datas.pagination?.last_visible_page}
      />
    </>
  );
};

export default Page;
