import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Pages/Root";
import AuthProvider from "./Providers/AuthProvider";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import AllArtItems from "./Pages/AllArtItems";
import AddArtItems from "./Pages/AddArtItems";
import PrivateRoute from "./Routers/PrivateRoute";
import ArtDetails from "./Pages/ArtDetails";
import MyArtCraftList from "./Pages/MyArtCraftList";
import UpdateData from "./Pages/UpdateData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allartitems",
        element: <AllArtItems />,
        loader: () => fetch("http://localhost:5000/art"),
      },
      {
        path: "/allartitems/:id",
        element: (
          <PrivateRoute>
            <ArtDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/art/${params.id}`),
      },
      {
        path: "/addartitems",
        element: (
          <PrivateRoute>
            <AddArtItems />
          </PrivateRoute>
        ),
      },
      {
        path: "/myartcraftlist/",
        element: (
          <PrivateRoute>
            <MyArtCraftList />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/art"),
      },
      {
        path: "/updateData/:id",
        element: (
          <PrivateRoute>
            <UpdateData />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/art/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
