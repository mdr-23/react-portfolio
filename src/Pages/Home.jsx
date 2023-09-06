import Navigation from "../Components/Navbar"
import Skills from "../Components/Skills"
import Projects from "../Components/Projects"
import WorkExperience from "../Components/WorkExperience"
import Contact from "../Components/Contact"
import Intro from "../Components/Intro"
import ThemeProvider from "../Context/ThemeContext"


function Home(){

    return(

    <ThemeProvider>
        <Navigation />
        <Intro />
        <Skills />
        <Projects />
        <WorkExperience />
        <Contact />
    </ThemeProvider>

    )
}

export default Home