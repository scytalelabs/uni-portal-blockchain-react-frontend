import React,{Component} from 'react';
import { Container} from 'reactstrap';
import { Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import Notification from './StudentAnnouncementDisplayComponent';
import './main.css';
import { getAnnouncement } from '../redux/ActionCreators';
import StudentNavbarComponent from './StudentNavbarComponent';
import { connect } from 'react-redux';
import StudentSidebar1 from './StudentSidebar1Component';
import { baseUrl } from '../shared/basedUrl';
import axios from 'axios';



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


function RenderCoursesData(){
    const section=localStorage.getItem('section');
    const course=localStorage.getItem('course');
    return(
        <div className='container' style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}}>

                <Link to={'/student/course/Announcement/'+course+'/'+section}>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            Announcement <span>&#x276F;</span>
                        </Col>
                    </Row>
                </Link>
                <Link to={'/student/course/CourseOutline/'+course+'/'+section}>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                            Course Outline
                        </Col>
                    </Row>
                </Link>
                <Link to={'/student/course/CourseMaterial/'+course+'/'+section}>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                            Course Material
                        </Col>
                    </Row>
                </Link>
                <Link to={'/student/course/GradeBook/'+course+'/'+section}>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                            Grade Book
                        </Col>
                    </Row>
                </Link>
                <Link to={'/student/course/LeaveStatus/'+course+'/'+section}>
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


class StudentCourse extends Component{
    constructor(props){
      super(props);
      this.getAnnouncement=this.getAnnouncement.bind(this);
    }
    
    state={
        course:[]
    }

    getAnnouncement(announcementinfo){

        this.props.getAnnouncement(announcementinfo);
    }
    
      componentDidMount(){

        let id=this.props.match.params.std_id;
        this.setState({id:id});
        const section=localStorage.getItem('section');
        const course=localStorage.getItem('course');
        const token=localStorage.getItem('bearer_token');
        const regno=localStorage.getItem('regno');
        const semester=localStorage.getItem('semester');
        axios.defaults.headers.common['Authorization']=token;

          
        axios.get(baseUrl+'student/'+regno+'/'+semester+'/courses')
        .then( res => {
            this.setState({
                courses:res.data
            });
        })
        .catch(error=>{
            console.log(error)
        })
        const announcementinfo={
            semester:semester,
            regno:regno,
            section:section,
            course:course
        }
    
        axios.defaults.headers.common['Authorization']=token;
        axios.get(baseUrl+"student/"+announcementinfo.regno+"/"+announcementinfo.semester+"/"+announcementinfo.course+"/"+announcementinfo.section+"/announcements")
        .then(response=>{
            console.log("RESPONSE :",response);
                this.getAnnouncement(response.data);
          })
          .catch(error=>{
            console.log(error)
          })
    }
     render(){
        console.log("ACH G",this.props.match.params);
        localStorage.setItem("course",this.props.match.params.course);
        console.log("COURSESSSSIS :",this.state.courses)
        if(this.state.course.length!==0)
        {
            this.state.courses.map(list => 
                {
                if(list.course_code==this.props.match.params.course){
                    console.log("COURSE IS :",list.course)
                    localStorage.setItem("course_name",list.course);
    
            }})
        }
        
        localStorage.setItem("section",this.props.match.params.section);
       return(
           <div className='bg4'>

               <StudentNavbarComponent></StudentNavbarComponent>
                <Container fluid={true}> 
                    <Row>
                        <Col md={{offset:0}}><StudentSidebar1 courses={this.state.courses}></StudentSidebar1></Col>
                        <Col md={{offset:0}}><RenderSideBar2></RenderSideBar2></Col>

                        <Col> <br/><br/><Notification notifications={this.props.notifications}></Notification></Col>
                    </Row>
                </Container>


           </div>

       )
     }
    }
    const mapStateoProps=(state)=>{
        return{
            notifications:state.notifications
        }   
    }
    const mapDispatchtoProps=(dispatch)=>{
        return{
            getAnnouncement:(announcementinfo)=>{dispatch(getAnnouncement(announcementinfo))},
        }
    }
    export default connect(mapStateoProps,mapDispatchtoProps)(StudentCourse);