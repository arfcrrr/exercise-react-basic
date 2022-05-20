import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import ButtonRandomize from '../components/ButtonRandomize';
import '../App.css';
import axios from 'axios';

const RandomUser = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activeUser, setActiveUser] = useState(false);
    const [activeLink, setActiveLink] = useState(0);

    const onClickHandler = () => {
        setActiveLink(0);
        setLoading(true);

        axios.get('https://randomuser.me/api')
            .then((response) => {
                console.log(response);
                setUserData(response.data.results);
            })
            .catch((error) => {
                console.log('ERROR: ', error);
                setLoading(true);
            })
            .finally(() => {
                setLoading(false);
                setActiveUser(true);
            })
    }

    const icons = [
        'fas fa-user',
        'fas fa-envelope',
        'fas fa-calendar-alt',
        'fas fa-map-marker',
        'fas fa-phone',
    ];

    const TextGenerator = ({ user }) => {
        let dateFormat = new Date(user.dob.date);
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateFormat = dateFormat.toLocaleDateString("en-US", options);

        const text = [
            `Hi, ${user.name.first} ${user.name.last}`,
            `Email: ${user.email}`,
            `Date of Birth: ${dateFormat}`,
            `Country: ${user.location.country}`,
            `Phone Number: ${user.phone}`,
        ];

        return <p>{text[activeLink]}</p>
    }

    const activeLinkHandler = (index) => {
        setActiveLink(index);
    }

    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-center m-4">
                This is a Random User Generator Page.
            </h1>
            <ButtonRandomize
                isActive={activeUser}
                clicked={onClickHandler}
            />
            {loading ? (
                <h1>Loading...</h1>
            ) :
                (
                    (<div className="user text-center">
                        {userData.map((user, index) => {
                            return (
                                <Card style={{ width: '24rem' }}>
                                    <Card.Img variant="top" src={user.picture.large} />
                                    <Card.Body>
                                        <Card.Title>
                                            <TextGenerator user={user} />
                                        </Card.Title>
                                        <Card.Text>
                                            Hover over the icon to see the details!
                                        </Card.Text>
                                        <div className="user__icons">
                                            {icons.map((icon, index) => {
                                                return (
                                                    <Button variant="dark" className="m-2">
                                                        <i className={icon} key={index} onMouseEnter={() => activeLinkHandler(index)}></i>
                                                    </Button>
                                                )
                                            })}
                                        </div>
                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </div>
                    )
                )
            }
        </div>
    );
}

export default RandomUser;