import { Row, Col, Image, Button } from 'react-bootstrap';
import "../assets/style/home.css"

export default function Home() {
    const storedName = localStorage.getItem('name');
    return (
        <Row className="align-items-center">
            <Col lg={6} className='text-wrapper'>
                <h3>Hello <span className='text-black'>{storedName}</span> </h3>
                <h1 className='text-head'>I Am <span className='text-black'>Ryan</span> Ernanda</h1>
                <h4 className='text-head'>Junior <span className='text-black'>Full-Stack Developer</span></h4>
                <h5>Students Majoring in <span className='text-black'>Technical Informatics</span> at the Sumatra Institute of Technology, what you need can be done by pressing the menu above</h5>
                <Button variant="outline-light" className='px-4 py-2 mt-3' href="https://wa.me/+6289513116506" target="_blank" rel="noopener noreferrer">Let&apos;s Talk!</Button>
            </Col>
            <Col className='Myimage' lg={{ span: 5, offset: 1 }}>
                <div className="overlay"></div>
                <Image src="me.png" roundedCircle fluid className="image"/>
            </Col>
        </Row>
    )
}