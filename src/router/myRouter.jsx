import App from '../components/App/App'
import Comment from '../pages/Comment'
import ErrorPage from '../pages/ErrorPage'

// import { getCommentById } from "../stores/reducers/table/TableSlice";
// import { useDispatch } from "react-redux"

export const myRouter = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/comment/:id",
    element: <Comment />,
    loader: ({ request, params }) => {
      return params.id
    }
  }
]