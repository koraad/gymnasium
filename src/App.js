import React from "react";
import Announcement from "./Components/Announcement";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Categories from "./Components/Categories";
import About from "./Components/About";
// import Classes from "./Components/Classes";
// import Offer from "./Components/Offer";
// import Trust from "./Components/Trust";
// import Stats from "./Components/Stats";
// import Trainers from "./Components/Trainers";
// import Join from "./Components/Join";
// import Details from "./Components/Details";
// import Reviews from "./Components/Reviews";
// import Pricing from "./Components/Pricing";
// import Blog from "./Components/Blog";
// import Featured from "./Components/Featured";
// import Footer from "./Components/Footer";

const App = ()=> {
  return (
    <div className="App">

      <Announcement/>
      <Header/>
      <Hero/>
      <Categories/>
      <About/>
      {/* <Classes/>
      <Offer/>
      <Trust/>
      <Stats/>
      <Trainers/>
      <Join/>
      <Reviews/>
      <Pricing/>
      <Blog/>
      <Featured/>
      <Details/>
      <Footer/> */}
    </div>
  );
}

export default App;
