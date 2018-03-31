// @flow
import { IS_PRODUCTION } from '../../../config/env/'
import { generateDevAssets, generateProdAssets } from './generateAssets'
let defaultVariables

type DefaultRenderVariables = {
  title: string,
  scriptAssets: string,
  cssAssets: string
}

const getDefaultVariables = (): DefaultRenderVariables => {
  if (defaultVariables !== undefined) return defaultVariables
  const assets = IS_PRODUCTION ? generateProdAssets() : generateDevAssets()
  defaultVariables = {
    title: 'react-ssr-hiluluke',
    ...assets
  }
  return defaultVariables
}

export default getDefaultVariables