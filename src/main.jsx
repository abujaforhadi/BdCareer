import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/Router";
import AOS from "aos";
import "aos/dist/aos.css";
import AuthProvider from "./provider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
     
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
