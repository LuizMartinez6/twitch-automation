/// <reference types="Cypress" />

function auth0Token(){
  //cy.request - client http
  const payloadAuth0Token = require('../payloads/generate-auth0-token.json')

  return cy.request({
    method: 'POST',
    url:'https://id.twitch.tv/oauth2/token',
    form: true,
    body: payloadAuth0Token
  })
}

export {auth0Token}