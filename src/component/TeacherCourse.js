import React,{Component} from 'react';
import logo from './UCP-Logo.gif';
import {Navbar, Container, Alert} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';
import RenderSetWeightage from './TeacherSetWeightageComponent'
import { getAnnouncement } from '../redux/ActionCreators';
import './main.css';
import TeacherNavbarComponent from './TeacherNavbarComponent';
import TeacherSidebar1 from './TeacherSidebar1Component';
import { baseUrl } from '../shared/basedUrl';
import axios from 'axios';
import TeacherNotification from './TeacherAnnouncemetDisplayComponent';
import { connect } from 'react-redux';



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
// let total=false;
// function Total(totalf){
//     console.log("total flag IS", total);
//     if(total.total==true)
//     {
//         return (
//         <Alert color="danger" style={{marginRight:'50px'}}>
//         Total Should be 100
//         </Alert>
//         ) 
//     }
//     else{
//         return(<div></div>)
//     }
// }

class TeacherCourse extends Component{
    constructor(props){
      super(props);
    //   this.setTypeWeightage=this.setTypeWeightage.bind(this);
    this.getAnnouncement=this.getAnnouncement.bind(this);
      
    }
    
    state={
        courses:[]

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
            const regno=localStorage.getItem('reg_no');
            const semester=localStorage.getItem('semester');
            axios.defaults.headers.common['Authorization']=token;
            console.log("SEMESTER AND REGNO",semester,regno,token);
            axios.get(baseUrl+'teacher/'+regno+'/'+semester+'/courses')
            .then( res => {
                console.log("RESPONSE IS :",res.data);
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
            console.log("COURSE CODE",course);
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
        localStorage.setItem("course",this.props.match.params.course);
        this.state.courses.map(list => 
                        {
                        if(list.course_code===this.props.match.params.course){
                            console.log("COURSE IS :",list.course)
                            localStorage.setItem("course_name",list.course);

        }})

        localStorage.setItem("section",this.props.match.params.section);
        const {Weightages}=this.state;
        console.log("PROPSSSSSSSSSSSSSS:",this.props.match.params.course)
        console.log("PROPSSSSSSSSSSSSSS:",this.props.match.params.section)
        console.log("this.state.course_outline:",this.state.course_outline)
       return(
           <div className='bg5'>
               
               <TeacherNavbarComponent></TeacherNavbarComponent>
               <Container fluid={true}>
                    <Row>
                        <Col md={{ offset:0 }}><TeacherSidebar1 courses={this.state.courses}></TeacherSidebar1></Col>
                        <Col md={{offset:0}}><RenderSideBar2></RenderSideBar2></Col>
                        <Col md={{offset:0}}> <br/><br/><TeacherNotification notifications={this.props.notifications}></TeacherNotification></Col>
                        {/* <Total total></Total> */}
                         {/* <RenderSetWeightage setTypeWeightage={this.setTypeWeightage} Weightages={Weightages} id={this.props.match.params.id}></RenderSetWeightage> */}
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
    export default connect(mapStateoProps,mapDispatchtoProps)(TeacherCourse);
