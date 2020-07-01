import React,{Component} from 'react';
import logo from './UCP-Logo.gif';
import {Navbar, Container,} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { Link} from 'react-router-dom';
import Notification from './studentNotificationComponent'
import StudentNavbarComponent from './StudentNavbarComponent'
import { baseUrl} from '../shared/basedUrl';
import './main.css';
import { connect } from 'react-redux';
import { getAnnouncement } from '../redux/ActionCreators';
import axios from 'axios';
import StudentSidebar1 from './StudentSidebar1Component';



// function RenderCourses(courses){
//     console.log("COURSES ARE",courses.courses);
//     return(
//         courses.courses.map(list=>{
//             return(
//                 <Link to={'/student/course/'+list.course}>
//                     <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
//                         <Col  md={{offset:1}}  >
//                         {list.course} ({list.section})
//                         </Col>
//                     </Row>
//                 </Link>
//                 );
//             }
//     )
//     );
// }

// function RenderStudentServices(){
//     return(
//         <div className='container' style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}}>
                
//                     <Row style={{backgroundColor:'#F3F3F3',border:'1px solid #707070',color:'#707070'}}>
//                         <Col  md={{offset:1}} >
//                             <i className="fa fa-user"></i>{' '}Student Services<br/>
//                         </Col>
//                     </Row>
//                 <Link to='/student/personalinformation'>
//                     <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
//                         <Col  md={{offset:1}}  >
//                             PERSONAL INFORMATION
//                         </Col>
//                     </Row>
//                 </Link>
//                 <Link to='/student/transcript'>
//                     <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
//                         <Col  md={{offset:1}} >
//                             TRANSCRIPT
//                         </Col>
//                     </Row>
//                 </Link>
//                 <Link to='/student/leavereport'>
//                     <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
//                         <Col  md={{offset:1}} >
//                             LEAVE STATUS REPORT
//                         </Col>
//                     </Row>
//                 </Link>         
//         </div>
//     )
// }
// function switcher(){
//     <div className='sidebarhide'>
//                 <Row>
//                     <Col md={{ offset:10 }} >
//                     <strong style={{color:'#3C315F'}}><span onclick="RenderSideBar1()">&#x276E;&#x276E;</span> </strong>
//                     </Col>
//                 </Row>
//             </div>
// }
// function RenderSideBar1(courses){
    
//     return(    
        
//             <div className='sidebar1'>
//                 <Row>
//                     <Col md={{ offset:10 }} >
//                     <strong style={{color:'#3C315F'}}><span >&#x276E;&#x276E;</span> </strong>
//                     </Col>
//                 </Row>
//                 <div className='container' style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}}>
                 
//                  <Row style={{backgroundColor:'#F3F3F3',border:'1px solid #707070',color:'#707070'}} >
//                      <Col  md={{offset:1}} >
//                          <i className="fa fa-align-justify"></i>{' '}Courses<br/>
//                      </Col>
//                  </Row>
//                 <RenderCourses courses={courses.courses}></RenderCourses>
//                 </div>
//                 <RenderStudentServices></RenderStudentServices>
//             </div>
//     )
// }
function RendertodaysTimetable(){
    return(
        <div>
            <div className='TimeTable'style={{fontFamily:'"Times New Roman", Times, serif'}}>
                <div className='TimeTablebody'>
                    <div className='container'>                    
                        <h3>Time Table</h3>
                        <hr></hr>
                        <Row style={{backgroundColor:'#CEDAF1'}}> 
                            <Col><strong>8:00-9:30</strong></Col>
                            <Col><strong>9:40-11:10</strong></Col>
                            <Col><strong>11:20-12:50</strong></Col>
                            <Col><strong>1:00-2:30</strong></Col>
                            <Col><strong>2:40-4:10</strong></Col>
                            <Col><strong>4:20-5:50</strong></Col>
                            <Col><strong>6:00-7:30</strong></Col>
                            <Col><strong>7:40-9:10</strong></Col>
                        </Row>
                        <hr></hr>
                        <Row>
                            <Col style={{backgroundColor:'#CEDAF1'}}>Monday</Col>
                            <Col></Col>
                            <Col>OOAD(C)</Col>
                            <Col>DATABASE(E)</Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                        </Row>
                        <hr></hr>
                        <Row>
                            <Col style={{backgroundColor:'#CEDAF1'}}>Tuesday</Col>
                            <Col></Col>
                            <Col></Col>
                            <Col>OOAD(C) Lab</Col>
                            <Col>OOAD(C) Lab</Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                        </Row>
                        <hr></hr>
                        <Row>
                            <Col style={{backgroundColor:'#CEDAF1'}}>Wednesday</Col>
                            <Col></Col>
                            <Col>OOAD(C)</Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                        </Row>
                        <hr></hr>
                        <Row>
                            <Col style={{backgroundColor:'#CEDAF1'}}>Thursday</Col>
                            <Col></Col>
                            <Col></Col>
                            <Col>DATABASE(E)</Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                        </Row>
                        <hr></hr>
                        <Row>
                            <Col style={{backgroundColor:'#CEDAF1'}}>Saturday</Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                        </Row>
                        <hr></hr>
                        <Row>
                            <Col style={{backgroundColor:'#CEDAF1'}}>Sunday</Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                        </Row>
                    </div>
                </div>
                <br></br>
            </div>
            <div className ='fridaytimetable'>
                <div className='container'>
                    <Row style={{backgroundColor:'#CEDAF1'}}> 
                        <Col><strong>8:00-9:30</strong></Col>
                        <Col><strong>9:40-11:10</strong></Col>
                        <Col><strong>11:20-12:50</strong></Col>
                        <Col><strong>2:00-3:30</strong></Col>
                        <Col><strong>3:40-4:10</strong></Col>
                        <Col><strong>5:20-6:50</strong></Col>
                        <Col><strong>7:00-8:30</strong></Col>
                        <Col><strong>9:40-10:10</strong></Col>
                    </Row>
                        <hr></hr>
                    <Row>
                        <Col style={{backgroundColor:'#CEDAF1'}}>Friday</Col>
                        <Col></Col>
                        <Col></Col>
                        <Col>DATABASE(E) Lab</Col>
                        <Col>DATABASE(E) Lab</Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </div>
            </div>
            
        </div>
    )
}
 

class StudentHome extends Component{
    constructor(props){
      super(props);
      alert("Home PAGE");
      console.log(this.props);
    //   axios.get(baseUrl, { headers: {"Authorization" : `Bearer ${token}`} })
    //     .then(res => {
    //         console.log(res.data);
        
    //     })
      this.state={
        id:null,
        courses:[]
        }
    this.getAnnouncement=this.getAnnouncement.bind(this);
    }
    getAnnouncement(announcementinfo){
        console.log("HELOPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
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
        
       return(
           <div className='bg2'>
               <StudentNavbarComponent ></StudentNavbarComponent>
               <h3>{this.state.id}</h3>
                <Container fluid={true}>
                    <Row>
                        <Col  md={{ offset:0 }}>
                            <StudentSidebar1 courses={this.state.courses} ></StudentSidebar1>
                        </Col>
                        <Col  md={{ offset:1 }}>
                            <br></br>
                            <Notification notifications={this.props.notifications}></Notification>
                            <br/>
                            <RendertodaysTimetable></RendertodaysTimetable>
                        </Col>
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

    export default connect(mapStateoProps,mapDispatchtoProps)(StudentHome);