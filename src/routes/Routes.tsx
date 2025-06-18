import { createBrowserRouter, createMemoryRouter, RouterProvider } from "react-router-dom"
import Home from "../pages/home/Home"
import Service from "../pages/service/Service"

const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/service',
        element: <Service />
    }
]

const router =
  typeof window !== "undefined"
    ? createBrowserRouter(routes)
    : createMemoryRouter(routes)

const Routes = () => {
    return <RouterProvider router={router} />
}
export default Routes