import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import ItemsTable from "./pages/ItemsTable";

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
      {currentPage === "items" ? <ItemsTable /> : ""}
    </>
  );
}

export default App;
