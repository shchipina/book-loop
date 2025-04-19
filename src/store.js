import { configureStore } from "@reduxjs/toolkit";
import fivoriteReducer from "./features/favoritesSlice.js"

export const store = configureStore({
  reducer: {
    favorite: fivoriteReducer
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('favoriteBooks', JSON.stringify(state.favorite.books));
})