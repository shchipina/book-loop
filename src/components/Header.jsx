import { Link } from "react-router-dom";
import logo from "../assets/book-loop.svg"
import { useSelector } from "react-redux";

import { MdFavoriteBorder } from "react-icons/md";
import { SearchBar } from "./SearchBar";

export const Header = ({ query, setQuery, onSearch }) => {
  const books = useSelector(state => state.favorite.books);

  return (
    <header id="#top" className="border-b border-gray-300 py-[20px]">
      <div className="max-w-[1200px] max-h-[100px] w-full mx-auto flex items-center justify-between">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className=""
          />
        </Link>

        <SearchBar
          query={query}
          setQuery={setQuery}
          onSearch={onSearch}
        />

        <div className="relative">
          <Link to="/favorites">
            <MdFavoriteBorder
              color="fff"
              size={35}
              opacity={0.8}
            />
          </Link>
          {books.length > 0 && (
            <p className="absolute -top-2 -right-2 text-xs bg-[#C81D25] text-white rounded-full w-5 h-5 flex items-center justify-center shadow">
              {books.length}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}