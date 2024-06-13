import "./CSS/App.css";
import Footer from "./footer/Footer";
import MidSection from "./midSection/MidSection";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <hr className="header" />
        <MidSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
