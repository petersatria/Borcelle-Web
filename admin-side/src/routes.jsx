import { createBrowserRouter, redirect } from "react-router-dom";
import ItemsTable from "./pages/ItemsTable";
import CategoriesTable from "./pages/CategoriesTable";
import RegisterAdmin from "./pages/RegisterAdmin";
import LoginPage from "./pages/LoginPage";
import App from "./App";

const router = createBrowserRouter([
  {
    element: <App />,
    loader: () => {
      if (!localStorage.access_token) return redirect("/login");
      return null;
    },
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
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      if (localStorage.access_token) return redirect("/");
      return null;
    },
  },
]);

export default router;
