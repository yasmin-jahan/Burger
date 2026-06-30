import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import StoreIOS from '../../assets/shop/appstore.png'
import StoreGoogle from '../../assets/shop/googleplay.png'
import DownloadImage from '../../assets/shop/e-shop.png'



function Section7() {
  return (
    <>
      <section className='shop_section'>
        <Container>
          <Row className='align-items-center'>
            <Col lg={6} className='text-center text-lg-start mb-5 mb-lg-0'>
              <div className="shop_content">
                <h4>Download mobile App and</h4>
                <span>save up to 20%</span>
                <p>Aliquam a augue suscipit, luctus neque purus ipsum and neque
                  dolor primis libero tempus, blandit varius</p>
                <Link to="/">
                  <img src={StoreIOS} alt="IOS" className=' store' />
                </Link>
                <Link to="/">
                  <img src={StoreGoogle} alt="Android" className='store' />
                </Link>
              </div>
            </Col>
            <Col lg={6}>
              <div className="shop_img">
                <img src={DownloadImage} alt="Android" className='img-fluid me-3' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>



    </>
  )
}

export default Section7