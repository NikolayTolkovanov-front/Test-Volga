import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { myRouter } from "../../router/myRouter";

const router = createBrowserRouter(myRouter)

export default function MyRouterProvider() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}