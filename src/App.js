import "./App.css";
import { Menu } from "./components/Menu";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Line } from "./components/Line";

function App() {
  return (
    <div>
      <Menu />
      <Hero />
      <Line />
      <About />
      <Line />
    </div>
  );
}

export default App;
