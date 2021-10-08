To install the dev dependencies, run `npm install` (or `npm i` for short.)

## Configuring the environment variables
Before running the tests, some environment variables need to be set up.

Make a copy of the [`generate-auth0-token.example.json`](./cypress/integration/services/twitch/payloads/generate-auth0-token.example.json) file as `generate-auth0-token.json`, and set the appropriate values for all the variables.

**Note:** `generate-auth0-token.json` file is not tracked by git.

## Running the tests

In this project, you can run tests in interactive and headless modes.

## Headless mode

Run `npm test` (or `npm t` for short) to run all tests in headless mode using a desktop viewport.

### Interactive mode

Run `npm run cy:open` to open the Cypress Test Runner to run tests in interactive mode using a desktop viewport.

