import DesktopNav from "../Components/HeroContent/Navigation/DesktopNav";
import MobileNav from "../Components/HeroContent/Navigation/MobileNav";
import HeroText from "../Components/HeroContent/HeroText";
import "../Components/HeroContent/Hero.css";

function Hero() {
  return (
    <div className="hero-section bg-greenbg text-white h-129" id="home">
       <a href="#main" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="hero-container overlay">
        <DesktopNav />
        <MobileNav />
        <HeroText />
      </div>
    </div>
  );
}
export default Hero;
