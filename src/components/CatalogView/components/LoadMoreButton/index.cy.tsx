import React from 'react'

import { mount } from 'cypress/react'

import LoadMoreButton from './index'

describe('LoadMoreButton', () => {
  it('renders and calls onLoadMore click handler', () => {
    const onLoadMore = cy.stub().as('onLoadMore')

    mount(<LoadMoreButton onLoadMore={onLoadMore} />)
    cy.contains('button', 'Show More Vehicles').click()

    cy.get('@onLoadMore').should('have.been.calledOnce')
  })
})
