import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Map from "./components/Map";
import Learn from "./components/Learn";
import Habits from "./components/Habits";


function App() {

  const [loading, setLoading] = useState(true);

  const company = "ANRA Studio"


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-gradient-to-r from-[#2B384C] to-[#643434] z-50">
        <div className="loading_logo ">
          {
            [...company].map((item, i) => (
              <apan key={i} className="text-[9vw] text-white uppercase text-transparent bg-clip-text ">
                {item === " " ? "\u00A0" : item}
              </apan>
            ))
          }
        </div>
      </div>
    );
  }


  return (
    <div className="overflow-hidden">
        <Header />
        <Hero />
        <Map />
        <Learn />
        <Habits />
    </div>
  );
}

export default App;
