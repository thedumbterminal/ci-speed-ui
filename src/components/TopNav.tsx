import { Navbar, Nav, Container } from 'react-bootstrap'
import Link from 'next/link'

export default function TopNav() {
  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>CI-Speed</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/test_runs" passHref>
              <Nav.Link>Test Runs</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}