import { ListGroup, Card, Carousel,Image, Row, Col } from 'react-bootstrap';

export default function Projects() {
    return (
        <Row className="d-flex align-items-center justify-content-center">
            <Col sm={4} lg={4} md='auto' xl={4} className='mb-4'>
                <Card>
                    <Card.Header>
                        <Carousel>
                            <Carousel.Item>
                                <Image src="/P1.png" fluid className="image" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src="/P1(2).png"  className="image" fluid />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src="/P1(3).png"  className="image" fluid />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src="/P1(4).png" className="image"  fluid  />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src="/P1(5).png" className="image"  fluid />
                            </Carousel.Item>
                        </Carousel>
                    </Card.Header>
                    <Card.Body className='text-white'>
                        <Card.Title>Syncron Office</Card.Title>
                        <Card.Text>
                    Build for System Office Administration, to Presence, Collecting Task, Track Live Location For Employees Working
                        </Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><span className='text-bold'>Build With</span> : React JS</ListGroup.Item>
                            <ListGroup.Item>Position : Frontend Developer</ListGroup.Item>
                            <ListGroup.Item>Development Time : 40 Days</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={4} lg={4} md='auto' xl={4} className='mb-4'>
                <Card>
                    <Card.Header>
                        <Carousel>
                            <Carousel.Item>
                                <Image src="/p2 (1).png"  className="image" fluid />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src="/p2 (2).png"  className="image" fluid />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src="/p2 (3).png"  className="image" fluid />
                            </Carousel.Item>
                        </Carousel>
                    </Card.Header>
                    <Card.Body className='text-white'>
                        <Card.Title>Monitor the landslide disaster in Bengkulu</Card.Title>
                        <Card.Text>
                    Built for large tasks Geolocation Information System with a Create Update Delete (CRUD) feature on the maps
                        </Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><span className='text-bold'>Build With</span> : Javascript, Tools QGIS</ListGroup.Item>
                            <ListGroup.Item>Position : Fullstack Developer</ListGroup.Item>
                            <ListGroup.Item>Development Time : 25 Days</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={4} lg={4} md='auto' xl={4} className='mb-4'>
                <Card>
                    <Card.Header>
                        <Carousel>
                            <Carousel.Item>
                                <Image src="/p3 (1).png" className="image"  fluid />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src="/p3 (2).png" className="image"  fluid />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src="/p3(3).gif"  className="image" fluid />
                            </Carousel.Item>
                        </Carousel>
                    </Card.Header>
                    <Card.Body className='text-white'>
                        <Card.Title>Halcyon</Card.Title>
                        <Card.Text>
                            Build Game Dekstop for large tasks of object-based programming with inheritance and encapsulation method
                        </Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><span className='text-bold'>Build With</span> : PyGame</ListGroup.Item>
                            <ListGroup.Item>Position : Developer Programmer</ListGroup.Item>
                            <ListGroup.Item>Development Time : 14 Days</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}
