import React,{Component} from 'react';
import logo from './UCP-Logo.gif';
import {Navbar, Container} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { Control, LocalForm} from 'react-redux-form';
import { Link } from 'react-router-dom';
import Student from './Student.png';
import Teacher from './Teacher.png';
import Marks_Type from './marksheet.png';
import Course from './course.png';
import './main.css';
import AdminNavbarComponent from './AdminNavBarComponent';


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
        
            <div className='sidebar6'>
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
            <div className='Services'style={{marginBottom:'37px'}}>
                <Row>
                    <Col >
                    <br></br>
                        <Link to='/Admin/Student'>
                            <img src={Student} className=" " height='150px' width='150px ' alt="STUDENT" style={{borderRadius:'35px'}}/>
                            <h3 style={{fontFamily:'"Times New Roman", Times, serif',color:'white'}} >Student</h3>
                        </Link>
                    </Col>
                    
                    <Col >
                        <br></br>
                        <Link to='/Admin/Teacher'>
                            <img src={Teacher} className=" " height='150px' width='150px ' alt="Teacher" style={{borderRadius:'35px'}}/>
                            <h3 style={{fontFamily:'"Times New Roman", Times, serif',color:'white'}} >Teacher</h3>
                        </Link>
                    </Col>
                </Row>
                <Row>
                <Col>
                    <Link to='/Admin/MarksType'>
                        <br></br>
                            <img src={Marks_Type} className=" " height='150px' width='150px ' alt="Marks Type" style={{borderRadius:'35px'}}/>
                            <h3 style={{fontFamily:'"Times New Roman", Times, serif',color:'white'}} >Marks Type</h3>
                        </Link>
                    </Col>
                    <Col>
                        <Link to='/Admin/Course'>                        
                        <br></br>
                            <img src={Course} className=" " height='150px' width='150px ' alt="Course" style={{borderRadius:'35px'}}/>
                            <h3 style={{fontFamily:'"Times New Roman", Times, serif',color:'white'}} >Course</h3>
                        </Link>
                    </Col>
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
           <div className='bg3' >
               <AdminNavbarComponent></AdminNavbarComponent>
                <Container fluid={true}>
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
                </Container>
           </div>
       )
     }
    }
    export default AdminHome;