import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

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
