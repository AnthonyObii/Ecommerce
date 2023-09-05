import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isCartOpen: false,
    cart: [],
    items: [],
}

export const cartSLice = createSlice ({
    name: "cart" ,
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        },
        addTocart: (state, action)=>{
            state.cart= [...state.cart, action.payload.item];
        },

        removeFromCart: (state, action)=> {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },
        increaseCount: ( state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id){
                    item.count++;
                }
            })
        }



    }
});

export const {
    setItems
} = cartSLice.actions;

export default cartSLice.reducer