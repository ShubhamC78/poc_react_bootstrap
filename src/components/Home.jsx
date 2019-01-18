import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends React.Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Welcome to Birds Life</h2>
                    <p>Birds are warm-blooded vertebrate (having a backbone) animals whose bodies are covered with feathers and whose forelimbs are modified into wings.</p>
                    <p>Birds are in the class Aves, which contains over 9,500 species divided among 31 living orders. </p>
                    <Link to="/about">
                        <Button bsStyle="primary">About</Button>
                    </Link>
                </Jumbotron>
                <Row className="text-center">
                    <Col xs={12} sm={4} className="bird-wrapper">
                        <Image src="assets/img4.jpg" circle className="profile-pic" />
                        <h3>Test1</h3>
                        <p >axbxxxxsadA</p>
                    </Col>
                    <Col xs={12} sm={4} className="bird-wrapper">
                        <Image src="assets/img4.jpg" circle className="profile-pic" />
                        <h3>Test1</h3>
                        <p>axbxxxxsadASDASDAS</p>
                    </Col>
                    <Col xs={12} sm={4} className="bird-wrapper">
                        <Image src="assets/img4.jpg" circle className="profile-pic" />
                        <h3>Test1</h3>
                        <p>axbxxxxsadASD</p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}