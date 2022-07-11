import React, { FC, useState } from 'react';
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import saree from '../../assest/images/saree.jpg';
const Home: FC = () => {
    const [size, setSize] = useState("");
    return (<>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ height: '8vh' }}>
            <Container>
                <Navbar.Brand href="#home">MY COMPANY.COM</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">THE EDITS</Nav.Link>
                        <Nav.Link href="#pricing">NEW ARRIVALS</Nav.Link>
                        <Nav.Link href="#pricing">DESIGNERS</Nav.Link>
                        <Nav.Link href="#pricing">SHOES</Nav.Link>
                        <Nav.Link href="#pricing">BAGS</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Search</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Profile
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Container>
            <Row>
                <Col xs={3}>
                    <Navbar bg="light" variant="light">
                        <Container>
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                    <Row style={{ fontSize: '20px' }}>
                        The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day:
                        a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky.
                        It has a straight fir with well defined shoulders and a shawl collar
                        culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.
                    </Row>
                </Col>
                <Col xs={6}>
                    <Row style={{
                        height: '92vh',
                        overflowY: 'auto'
                    }}>
                        <img src={saree} style={{ width: 'auto', height: '600px', margin: '15px' }} />
                        <img src={saree} style={{ width: 'auto', height: '600px', margin: '15px' }} />
                        <img src={saree} style={{ width: 'auto', height: '600px', margin: '15px' }} />
                        <img src={saree} style={{ width: 'auto', height: '600px', margin: '15px' }} />
                    </Row>
                </Col>
                <Col xs={3}>
                    <h2> JONATHA<br />SIMKHAI </h2>
                    <h6>Lurex Linen Viscose Jacket in Conchigila</h6>
                    <h6>$225</h6>
                    <h6>COLOR CONCHIGILA</h6>
                    <img src={saree} style={{ width: 'auto', height: '55px', margin: '15px', border: '2px' }} />
                    <img src={saree} style={{ width: 'auto', height: '55px', margin: '15px', border: '2px' }} />
                    <h6 style={{ textAlign: 'right' }} >SIZE GUIDE</h6>
                    <p>{size}</p>
                    <button style={{ borderRadius: '13px' }} onClick={() => setSize('Extra Small')}>XS</button>
                    <button style={{ borderRadius: '13px' }} onClick={() => setSize('Small')}>S</button>
                    <button style={{ borderRadius: '13px' }} onClick={() => setSize('Medium')}>M</button>
                    <button style={{ borderRadius: '13px' }} onClick={() => setSize('Large')}>L</button>
                    <button style={{ borderRadius: '13px' }} onClick={() => setSize('Extra Large')}>XXl</button>
                    <br /><button style={{ marginTop: '10px', borderRadius: '13px' }}>ADD TO BAG</button>
                </Col>
            </Row>
        </Container>
        <Container style={{ textAlign: 'center', fontSize: '20px' }}>
            The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day:
            a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky.
        </Container>
    </>
    );
};

export default Home;