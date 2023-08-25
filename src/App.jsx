import "./App.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingApartment from "./components/LandingApartment";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <LandingApartment />
      <Footer />
    </div>
  );
}

export default App;
