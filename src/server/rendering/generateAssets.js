const generateDevAssets = () => {
  return {
    scriptAssets: '<script src="/public/app.js" type="text/javascript"></script>',
    cssAssets: '<link rel="stylesheet" type="text/css" href="/public/app.css">'
  }
}

const generateProdAssets = () => {
  const assets = require('../../../public/manifest.json');
  return {
    scriptAssets: `<script src="/public${assets['/main.js']}" type="text/javascript"></script>`,
    cssAssets: `<link rel="stylesheet" type="text/css" href="/public${assets['/main.css']}">`
  }
}

export {
  generateDevAssets,
  generateProdAssets
}