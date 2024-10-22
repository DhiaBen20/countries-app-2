import { createBrowserRouter, redirect } from "react-router-dom";
import Countries, { loader as countriesLoader } from "./pages/Countries";
import Country, { loader as countryLoader } from "./pages/Country";
import Layout from "./pages/Layout";

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
      {
        path: ":country",
        element: <Country />,
        loader: countryLoader,
      },
    ],
  },
]);
