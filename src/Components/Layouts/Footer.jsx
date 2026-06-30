import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import "../../Styles/FooterStyle.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
<footer className='footer_section'>
  <Container>
    <Row>
      <Col sm={6} lg={3} className='mb-3 mb-lg-0'>
      <div className="footer_content_wrapper">
        <div className="footer_content text-center">
          <h5>Location</h5>
          <p>5505 Waterford District</p>
          <p>Dr, Miami, FL 33126</p>
          <p>United States</p>
        </div>

      </div>
      </Col>

        <Col sm={6} lg={3} className='mb-3 mb-lg-0'>
      <div className="footer_content_wrapper">
         <div className="footer_content text-center">
          <h5>Working Hours</h5>
          <p>Mon-Fri: 9:00AM - 10:00PM</p>
          <p>Saturday: 10:00AM - 8:30PM</p>
          <p>Sunday: 12:00PM - 5:00PM</p>
        </div>
      </div>
      </Col>

       

       <Col sm={6} lg={3} className='mb-3 mb-lg-0'>
      <div className="footer_content_wrapper">
         <div className="footer_content text-center">
          <h5>Order Now</h5>
          <p>Quaerat neque purus ipsum</p>
          <Link to='tel:999888777' className='calling'>999-888-777</Link>
        </div>
      </div>
      </Col>

      
       <Col sm={6} lg={3} className='mb-3 mb-lg-0'>
      <div className="footer_content_wrapper">
         <div className="footer_content text-center">
          <h5>Follow Us</h5>
          <p>Quaerat neque purus ipsum</p>
          <ul className='list-unstyled text-center'>
            <li>
              <Link to="/">
              <i className='bi bi-facebook'></i>
              </Link>
            </li>
               <li>
              <Link to="/">
              <i className='bi bi-twitter'></i>
              </Link>
            </li>
               <li>
              <Link to="/">
              <i className='bi bi-instagram'></i>
              </Link>
            </li>
               <li>
              <Link to="/">
              <i className='bi bi-youtube'></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      </Col>

    </Row>

    <Row className='copyright_row'>
      <Col lg={5}>
      <div className="copyright">
        <p> &copy; 2026  <Link to="/"><span>YASMIN JAHAN</span> </Link> All Rights Reserved </p>
      </div>
      </Col>
      <Col lg={7}>
      <div className="privacy_content">
        <ul>
          <li>
            <Link to="/">About Us</Link>
          </li>
           <li>
            <Link to="/">Terms Of Use</Link>
          </li>
          <li>
            <Link to="/">Privacy Policy</Link>
          </li>
        </ul>
      </div>
      </Col>
    </Row>
  </Container>
</footer>
  )
}

export default Footer

