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

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Nombre: ', name);
        console.log('Email: ', email);
        console.log('Message: ', message);

        setName('');
        setEmail('');
        setMessage('');
    }

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
                                    action="1595387810424f7ec4e6020472a64d66" method="POST"
                                >
                                    <Form.Group className="mb-3" controlId="formGroupName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control name='name' type="text" onChange={(e) => setName(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control name='email' type="email" onChange={(e) => setEmail(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control name='message' as="textarea" aria-label="With textarea" onChange={(e) => setMessage(e.target.value)} />
                                    </Form.Group>

                                    <Button type="submit">
                                        Send Email <RiMailSendFill className='mx-1' />
                                    </Button>

                                    <input type="hidden" name="_next" value="http://localhost:3000/" />
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