import React from "react";
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import Update from "./Components/Update/Update";
import Main from "./Components/Main/Main";

export default function App() {
  let router = createHashRouter([
    {
      index: true,
      element: <Main />,
    },
    { path: "update/:id", element: <Update /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
