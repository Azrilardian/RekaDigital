import cartReducer, {
  addToCart,
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart
} from './cartSlice'

const productFixture = {
  id: 1,
  title: 'Vehicle',
  price: 100,
  description: 'Desc',
  category: 'sedan',
  image: '/vehicle.png',
  rating: { rate: 4, count: 10 }
}

describe('cartSlice reducer', () => {
  it('adds product and manages quantity', () => {
    const added = cartReducer(undefined, addToCart({ product: productFixture }))
    expect(added.items).to.have.length(1)
    expect(added.items[0].quantity).to.equal(1)

    const incremented = cartReducer(added, incrementQuantity(productFixture.id))
    expect(incremented.items[0].quantity).to.equal(2)

    const decremented = cartReducer(
      incremented,
      decrementQuantity(productFixture.id)
    )
    expect(decremented.items[0].quantity).to.equal(1)
  })

  it('removes and clears cart', () => {
    const added = cartReducer(undefined, addToCart({ product: productFixture }))
    const removed = cartReducer(added, removeFromCart(productFixture.id))
    expect(removed.items).to.have.length(0)

    const withItem = cartReducer(
      undefined,
      addToCart({ product: productFixture })
    )
    const cleared = cartReducer(withItem, clearCart())
    expect(cleared.items).to.deep.equal([])
  })
})
