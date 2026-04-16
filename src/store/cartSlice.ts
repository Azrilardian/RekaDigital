import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { CartItem, Product } from '@/types'

interface CartState {
  items: CartItem[]
  _persist?: { version: number; rehydrated: boolean }
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{ product: Product; quantity?: number }>
    ) {
      const { product, quantity = 1 } = action.payload
      const existing = state.items.find((i) => i.id === product.id)
      if (existing) {
        existing.quantity += quantity
      } else {
        state.items.push({ ...product, quantity })
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((i) => i.id !== action.payload)
    },
    incrementQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find((i) => i.id === action.payload)
      if (item) item.quantity += 1
    },
    decrementQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find((i) => i.id === action.payload)
      if (item) {
        if (item.quantity <= 1) {
          state.items = state.items.filter((i) => i.id !== action.payload)
        } else {
          item.quantity -= 1
        }
      }
    },
    setQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      const { id, quantity } = action.payload
      const item = state.items.find((i) => i.id === id)
      if (item) {
        const newQuantity = Math.max(1, Math.floor(quantity))
        if (newQuantity === item.quantity) return
        item.quantity = newQuantity
      }
    },
    clearCart(state) {
      state.items = []
    }
  }
})

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  setQuantity,
  clearCart
} = cartSlice.actions

export default cartSlice.reducer
