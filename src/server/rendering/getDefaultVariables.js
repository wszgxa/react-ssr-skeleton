import { IS_PRODUCTION } from '../../../config/env/'
import { generateDevAssets, generateProdAssets } from './generateAssets';
let defaultVariables;

const getDefaultVariables = () => {
  if (defaultVariables !== undefined) return defaultVariables
  const assets = IS_PRODUCTION ? generateProdAssets() : generateDevAssets()
  defaultVariables = {
    title: 'react-ssr-hiluluke',
    scriptAssets: assets.scriptAssets
  }
  return defaultVariables
}

export default getDefaultVariables