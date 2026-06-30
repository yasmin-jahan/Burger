import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Burger from "../../assets/hero/hero-2.png"
import { Link } from 'react-router-dom'

function Section1() {
    return (
        <section className='hero_section'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} xxl={7} className='mb-5 mb-lg-0'>
                        <div className="position-relative">
                           <div className="hero_img">
                             <img src={Burger} alt="Hero" className='img-fluid' />
                           </div>
                            <div className="price_badge">
                                <div className="badge_text">
                                    <h4 className='h4_xs'>Only </h4>
                                    <h4 className='h3_lg'>$6.99</h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} xxl={5}>
                        <div className="hero_text text-center">
                            <h1 className='text-white text-uppercase'>new burger <span>with onion</span> </h1>
                            <p className='text-white pt-2 pb-2'>Feugiat primis ligula risus auctor laoreet augue egestas mauris
                                viverra tortor in iaculis pretium at magna mauris ipsum primis
                                rhoncus feugiat</p>
                                <Link to="/" className='btn order_now'>Order Now</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Section1