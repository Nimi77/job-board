import Hero from "./PageSections/Hero";
import UserGuidelines from "./PageSections/Guidelines";
import "./App.css";

function App() {
  return (
    <div>
      {/* <a href="#main" className="visually-hidden" aria-hidden="true">Skip To Main Content</a> */}
      <Hero />
      <UserGuidelines/>
    </div>
  );
}

export default App;
