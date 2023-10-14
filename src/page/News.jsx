import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

export default function News() {
    const [selectedCountry, setSelectedCountry] = useState("id");
    const [newsData, setNewsData] = useState([]);

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&apiKey=2cec721a651f4b1a80436877904cba3b`
                );
                setNewsData(response.data.articles);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, [selectedCountry]);

    return (
        <Container>
            <h1 className="mt-4 mb-4">News Country</h1>
            <label htmlFor="countrySelect" className="form-label">Select Country Bellow:</label>
            <select className="form-select mb-3" id="countrySelect" value={selectedCountry} onChange={handleCountryChange}>
                <option value="id">Indonesia</option>
                <option value="us">United States</option>
                <option value="kr">South Korea</option>
                <option value="jp">Japan</option>
            </select>
            <Row xs={1} md={2} lg={3} className="g-4">
                {newsData.length > 0 ? (
                    newsData.map((news, index) => (
                        <Col key={index}>
                            <Card>
                                {news.urlToImage && <Card.Img variant="top" src={news.urlToImage} />}
                                <Card.Body>
                                    <Card.Title>{news.title}</Card.Title>
                                    <Card.Text>{news.description}</Card.Text>
                                    <Button variant="outline-light" href={news.url} target="_blank" rel="noopener noreferrer">
                                        Read More
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Text>No news available</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        </Container>
    );
}
