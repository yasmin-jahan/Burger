import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Section9() {
    return (
        <section className='contact_section'>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={9} className='text-center'>
                        <div className="contact_content">
                            <h4>We Guarantee <span>30 Minutes Delivery!</span></h4>
                            <p>Aliquam a augue suscipit, luctus neque purus ipsum neque undo
                                dolor primis libero tempus, blandit a cursus varius luctus neque
                                magna</p>
                            <Link to="/" className='btn btn_red px-4 py-2 py-sm-3'>Call: 999-888-7777</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Section9