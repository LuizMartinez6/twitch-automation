/* eslint-disable quotes */
/// <reference types="Cypress" />
import * as POSTGenerateToken from '../requests/POSTGenerateToken.request'
import * as GETSearchUser from '../requests/GETSearchUser.request'
import * as GETUserProfile from '../requests/GETUserProfile.request'
import * as GETUserImage from '../requests/GETUserImage.request'

describe('Oauth feature api', () => {

  const user = Cypress.env('streamer')

  let token = ''
  let id = ''
  let linkImage = ''

  it('Get acess Auth0 token', () => {
    POSTGenerateToken.auth0Token().then((resAuthorization) => {
      expect(resAuthorization.status).to.eq(200)
      token = resAuthorization.body.access_token

      GETSearchUser.searchUser(token, user).then((resSearchUser) => {
        id = resSearchUser.body.data[0].id

        GETUserProfile.userProfile(token, user, id).then((resUserProfile) => {
          linkImage = resUserProfile.body.data[0].profile_image_url

          GETUserImage.userImage(linkImage).then((resUserImage) => {
            const image = resUserImage.body.toString()
            cy.writeFile(`images/${user}.png`, image, 'base64')
          })
        })
      })
    })
  })
})
