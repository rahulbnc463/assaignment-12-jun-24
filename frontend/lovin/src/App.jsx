import "./CSS/App.css";
import MidSection from "./midSection/MidSection";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <hr className="header" />
        <MidSection />
      </div>
    </>
  );
}

export default App;
