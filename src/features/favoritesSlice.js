import { createSlice } from "@reduxjs/toolkit";

const storedFavorite = localStorage.getItem('favoriteBooks');

export const initialState = {
  books: storedFavorite ? JSON.parse(storedFavorite) : [],
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const book = action.payload;
      const alreadyAdded = state.books.find(b => b.id === book.id);

      if (!alreadyAdded) {
        state.books.push(book);
      }
    },
    removeFromFavorites: (state, action) => {
      state.books = state.books.filter(b => b.id !== action.payload)
    }
  }
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;