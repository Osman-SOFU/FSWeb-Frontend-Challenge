import { useContext } from "react";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Profile from "./components/Profile.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import { DarkModeContext } from "./contexts/DarkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const darkClass = darkMode ? "dark dark:bg-[#252128]" : "";
  return (
    <>
      <div className={darkClass}>
        <Header />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
