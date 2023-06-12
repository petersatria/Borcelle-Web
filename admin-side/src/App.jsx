import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import ItemsTable from "./pages/ItemsTable";

function App() {
  const [currentPage, setCurrentPage] = useState("items");

  return (
    <>
      <Sidebar currentPage={currentPage} />
      {currentPage === "items" ? <ItemsTable /> : ""}
    </>
  );
}

export default App;
