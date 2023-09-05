import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import Card from 'react-bootstrap/Card';
import { Container, Row } from 'react-bootstrap';
import { projects } from '../Utils/projects';
import { GitHub, Web } from '@mui/icons-material';

function Projects(){

    const context = useContext(ThemeContext)

    return(
        
        <section className={context.munichTheme ? 'projects-munich' : 'projects-baires'} id='projects'>
            <Container>
                   
                    <h2 className={context.munichTheme ? 'munich-skills-subtitle' : 'baires-projects-subtitle'}>EXAMPLES</h2>
                    <h2 className={context.munichTheme ? 'munich-projects-title' : 'baires-skills-title'}>MY PROJECTS</h2>
                    <p className={context.munichTheme ? 'munich-projects-p' : 'baires-projects-p'}>These projects serve as tangible demonstrations of my expertise, offering practical examples of my work along with brief descriptions and links to code repositories and live demos. They exemplify my capability to address intricate challenges, adapt to various technologies, and effectively oversee project execution.</p>

                        <Row className='justify-content-center align-items-center projects-row-center'>
                        {projects.map((project => (
                            <Card style={{ width: '15rem', height:'24rem' }} className={project.className}>
                                <Card.Body className={context.munichTheme ? 'munich-card-veil' : 'baires-card-veil'}>
                                <div className='mt-3 text-center'>
                                <Card.Link href={project.link} target='_blank'> <Web className={context.munichTheme ? 'munich-web-icon' : 'baires-web-icon'} /> </Card.Link>
                                <Card.Link href={project.gh} target='_blank'><GitHub className={context.munichTheme ? 'munich-github-icon' : 'baires-github-icon'} /></Card.Link>
                                </div>
                                    <div className={context.munichTheme ? 'munich-card-veil2' : 'baires-card-veil2'}>
                                        <Card.Title className={context.munichTheme ? 'munich-card-title' : 'baires-card-title'}>{project.name}</Card.Title>
                                        <Card.Subtitle className={context.munichTheme ? 'munich-card-subtitle' : 'baires-card-subtitle'}>{project.company}</Card.Subtitle>
                                        <Card.Text className={context.munichTheme ? 'munich-card-text' : 'baires-card-text'}>
                                            {project.text}
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        )))}
                        </Row>
                    
            </Container>
        </section>

    )
}

export default Projects