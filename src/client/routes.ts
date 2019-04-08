import {
  RootPage,
  ListPage
} from "./pages/index"
import { fetchLists } from "./models/list"

const routes: any = [
  {
    component: RootPage,
    routes: [
      {
        path: "/",
        component: ListPage,
        fetchData: fetchLists
      }
    ]
  }
]
export default routes
