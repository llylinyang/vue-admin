'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_BASE_URL: '"http://api.com"',
    CLIENT_ID: '"2"',
    GRANT_TYPE: '"password"',
    CLIENT_SECRET: '"SrglyPpQpyrM3iX2wROcfFb9PNuEOZXNlEngquD8"',
    PROVIDER:'"carriers"'
})
