import { useContext } from "react";
import Footer from "./components/footer.jsx";
import Header from "./components/feader.jsx";
import Profile from "./components/profile.jsx";
import Projects from "./components/projects.jsx";
import Skills from "./components/skills.jsx";
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
