
import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'

class RootPage extends Component {
  render () {
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