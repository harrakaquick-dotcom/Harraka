import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./layout/Applayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
