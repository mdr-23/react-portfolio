import { useContext } from 'react';
import { useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RiMenu5Fill } from "react-icons/ri";
import { ThemeContext } from '../Context/ThemeContext';

function Navigation() {

  const [radioValue, setRadioValue] = useState('0');
  const context = useContext(ThemeContext)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const radios = [
    { name: "Baires", value: '0', class:'btn-baires' },
    { name: "Munich", value: '1', class:'btn-munich' },
  ];

  console.log(radioValue)

  const handleThemeChange = (value) => {
    setRadioValue(value);
    if (value === '0') {
      context.handleBairesTheme();
    } else if (value === '1') {
      context.handleMunichTheme();
    }
  };

  return (
    <Navbar collapseOnSelect expand="md" className={radioValue === '0' ? "bg-body-tertiary navbar-baires" : "bg-body-tertiary navbar-munich"}>
      <Container>
        <Navbar.Brand className='brand' href="#home">MDR</Navbar.Brand>

          <Nav className='d-none d-md-flex justify-content-end align-items-center'>
            <Nav.Link className='navlink' eventKey={2} href="#projects">
              Projects
            </Nav.Link>
            <Nav.Link className='navlink' eventKey={2} href="#works">
              Work Experience
            </Nav.Link>
            <Nav.Link className='navlink' eventKey={2} href="#contact">
              Contact
            </Nav.Link>

             <ButtonGroup>
              {radios.map((radio, index) => (
                <ToggleButton
                  onClick={() => handleThemeChange(radio.value)}
                  className={radio.class}
                  key={index}
                  id={`radio-${index}`}
                  style={{
                    borderColor: '#fff',
                    textDecoration: index.toString() !== radioValue ? 'none' : 'underline',
                    }}
                  type="radio"
                  name="radio"
                  value={radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Nav>

          <div className="d-block align-items-center d-md-none">

          <Button variant="primary" onClick={handleShow} className="canvas-nav-btn">
              <RiMenu5Fill />
          </Button>

          <Offcanvas show={show} onHide={handleClose} placement="top">
              <Offcanvas.Body className={context.munichTheme ? 'd-flex justify-content-start align-items-center canvas-munich-body' : 'd-flex justify-content-start align-items-center canvas-baires-body'}>
                <Nav className='text-left d-block d-md-none'>
                  <Nav.Link className='navlink' eventKey={2} href="#projects">
                    Projects
                  </Nav.Link>
                  <Nav.Link className='navlink' eventKey={2} href="#works">
                    Work Experience
                  </Nav.Link>
                  <Nav.Link className='navlink' eventKey={2} href="#contact">
                    Contact
                  </Nav.Link>

                  <ButtonGroup className='mt-3'>
                    {radios.map((radio, index) => (
                      <ToggleButton
                        onClick={() => handleThemeChange(radio.value)}
                        className={radio.class}
                        key={index}
                        id={`radio-${index}`}
                        style={{
                          borderColor: '#fff',
                          textDecoration: index.toString() !== radioValue ? 'none' : 'underline',
                          }}
                        type="radio"
                        name="radio"
                        value={radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                      >
                        {radio.name}
                      </ToggleButton>
                    ))}
                  </ButtonGroup>
                </Nav>
              </Offcanvas.Body>
          </Offcanvas>
          </div>
      </Container>
    </Navbar>
  );
}

export default Navigation;