import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchUserById = createAsyncThunk(
    'FETCH_USER',
    async (data:any) => {
        const res= await axios.post('http://localhost:4000/login',{
          data
        })
      return res
    }
  )

  export const registerUser = createAsyncThunk(
    'REGISTER_USER',
    async (data:any) => {
      console.log('hit')
        const res= await axios.post('http://localhost:4000/register',{
          data
        })
      return res
    }
  )

