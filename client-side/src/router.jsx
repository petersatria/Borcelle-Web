import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import MenusPage from "./pages/MenusPage";
import DetailPage from "./pages/DetailPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/menus",
        element: <MenusPage />,
      },
      {
        path: "/menus/:id",
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;
