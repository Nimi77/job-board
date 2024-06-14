import Spinner from "./Components/Spinner/Spinner";
import Hero from "./PageSections/Hero";
import AboutUs from "./PageSections/About";
import Services from "./PageSections/Services";
import JobCategory from "./PageSections/JobCategory";
import FeaturedJob from "./PageSections/FeaturedJob"
import BlogNews from "./PageSections/Blog";
import Testimonial from "./PageSections/Testimonial";
import Footer from "./PageSections/Footer";
import CallToActon from "./PageSections/CTA";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=> {
      setLoading(false);
    }, 2000)

    return () => clearTimeout(timer);
  }, [])

  if (loading){
    return <Spinner/>
  }
  return (
    <div>
      <Hero />
      <AboutUs/>
      <Services/>
      <JobCategory/>
      <FeaturedJob/>
      <BlogNews/>
      <Testimonial/>
      <CallToActon/>
      <Footer/>
    </div>
  );
}

export default App;


