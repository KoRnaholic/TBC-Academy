import "./App.css";
import AppLayout from "./components/UI/AppLayout";
import { Search } from "./components/UI/Search";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
