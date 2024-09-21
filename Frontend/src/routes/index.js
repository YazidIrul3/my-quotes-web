import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Layouts/Login";
import SignUp from "../components/Layouts/Signup";
import Home from "../components/Layouts/home/Home";
import Dashbord from "../components/Layouts/Dashboard";
import QuotesDashboard from "../components/Layouts/QuotesDashboard";
import AddQuotes from "../components/Layouts/AddQuotes";
import MyQuotes from "../components/Layouts/MyQuotes";
import QuotesCategoryLove from "../components/Layouts/home/QuotesCategoryLove";
import QuotesCategoryAbsurd from "../components/Layouts/home/QuotesCategoryAbsurd";
import QuotesCategoryReligi from "../components/Layouts/home/QuotesCategoryReligi";
import QuotesCategoryMotivation from "../components/Layouts/home/QuotesCategoryMotivation";
import AllQuotes from "../components/Layouts/home/AllQuotes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "",
        element: <AllQuotes />,
      },
      {
        path: "love",
        element: <QuotesCategoryLove />,
      },
      {
        path: "absurd",
        element: <QuotesCategoryAbsurd />,
      },
      {
        path: "religi",
        element: <QuotesCategoryReligi />,
      },
      {
        path: "motivation",
        element: <QuotesCategoryMotivation />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "/dashboard",
    element: <Dashbord />,
    children: [
      {
        path: "",
        element: <QuotesDashboard />,
      },
      {
        path: "addquotes",
        element: <AddQuotes />,
      },
      {
        path: "myquotes",
        element: <MyQuotes />,
      },
    ],
  },
]);

export default router;
