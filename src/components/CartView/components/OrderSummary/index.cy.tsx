import React from 'react'

import { mount } from 'cypress/react'

import OrderSummary from './index'

describe('OrderSummary', () => {
  it('renders totals and triggers checkout actions', () => {
    const onCheckout = cy.stub().as('onCheckout')
    const onClearCart = cy.stub().as('onClearCart')

    mount(
      <OrderSummary
        total={240}
        itemCount={2}
        onCheckout={onCheckout}
        onClearCart={onClearCart}
      />
    )

    cy.contains('Order Summary').should('be.visible')
    cy.contains('Subtotal (2 items)').should('be.visible')
    cy.contains('$240.00').should('have.length.at.least', 1)

    cy.contains('button', 'Proceed to Checkout').click()
    cy.get('@onCheckout').should('have.been.calledOnce')

    cy.contains('button', 'Clear Cart').click()
    cy.get('@onClearCart').should('have.been.calledOnce')
  })
})
