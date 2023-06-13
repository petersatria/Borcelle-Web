import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import ItemsTable from "./pages/ItemsTable";
import CategoriesTable from "./pages/CategoriesTable";
import RegisterAdmin from "./pages/RegisterAdmin";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const navigationHandler = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Sidebar
        currentPage={currentPage}
        navigationHandler={navigationHandler}
      />
      {currentPage === "dashboard" ? <ItemsTable /> : ""}
      {currentPage === "categories" ? <CategoriesTable /> : ""}
      {currentPage === "register-admin" ? <RegisterAdmin /> : ""}
    </>
  );
}

export default App;
