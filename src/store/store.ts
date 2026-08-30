import {configureStore} from '@reduxjs/toolkit';
import cart from './slices/cartSlice';
import filters from './slices/filterSlice';
import checkout from './slices/checkoutSlice';
export const store=configureStore({reducer:{cart,filters,checkout}});
export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;