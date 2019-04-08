import { IS_PRODUCTION } from "../../config/"
import { generateDevAssets, generateProdAssets } from "./generateAssets"
let defaultVariables: DefaultRenderVariables | undefined

interface DefaultRenderVariables {
  title: string,
  scriptAssets: string,
  cssAssets: string
}

const getDefaultVariables = (): DefaultRenderVariables => {
  if (defaultVariables !== undefined) {
    return defaultVariables
  }
  const assets = IS_PRODUCTION ? generateProdAssets() : generateDevAssets()
  defaultVariables = {
    title: "react-ssr-hiluluke",
    ...assets
  }
  return defaultVariables
}

export default getDefaultVariables
