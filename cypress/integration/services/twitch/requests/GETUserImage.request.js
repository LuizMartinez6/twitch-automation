/// <reference types="Cypress" />

function userImage(linkImage){
  return cy.request({
    method: 'GET',
    url: linkImage,
    encoding: 'base64'
  })

}

export {userImage}