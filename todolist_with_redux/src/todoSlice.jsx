import { createSlice } from "@reduxjs/toolkit";

export const todoSlice=createSlice({
    name:"todo",
    initialState:{
        value:[]
    },
    reducers:{
        addTodo:(state, action)=>{
            state.value=[...state.value,{title:action.payload, status:false}]
        },
        removeTodo:(state, action)=>{
            state.value=state.value.filter((_, i)=> i!=action.payload)
        },
        toggleStatus:(state, action)=>{
            state.value=state.value.map((todo, idx)=>{
                if (idx==action.payload){
                    return {title:todo.title, status:todo.status?false:true}
                }
                else{
                    return todo
                }
            })
        }
    }
})

export const {addTodo, removeTodo, toggleStatus} = todoSlice.actions
export default todoSlice.reducer