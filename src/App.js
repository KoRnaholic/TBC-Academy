import "./App.css";
import AppLayout from "./components/UI/AppLayout";
import { Search } from "./components/UI/Search";
// import Main from "./components/content/Main";
import Footer from "./components/footer/Footer";
// import Banner from "./components/header/Banner";
import Header from "./components/header/Header";
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
        element: <div>Contact</div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
