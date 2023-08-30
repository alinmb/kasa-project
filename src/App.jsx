import "./App.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
