import { configureStore } from '@reduxjs/toolkit';
import bookslice from './bookslice';

const store = configureStore({
  reducer: {
    books: bookslice, 
  },
});

export default store;
