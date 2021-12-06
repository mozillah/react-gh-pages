
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Vision } from "./components/Vision";
import { Standard } from "./components/Standard";
import { Tabss } from "./components/Tabss";
import { FAQs } from './components/FAQs';
import {Features} from "./components/Features"
import {Clients} from "./components/Clients"
// import './App.sass';
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { Team } from './components/Team';
import { Objectives } from './components/Objectives';
import { Contact } from './components/Contact';


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Hero  data={landingPageData.Hero} />
      <Vision data={landingPageData.Vision}/>
      <Objectives data={landingPageData.Objectives} />
      <Clients />
      <Features data= { landingPageData.Beliefs}/>
      {/* <Tabss/> */}
      <FAQs data={landingPageData.FAQS}/>
      {/* <Standard data={landingPageData.About}/> */}
      {/* <Vision data={landingPageData.Vision}/> */}
       {/* <About data={landingPageData.About} /> */}
      {/* <Services/>
      <Team/>
      <FAQs/> */}
      <Contact data={landingPageData.Contact}/>
      <Footer />


       
    </div>
  );
};

export default App;