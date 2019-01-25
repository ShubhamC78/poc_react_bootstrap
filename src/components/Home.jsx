import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux';
import * as loginAction from '../actions/loginAction'

 class Home extends React.Component {
     constructor(props){
        super(props)
        this.state ={
            modal : true
        }
     }
     componentDidMount(){
            setTimeout(
               this.handleOpen()
             , 3000);
     }
    handleOpen(){
        this.setState({ open: false });
    }

     handleClose(){
        this.props.dispatch(loginAction.loginRequest("Shubham"));
     }
    

    render() {
        console.log("Shubham  : " + this.props.user);
        return (
        //     <Modal
        //     aria-labelledby="simple-modal-title"
        //     aria-describedby="simple-modal-description"
        //     open={this.state.open}
        //     onClose={() =>{ this.handleClose()}}
        //   >  
        //   <Button onClick={() =>{ this.handleClose()} }>Open Modal</Button>
            <Grid>
                <Jumbotron>
                    <h2>Welcome to Birds Life</h2>
                    <p>Birds are warm-blooded vertebrate (having a backbone) animals whose bodies are covered with feathers and whose forelimbs are modified into wings.</p>
                    <p>Birds are in the class Aves, which contains over 9,500 species divided among 31 living orders. </p>
                   
                    <Button onClick={() =>{ this.handleClose()} }>Open Modal</Button>
                   
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
            // </Modal>
        )
    }
}

function mapStateToProps(state){
    const { user } = state.login;
    return { user };
   }
  
  export default connect(mapStateToProps)(Home);