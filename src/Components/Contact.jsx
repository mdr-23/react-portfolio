import Container from 'react-bootstrap/Container';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import { RiMailSendFill } from 'react-icons/ri';
import FadeInLeft from './Animations/FadeInLeft';
import { useState } from 'react';

function Contact(){

    const context = useContext(ThemeContext)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [alert, setAlert] = useState({className: '', text: ''})

/*     const handleSubmit = () => {
        if(name === "" || email === "" || message === ""){
            setAlert({className: 'alert-danger', text: 'All fields are required'})
        }else{
            setAlert({className: 'alert-success', text: ''})
        }
    } */

    return(
        
        <section className={context.munichTheme ? 'contact-munich' : 'contact-baires'} id='contact'>

            <Container>

                <FadeInLeft>
                    <Card style={{ width: '30rem' }} className={context.munichTheme ? 'munich-contact-card' : 'baires-contact-card'}>

                    <h2 className={context.munichTheme ? 'munich-contact-subtitle' : 'baires-contact-subtitle'}>GET IN TOUCH</h2>
                    <h2 className={context.munichTheme ? 'munich-contact-title' : 'baires-contact-title'}>CONTACT</h2>
                    
                        <Card.Body>

                            <Card.Text>
                                <Form 
                                    className={context.munichTheme ? 'munich-contact-form' : 'baires-contact-form'} 
                                    action="https://formsubmit.co/delrosariomartin23@gmail.com" method="POST"
                                >
                                    <Form.Group className="mb-3" controlId="formGroupName">
                                        <Form.Label>Name *</Form.Label>
                                        <Form.Control name='name' required type="text" onChange={(e) => setName(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                        <Form.Label>Email *</Form.Label>
                                        <Form.Control name='email' required type="email" onChange={(e) => setEmail(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                        <Form.Label>Message *</Form.Label>
                                        <Form.Control name='message' required as="textarea" aria-label="With textarea" onChange={(e) => setMessage(e.target.value)} />
                                    </Form.Group>

                                    {name === "" || email === "" || message === "" ? (
                                        <Button type="submit" disabled>
                                            Send Email <RiMailSendFill className='mx-1' />
                                        </Button>
                                    ) : (
                                        <Button type="submit">
                                            Send Email <RiMailSendFill className='mx-1' />
                                        </Button>
                                    )}

                                    <input type="hidden" name="_next" value="https://mdr-portfolio.onrender.com//email-sent" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_template" value="table" />
                                </Form>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </FadeInLeft>
                                
            </Container>

        </section>

    )
}

export default Contact