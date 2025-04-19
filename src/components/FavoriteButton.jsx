import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites
} from "../features/favoritesSlice";

import { MdFavoriteBorder } from "react-icons/md";
import { FcLike } from "react-icons/fc";

export const FavoriteButton = ({ book }) => {
  const favoriteBooks = useSelector(state => state.favorite.books);
  const dispatch = useDispatch();

  const isFavorite = (book) => favoriteBooks.find(b => b.id === book.id);

  return (
    <button
      onClick={() => {
        isFavorite(book)
          ? dispatch(removeFromFavorites(book.id))
          : dispatch(addToFavorites(book))
      }}

      className="border border-gray-300 rounded px-2"
    >
      {isFavorite(book)
        ? <FcLike
          size={25}
          opacity={0.8}
        />
        : <MdFavoriteBorder
          size={25}
          opacity={0.6}
        />
      }
    </button>
  );
}