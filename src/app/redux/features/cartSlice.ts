"use client";


import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
  import type { RootState } from '../store'
import { cart } from '@/app/utils/Type'

// Define a type for the slice state
interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState: cart[] = []

export const cartSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   
    
  },
})

export const {  } = cartSlice.actions



export default cartSlice.reducer