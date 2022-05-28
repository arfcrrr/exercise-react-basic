import { Container, Carousel } from 'react-bootstrap';

function About() {
    return (
        <div>
            <Container fluid>
                <h1 className="text-center m-4">
                    All About Hogwarts.
                </h1>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="https://browsecat.net/sites/default/files/harry-potter-landscape-wallpapers-109345-168757-3785333.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>9 3/4 Express</h3>
                            <p>"It matters not what someone is born, but what they grow to be." ― Albus Dumbledore</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="https://i0.wp.com/www.wallpapertip.com/wmimgs/42-424705_harry-potter-desktop-wallpaper-4k.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>4 Houses, Thousand Memories</h3>
                            <p>"Things we lose have a way of coming back to us in the end, if not always in the way we expect." ― Luna Lovegood</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://picfiles.alphacoders.com/396/396609.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>All about Life, Love, and Loss</h3>
                            <p>"I am a wizard, not a baboon brandishing a stick." — Seamus Finnigan</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
}

export default About;