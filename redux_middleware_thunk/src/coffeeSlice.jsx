import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCoffee=createAsyncThunk("fetchCoffee", async(sortOrder="")=>{
    const url=`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee${sortOrder ? `?sort=${sortOrder}` : ''}`
    const res=await fetch(url)
    const data=await res.json()
    return data.data
})

export const coffeeSlice=createSlice({
    name:"coffee",
    initialState:{
        coffees:[],
        status:"idle",
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchCoffee.pending, (state)=>{
            state.status="loading"
        })
        .addCase(fetchCoffee.fulfilled, (state, action)=>{
            state.status="succeeded"
            state.coffees=action.payload
        })
        .addCase(fetchCoffee.rejected, (state, action)=>{
            state.status="failed"
            state.error=action.error.message
        })
    }
})

export default coffeeSlice.reducer