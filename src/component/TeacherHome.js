import React,{Component} from 'react';
import { Row, Col,Container, CardColumns } from 'reactstrap';
import { Link } from 'react-router-dom';
import './main.css';
import TeacherNavbarComponent from './TeacherNavbarComponent';
import TeacherSidebar1 from './TeacherSidebar1Component';

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
      this.state={
          courses:[
              {id:1,course:"CCN",section:"C"},
              {id:2,course:"OOAD",section:"A"},
              {id:3,course:"CC",section:"B"},
              {id:4,course:"DB",section:"E"},
          ]
      }
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
                        <Col  md={{ offset:0 }}><TeacherSidebar1 courses={this.state.courses}></TeacherSidebar1></Col>
                        <Col  md={{ offset:1 }}><RendertodaysTimetable ></RendertodaysTimetable></Col>
                    </Row>
                </Container>
                
                
           </div>
       )
     }
    }
    export default TeacherHome;