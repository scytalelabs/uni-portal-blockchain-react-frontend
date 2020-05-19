import React,{Component} from 'react';
import {Container} from 'reactstrap';
import { Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';

import Notification from './StudentAnnouncementDisplayComponent';
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

            <div className='sidebar'>
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
                            Announcement <span>&#x276F;</span>
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


class Announcements extends Component{
    constructor(props){
      super(props);
    }
    handleInfo(values){
        console.log('Current State is: ' + JSON.stringify(values));
          alert('Current State is: ' + JSON.stringify(values));
    }
    state={
        notifications:[
            {id:1 ,date:"12-03-2019 ",title:"Makeup Class",content:  "AssalamoAlaikum, People, you have a Makeup class on Saturday 13th April 2019 at 09:40 am in 003"},
            {id:2 ,date:"14-04-2019 ",title:"Quiz 1",content:  "AssalamoAlaikum, People, you have a Quiz on Saturday 16th April 2019 at 09:40 am in 103"},
            {id:3 ,date:"16-04-2019 ",title:"Makeup Class",content:  "AssalamoAlaikum, People, you have a Makeup class on Saturday 13th April 2019 at 09:40 am in 003"},
            {id:4 ,date:"19-04-2019 ",title:"Quiz 1",content:  "AssalamoAlaikum, People, you have a Quiz on Saturday 16th April 2019 at 09:40 am in 103"},
            {id:5 ,date:"14-04-2019 ",title:"Makeup Class",content:  "AssalamoAlaikum, People, you have a Makeup class on Saturday 13th April 2019 at 09:40 am in 003"},
            {id:6 ,date:"01-04-2019 ",title:"Makeup Class",content:  "AssalamoAlaikum, People, you have a Makeup class on Saturday 13th April 2019 at 09:40 am in 003"},
            {id:7 ,date:"19-04-2019 ",title:"Quiz 1",content:  "AssalamoAlaikum, People, you have a Quiz on Saturday 16th April 2019 at 09:40 am in 103"},
            {id:8 ,date:"20-04-2019 ",title:"Quiz 1",content:  "AssalamoAlaikum, People, you have a Quiz on Saturday 16th April 2019 at 09:40 am in 103"},
            {id:9 ,date:"26-04-2019 ",title:"Makeup Class",content:  "AssalamoAlaikum, People, you have a Makeup class on Saturday 13th April 2019 at 09:40 am in 003"},
            {id:10 ,date:"30-04-2019 ",title:"Quiz 1",content:  "AssalamoAlaikum, People, you have a Quiz on Saturday 16th April 2019 at 09:40 am in 103"},
        ]
    }
     render(){
       return(
           <div className='bg4'>
              <StudentNavbarComponent></StudentNavbarComponent>
                <Container fluid={true}>
                    <Row>
                        <Col md={{offset:0}}><RenderSideBar1></RenderSideBar1></Col>
                        <Col md={{offset:0}}><RenderSideBar2></RenderSideBar2></Col>

                        <Col> <br/><br/><Notification notifications={this.state.notifications}></Notification></Col>
                    </Row>
                </Container>


           </div>

       )
     }
    }
    export default Announcements;
