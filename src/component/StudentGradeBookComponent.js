import React,{Component} from 'react';
import {Container,} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Gradebookdata from './StudentViewGradesComponents';
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
                            Course Material
                        </Col>
                    </Row>
                </Link>
                <Link to='/student/course/GradeBook'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                            Grade Book <span>&#x276F;</span>
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

class GradeBook extends Component{
    constructor(props){
      super(props);
    }
state={
    gradebook:[
        {id:1 ,title:"Assignment",weightage:"10%",date:"Date",total_marks:"Total Marks",obtained_marks:"Obtained Marks"},
        {id:2 ,title:"Quiz",weightage:"10%",date:"Date",total_marks:"Total Marks",obtained_marks:"Obtained Marks"},
        {id:3 ,title:"Class Participation",weightage:"10%",date:"Date",total_marks:"Total Marks",obtained_marks:"Obtained Marks"},
        {id:4 ,title:"Mid-Term",weightage:"25%",date:"Date",total_marks:"Total Marks",obtained_marks:"Obtained Marks"},
        {id:5 ,title:"Final Term",weightage:"35%",date:"Date",total_marks:"Total Marks",obtained_marks:"Obtained Marks"},
        {id:6 ,title:"Project Presentation",weightage:"10%",date:"Date",total_marks:"Total Marks",obtained_marks:"Obtained Marks"}
    ],
    gradebookmarks:[
        {fid:1, id:1 ,date:"29-4-2019 12:00:00 AM",total_marks:"1",obtained_marks:"40"},
        {fid:1, id:2 ,date:"30-4-2019 12:00:00 AM",total_marks:"2",obtained_marks:"40"},
        {fid:1, id:3 ,date:"1-5-2019 12:00:00 AM",total_marks:"3",obtained_marks:"40"},
        {fid:1, id:4 ,date:"5-5-2019 12:00:00 AM",total_marks:"4",obtained_marks:"40"},
        {fid:2, id:1 ,date:"25-4-2019 12:00:00 AM",total_marks:"1",obtained_marks:"40"},
        {fid:2, id:2 ,date:"5-5-2019 12:00:00 AM",total_marks:"2",obtained_marks:"40"},
        {fid:2, id:3 ,date:"12-5-2019 12:00:00 AM",total_marks:"3",obtained_marks:"40"},
        {fid:3, id:1 ,date:"16-5-2019 12:00:00 AM",total_marks:"1",obtained_marks:"40"},
        {fid:3, id:2 ,date:"19-5-2019 12:00:00 AM",total_marks:"2",obtained_marks:"40"},
        {fid:3, id:3 ,date:"25-5-2019 12:00:00 AM",total_marks:"3",obtained_marks:"40"},
        {fid:4, id:1 ,date:"25-4-201912:00:00 AM",total_marks:"1",obtained_marks:"40"},
        {fid:5, id:1 ,date:"15-6-2019 12:00:00 AM",total_marks:"1",obtained_marks:"40"},
        {fid:6, id:1 ,date:"12-6-2019 12:00:00 AM",total_marks:"1",obtained_marks:"40"}
    ]
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
                        <Col ><Col ><Gradebookdata gradebook={this.state.gradebook} gradebookmarks={this.state.gradebookmarks}></Gradebookdata></Col></Col>
                    </Row>
                </Container>


           </div>

       )
     }
    }
    export default GradeBook;
