import Container from 'react-bootstrap/Container';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { works } from '../Utils/works';
import SvgMuenchen from './SVGMuenchen';
import SvgBuenosAires from './SVGBuenosAires';

function WorkExperience(){

    const context = useContext(ThemeContext)

    return(
        
        <section className={context.munichTheme ? 'works-munich' : 'works-baires'} id='works'>
            <Container>
                   
                    <h2 className={context.munichTheme ? 'munich-skills-subtitle' : 'baires-skills-subtitle'}>FROM BUENOS AIRES TO MUNICH</h2>
                    <h2 className={context.munichTheme ? 'munich-skills-title' : 'baires-skills-title'}>WORK EXPERIENCE</h2>

                    <MDBContainer className="py-5">
                        <MDBRow className='d-flex justify-content-center'>
                            <MDBCol md="6" offsetMd="3">
                            <ul className={context.munichTheme ? 'timeline-munich' : 'timeline-baires'}>
                                {works.toReversed().map(work => (
                                    <>
                                    <h4 className="works-date">
                                        {work.date}
                                    </h4>
                                    <li>
                                        <h3 className='mx-3 works-title'>{work.title}</h3>
                                        <h4 className='mx-3 works-company'>{work.company} - {work.place}</h4>
                                        <p className="mt-2 mx-3 works-p">
                                            {work.description}
                                        </p>
                                    </li>
                                    </>
                                ))}
                            </ul>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    
                {context.munichTheme ? <SvgMuenchen className='munich-svg' /> : <SvgBuenosAires className='baires-svg' />}
                
            </Container>
            
        </section>

    )
}

export default WorkExperience