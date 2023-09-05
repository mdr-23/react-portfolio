import Container from 'react-bootstrap/Container';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { skills } from '../Utils/skills';
import Slider from 'react-infinite-logo-slider'

function Skills(){

    const context = useContext(ThemeContext)

    return(
        
        <section className={context.munichTheme ? 'skills-munich' : 'skills-baires'}>
            <div className={context.munichTheme ? 'munich-veil' : 'baires-veil'}>
            <Container className='skills-container'>
                   
                    <h2 className={context.munichTheme ? 'munich-skills-subtitle' : 'baires-skills-subtitle'}>MY SKILLS</h2>
                    <h2 className={context.munichTheme ? 'munich-skills-title' : 'baires-skills-title'}>TECHNOLOGIES</h2>

                    <div className='skills-slider'>
                        <Slider
                            height="100%"
                            width="250px"
                            duration={20}
                            pauseOnHover={false}
                            blurBorders={false}
                            blurBoderColor={'#fff'}
                            
                        >
                        {skills.map((skill => (
                            <Slider.Slide className='w-38'>
                                <img src={require(`../Images/${skill.img}`)} alt="any" className='skills-slider-img' />
                            </Slider.Slide>
                        )))}
                        </Slider>
                    </div>
                    
            </Container>
            </div>
        </section>

    )
}

export default Skills