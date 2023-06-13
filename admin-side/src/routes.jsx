import { createBrowserRouter } from "react-router-dom";
import ItemsTable from "./pages/ItemsTable";
import CategoriesTable from "./pages/CategoriesTable";
import RegisterAdmin from "./pages/RegisterAdmin";
import App from "./App";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <ItemsTable />,
      },
      {
        path: "/categories",
        element: <CategoriesTable />,
      },
      {
        path: "/register-admin",
        element: <RegisterAdmin />,
      },
    ],
  },
]);

export default router;
