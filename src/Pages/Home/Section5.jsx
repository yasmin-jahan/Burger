import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Section5() {
  return (
   <section className='banner_section'>
    <Container>
          <Row className='banner_row'>
            <Col md={6} lg={5}>
            <div className="ads_box ads_img1">
                <h4 className='mb-0'>GET YOUR FREE <span>CHEESE FRIES</span> </h4>
                <Link to="/" className='btn btn_red px-4'>Learn More</Link>
            </div>
            </Col>

            <Col md={6} lg={7}>
            <div className="ads_box ads_img2">
                <h4 className='mb-0'>GET YOUR FREE <span>CHEESE FRIES</span> </h4>
                <Link to="/" className='btn btn_red px-4'>Learn More</Link>
            </div>
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Section5