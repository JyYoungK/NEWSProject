import React from "react";
import Link from "next/link";

type Props = {
  category: string;
  isActive: boolean;
};

function NavLink({ category, isActive }: Props) {
  return (
    <Link
      href={`/news/${category}`}
      className={`navLink mt-1 ${
        isActive &&
        "mt-0 mb-1 text-lg font-bold underline decoration-slate-700 underline-offset-4 dark:decoration-orange-400"
      }`}
    >
      {" "}
      {category}
    </Link>
  );
}

export default NavLink;
