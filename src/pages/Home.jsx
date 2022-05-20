import { useRef, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import lottie from 'lottie-web';

function Home() {
    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../greeting.json'),
        })
    }, [])
    return (
        <div>
            <h1 className="text-center m-4">Welcome Home!</h1>
            <Container ref={container}></Container>
        </div>
    )
}

export default Home;