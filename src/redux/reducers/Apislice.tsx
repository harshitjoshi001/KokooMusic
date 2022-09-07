import { createSlice } from '@reduxjs/toolkit'
import { fetchUserById } from '../api/api'

const initialState = {
  userCred: {},
  isLoggedIn: false
}

export const fetchSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      console.log(action.payload)
      return {
        ...state,
        userCred: action.payload,
        isLoggedIn: true
      }
    })
    builder.addCase(fetchUserById.rejected, (state) => {
      return {
        ...state
      }
    })
    builder.addCase(fetchUserById.pending, (state) => {
      return {
        ...state
      }
    })
  },
})

export const { } = fetchSlice


