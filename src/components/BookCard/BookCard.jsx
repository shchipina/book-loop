import { Link } from "react-router-dom";
import { FavoriteButton } from "../FavoriteButton";

export const BookCard = ({ book }) => {
  const info = book.volumeInfo;
  const image = info.imageLinks.smallThumbnail;

  return (
    <article className="flex flex-col justify-between bg-[#2A2A28] rounded p-3">
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt={info.title}
          className="w-[250px] h-[300px] rounded shadow object-cover"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold truncate max-w-[200px] overflow-hidden whitespace-nowrap">{info.title}</h3>
        <p className="text-sm text-gray-400">{info.authors?.join(", ")}</p>
      </div>

      <div className="flex justify-between mt-4 border-t border-gray-300 pt-4">
        <Link
          to={`/details/${book.id}`}
          className="w-full mr-4 bg-amber-400 py-2 text-center rounded text-amber-50 font-medium hover:bg-amber-500"
        >
          Details
        </Link>

        <FavoriteButton
          book={book}
        />
      </div>
    </article>
  )
}