import React,{Component} from 'react';
import logo from './UCP-Logo.gif';
import {Navbar,} from 'reactstrap';
import { Row, Col ,Button, Label} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import './main.css';



function RenderCourses(){
    return(
        <div className='container' style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}}>
                
                <Row style={{backgroundColor:'#F3F3F3',border:'1px solid #707070',color:'#707070'}} >
                    <Col  md={{offset:1}} >
                        <i className="fa fa-align-justify"></i>{' '}Courses<br/>
                    </Col>
                </Row>
                <Link to='/student/course'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            OOAD(C)
                        </Col>
                    </Row>
                </Link>
                <Link to='/student/course'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                            OOAD LAB(C)
                        </Col>
                    </Row>
                </Link>
                <Link to='/student/course'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                            DATABASE(E)
                        </Col>
                    </Row>
                </Link>
                <Link to='/student/course'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                            DATABASE LAB(E)
                        </Col>
                    </Row>
                </Link>
                <Link to='/student/course'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                        COMPUTER ARCHITECTURE(F)
                        </Col>
                    </Row>
                </Link>
                <Link to='/student/course'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                        VIEW ALL COURSES
                        </Col>
                    </Row>
                </Link>
                </div>
    )
}

function RenderStudentServices(){
    return(
        <div className='container' style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}}>
                
                    <Row style={{backgroundColor:'#F3F3F3',border:'1px solid #707070',color:'#707070'}}>
                        <Col  md={{offset:1}} >
                            <i className="fa fa-user"></i>{' '}Student Services<br/>
                        </Col>
                    </Row>
                <Link to='/student/personalinformation'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            PERSONAL INFORMATION  <span>&#x276F;</span>
                        </Col>
                    </Row>
                </Link>
                <Link to='/student/transcript'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                            TRANSCRIPT 
                        </Col>
                    </Row>
                </Link>
                <Link to='/student/leavereport'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                            LEAVE STATUS REPORT
                        </Col>
                    </Row>
                </Link>       
        </div>
    )
}
function RenderSideBar1(){
    return(    
        
            <div className='sidebar1'>
                <Row>
                    <Col md={{ offset:10 }} >
                    <strong style={{color:'#3C315F'}}><span>&#x276E;&#x276E;</span> </strong>
                    </Col>
                </Row>
                <RenderCourses></RenderCourses>
                <RenderStudentServices></RenderStudentServices>
            </div>
    )
}



function Renderpersonalinformation(){
    return(
        <div className='PersonalInformation' style={{fontFamily:'"Times New Roman", Times, serif'}}>
            <h3>Student Information</h3>

            <div className='container'>
                <h5 style={{backgroundColor:'#CEDAF1'}}>Personal Information</h5>
                <Row>
                    <Col>Student Name</Col>
                    <Col>Muhammad Adrees</Col>
                </Row>
                <Row>
                    <Col>Father Name</Col>
                    <Col>Shakeel Ahmad</Col>
                </Row>
                <Row>
                    <Col>Registration Number</Col>
                    <Col>L1F16BSCS0151</Col>
                </Row>
                <Row>
                    <Col>Email</Col>
                    <Col>adreees0512@ucp.edu.pk</Col>
                </Row>
                <Row>
                    <Col>Phone Number</Col>
                    <Col>0335-6611986 &nbsp;&nbsp;&nbsp;<i className='fa fa-edit'></i></Col>
                </Row>
                <Row>
                    <Col>City</Col>
                    <Col>Lahore</Col>
                </Row>
                <hr></hr>
                <h5 style={{backgroundColor:'#CEDAF1'}}>Academic Information</h5>
                <Row>
                    <Col>CGPA</Col>
                    <Col>3.93</Col>
                </Row>
                <Row>
                    <Col>Programme</Col>
                    <Col>BS</Col>
                </Row>
                <Row>
                    <Col>Term</Col>
                    <Col>F19</Col>
                </Row>
                <Row>
                    <Col>Total earn Credit hours</Col>
                    <Col>99</Col>
                </Row>
                <Row>
                    <Col>Total  attempt Credit hours</Col>
                    <Col>99</Col>
                </Row>
                <Row>
                    <Col>Accepted Credit hours</Col>
                    <Col>99</Col>
                </Row>
                <hr></hr>
                <h5 style={{backgroundColor:'#CEDAF1'}}>E-mail Status</h5>
                <Row>
                    <Col>Registration ID:</Col>
                    <Col>L1F16BSCS0151</Col>
                </Row>
                <Row>
                    <Col>Request Received Date:</Col>
                    <Col>3-11-2016 9:38:34 AM</Col>
                </Row>
                <Row>
                    <Col>Request Status:</Col>
                    <Col>19-10-2016 7:48:05 AM</Col>
                </Row>
                <Row>
                    <Col>Approved Email Address:</Col>
                    <Col>adreees0512@ucp.edu.pk</Col>
                </Row>
                <Row>
                    <Col>Password:</Col>
                    <Col>ucp12345</Col>
                </Row>
                
            </div>
        </div>
    )
}

class personalinformation extends Component{
    constructor(props){
      super(props);
    }
    handleInfo(values){
        console.log('Current State is: ' + JSON.stringify(values));
          alert('Current State is: ' + JSON.stringify(values));   
      }      
     render(){
       return(
           <div className='bg4'>
               <Navbar style={{backgroundColor: '#A5A4A4'}} dark>
                    <span>
                        <h5 style={{color:'white'}}><img src={logo} className="logo" alt="logo"></img> University of Central Punjab</h5>
                    </span>
                    <LocalForm onSubmit={(values)=>this.handleLogin(values)}>
                        <Row className='form-group'>
                            <Col className='shadow' style={{paddingRight:'50px'}}>
                                    <Control.select  model='.userinfo' id='userinfo' name='userinfo' className='form-control' style={{backgroundColor:'#ECECEC',borderRadius: '35px',paddingRight:'50px'}}>
                                        <option value='Muhammad Adrees' selected>Muhammad Adrees</option>
                                        <option>L1F16BSCS0151</option>
                                        <option>adreees012@ucp.edu.pk></option>
                                        <option>Logout</option>
                                    </Control.select>
                                </Col>
                        </Row>
                    </LocalForm>
                </Navbar>
                <div style={{backgroundColor:'#3C315F'}}>
                    <br></br>
                </div>
                <Row>
                    <Col md={{offset:0}}><RenderSideBar1></RenderSideBar1></Col>
                    
                    <Col ><Renderpersonalinformation></Renderpersonalinformation></Col>
                </Row>
                
                
           </div>
        
       )
     }
    }
    export default personalinformation;