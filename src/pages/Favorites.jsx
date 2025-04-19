import { useSelector } from "react-redux";
import { BookCard } from "../components/BookCard";

export const Favorites = () => {
  const favoriteBooks = useSelector(state => state.favorite.books);

  return (
    <section>
      <h2 className="text-3xl font-medium my-[40px]">Your favorite books</h2>

      {
        favoriteBooks.length === 0 
        ? (
          <h3>You have no favorite books yet...</h3>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {favoriteBooks.map(book => (
              <BookCard 
                key={book.id}
                book={book}
              />
            ))}
          </div>  
        )
      }
    </section>
  );
}