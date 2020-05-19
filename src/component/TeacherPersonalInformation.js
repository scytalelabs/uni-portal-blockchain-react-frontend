import React,{Component} from 'react';
import logo from './UCP-Logo.gif';
import {Navbar, Container,} from 'reactstrap';
import { Row, Col ,Button, Label} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import './main.css';
import TeacherNavbarComponent from './TeacherNavbarComponent';



function RenderCourses(){
    return(
        <div className='container' style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}}>

            <Row style={{backgroundColor:'#F3F3F3',border:'1px solid #707070',color:'#707070'}} >
                <Col  md={{offset:1}} >
                    <i className="fa fa-align-justify"></i>{' '}Courses<br/>
                </Col>
            </Row>
            <Link to='/teacher/course'>
            <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                <Col  md={{offset:1}}  >
                    OOAD(C)
                </Col>
            </Row>
            </Link>
            <Link to='/teacher/course'>
            <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                <Col  md={{offset:1}} >
                    OOAD LAB(C)
                </Col>
            </Row>
            </Link>
            <Link to='/teacher/course'>
            <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                <Col  md={{offset:1}} >
                    DATABASE(E)
                </Col>
            </Row>
            </Link>
            <Link to='/teacher/course'>
            <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                <Col  md={{offset:1}} >
                    DATABASE LAB(E)
                </Col>
            </Row>
            </Link>
            <Link to='/teacher/course'>
            <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                <Col  md={{offset:1}} >
                COMPUTER ARCHITECTURE(F)
                </Col>
            </Row>
            </Link>
            <Link to='/teacher/course'>
            <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                <Col  md={{offset:1}} >
                VIEW ALL COURSES
                </Col>
            </Row>
            </Link>
        
        </div>
    )
}

function RenderTeacherServices(){
    return(
        <div className='container' style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}}>
                
            <Row style={{backgroundColor:'#F3F3F3',border:'1px solid #707070',color:'#707070'}}>
                <Col  md={{offset:1}} >
                    <i className="fa fa-user"></i>{' '}Teacher Services<br/>
                </Col>
            </Row>
            <Link to='/teacher/course/personalinformation'>
                <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                    <Col  md={{offset:1}}  >
                        PERSONAL INFORMATION <span>&#x276F;</span>
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
                <RenderTeacherServices></RenderTeacherServices>
            </div>
    )
}



function Renderpersonalinformation(){
    return(
        <div className='PersonalInformation' style={{fontFamily:'"Times New Roman", Times, serif'}}>
            <h3>Teacher Information</h3>

            <div className='container'>
                <h5 style={{backgroundColor:'#CEDAF1'}}>Personal Information</h5>
                <Row>
                    <Col>Name</Col>
                    <Col>Zaid Munir</Col>
                </Row>
                <Row>
                    <Col>Father Name</Col>
                    <Col>Munir</Col>
                </Row>
                <Row>
                    <Col>Registration Number</Col>
                    <Col>BSCS0151</Col>
                </Row>
                <Row>
                    <Col>Email</Col>
                    <Col>Zaid.munir@ucp.edu.pk</Col>
                </Row>
                <Row>
                    <Col>CNIC:</Col>
                    <Col>33102-9752772-7</Col>
                </Row>
                <Row>
                    <Col>Phone Number</Col>
                    <Col>0335-6611986 &nbsp;&nbsp;&nbsp;<i className='fa fa-edit'></i></Col>
                </Row>
                <Row>
                    <Col>Address</Col>
                    <Col>p323/1 amin town Kashmir road Faisalabad</Col>
                </Row>
                <Row>
                    <Col>DOB:</Col>
                    <Col>01/01/1998</Col>
                </Row>
                
                <hr></hr>
                <h5 style={{backgroundColor:'#CEDAF1'}}>Academic Information</h5>
                <Row>
                    <Col>Programme</Col>
                    <Col>BS</Col>
                </Row>
                <Row>
                    <Col>Term</Col>
                    <Col>F19</Col>
                </Row>
        
                <hr></hr>
                <h5 style={{backgroundColor:'#CEDAF1'}}>E-mail Status</h5>
                <Row>
                    <Col>Registration ID:</Col>
                    <Col>BSCS0151</Col>
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
                    <Col>Zaid.Munir@ucp.edu.pk</Col>
                </Row>
                <Row>
                    <Col>Password:</Col>
                    <Col>ucp12345</Col>
                </Row>
                
            </div>
        </div>
    )
}

class Teacherpersonalinformation extends Component{
    constructor(props){
      super(props);
    }
    handleInfo(values){
        console.log('Current State is: ' + JSON.stringify(values));
          alert('Current State is: ' + JSON.stringify(values));   
      }      
     render(){
       return(
           <div className='bg5'>
               <TeacherNavbarComponent></TeacherNavbarComponent>
               <Container fluid={true}>
                    <Row>
                        <Col md={{offset:0}}><RenderSideBar1></RenderSideBar1></Col>   
                        <Col ><Renderpersonalinformation></Renderpersonalinformation></Col>
                    </Row>
                </Container>
           </div>
        
       )
     }
    }
    export default Teacherpersonalinformation;