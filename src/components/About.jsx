import React from 'react';
import { Grid,Col,Image } from 'react-bootstrap';
import './About.css'


export default class About extends React.Component {
    render() {
        return (
            <div>
                <Image  src="assets/student.jpg" className="header-image" height={100} width={100}/>
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