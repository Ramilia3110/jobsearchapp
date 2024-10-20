import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

import Value from "./components/Value/Value";
import Footer from "./components/Footer/Footer";
import "./index.css";
import Home from "./components/Home/Home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-[85%]  mx-auto  bg-white">
      <Navbar />
      <Home />
      <Value />
      <Footer />
    </div>
  );
}

export default App;
