import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001',
    supportFile: false,
    specPattern: 'tests/e2e/**/*.cy.{js,jsx,ts,tsx}'
  },
  component: {
    supportFile: 'cypress/support/component.ts',
    indexHtmlFile: 'cypress/support/component-index.html',
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
    devServer: {
      framework: 'next',
      bundler: 'webpack'
    }
  }
})
