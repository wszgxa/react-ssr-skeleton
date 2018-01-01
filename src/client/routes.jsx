import {
  RootPage,
  ListPage
} from './pages/index'

const routes = [
  {
    component: RootPage,
    routes: [
      {
        path: '/',
        component: ListPage
      }
    ]
  }
]
export default routes