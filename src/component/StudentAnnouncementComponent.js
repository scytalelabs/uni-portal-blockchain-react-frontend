import React,{Component} from 'react';
import {Container} from 'reactstrap';
import { Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import Notification from './StudentAnnouncementDisplayComponent';
import './main.css';
import StudentNavbarComponent from './StudentNavbarComponent';
import { getAnnouncement } from '../redux/ActionCreators';
import StudentSidebar1 from './StudentSidebar1Component';
import axios from 'axios';
import { baseUrl } from '../shared/basedUrl';




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


class Announcements extends Component{
    constructor(props){
      super(props);
      alert("NOTIFACATION PAGE");
      this.state={
        courses:[]
    }
      this.getAnnouncement=this.getAnnouncement.bind(this);
    //   console.log(this.props);
    }
    
    getAnnouncement(announcementinfo){

        this.props.getAnnouncement(announcementinfo);
    }
    
    componentDidMount(){
        console.log("PROPS IN STUDENT HOME",this.props);
        // console.log("responce IN STUDENT HOME",response);

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
        console.log("ANN PROPS ARE", this.props);

        // console.log("NOTIFICATION PROPS ARE", this.props.notifications);
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
    export default connect(mapStateoProps,mapDispatchtoProps)(Announcements);
