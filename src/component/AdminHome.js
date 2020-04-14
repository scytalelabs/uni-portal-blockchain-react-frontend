import React,{Component} from 'react';
import logo from './UCP-Logo.gif';
import {Navbar} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { Control, LocalForm} from 'react-redux-form';
import { Link } from 'react-router-dom';
import Student from './Student.png';
import Teacher from './Teacher.png';
import Marks_Type from './marksheet.png';
import Course from './course.png';
import './main.css';


function RenderAdminServices(){
    return(
        <div className='container' style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}}>
                
                    <Row style={{backgroundColor:'#F3F3F3',border:'1px solid #707070',color:'#707070'}}>
                        <Col  md={{offset:1}} >
                            <i className="fa fa-cog"></i>{' '}SET SECTION<br/>
                        </Col>
                    </Row>
                <Link to='/Admin/StudentSection'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            STUDENT
                        </Col>
                    </Row>
                </Link>
                <Link to='/Admin/TeacherSection'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            TEACHER
                        </Col>
                    </Row>
                </Link>
                <Link to='/Admin/CourseSection'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            COURSE
                        </Col>
                    </Row>
                </Link>
                
                
        </div>
    )
}
function RenderSideBar1(){
    return(    
        
            <div className='sidebar'>
                <Row>
                    <Col md={{ offset:10 }} >
                    <strong style={{color:'#3C315F'}}><span>&#x276E;&#x276E;</span> </strong>
                    </Col>
                </Row>
                <RenderAdminServices></RenderAdminServices>
            </div>
    )
}

function RenderServices(){
    return(
        <div>
            <div className='Services'style={{fontFamily:'"Times New Roman", Times, serif',color:'white'}} >
                <Row>
                    
                    <Link to='/Admin/Student'>
                        <Col >
                        <br></br>
                            <img src={Student} className=" " height='150px' width='150px ' alt="STUDENT" style={{borderRadius:'35px'}}/>
                            <h3>Student</h3>
                        </Col>
                    </Link>
                    <Link to='/Admin/Teacher'>
                        <Col>
                        <br></br>
                            <img src={Teacher} className=" " height='150px' width='150px ' alt="Teacher" style={{borderRadius:'35px'}}/>
                            <h3>Teacher</h3>
                        </Col>
                    </Link>
                </Row>

                
                <Row>
                    <Link to='/Admin/MarksType'>
                        <Col>
                        <br></br>
                            <img src={Marks_Type} className=" " height='150px' width='150px ' alt="Marks Type" style={{borderRadius:'35px'}}/>
                            <h3>Marks Type</h3>
                        </Col>
                    </Link>
                    <Link to='/Admin/COurse'>
                        <Col>
                        <br></br>
                            <img src={Course} className=" " height='150px' width='150px ' alt="Course" style={{borderRadius:'35px'}}/>
                            <h3>Course</h3>
                        </Col>
                    </Link>
                </Row>
            </div>            
        </div>
    )
}

class AdminHome extends Component{
    constructor(props){
      super(props);
    }
    handleInfo(values){
        console.log('Current State is: ' + JSON.stringify(values));
          alert('Current State is: ' + JSON.stringify(values));   
      }      
     render(){
       return(
           <div className='bg2'>
               <Navbar style={{backgroundColor: '#A5A4A4'}} dark>
                    <span>
                        <h5 style={{color:'white'}}><img src={logo} className="logo" alt="logo"></img> University of Central Punjab</h5>
                    </span>
                    <LocalForm onSubmit={(values)=>this.handleLogin(values)}>
                        <Row className='form-group'>
                            <Col className='shadow' style={{paddingRight:'50px'}}>
                                    <Control.select  model='.userinfo' id='userinfo' name='userinfo' className='form-control' style={{backgroundColor:'#ECECEC',borderRadius: '35px',paddingRight:'50px'}}>
                                        <option value='Muhammad Adrees' selected>Muhammad Adrees</option>
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
                    <Col  md={{ offset:0 }}>
                        <RenderSideBar1></RenderSideBar1>
                    </Col>
                    <Col  md={{ offset:1 }}>
                        <br></br>
                        <br></br>
                        <RenderServices></RenderServices>
                    </Col>
                </Row>
           </div>
       )
     }
    }
    export default AdminHome;