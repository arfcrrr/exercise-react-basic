import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">Basic React App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/random-user">Random User</Nav.Link>
                        <Nav.Link href="/list-user">List User</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button variant="secondary">
                    <Nav.Link href="/login">Login</Nav.Link>
                </Button>
            </Container>
        </Navbar>
    )
}

export default Navigation;