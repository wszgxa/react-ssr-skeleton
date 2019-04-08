import React from "react"
import { fetchLists, ListLoadAction } from "../../models/list"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { bindActionCreators } from "redux"
import { AppState } from "../../models"
import "./style.scss"

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

class ListPage extends React.Component<Props> {

  public componentDidMount() {
    if (!this.props.items) {
      this.props.fetchLists()
    }
  }

  public render() {
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

const mapStateToProps = (state: AppState) => {
  return { items: state.list.items}
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ fetchLists }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)
