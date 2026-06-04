import Particles from "./components/Particles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Philosophy from "./components/Philosophy";
import CurrentLife from "./components/CurrentLife";
import MemoryGallery from "./components/MemoryGallery";
import PersonalLinks from "./components/PersonalLinks";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <div className="app">
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Philosophy />
        <CurrentLife />
        <MemoryGallery />
        <PersonalLinks />
      </main>
      <MusicPlayer />
    </div>
  );
}

export default App;
