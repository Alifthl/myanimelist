"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  function handleSearch(event) {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() == "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();

      router.push(`/search/${keyword}`);
    }
  }

  return (
    <div className="relative sm:mb-0 mb-5">
      <input
        className="py-2 pl-2 pr-20  w-full rounded-md"
        placeholder="search animee"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-2 end-1" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
