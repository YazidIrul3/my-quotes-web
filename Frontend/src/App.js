import { Outlet, RouterProvider } from "react-router-dom";
import router from "./routes";
import Navbar from "./components/Layouts/Navbar";
import Footer from "./components/Layouts/Footer";

function App() {
  // const fetchCurrenUser = async () => {
  //   const response = await fetch("http://localhost:8000/api/user-detail");
  // };

  return (
    <>
      <Navbar />
      <main className=" container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
