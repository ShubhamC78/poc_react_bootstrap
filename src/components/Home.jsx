import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux';
import * as loginAction from '../actions/loginAction'

class test extends Jumbotron {

}



class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: true
        }
    }
    componentDidMount() {
        setTimeout(
            this.handleOpen()
            , 3000);
    }
    handleOpen() {
        this.setState({ open: false });
    }

    handleClose() {
        this.props.dispatch(loginAction.loginRequest("Shubham"));
    }
    // program for string check contain same character
    // test() {
    //     var a1 = "cdsfff";
    //     var a2 = "SDCfff";
    //     var a1arr = [...a1.toLowerCase()];
    //     var a2arr = [...a2.toLowerCase()];
    //     a1arr.sort();
    //     a2arr.sort();
    //     if (a1arr.length == a2arr.length) {
    //         for (var i = 0; i < a1arr.length; i++) {
    //             if (a1arr[i] !== a2arr[i]) {
    //                 return false;
    //             }
    //         }
    //         return true;
    //     }
    // }

    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Welcome to Birds Life</h2>
                    <p>Birds are warm-blooded vertebrate (having a backbone) animals whose bodies are covered with feathers and whose forelimbs are modified into wings.</p>
                    <p>Birds are in the class Aves, which contains over 9,500 species divided among 31 living orders. </p>
                    <Button onClick={() => { this.handleClose() }}>Open Modal</Button>
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

function mapStateToProps(state) {
    const { user } = state.login;
    return { user };
}

export default connect(mapStateToProps)(Home);