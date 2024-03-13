import "./App.css";
import Main from "./components/content/Main";
import Footer from "./components/footer/Footer";
import Banner from "./components/header/Banner";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
