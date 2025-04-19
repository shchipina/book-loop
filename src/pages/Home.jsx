import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getBooks } from "../api/api";
import { useState } from "react";

import { BookCard } from "../components/BookCard";
import { useOutletContext } from "react-router-dom";


export const Home = () => {
  const [page, setPage] = useState(1);
  const { search } = useOutletContext();
  const limit = 20;

  const { data: books, isLoading, isError } = useQuery({
    queryKey: ['books', page, limit, search],
    queryFn: () => getBooks(page, limit, search),
    enabled: !!search || search === '',
    placeholderData: keepPreviousData,
  });

  if (isLoading) {
    return <h1>Loading...</h1>
  };

  if (isError) {
    return <h1>Error...</h1>
  };

  const totalPages = Math.ceil(books?.totalItems / limit) || 0;

  const pageNumbers = [];
  for (let i = 1; i <= totalPages && i <= 10; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="my-10">
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!books.items.length
          ? <h1>Books not found, try again later</h1>
          : (books.items?.map(book => {
            return (
              <BookCard
                book={book}
                key={book.id}
              />
            )
          }))}
      </div>

      <div className="flex justify-center my-10">
        <div className="flex gap-1">
          <button
            onClick={() => Math.max(setPage(p => p - 1), 1)}
            disabled={page === 1}
            className="px-4 py-2 bg-amber-400 text-white rounded hover:bg-amber-600 mr-2"
          >
            Prev
          </button>

          {pageNumbers.map(pageNumber => (
            <button
              key={pageNumber}
              onClick={() => setPage(pageNumber)}
              className={`px-4 py-2 rounded ${page === pageNumber ? 'bg-amber-400 text-white' : 'bg-gray-200'}`}
            >
              {pageNumber}
            </button>
          ))}

          <button
            onClick={() => setPage(p => p + 1)}
            disabled={page === totalPages}
            className="px-4 py-2 bg-amber-400 text-white rounded hover:bg-amber-600 ml-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}