import { Container, ListGroup, Button } from 'react-bootstrap';

const List = ({ data, handleEdit, handleDelete }) => {
    return (
        <Container className="mt-4 d-flex flex-column">
            <h2 className="text-center my-3">User Data</h2>
            <ListGroup>
                {data.map((dataUser) => {
                    return (
                        <ListGroup.Item>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h5 className="mb-1">{dataUser.name}</h5>
                                    <p className="mb-1">{dataUser.email}</p>
                                    <p className="mb-1">{dataUser.phone}</p>
                                    <p className="mb-1">{dataUser.country}</p>
                                </div>
                                <div className="d-flex flex-column justify-content-start">
                                    <Button onClick={() => handleEdit(dataUser.id)} className="my-1" variant="primary">Edit</Button>
                                    <Button onClick={() => handleDelete(dataUser.id)} className="my-1" variant="danger">Delete</Button>
                                </div>
                            </div>
                        </ListGroup.Item>
                    )
                })}
            </ListGroup>
        </Container>

    )
}

export default List;