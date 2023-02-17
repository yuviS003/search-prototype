import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const goSearch = () => {
    console.log(search);
  };
  return (
    <div className="sticky top-0 left-0 h-[10%] w-full flex justify-between items-center px-5 bg-blue-500 border-b-2 border-black shadow-stone-500 z-10">
      <div className="flex justify-between items-center text-white text-lg">
        <Link to="/" className="mr-4 hover:cursor-pointer">
          Home
        </Link>
        <Link to="/about" className="mx-4 hover:cursor-pointer">
          About
        </Link>
        <Link to="/about1" className="mx-4 hover:cursor-pointer">
          About1
        </Link>
        <Link to="/about2" className="mx-4 hover:cursor-pointer">
          About2
        </Link>
        <Link to="/about3" className="mx-4 hover:cursor-pointer">
          About3
        </Link>
        <Link to="/about4" className="mx-4 hover:cursor-pointer">
          About4
        </Link>
      </div>
      <div className="flex w-[25rem]">
        <input
          type="search"
          placeholder="Search"
          className="p-2 rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="button"
          className="px-2 text-center text-white bg-red-500"
          onClick={goSearch}
        >
          Go
        </button>
      </div>
    </div>
  );
}
