import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  plants: [
    { id: 1, name: 'Aloe Vera', price: 15, category: 'Succulents', inCart: 0 },
    { id: 2, name: 'Peace Lily', price: 25, category: 'Indoor', inCart: 0 },
    { id: 3, name: 'Fiddle Leaf Fig', price: 45, category: 'Trees', inCart: 0 },
    { id: 4, name: 'Snake Plant', price: 30, category: 'Succulents', inCart: 0 },
    { id: 5, name: 'Spider Plant', price: 20, category: 'Indoor', inCart: 0 },
    { id: 6, name: 'Bonsai Tree', price: 55, category: 'Trees', inCart: 0 },
  ],
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

const plantSlice = createSlice({
  name: 'plants',
  initialState,
  reducers: {
    addToCart(state, action) {
      const plant = state.plants.find(p => p.id === action.payload);
      plant.inCart += 1;
      state.totalItems += 1;
      state.totalPrice += plant.price;
      if (!state.cart.find(item => item.id === plant.id)) {
        state.cart.push(plant);
      }
    },
    incrementQuantity(state, action) {
      const plant = state.cart.find(p => p.id === action.payload);
      plant.inCart += 1;
      state.totalItems += 1;
      state.totalPrice += plant.price;
    },
    decrementQuantity(state, action) {
      const plant = state.cart.find(p => p.id === action.payload);
      if (plant.inCart > 1) {
        plant.inCart -= 1;
        state.totalItems -= 1;
        state.totalPrice -= plant.price;
      }
    },
    deletePlant(state, action) {
      const plant = state.cart.find(p => p.id === action.payload);
      state.totalItems -= plant.inCart;
      state.totalPrice -= plant.inCart * plant.price;
      state.cart = state.cart.filter(p => p.id !== action.payload);
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, deletePlant } = plantSlice.actions;
export default plantSlice.reducer;
