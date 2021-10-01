/* eslint-disable quotes */
/// <reference types="Cypress" />

function searchUser(token,user) {

  const payloadAuth0Token = require('../payloads/generate-auth0-token.json')

  return cy.request({
    method: 'GET',
    url: `https://api.twitch.tv/helix/search/channels?query=${user}`,
    headers:{
      "Authorization": "Bearer " + token,
      "Client-Id": payloadAuth0Token.client_id
    }
  })
}

export {searchUser}