"use client";


import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
  import type { RootState } from '../store'
import { iProducts } from '@/app/utils/Type'
import { products } from '@/ProductsData'

// Define a type for the slice state
interface CounterState {
  value: number
}



// Define the initial state using that type
const initialState: iProducts[] = products;

export const productSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   
    
  },
})

export const {  } = productSlice.actions



export default productSlice.reducer