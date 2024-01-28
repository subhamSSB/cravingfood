import { createSlice } from "@reduxjs/toolkit";

const cartSlice  = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        //reducer function
        addItem:(state,action) => {
            //vanilla (Old) Redux ==> Don't mutate state, returning was mandatory
            // const newState = [...state];
            // newState.items.push(action.payload)
            // return newState

            //Redux Toolkit uses immerjs behind the scene
            // We have to mutate the state
            state.items.push(action.payload)
        },
        removeItem:(state) => {
            state.items.pop();
        },
        clearCart:(state) => {
            //RTK says either u can mutate existin state or return a new state
            // like return {items:[]}
            state.items.length = 0;
        }
    }
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;