const generateDevAssets = () => {
  return {
    scriptAssets: '<script src="/app.js" type="text/javascript"></script>',
    cssAssets: '<link rel="stylesheet" type="text/css" href="/app.css">'
  }
}

const generateProdAssets = () => {
  const assets = require('../../../public/manifest.json');
  return {
    scriptAssets: `<script src="${assets['/main.js']}" type="text/javascript"></script>`,
    cssAssets: `<link rel="stylesheet" type="text/css" href="${assets['/main.css']}">`
  }
}

export {
  generateDevAssets,
  generateProdAssets
}