import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Toaster position="bottom-right" />
      <Footer />
    </>
  );
}

export default App;
