import "./App.css";
import Main from "./content/Main";
import Footer from "./footer/Footer";
import Banner from "./header/Banner";
import Header from "./header/Header";

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
