const generateDevAssets = () => {
  return {
    scriptAssets: '<script src="/js/app.js" type="text/javascript"></script>'
  }
}

const generateProdAssets = () => {
  const assets = require('../../../public/js/manifest.json');
  return {
    scriptAssets: `<script src="${assets['/js/main.js']}" type="text/javascript"></script>`
  }
}

export {
  generateDevAssets,
  generateProdAssets
}