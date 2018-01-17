import { generateDevAssets, generateProdAssets } from '../generateAssets'

describe('#generateDevAssets', () => {
  it('should return correct dev model Assets', () => {
    expect(generateDevAssets()).toEqual({
      scriptAssets: '<script src="/js/app.js" type="text/javascript"></script>'
    })
  })
})

describe('#generateProdAssets', () => {
  it('should return', () => {
    jest.mock('../../../../public/js/manifest.json', () => {
      return {
        '/js/main.js': 'test'
      }
    })
    expect(generateProdAssets()).toEqual({
      scriptAssets: '<script src="test" type="text/javascript"></script>'
    })
  })
})