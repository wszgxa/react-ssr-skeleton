import { generateDevAssets, generateProdAssets } from '../generateAssets'

describe('#generateDevAssets', () => {
  it('should return correct dev model Assets', () => {
    expect(generateDevAssets()).toEqual({
      scriptAssets: '<script src="/public/app.js" type="text/javascript"></script>',
      cssAssets: '<link rel="stylesheet" type="text/css" href="/public/app.css">'
    })
  })
})

describe('#generateProdAssets', () => {
  it('should return', () => {
    jest.mock('../../../../public/manifest.json', () => {
      return {
        '/main.js': 'test-js',
        '/main.css': 'test-css'
      }
    })
    expect(generateProdAssets()).toEqual({
      scriptAssets: '<script src="test-js" type="text/javascript"></script>',
      cssAssets: '<link rel="stylesheet" type="text/css" href="test-css">'
    })
  })
})