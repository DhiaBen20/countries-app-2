import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "./pages/Layout";
import Countries, { loader as countriesLoader } from "./pages/Countries";

export const router = createBrowserRouter([
  {
    path: "/",
    loader() {
      return redirect("/countries");
    },
  },
  {
    path: "/countries",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Countries />,
        loader: countriesLoader,
      },
    ],
  },
]);
