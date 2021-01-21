import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//mt-5?

function Footer() {
    return(
        <footer className="fixed-bottom">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        <FontAwesomeIcon 
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href='https://www.instagram.com/ayomide_skiplab/';
                            }} className="footer-icon" size="lg" icon={['fab', 'instagram']} />
                        <FontAwesomeIcon 
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href='https://www.linkedin.com/in/ayomide-ajayi-2b03b5150/';
                            }} className="footer-icon" size="lg" icon={['fab', 'linkedin']} />
                        <FontAwesomeIcon 
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href='https://web.facebook.com/ayomideseaz/';
                            }} className="footer-icon" size="lg" icon={['fab', 'facebook']} />
                        <FontAwesomeIcon 
                             onClick={(e) => {
                                e.preventDefault();
                                window.location.href='https://github.com/SKPnation';
                            }} className="footer-icon" size="lg" icon={['fab', 'github']} />
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