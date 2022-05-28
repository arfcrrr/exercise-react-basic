import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { ReactComponent as IllustrationUser } from '../illustration_user.svg';
import { uid } from 'uid';

import axios from 'axios';

import List from '../components/List';

const ListUser = () => {
    const [dataUser, setDataUser] = useState([]);

    const [isUpdate, setIsUpdate] = useState({
        id: null,
        status: false
    });

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        phone: '',
    });

    useEffect(() => {
        // fetch data from API
        axios.get('http://localhost:3000/users')
            .then((res) => {
                console.log(res.data);
                setDataUser(res?.data ?? []);
            });
    }, [])

    const handleChange = (e) => {
        let data = { ...formData };
        data[e.target.name] = e.target.value;
        setFormData(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Successful!");

        let data = [...dataUser];

        // check is data update
        if (isUpdate.status) {
            data.forEach((dataUser) => {
                if (dataUser.id === isUpdate.id) {
                    dataUser.name = formData.name;
                    dataUser.email = formData.email;
                    dataUser.phone = formData.phone;
                }
            })
            axios.put(`http://localhost:3000/users/${isUpdate.id}`,
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone
                })
                .then((res) => {
                    alert("Successfully updated data!");
                })
        } else {
            let newData = {
                id: uid(),
                name: formData.name,
                email: formData.email,
                phone: formData.phone
            }
            data.push(newData);

            axios.post("http://localhost:3000/users", newData)
                .then((res) => {
                    alert("Successfully saved data!");
                })
        }

        // add user's data
        setIsUpdate({ id: null, status: false });
        setDataUser(data);
        setFormData({
            name: '',
            email: '',
            phone: ''
        });
    }

    const handleEdit = (id) => {
        let data = [...dataUser];
        let foundData = data.find((dataUser) => dataUser.id === id);

        setFormData({
            name: foundData.name,
            email: foundData.email,
            phone: foundData.phone,
        });

        setIsUpdate({
            id,
            status: true
        });
    }

    const handleDelete = (id) => {
        let data = [...dataUser];
        let filteredData = data.filter((dataUser) => dataUser.id !== id);

        axios.delete(`http://localhost:3000/users/${id}`)
            .then((res) => {
                alert("Successfully deleted data!");
            })

        setDataUser(filteredData);
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Container fluid className="d-flex flex-column align-items-center">
                        <IllustrationUser />
                        <h1>Input New User</h1>
                    </Container>
                    <Form onSubmit={handleSubmit} className="mx-5">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Your Name Here"
                                onChange={handleChange}
                                value={formData.name} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="name@example.com"
                                onChange={handleChange}
                                value={formData.email} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control
                                type="text"
                                name="phone"
                                placeholder="081234567890"
                                onChange={handleChange}
                                value={formData.phone} />
                        </Form.Group>
                        <div className="d-flex flex-column justify-content-center">
                            <Button variant="success" type="submit">Save</Button>
                        </div>
                    </Form>
                </Col>
                <Col>
                    <List
                        data={dataUser}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </Col>
            </Row>


        </Container>
    )
}

export default ListUser;