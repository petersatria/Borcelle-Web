import Sidebar from "./Components/Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

export default App;
