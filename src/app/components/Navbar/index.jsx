import Link from "next/link";

import InputSearch from "./InputSearch";
import UserAction from "./UserAction";

const Navbar = () => {
  return (
    <div className="bg-color-accent">
      <div className="flex justify-between md:items-center md:flex-row flex-col gap-2 p-4">
        <Link href="/" className="font-bold text-white text-2xl ">
          MYANIMELIST
        </Link>
        <div className="md:flex  items-center gap-5">
          <InputSearch />
          <UserAction />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
