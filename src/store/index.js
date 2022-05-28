import { configureStore } from '@reduxjs/toolkit';

import contactSlice from './contact-slice';

const store = configureStore({
  // reducer: { contact: contactSlice.reducer },
  reducer: contactSlice.reducer
});

export default store;
