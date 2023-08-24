import "./App.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import dataApartments from "./assets/annonces.json";
// import { Link } from "react-router-dom";

function App() {
  // const sliceedData = dataApartments.slice(0, 6);
  // const apartementElements = sliceedData.map((apart) =>

  const apartementElements = dataApartments.map((apart) => {
    return <Card cover={apart.cover} title={apart.title} key={apart.id} />;
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

/*{
   <div className="apartments">
{dataApartments.map((apart) => (
  <Link to={`/apartment/${apart.id}`} className="apartments">
    <Card cover={apart.cover} title={apart.title} key={apart.id} />
  </Link>
))}
</div> 
}*/
