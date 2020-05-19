import React,{Component} from 'react';
import { Row, Col ,Container} from 'reactstrap';
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
                            Course Outline <span>&#x276F;</span>
                        </Col>
                    </Row>
                </Link>
                <Link to='/student/course/CourseMaterial'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                            Course Material
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
function RenderOutline(){
    return(
        <div className='CourseOutline' style={{fontFamily:'"Times New Roman", Times, serif'}}>
            <h3>Course Outline</h3>
            <u>Course Description</u><br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;NULL
            <hr/>
            <u>Assessment and Evaluation Reference Books</u>
            <div className='container'>
            <Row style={{textAlign:'center'}}>
                <Col style={{border:'1px solid #707070'}}>Exam Type</Col>
                <Col style={{border:'1px solid #707070'}}>Percentage</Col>
                <Col style={{border:'1px solid #707070'}}>Consider Top</Col>
            </Row>
            <Row >
                <Col style={{border:'1px solid #707070'}}>Quiz</Col>
                <Col style={{border:'1px solid #707070'}}>10%</Col>
                <Col style={{border:'1px solid #707070'}}>8</Col>
            </Row>
            <Row >
                <Col style={{border:'1px solid #707070'}}>Assignment</Col>
                <Col style={{border:'1px solid #707070'}}>10%</Col>
                <Col style={{border:'1px solid #707070'}}>Take Average of all</Col>
            </Row>
            <Row >
                <Col style={{border:'1px solid #707070'}}>Project</Col>
                <Col style={{border:'1px solid #707070'}}>10%</Col>
                <Col style={{border:'1px solid #707070'}}>Take Average of all</Col>
            </Row>
            <Row >
                <Col style={{border:'1px solid #707070'}}>Mid-term</Col>
                <Col style={{border:'1px solid #707070'}}>25%</Col>
                <Col style={{border:'1px solid #707070'}}>Take Average of all</Col>
            </Row>
            <Row >
                <Col style={{border:'1px solid #707070'}}>Final-term</Col>
                <Col style={{border:'1px solid #707070'}}>35%</Col>
                <Col style={{border:'1px solid #707070'}}>Take Average of all</Col>
            </Row>
            <Row >
                <Col style={{border:'1px solid #707070'}}>Class Participation</Col>
                <Col style={{border:'1px solid #707070'}}>10%</Col>
                <Col style={{border:'1px solid #707070'}}>Take Average of all</Col>
            </Row>
            <hr/>
           <u> Plagiarism and Intellectual Property Policy:</u>
            <p>Reproduction of the writing or literary work or concepts or inventions of another person as one's own product without writing proper 
            acknowledgment to the actual author, willfully or unintentionally, is termed as plagiarism. The actual author has a right to bring a 
            lawsuit for unauthorized use of his/her work against the plagiarist. University of Central Punjab discourages plagiarism and warns 
            students to be careful while using someone else's work in their written work to meet requirements of a course or a degree. It may 
            be clarified that quotes which are brief or are acknowledged as quotes do not constitute plagiarism.
            Be watchful - Every written material/assignment shall come under the careful scrutiny of others. Do  ensure that published work of 
            others is properly cited; source of unpublished material obtained from lectures, oral communication or interviews are duly acknowledged. 
            UCP's statutes 2004 - Clause 22 at Chapter 15 and UCP regulations 2005 - Clause 8.18 and Clause 13 at Chapter 13 deal with plagiarism and 
            intellectual property rights, which may be consulted by the UCP students and employees.
            A fellow student, a Faculty member or a member of the UCP Administration can report any instance of plagiarism to the Dean of the Faculty,
            who after P
            </p>

            </div>
            
        </div>
    )
}

class CourseOutline extends Component{
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
                        
                        <Col ><RenderOutline></RenderOutline></Col>
                    </Row>
                </Container>
                
                
           </div>
        
       )
     }
    }
    export default CourseOutline;