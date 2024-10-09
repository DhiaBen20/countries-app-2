import { createBrowserRouter, redirect } from "react-router-dom";
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
  },
]);
