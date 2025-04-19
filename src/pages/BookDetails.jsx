import { useQuery } from "@tanstack/react-query"
import { getBookById } from "../api/api"
import { useParams } from "react-router-dom";
import { useState } from "react";
import { FavoriteButton } from "../components/FavoriteButton";

export const BookDetails = () => {
  const { id } = useParams();
  const [mainImage, setMainImage] = useState('');

  const { data: book, isLoading, isError } = useQuery({
    queryKey: ['book', id],
    queryFn: () => getBookById(id)
  });

  console.log(book);

  if (isLoading) {
    return <h1 className="text-center text-xl">Завантаження...</h1>;
  }

  if (isError) {
    return <h1 className="text-center text-xl text-red-500">Помилка при завантаженні.</h1>;
  }

  const info = book.volumeInfo;
  const {
    title,
    authors = [],
    description,
    publishedDate,
    publisher,
    pageCount,
    language,
    categories = [],
    previewLink,
    imageLinks = {},
  } = info;

  const images = [
    imageLinks.thumbnail,
    imageLinks.small,
    imageLinks.medium,
    imageLinks.large,
    imageLinks.extraLarge,
  ].filter(Boolean);

  if (!mainImage && images.length > 0) {
    setMainImage(images[0]);
  }

  return (
    <section className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img
            src={mainImage}
            alt={title}
            className="w-full h-[400px] object-contain rounded shadow"
          />

          <div className="flex gap-3 mt-4 overflow-x-auto">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setMainImage(img)}
                className={`w-20 h-28 object-cover cursor-pointer border-2 rounded transition
                  ${mainImage === img ? 'border-blue-600' : 'border-transparent hover:border-gray-400'}`}
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p><strong>Автор:</strong> {authors.join(', ') || 'Невідомо'}</p>
          <p><strong>Опис:</strong> {description || 'Опис відсутній.'}</p>
          <p><strong>Дата публікації:</strong> {publishedDate || 'Невідомо'}</p>
          <p><strong>Видавництво:</strong> {publisher || 'Невідомо'}</p>
          <p><strong>Сторінок:</strong> {pageCount || 'Невідомо'}</p>
          <p><strong>Мова:</strong> {language?.toUpperCase() || 'Невідомо'}</p>
          <p><strong>Категорії:</strong> {categories.join(', ') || 'Немає'}</p>

          <a
            href={previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Переглянути в Google Books
          </a>
          <FavoriteButton book={book} />
        </div>
      </div>
    </section>

  )
}