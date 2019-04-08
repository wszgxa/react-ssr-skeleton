import React from "react"
import { renderRoutes, RouteConfig } from "react-router-config"

interface Props {
  route: RouteConfig
}

class RootPage extends React.Component<Props> {
  public render() {
    return (
      <div>
       <main className="mdl-layout__content">
          {renderRoutes(this.props.route.routes)}
        </main>
      </div>
    )
  }
}
export default RootPage
