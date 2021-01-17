import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//mt-5?

function Footer() {
    return(
        <footer className="fixed-bottom">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Ayomide Ajayi
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                      Made by Ayomide Ajayi
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;