import "./App.css";
import { Search } from "./components/UI/Search";
// import Main from "./components/content/Main";
import Footer from "./components/footer/Footer";
// import Banner from "./components/header/Banner";
import Header from "./components/header/Header";
import Products from "./components/products/Products";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* <Banner /> */}
      {/* <Main /> */}
      <Search />
      <main className="p-8 flex-grow ">
        <Products />
      </main>
      <Footer />
    </div>
  );
}

export default App;
