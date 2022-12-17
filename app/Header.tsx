import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import DarkModeButton from "./DarkModeButton";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import Weather from "./Weather";
function Header() {
  var today = new Date();
  var day = today.getDay();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  let beginning = new Date(`1/1/${yyyy}`);
  let difference = today.getTime() - beginning.getTime();
  let totalDays = Math.ceil(difference / (1000 * 60 * 60 * 24));
  return (
    <header>
      <hr className="my-4 h-1 border-0 bg-black dark:bg-[#3A160E]" />

      <div className="grid grid-cols-3 items-center p-2">
        {/* <Bars3Icon className="h-8 w-8 cursor-pointer" /> */}
        <Weather />
        <div className="flex justify-center text-2xl md:text-6xl">
          <div className=" mr-2 flex  text-gray-500 dark:text-[#743828]">
            Old{" "}
          </div>
          <div className=" flex transform items-center justify-center hover:scale-150">
            {" "}
            <Link href="/" prefetch={false}>
              <h1 className="text-center"> N</h1>
            </Link>
          </div>
          <div className=" flex transform items-center justify-center hover:scale-150">
            <h1 className="text-center"> E</h1>
          </div>
          <div className=" flex transform items-center justify-center hover:scale-150">
            <h1 className="text-center"> W</h1>
          </div>
          <div className=" flex transform items-center justify-center hover:scale-150">
            <h1 className="text-center"> S</h1>
          </div>
          <div className=" ml-2 flex text-gray-500 dark:text-[#743828]">
            Paper{" "}
          </div>
        </div>

        <div className="flex items-center justify-end space-x-2">
          <DarkModeButton />
        </div>
      </div>
      <div className="py-auto mt-4 grid grid-cols-3 border-t-2 border-black dark:border-[#3A160E] dark:text-orange-500">
        <div className="pl-2 font-mono text-sm font-bold md:text-lg ">
          Vol.{yyyy % 1000} • No.{totalDays}
        </div>
        <div className="flex justify-center font-mono text-sm font-bold md:text-lg">
          {days[day]},{mm},{dd},{yyyy}
        </div>
        <div className="flex items-center justify-end pr-2 font-mono text-sm font-bold md:text-lg">
          Price:1¢{" "}
        </div>
      </div>
      <div className="border-t-2 border-b-4 border-black dark:border-[#3A160E]">
        <NavLinks />
      </div>
      <SearchBox />
    </header>
  );
}

export default Header;
