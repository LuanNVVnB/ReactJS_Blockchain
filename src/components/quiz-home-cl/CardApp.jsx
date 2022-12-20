import Button from 'react-bootstrap/Button';
import { Card, Col, Row } from 'react-bootstrap';
import React from 'react';
const imgTemp = [
    "https://wp.xpeedstudio.com/electionify/wp-content/uploads/2019/12/mission-and-vission-1.png",
    "https://wp.xpeedstudio.com/electionify/wp-content/uploads/2019/12/mission-and-vission-2.png",
    "https://wp.xpeedstudio.com/electionify/wp-content/uploads/2019/12/mission-and-vission-3.png"
]
function CardApp() {
    return (
        <>
            <div className="p-12 mt-4 text-center">
                <h4 style={{ color: 'blue' }} className='mt-4 '>Know more about</h4>
                <h2 style={{ fontWeight: 'bold' }}  className='mt-4 '>Our mission & vision</h2>
                <h3  className='mt-4 '>Together we the people achieve more than any single
                    person could ever do alone.</h3>
                <Row className="justify-content-md-center">
                    {imgTemp?.map((i, index) => {
                        return (
                            <Col xs lg="2" key={index}  className='mt-4 '>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={i} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )

                    })}
                </Row>
            </div>

        </>
    );
}

export default CardApp;