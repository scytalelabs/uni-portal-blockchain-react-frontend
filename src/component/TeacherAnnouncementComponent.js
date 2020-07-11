import React,{Component} from 'react';
import {Container} from 'reactstrap';
import { Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import './main.css';

import { getAnnouncement } from '../redux/ActionCreators';
import axios from 'axios';
import { baseUrl } from '../shared/basedUrl';
import TeacherSidebar1 from './TeacherSidebar1Component';
import TeacherNavbarComponent from './TeacherNavbarComponent';
import TeacherNotification from './TeacherAnnouncemetDisplayComponent';




function RenderCoursesData(){
    const section=localStorage.getItem('section');
    const course=localStorage.getItem('course');
    return(
        <div className='container' style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}}>
            <Link to={'/teacher/course/Announcement/'+course+'/'+section}>
                <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                    <Col  md={{offset:1}}  >
                        Announcement <span>&#x276F;</span>
                    </Col>
                </Row>
            </Link>
            <Link to={'/teacher/course/SetWeightage/'+course+'/'+section}>
                <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                    <Col  md={{offset:1}}  >
                        Set Weightage 
                    </Col>
                </Row>
            </Link>
            <Link to={'/teacher/course/ViewList/'+course+'/'+section}>
                <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                    <Col  md={{offset:1}} >
                        View List
                    </Col>
                </Row>
            </Link>
            <Link to={'/teacher/course/MakeAnnouncement/'+course+'/'+section}>
                <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                    <Col  md={{offset:1}} >
                        Make Announcement
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


class TeacherAnnouncements extends Component{
    constructor(props){
      super(props);
    //   alert("NOTIFACATION PAGE");
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
        // console.log("PROPS IN STUDENT HOME",this.props);
        // console.log("responce IN STUDENT HOME",response);

        let id=this.props.match.params.std_id;
        this.setState({id:id});
        const section=localStorage.getItem('section');
        const course=localStorage.getItem('course');
        const token=localStorage.getItem('bearer_token');
        const regno=localStorage.getItem('reg_no');
        const semester=localStorage.getItem('semester');
        axios.defaults.headers.common['Authorization']=token;
        console.log("SEMESTER AND REGNO",semester,regno,token);
        axios.get(baseUrl+'teacher/'+regno+'/'+semester+'/courses')
        .then( res => {
            console.log("RESPONSE:",res.data)
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
        axios.get(baseUrl+"teacher/"+announcementinfo.regno+"/"+announcementinfo.semester+"/"+announcementinfo.course+"/"+announcementinfo.section+"/announcements")
        .then(response=>{
            console.log("RESPONSE :",response);
                this.getAnnouncement(response.data);
          })
          .catch(error=>{
            console.log(error)
          })
       

    }
     render(){
        // console.log("ANN PROPS ARE", this.props);

        // console.log("NOTIFICATION PROPS ARE", this.props.notifications);
       return(
           <div className='bg4'>
              <TeacherNavbarComponent></TeacherNavbarComponent>
                <Container fluid={true}>
                    <Row>
                        <Col md={{offset:0}}><TeacherSidebar1 courses={this.state.courses}></TeacherSidebar1></Col>
                        <Col md={{offset:0}}><RenderSideBar2></RenderSideBar2></Col>
                        <Col md={{offset:0}}> <br/><br/><TeacherNotification notifications={this.props.notifications}></TeacherNotification></Col>
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
    export default connect(mapStateoProps,mapDispatchtoProps)(TeacherAnnouncements);
