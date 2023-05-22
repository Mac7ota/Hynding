import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../../assets/navbar/Hyding logo.png"
import { FaSearch } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import '../../styles/navbar.scss'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} className='LogoIcone' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Nós</Nav.Link>
            <Nav.Link href="#pricing">Playlist</Nav.Link>
            <Nav.Link href="#pricing2">Programação</Nav.Link>
            <Nav.Link href="#pricing3">Canais</Nav.Link>
            <NavDropdown title="Loja" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">TESTE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              TESTE
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">TESTE</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              TESTE
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"><FaSearch className='icontamanho'  /></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <FaUser className='icontamanho' />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;