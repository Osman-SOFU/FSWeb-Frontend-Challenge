import { useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
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
