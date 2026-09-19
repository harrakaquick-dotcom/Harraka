import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Applayout from "./layout/Applayout"
import Home from "./pages/Home"

const App = () => {
  const routes = createBrowserRouter([{
    path:'/',
    element:<Applayout/>,
    children:[
      {
        path:'/',
        element: <Home/>
      }
    ]
  }]);
  return <RouterProvider  router={routes}/>
}

export default App