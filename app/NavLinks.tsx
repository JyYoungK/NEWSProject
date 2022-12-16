"use client";

import { categories } from "../constants";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

function NavLinks() {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };

  return (
    <div className="items-center p-2">
      <nav className="flex flex-col justify-center text-sm dark:text-[#3A160E] md:flex-row md:text-lg">
        {categories.map((category) => (
          <NavLink
            key={category}
            category={category}
            isActive={isActive(category)}
          />
        ))}
      </nav>
      {/* <div className="flex items-center justify-end space-x-2 font-sans">
        {" "}
        PRICE: 1 CENT
      </div> */}
    </div>
  );
}

export default NavLinks;
