// @flow

type Assets = {
  scriptAssets: string,
  cssAssets: string
}

const generateDevAssets = (): Assets => ({
  scriptAssets: '<script src="/public/app.js" type="text/javascript"></script>',
  cssAssets: '<link rel="stylesheet" type="text/css" href="/public/app.css">'
})

const generateProdAssets = (): Assets => {
  // flow-disable ignore public file
  const assets = require('../../../public/manifest.json')
  return {
    scriptAssets: `<script src="/public${assets['/main.js']}" type="text/javascript"></script>`,
    cssAssets: `<link rel="stylesheet" type="text/css" href="/public${assets['/main.css']}">`
  }
}

export {
  generateDevAssets,
  generateProdAssets
}