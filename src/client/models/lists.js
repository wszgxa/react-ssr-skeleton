import 'isomorphic-fetch'

const LIST_DATA_LOADED = '@ssr/list/loaded'

const initialState = {
  items: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LIST_DATA_LOADED:
      return Object.assign({}, state, { items: action.items })
    default:
      return state
  }
}

export const fetchLists = () => (dispatch) => {
  return fetch('//cnodejs.org/api/v1/topics')
    .then(res => {
      return res.json()
    })
    .then(res => {
      dispatch({
        type: LIST_DATA_LOADED,
        items: res.data
      })
    })
}