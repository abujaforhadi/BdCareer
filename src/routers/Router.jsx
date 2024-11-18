import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Services from "../pages/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`./data.json`),
      },
      {
        path: "/services/:category",
        element: <p>.</p>,
        // loader: ({ params }) =>
        //   fetch(
        //     `https://openapi.programming-hero.com/api/news/category/${params.id}`
        //   ),
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);
