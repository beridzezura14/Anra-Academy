import { useEffect, useState } from "react";
import Header from "./components/header";
import Hero from "./components/Hero";
import Map from "./components/Map";
import Learn from "./components/Learn";


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ვიმიტირებთ 2 წამიან ლოდინს
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-90 text-2xl font-bold text-gray-800 z-50">
        Loading...
      </div>
    );
  }


  return (
    <div className="overflow-hidden">
        <Header />
        <Hero />
        <Map />
        <Learn />
    </div>
  );
}

export default App;
