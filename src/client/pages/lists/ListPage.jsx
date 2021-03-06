// @flow
import React, { Component } from 'react'
import { fetchLists } from '../../models/lists'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './style.scss'

type Props = {
  fetchLists: Function,
  items: Array<Object>
}

class ListPage extends Component<Props> {

  static fetchData(store) {
    return store.dispatch(fetchLists())
  }

  componentDidMount() {
    !this.props.items && this.props.fetchLists()
  }

  render () {
    return (
      <div className="demo-list-action mdl-list">
        {
          this.props.items.map(item => {
            return (
              <div key={item.id} className="mdl-list__item">
                {item.title}
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => { return { items: state.lists.items} }
const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchLists }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(ListPage)
