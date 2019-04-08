import "isomorphic-fetch"
import { Dispatch, AnyAction } from "redux"

const LIST_DATA_LOADED = "@ssr/list/loaded"

export interface ListLoadAction {
  type: typeof LIST_DATA_LOADED
  items: Item[]
}

export interface Item {
  id: string
  title: string
}
export interface ListState {
  items: Item[]
}

const initialState: ListState = {
  items: []
}

export default function reducer(state = initialState, action: AnyAction): ListState {
  switch (action.type) {
    case LIST_DATA_LOADED:
      return Object.assign({}, state, { items: action.items })
    default:
      return state
  }
}

export const fetchLists = () => async(dispatch: Dispatch) => {
  const resData = await fetch("//cnodejs.org/api/v1/topics")
    .then(res => {
      return res.json()
    })
  dispatch({
    type: LIST_DATA_LOADED,
    items: resData.data
  })
}
