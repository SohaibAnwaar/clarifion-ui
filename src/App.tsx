import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProductSection from "./components/ProductSection";
import Progress from "./components/Progress";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Progress />
      <ProductSection />
      <Footer />
    </>
  );
}

export default App;
