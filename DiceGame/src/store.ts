import { configureStore } from '@reduxjs/toolkit';
import Manureducer from './features/Manu'
export const store = configureStore({
  reducer: {
    Manu:Manureducer
  },
});