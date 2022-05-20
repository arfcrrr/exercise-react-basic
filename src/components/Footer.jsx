import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container fluid style={{ backgroundColor: "#222" }} className="text-light mt-4 p-2 d-flex flex-column justify-content-center align-items-center">
            <p>Copyright &copy; ajengarifacr</p>
        </Container>
    )
}

export default Footer;