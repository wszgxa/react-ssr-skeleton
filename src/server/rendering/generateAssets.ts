interface Assets {
  scriptAssets: string,
  cssAssets: string
}

interface ManifestJson {
  "/main.js": string
  "/main.css": string
}

const generateDevAssets = (): Assets => ({
  scriptAssets: "<script src='/public/app.js' type='text/javascript'></script>",
  cssAssets: "<link rel='stylesheet' type='text/css' href='/public/app.css'>"
})

const generateProdAssets = (): Assets => {
  // tslint:disable-next-line: no-unsafe-any
  const assets: ManifestJson = require("../../../public/manifest.json")
  return {
    scriptAssets: `<script src='/public${assets["/main.js"]}' type='text/javascript'></script>`,
    cssAssets: `<link rel='stylesheet' type='text/css' href='/public${assets["/main.css"]}'>`
  }
}

export {
  generateDevAssets,
  generateProdAssets
}
