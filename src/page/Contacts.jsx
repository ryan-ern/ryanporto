import React, { useContext, useState } from "react";
import { Form, Button, Image, Row, Col, InputGroup } from "react-bootstrap";

const MessageContext = React.createContext();

export default function Contacts() {
    return (
        <>
            <h5>This Form Using useState and useContext state management</h5>
            <MessageProvider>
                <MessageForm />
                <MessageList />
            </MessageProvider>
        </>
    );
}

function MessageProvider({ children }) {
    const [messages, setMessages] = useState([]);
    return (
        <MessageContext.Provider value={{ messages, setMessages }}>
            {children}
        </MessageContext.Provider>
    );
}

function MessageForm() {
    const { messages, setMessages } = useContext(MessageContext);
    const [newMessage, setNewMessage] = useState("");
    const [image, setImage] = useState(null);

    const handleInputChange = (e) => {
        setNewMessage(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newMessage.trim() === "" && !image) return;

        const messageObject = {
            text: newMessage,
            image: image,
        };

        setMessages([...messages, messageObject]);
        setNewMessage("");
        setImage(null);
    };

    return (
        <Form className="mb-3">
            <Form.Group>
                <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="mb-3 mt-3"
                />
            </Form.Group>
            <InputGroup className="mx-0">
                <Form.Control
                    as="textarea"
                    placeholder="Enter your message"
                    value={newMessage}
                    onChange={handleInputChange}
                />
                <Button variant="outline-light" onClick={handleSubmit}>
                    Send Message
                </Button>
            </InputGroup>
        </Form>
    );
}

function MessageList() {
    const { messages } = useContext(MessageContext);

    return (
        <>
            <h3>Result</h3>
            <Row xs={1} md={2} lg={3} className="g-4">
                {messages.map((message, index) => (
                    <Col key={index} className="text-center bg-dark pb-3 pt-2 mx-2" style={{borderRadius: '12px'}}>
                        <p>{message.text}</p>
                        {message.image && <Image src={URL.createObjectURL(message.image)}  style={{ maxWidth: '300px', maxHeight: '300px' }} />}
                    </Col>
                ))}
            </Row>
        </>
    );
}
