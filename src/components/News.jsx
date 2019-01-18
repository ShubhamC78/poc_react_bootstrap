import React from 'react';
import { Grid,Col,Image } from 'react-bootstrap';
import './News.css'



export default class News extends React.Component {
    render() {
        return (
            <div>
            <Image  src="assets/img3.jpg" className="header-image" height={500}/>
            <Grid>
                <Col xs={12} sm={8} smOffset={2}>
                    <Image src="assets/img4.jpg" className="about-profile-pic" rounded/>
                    <h3>Abc2</h3>
                    <p>adscasda</p>
                </Col>
                </Grid>
        </div>
        )
    }
}