import React from 'react'

import { mount } from 'cypress/react'

import PriceDisplay from './index'

describe('PriceDisplay', () => {
  it('shows current and original price when provided', () => {
    mount(<PriceDisplay price={100} originalPrice={115} />)

    cy.contains('$100.00').should('be.visible')
    cy.contains('$115.00').should('be.visible')
  })

  it('shows only current price when original price is missing', () => {
    mount(<PriceDisplay price={100} />)

    cy.contains('$100.00').should('be.visible')
    cy.contains('$115.00').should('not.exist')
  })
})
