import TopBar from "./components/topBar/TopBar";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import AboutMe from "./components/aboutMe/AboutMe";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <TopBar />
      <div className="sections">
        <Intro />
        <Skills />
        <Projects />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
