import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

function Intro(){

    const context = useContext(ThemeContext)

    return(
        
        <section className={context.munichTheme ? 'intro-munich' : 'intro-baires'}>
            <Container>
                   
                    <h1 className={context.munichTheme ? 'munich-intro-title' : 'baires-intro-title'}>{context.munichTheme ? 'SERVUS!' : '¡HOLA!'} I'M <br /> <span className={context.munichTheme ? 'title-martin-munich' : 'title-martin-baires'}>MARTIN</span></h1>

                    <Row className='mt-5'>
                        <Col></Col>
                        <Col lg={8}>
                            <p className={context.munichTheme ? 'munich-intro-p d-none d-sm-block' : 'baires-intro-p d-none d-sm-block'}>
                                a passionate and creative frontend developer. I am very interested in <br /> technology and its potential to change and improve people's reality. I'm always <br /> looking for ways to improve and grow my skills. I specialize in HTML, CSS, JavaScript, React and <br /> Python, and I'm always eager to learn more about these technologies and how I can use them to build <br /> amazing things. Whether it's creating a visually appealing website or a complex application, I'm always up for the <br /> challenge. I'm excited about the future of technology and I can't wait to see what I'll be able to create in the years to come!
                            </p>

                            <p className={context.munichTheme ? 'munich-intro-p d-block d-sm-none' : 'baires-intro-p d-block d-sm-none'}>
                                a passionate and creative frontend developer. I am very interested in technology and its potential to change and improve people's reality. I'm always looking for ways to improve and grow my skills. I specialize in HTML, CSS, JavaScript, React and Python, and I'm always eager to learn more about these technologies and how I can use them to build amazing things. Whether it's creating a visually appealing website or a complex application, I'm always up for the challenge. I'm excited about the future of technology and I can't wait to see what I'll be able to create in the years to come!
                            </p>
                        </Col>
                    </Row>
                    
            </Container>
        </section>

    )
}

export default Intro