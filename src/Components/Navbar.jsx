import { useContext } from 'react';
import { useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ThemeContext } from '../Context/ThemeContext';

function Navigation() {

  const [radioValue, setRadioValue] = useState('0');
  const context = useContext(ThemeContext)

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
    <Navbar collapseOnSelect expand="lg" className={radioValue === '0' ? "bg-body-tertiary navbar-baires" : "bg-body-tertiary navbar-munich"}>
      <Container>
        <Navbar.Brand className='brand' href="#home">MDR</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link eventKey={2} href="#projects">
              Projects
            </Nav.Link>
            <Nav.Link eventKey={2} href="#works">
              Work Experience
            </Nav.Link>
            <Nav.Link eventKey={2} href="#contact">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;