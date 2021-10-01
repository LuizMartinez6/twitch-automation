/// <reference types="Cypress" />

function userProfile(token, user, id){

  const payloadAuth0Token = require('../payloads/generate-auth0-token.json')

  return cy.request({
    method: 'GET',
    url: `https://api.twitch.tv/helix/users?id=${id}&login=${user}`,
    headers:{
      'Authorization': 'Bearer ' + token,
      'Client-Id': payloadAuth0Token.client_id
    }
  })
}

export {userProfile}