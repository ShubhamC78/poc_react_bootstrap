import React from 'react';
import { Grid, Col, Image, Carousel, Row } from 'react-bootstrap';
import './News.css'



export default class News extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null
        };
    }

    handleSelect(selectedIndex, e) {

        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {
        const { index, direction } = this.state;

        return (
            <div >
                <Row>
                    <Col xs={12} sm={8}>
                        <Carousel
                            activeIndex={index}
                            direction={direction}
                            onSelect={this.handleSelect}
                        >
                            <Carousel.Item>
                                <img width={900} height={300} alt="900x500" className="img_style" src="assets/img2.jpg" />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width={900} height={500} alt="900x500" src="assets/img5.jpg" />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width={900} height={500} alt="900x500" src="assets/img2.jpg" />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col xs={12} sm={4} >
                   
                    <div className="form_style">
                    <h3 className="heading_style">Create Account</h3>
                    </div>
                    </Col>
                </Row>
                <Grid>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Image src="assets/img4.jpg" className="about-profile-pic" rounded />
                        <h3>Abc2</h3>
                        <p>adscasda</p>
                    </Col>
                </Grid>
            </div>
        )
    }
}