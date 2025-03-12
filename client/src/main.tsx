import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Contact from "./pages/Contact.tsx";
import Home from "./pages/Home.tsx";
import App from "./App.tsx";
import FAQ from "./pages/FAQ.tsx";
import RepoPage from "./pages/RepoPage.tsx";
import RepoForm from "./pages/RepoForm.tsx";
// import client from "./services/client.ts";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        // loader: async () => {
        //   const result = await client.get("/repos");
        //   console.log("Result", result);
        //   return result;
        // },
      },
      {
        path: "/repos/:reposid/",
        element: <RepoPage />,
      },
      {
        path: "/repos/create",
        element: <RepoForm />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
    ],
    //loader: async () => {
    //const result = await client.get("/repos");
    //console.log("Result", result);
    //return result;
    //},
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
