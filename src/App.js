import "./App.css";
import AppLayout from "./components/UI/AppLayout";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <div>shop</div>,
      },
      {
        path: "/about",
        element: <div>about</div>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
