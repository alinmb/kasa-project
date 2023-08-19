import "./App.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Apartments from "./components/Apartments";
import Footer from "./components/Footer";
import dataApartments from "./assets/annonces.json";

function App() {
  const apartementElements = dataApartments.map((apart) => {
    return <Apartments cover={apart.cover} title={apart.title} />;
  });

  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="apartments">{apartementElements}</div>
      <Footer />
    </div>
  );
}

export default App;
