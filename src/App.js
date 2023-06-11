import Hero from "./components/hero/Hero";
import Travel from "./components/travel/Travel";
import Destinations from "./components/destinations/Destinations";
import Book from "./components/book/Book";
import Navbar from "./components/navbar/Navbar";
import Views from "./components/views/Views";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <Travel />
      <Book />
      <Views />
      <Footer />
    </>
  );
}

export default App;
