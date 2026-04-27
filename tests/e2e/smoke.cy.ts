describe('catalog smoke flow', () => {
  it('renders home sections and can open a product detail page', () => {
    cy.visit('/')

    cy.get('h1').should('be.visible')
    cy.contains('h2', /products|loading/i).should('be.visible')

    cy.get('a[href^="/products/"]').first().click({ force: true })
    cy.url().should('include', '/products/1')
  })

  it('opens product detail and shows key fields', () => {
    cy.visit('/products/1')

    cy.get('[data-testid="product-title"]').should('be.visible')
    cy.get('[data-testid="product-description"]').should('be.visible')
    cy.get('[data-testid="product-price"]').should('be.visible')
    cy.get('[data-testid="product-original-price"]').should('be.visible')
    cy.get('[data-testid="product-meta-SKU"]').should('be.visible')
    cy.get('[data-testid="product-meta-VIN"]').should('be.visible')
    cy.get('[data-testid="product-meta-Location"]').should('be.visible')
  })
})
