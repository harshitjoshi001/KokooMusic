import { createSlice } from '@reduxjs/toolkit'
import { registerUser } from '../api/api'

const initialState = {
 userRegister: false
}

export const registerSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      console.log(action.payload)
      return {
        ...state,
        userRegister: true
      }
    })
    builder.addCase(registerUser.rejected, (state) => {
      return {
        ...state
      }
    })
    builder.addCase(registerUser.pending, (state) => {
      return {
        ...state
      }
    })
  },
})

export const { } = registerSlice