import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import CardDetails from "../Components/CardDetails";
import Login from "../Components/Login";
import Registration from "../Components/Registration";
import PrivateRouter from "./PrivateRouter";
import Error from "../Components/Error";
import Contact from "../Components/Contact";
import Services from "../pages/Services";
import Jobs from "../pages/Jobs";
import Forget from "../Components/Forget";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const response = await fetch(`/data.json`);
          const data = await response.json();
          return data.slice(0, 3); 
        },
      },
      
      {
        path: "/services",
        element: <PrivateRouter><Services /></PrivateRouter> ,
        loader: () => fetch(`/data.json`),
      },
      {
        path: "/services/:id",
        element: (<PrivateRouter><CardDetails /></PrivateRouter>),
        loader: async ({ params }) => {
          const response = await fetch(`/data.json`);
          const data = await response.json();
          return data.find((item) => item.id === params.id);
        },
      },
      {
        path: "/profile",
        element:(<PrivateRouter><Profile /></PrivateRouter>) ,
      },
      {
        path: "/jobs",
        element:(<PrivateRouter><Jobs /></PrivateRouter>) ,
        loader: ()=>fetch("/jobapply.json")
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forget",
        element: <Forget />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
