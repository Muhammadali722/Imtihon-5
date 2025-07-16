import { Header, MixPages } from "./modules";
import { Hero } from "./modules"
import HomePage from "./modules/home";
import Study from "./modules/study";
import Supportive from "./modules/Supportive";
import { Start } from "./modules";
import Touch from "./modules/touch";

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <HomePage/>
      <Study/>
      <Supportive/>
      <MixPages/>
      <Start />
      <Touch />
    </>
  );
}

export default App;
