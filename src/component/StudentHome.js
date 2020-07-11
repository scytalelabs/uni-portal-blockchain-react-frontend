import React,{Component} from 'react';
import {Container,} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import Notification from './studentNotificationComponent'
import StudentNavbarComponent from './StudentNavbarComponent'
import { baseUrl} from '../shared/basedUrl';
import './main.css';
import { connect } from 'react-redux';
import { getAnnouncement } from '../redux/ActionCreators';
import axios from 'axios';
import StudentSidebar1 from './StudentSidebar1Component';

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
      console.log(this.props);
      this.state={
        id:null,
        courses:[]
        }
    this.getAnnouncement=this.getAnnouncement.bind(this);
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
        const regno=localStorage.getItem('regno');
        const semester=localStorage.getItem('semester');
        axios.defaults.headers.common['Authorization']=token;
          
        axios.get(baseUrl+'student/'+regno+'/'+semester+'/courses')
        .then( res => {
            // console.lo
            this.setState({
                courses:res.data
            });
        })
        .catch(error=>{
            console.log(error)
            window.location.reload(false)
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