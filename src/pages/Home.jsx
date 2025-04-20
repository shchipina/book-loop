import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getBooks } from "../api/api";
import { useState } from "react";

import { BookCard } from "../components/BookCard/BookCard.jsx";
import { useOutletContext } from "react-router-dom";
import { SkeletonCard } from "../components/BookCard/SkeletonCard.jsx";


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
    return (
      <section className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </section>
    )
  };

  if (isError) {
    return <h1 className="text-[64px] font-bold">Opps...😧</h1>
  };

  const totalPages = Math.ceil(books?.totalItems / limit) || 0;

  const pageNumbers = [];
  for (let i = 1; i <= totalPages && i <= 10; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="my-10">
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!books?.items
          ? <p className="text-center col-span-full text-lg">
            Something went wrong or no results found. Try again later.
          </p>
          : books.items.length === 0
            ? <p className="text-center col-span-full text-lg">
              No books found. Try another search.
            </p>
            : books.items.map(book => (
              <BookCard
                book={book}
                key={book.id}
              />
            ))
        }
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
              className={`px-4 py-2 rounded ${page === pageNumber ? 'bg-amber-400 text-white' : 'bg-[#2A2A28]'}`}
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