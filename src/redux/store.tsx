import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import { fetchSlice } from "./reducers/Apislice";
import { registerSlice } from "./reducers/RegisterSlice";


export const store = configureStore({
    reducer: {
      fetchReducer: fetchSlice.reducer,
      registerReducer: registerSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  })

  export type RootState = ReturnType<typeof store.getState>

  export type AppDispatch = typeof store.dispatch




