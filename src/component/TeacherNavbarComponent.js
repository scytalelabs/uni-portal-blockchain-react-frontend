import React,{Component} from 'react';
import logo from './UCP-Logo.gif';
import {Navbar,} from 'reactstrap';
import { Row, Col} from 'reactstrap';
import { Control, LocalForm} from 'react-redux-form';
import './main.css';



class TeacherNavbarComponent extends Component{
    constructor(props){
      super(props);
    }
     render(){
       return(
            <div>
                <Navbar className='NavbarIMG'>
                    <span>
                        <h5 style={{color:'white'}}><img src={logo} className="logo" alt="logo"></img> University of Central Punjab</h5>
                    </span>
                    <LocalForm onSubmit={(values)=>this.handleLogin(values)}>
                        <Row className='form-group'>
                            <Col  style={{}}>
                                <Control.select  model='.userinfo' id='userinfo' name='userinfo' className='form-control' style={{borderRadius: '35px',paddingRight:'50px',backgroundColor:"hsla(0, 100%, 100%, 0.7)"}}>
                                    <option value='Zaid Munir' selected>Zaid Munir</option>
                                    <option>BSCS005</option>
                                    <option>zaid.munir@ucp.edu.pk></option>
                                    <option>Logout</option>
                                </Control.select>
                            </Col>
                        </Row>
                    </LocalForm>
                </Navbar>
                <div style={{backgroundColor:'#3C315F'}}>
                    <br></br>
                </div>
            </div>
                    
       )
     }
    }
    export default TeacherNavbarComponent;