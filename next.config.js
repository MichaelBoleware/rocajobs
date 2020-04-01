/* eslint-disable */
const withLess = require('@zeit/next-less')
const dotEnvResult = require('dotenv').config()

const prod = process.env.NODE_ENV === 'production'

if (dotEnvResult.error) {
  throw dotEnvResult.error
}

module.exports = withLess({
  env: {
    FIREBASE_apiKey: process.env.FIREBASE_apiKey,
    FIREBASE_authDomain: process.env.FIREBASE_authDomain,
    FIREBASE_databaseURL: process.env.FIREBASE_databaseURL,
    FIREBASE_projectId: process.env.FIREBASE_projectId,
    FIREBASE_storageBucket: process.env.FIREBASE_storageBucket,
    FIREBASE_messagingSenderId: process.env.FIREBASE_messagingSenderId,
    FIREBASE_appId: process.env.FIREBASE_appId,
    FIREBASE_measurementId: process.env.FIREBASE_measurementId,
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY, //search-only
    ALGOLIA_JOB_OPENINGS: 'JobOpenings',
    BACKEND_URL: prod ? 'https://api.example.com' : 'https://localhost:3000',
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: {'primary-color': '#FFD700'}, // make your antd custom effective
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }
    return config
  },
})
