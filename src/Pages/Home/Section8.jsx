import React from 'react'
import { Container, Row, Carousel } from 'react-bootstrap'
import User1 from '../../assets/blog/review-author-1.jpg'
import User2 from '../../assets/blog/review-author-2.jpg'
import User3 from '../../assets/blog/review-author-3.jpg'
import User5 from '../../assets/blog/review-author-5.jpg'

function Section8() {
    return (
        <section className='blog_section'>
            <Container>
                <Row className='blog_row'>
                    <Carousel>
                        <Carousel.Item>

                            <Carousel.Caption>
                                <div className="user_img">
                                    <img src={User1} alt="brand-1" className='img-fluid' />
                                </div>
                                <div className="blog_content">
                                    <p>"Etiam sapien sem at sagittis congue augue massa varius
                                        sodales sapien undo tempus dolor egestas magna suscipit magna
                                        tempus aliquet porta sodales augue suscipit luctus neque</p>
                                </div>
                                <div className="item_rating mb-2">
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                </div>
                                <div className="blog_autor">
                                    <h5>BY AMELIE NEWLOVE</h5>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
   <Carousel.Item>

                            <Carousel.Caption>
                                <div className="user_img">
                                    <img src={User2} alt="brand-2" className='img-fluid' />
                                </div>
                                <div className="blog_content">
                                    <p>"Etiam sapien sem at sagittis congue augue massa varius
                                        sodales sapien undo tempus dolor egestas magna suscipit magna
                                        tempus aliquet porta sodales augue suscipit luctus neque</p>
                                </div>
                                <div className="item_rating mb-2">
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                </div>
                                <div className="blog_autor">
                                    <h5>BY AMELIE NEWLOVE</h5>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>

                           <Carousel.Item>

                            <Carousel.Caption>
                                <div className="user_img">
                                    <img src={User3} alt="brand-3" className='img-fluid' />
                                </div>
                                <div className="blog_content">
                                    <p>"Etiam sapien sem at sagittis congue augue massa varius
                                        sodales sapien undo tempus dolor egestas magna suscipit magna
                                        tempus aliquet porta sodales augue suscipit luctus neque</p>
                                </div>
                                <div className="item_rating mb-2">
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                </div>
                                <div className="blog_autor">
                                    <h5>BY AMELIE NEWLOVE</h5>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>

                           <Carousel.Item>

                            <Carousel.Caption>
                                <div className="user_img">
                                    <img src={User5} alt="brand-5" className='img-fluid' />
                                </div>
                                <div className="blog_content">
                                    <p>"Etiam sapien sem at sagittis congue augue massa varius
                                        sodales sapien undo tempus dolor egestas magna suscipit magna
                                        tempus aliquet porta sodales augue suscipit luctus neque</p>
                                </div>
                                <div className="item_rating mb-2">
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                </div>
                                <div className="blog_autor">
                                    <h5>BY AMELIE NEWLOVE</h5>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>



                    </Carousel>
                </Row>
            </Container>
        </section>
    )
}

export default Section8