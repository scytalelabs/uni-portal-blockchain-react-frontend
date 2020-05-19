import React,{Component} from 'react';
import {Container} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './main.css';
import StudentNavbarComponent from './StudentNavbarComponent';

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
                            PERSONAL INFORMATION
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


function RenderCoursesData(){
    return(
        <div className='container' style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}}>
                
                <Link to='/student/course/Announcement'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            Announcement 
                        </Col>
                    </Row>
                </Link>
                <Link to='/student/course/CourseOutline'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                            Course Outline
                        </Col>
                    </Row>
                </Link>
                <Link to='/student/course/CourseMaterial'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                            Course Material <span>&#x276F;</span>
                        </Col>
                    </Row>
                </Link>
                <Link to='/student/course/GradeBook'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                            Grade Book
                        </Col>
                    </Row>
                </Link>
                <Link to='/student/course/LeaveStatus'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                        Leave Status
                        </Col>
                    </Row>
                </Link>
                
                
                </div>
    )
}
function RenderSideBar2(){
    return(    
        
            <div className='sidebar1'>
                <br></br>
                <br></br>
                <RenderCoursesData></RenderCoursesData>
            </div>
    )
}
function RenderCourseMaterial(){
    return(
        <div className='CourseMaterial'>
            <h3>Course Material</h3>
            <hr/>
            <br></br>
           <div className='container' style={{fontFamily:'"Times New Roman", Times, serif'}}>
            <Row style={{border:'1px solid #707070'}}>
                <Col md={{size:8}} style={{border:'1px solid #707070'}}>File Name</Col>
                <Col style={{border:'1px solid #707070',textAlign:'center'}}>Download</Col>
            </Row>
            <Row style={{border:'1px solid #707070'}}>
                <Col md={{size:8}} style={{border:'1px solid #707070'}}>Quiz</Col>
                <Col style={{border:'1px solid #707070' ,color:'blue', textAlign:'center'}}><i class="fa fa-download"></i></Col>
            </Row>
            <Row style={{border:'1px solid #707070'}}>
                <Col md={{size:8}} style={{border:'1px solid #707070'}}>Assignment</Col>
                <Col style={{border:'1px solid #707070' ,color:'blue', textAlign:'center'}}><i class="fa fa-download"></i></Col>
                
            </Row>
            <Row style={{border:'1px solid #707070'}}>
                <Col md={{size:8}} style={{border:'1px solid #707070'}}>Project</Col>
                <Col style={{border:'1px solid #707070' ,color:'blue', textAlign:'center'}}><i class="fa fa-download"></i></Col>
                
            </Row>
            <Row style={{border:'1px solid #707070'}}>
                <Col md={{size:8}} style={{ border:'1px solid #707070'}}>Mid-term</Col>
                <Col style={{border:'1px solid #707070' ,color:'blue', textAlign:'center'}}><i class="fa fa-download"></i></Col>
                
            </Row>
            <Row style={{border:'1px solid #707070'}}>
                <Col  md={{size:8}} style={{border:'1px solid #707070'}}>Final-term</Col>
                <Col style={{border:'1px solid #707070' ,color:'blue', textAlign:'center'}}><i class="fa fa-download"></i></Col>
                
            </Row>
            <Row style={{border:'1px solid #707070'}}>
                <Col md={{size:8}} style={{border:'1px solid #707070'}}>Class Participation</Col>
                <Col style={{border:'1px solid #707070' ,color:'blue', textAlign:'center'}}><i class="fa fa-download"></i></Col>
                
            </Row>
            
           </div>
            
        </div>
    )
}

class CourseMaterial extends Component{
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
               <StudentNavbarComponent></StudentNavbarComponent>
                <Container fluid={true}> 
                    <Row>
                        <Col md={{offset:0}}><RenderSideBar1></RenderSideBar1></Col>
                        <Col md={{offset:0}}><RenderSideBar2></RenderSideBar2></Col>
                        <Col ><RenderCourseMaterial></RenderCourseMaterial></Col>
                    </Row>
                </Container>
                
                
           </div>
        
       )
     }
    }
    export default CourseMaterial;