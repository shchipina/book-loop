import { RxCross1 } from "react-icons/rx";


export const SearchBar = ({query, setQuery, onSearch}) => {
  return (
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
          <RxCross1 color="#333" />
        </button>
      </div>

      <button
        onClick={onSearch}
        className="border border-[#EFCA08] text-[#EFCA08] hover:bg-[#EFCA08] hover:text-white font-medium px-10 rounded-xl"
      >
        Find
      </button>
    </div>
  );
}