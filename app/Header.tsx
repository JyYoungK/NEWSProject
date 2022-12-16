import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import DarkModeButton from "./DarkModeButton";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";

function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 items-center p-10">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <div className="flex items-center justify-center ">
          <div className=" Five flex transform items-center justify-center text-6xl transition duration-500 hover:scale-150">
            {" "}
            {/* <Link href="/" prefetch={false}> */}
            <h1 className="text-center"> N</h1>
            {/* </Link> */}
          </div>
          <div className=" flex transform items-center justify-center  text-6xl transition duration-500 hover:scale-150">
            <h1 className="text-center"> E</h1>
            {/* <h1 className="text-center font-serif text-4xl"> EWS</h1> */}
          </div>
          <div className=" flex transform items-center justify-center text-6xl transition duration-500 hover:scale-150">
            <h1 className="text-center"> W</h1>
            {/* <h1 className="text-center font-serif text-4xl"> EWS</h1> */}
          </div>
          <div className=" flex transform items-center justify-center  text-6xl transition duration-500 hover:scale-150">
            <h1 className="text-center"> S</h1>
            {/* <h1 className="text-center font-serif text-4xl"> EWS</h1> */}
          </div>
        </div>

        <div className="flex items-center justify-end space-x-2">
          <DarkModeButton />
          <button className="hidden rounded-full bg-slate-900 px-4 py-2 text-white dark:bg-slate-800 md:inline lg:px-8 lg:py-4">
            Subscribe Now
          </button>
        </div>
      </div>

      <NavLinks />

      <SearchBox />
    </header>
  );
}

export default Header;
