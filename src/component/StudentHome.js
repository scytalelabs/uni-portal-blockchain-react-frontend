import React,{Component} from 'react';
import logo from './UCP-Logo.gif';
import {Navbar, Container,} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';
import { Link, Redirect } from 'react-router-dom';
import Notification from './studentNotificationComponent'
import StudentNavbarComponent from './StudentNavbarComponent'
import './main.css';



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
// function switcher(){
//     <div className='sidebarhide'>
//                 <Row>
//                     <Col md={{ offset:10 }} >
//                     <strong style={{color:'#3C315F'}}><span onclick="RenderSideBar1()">&#x276E;&#x276E;</span> </strong>
//                     </Col>
//                 </Row>
//             </div>
// }
function RenderSideBar1(){
    return(    
        
            <div className='sidebar1'>
                <Row>
                    <Col md={{ offset:10 }} >
                    <strong style={{color:'#3C315F'}}><span >&#x276E;&#x276E;</span> </strong>
                    </Col>
                </Row>
                <RenderCourses></RenderCourses>
                <RenderStudentServices></RenderStudentServices>
            </div>
    )
}
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
      
      this.state={
        id:null,
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
        ],
    }
    }
    handleInfo(values){
        console.log('Current State is: ' + JSON.stringify(values));
          alert('Current State is: ' + JSON.stringify(values));   
      }      
     
    componentDidMount(){
        console.log(this.props);
        let id=this.props.match.params.std_id;
        this.setState({id:id});
    }
    render(){
       return(
           <div className='bg2'>
               <StudentNavbarComponent ></StudentNavbarComponent>
               <h3>{this.state.id}</h3>
                <Container fluid={true}>
                    <Row>
                        <Col  md={{ offset:0 }}>
                            <RenderSideBar1></RenderSideBar1>
                        </Col>
                        <Col  md={{ offset:1 }}>
                            <br></br>
                            <Notification notifications={this.state.notifications}></Notification>
                            <br/>
                            <RendertodaysTimetable></RendertodaysTimetable>
                        </Col>
                    </Row>
                </Container>
           </div>
       )
     }
    }
    export default StudentHome;