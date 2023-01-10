import Link from "next/link";
import DarkModeButton from "./DarkModeButton";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import Weather from "./Weather";
import Typewriter from "./Typewriter/Typewriter";
import {
  CurrentVolume,
  NameOfDay,
  DateInformation,
  CurrentTime,
} from "./CurrentTime";

function Header() {
  return (
    <div>
      <hr className="my-4 h-1 border-0 bg-black dark:bg-[#3A160E]" />
      <div className="grid grid-cols-3 items-center p-2">
        <Weather />
        <div className="flex flex-col justify-center text-4xl md:flex-row lg:text-6xl">
          <div className=" mr-2 hidden text-gray-500 dark:text-[#743828] sm:block">
            Old
          </div>

          <div className="n-mover flex items-center justify-center">
            <Link href="/" prefetch={false}>
              <h1 className="text-center"> N</h1>
            </Link>
          </div>
          <div className="e-mover flex items-center justify-center">
            <Link href="/" prefetch={false}>
              <h1 className="text-center"> E</h1>
            </Link>
          </div>
          <div className="w-mover flex items-center justify-center">
            <Link href="/" prefetch={false}>
              <h1 className="text-center"> W</h1>
            </Link>
          </div>
          <div className="s-mover flex items-center justify-center">
            <Link href="/" prefetch={false}>
              <h1 className="text-center"> S</h1>
            </Link>
          </div>
          <div className="ml-2 hidden text-gray-500 dark:text-[#743828] sm:block">
            Paper
          </div>
        </div>

        <div className="flex items-center justify-end space-x-2">
          <DarkModeButton />
        </div>
      </div>
      <div className="py-auto mt-4 grid grid-cols-3 border-t-2 border-black dark:border-[#3A160E] dark:text-orange-500">
        <div className="pl-2 font-mono text-sm font-bold md:text-lg ">
          <div className="volslide pl-2">
            <CurrentVolume />
          </div>
        </div>
        <div className="flex justify-center font-mono text-sm font-bold md:text-lg">
          <div className="hidden sm:block">
            <NameOfDay />
          </div>
          <div className="mx-1 ">
            <DateInformation />
          </div>
          <div className="hidden sm:block">
            <CurrentTime />
          </div>
        </div>

        <div className="flex items-center justify-end pr-2 font-mono text-sm font-bold md:text-lg">
          <Typewriter text={"Price:1¢"} />
        </div>
      </div>
      <div className="border-t-2 border-b-4 border-black dark:border-[#3A160E]">
        <NavLinks />
      </div>
      <SearchBox />
    </div>
  );
}

export default Header;
