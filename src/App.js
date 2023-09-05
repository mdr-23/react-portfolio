import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/css/styles.css';
import './App.css';
import Nav from './Components/Navbar';
import { NextUIProvider } from '@nextui-org/react';
import Home from './Pages/Home';
import ThemeProvider from './Context/ThemeContext';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import WorkExperience from './Components/WorkExperience';
import Contact from './Components/Contact';

function App() {
  return (

    <NextUIProvider>
      <div className="App">

        <ThemeProvider>
          <Nav />
          <Home />
          <Skills />
          <Projects />
          <WorkExperience />
          <Contact />
        </ThemeProvider>

      </div>
    </NextUIProvider>
  );
}

export default App;
