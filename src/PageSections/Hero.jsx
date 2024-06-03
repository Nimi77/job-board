import DesktopNav from "../Components/Navigation/DesktopNav";
import MobileNav from "../Components/Navigation/MobileNav";
import HeroText from "../Components/HeroBody/HeroText";

function Hero() {
  return (
    <div className="hero-container bg-greenbg text-white h-129" id="home">
      <DesktopNav />
      <MobileNav />
      <HeroText />
    </div>
  );
}
export default Hero;
