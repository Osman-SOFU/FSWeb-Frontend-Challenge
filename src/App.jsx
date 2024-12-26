import Header from "./components/header";
import Skills from "./components/skills";
import Profile from "./components/profile";
import Projects from "./components/projects";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Profile />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
