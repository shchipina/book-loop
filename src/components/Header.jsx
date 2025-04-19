import { Link } from "react-router-dom";
import logo from "../assets/book-loop.svg"
import { useSelector } from "react-redux";

import { RxCross1 } from "react-icons/rx";
import { MdFavoriteBorder } from "react-icons/md";

export const Header = ({ query, setQuery, onSearch }) => {
  const books = useSelector(state => state.favorite.books);

  return (
    <header className="border-b border-gray-300 py-[20px]">
      <div className="max-w-[1200px] max-h-[100px] w-full mx-auto flex items-center justify-between">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className=""
          />
        </Link>

        <div className="flex gap-5">
          <div className="relative">
            <input type="text"
              placeholder="Search by title..."
              value={query}
              onChange={event => setQuery(event.target.value)}
              className="bg-amber-50 text-[#333] rounded-3xl p-3 w-[400px] outline-none"
            />

            <button
              onClick={() => setQuery('')}
              className="cursor-pointer absolute bottom-[31%] right-4"
            >
              <RxCross1 />
            </button>
          </div>

          <button
            onClick={onSearch}
            className="border border-[#EFCA08] text-[#EFCA08] hover:bg-[#EFCA08] hover:text-white font-medium px-10 rounded-xl"
          >
            Find
          </button>
        </div>

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