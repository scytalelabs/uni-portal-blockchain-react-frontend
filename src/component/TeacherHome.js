import React,{Component} from 'react';
import { Row, Col,Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import './main.css';
import TeacherNavbarComponent from './TeacherNavbarComponent';

function RenderCourses(){
    return(
        <div className='container' style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}}>

                <Row style={{backgroundColor:'#F3F3F3',border:'1px solid #707070',color:'#707070'}} >
                    <Col  md={{offset:1}} >
                        <i className="fa fa-align-justify"></i>{' '}Courses<br/>
                    </Col>
                </Row>
                <Link to='/teacher/course'>
                <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                    <Col  md={{offset:1}}  >
                        OOAD(C)
                    </Col>
                </Row>
                </Link>
                <Link to='/teacher/course'>
                <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                    <Col  md={{offset:1}} >
                        OOAD LAB(C)
                    </Col>
                </Row>
                </Link>
                <Link to='/teacher/course'>
                <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                    <Col  md={{offset:1}} >
                        DATABASE(E)
                    </Col>
                </Row>
                </Link>
                <Link to='/teacher/course'>
                <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                    <Col  md={{offset:1}} >
                        DATABASE LAB(E)
                    </Col>
                </Row>
                </Link>
                <Link to='/teacher/course'>
                <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                    <Col  md={{offset:1}} >
                    COMPUTER ARCHITECTURE(F)
                    </Col>
                </Row>
                </Link>
                <Link to='/teacher/course'>
                <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                    <Col  md={{offset:1}} >
                    VIEW ALL COURSES
                    </Col>
                </Row>
                </Link>
                
                </div>
    )
}

function RenderTeacherServices(){
    return(
        <div className='container' style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}}>
                
                    <Row style={{backgroundColor:'#F3F3F3',border:'1px solid #707070',color:'#707070'}}>
                        <Col  md={{offset:1}} >
                            <i className="fa fa-user"></i>{' '}Teacher Services<br/>
                        </Col>
                    </Row>
                <Link to='/teacher/personalinformation'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            PERSONAL INFORMATION
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
                <RenderTeacherServices></RenderTeacherServices>
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

class TeacherHome extends Component{
    constructor(props){
      super(props);
    }
    handleInfo(values){
        console.log('Current State is: ' + JSON.stringify(values));
          alert('Current State is: ' + JSON.stringify(values));   
      }      
     render(){
       return(
           <div className='bg2'>
               <TeacherNavbarComponent></TeacherNavbarComponent>
               <Container fluid={true}>
                    <Row>
                        <Col  md={{ offset:0 }}><RenderSideBar1></RenderSideBar1></Col>
                        <Col  md={{ offset:1 }}><RendertodaysTimetable></RendertodaysTimetable></Col>
                    </Row>
                </Container>
                
                
           </div>
       )
     }
    }
    export default TeacherHome;