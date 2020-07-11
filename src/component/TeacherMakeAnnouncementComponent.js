import React,{Component} from 'react';
import {Container} from 'reactstrap';
import { Row, Col ,Button} from 'reactstrap';
import { Control, LocalForm} from 'react-redux-form';
import { Link } from 'react-router-dom';

import './main.css';
import TeacherNavbarComponent from './TeacherNavbarComponent';
import TeacherSidebar1 from './TeacherSidebar1Component';
import axios from 'axios';
import {addAnnouncement} from '../redux/ActionCreators'
import { baseUrl } from '../shared/basedUrl';
import { connect } from 'react-redux';


function RenderCoursesData(){
    const section=localStorage.getItem('section');
    const course=localStorage.getItem('course');
    return(
        <div className='container' style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}}>

                <Link to={'/teacher/course/Announcement/'+course+'/'+section}>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            Announcement 
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
                            Make Announcement <span>&#x276F;</span> 
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


class TeacherMakeAnnouncement extends Component{
    
      constructor(props){
        const section=localStorage.getItem('section');
        const course=localStorage.getItem('course');
        const semester=localStorage.getItem('semester');
        super(props);
        this.state={
          
            semester: semester,
            course: course,
            section: section,
            announcement:null,
            date: null,
            time: new Date().toLocaleString(),
            courses:[]
        
        }
        this.addAnnouncement=this.addAnnouncement.bind(this);
      }
      changeHandler=e=>{
        this.setState({[e.target.name]:e.target.value})
      } 
      addAnnouncement(inofrmation){
          console.log("INFORMATION",inofrmation);
          this.props.addAnnouncement(inofrmation);

      }
      componentDidMount(){
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
    }


     render(){
        const {semester,course,section,announcement,date,time}=this.state;
       return(
           <div className='bg3'>
              <TeacherNavbarComponent></TeacherNavbarComponent>
              <Container fluid={true}>
                    <Row>
                    <Col md={{ offset:0 }}><TeacherSidebar1 courses={this.state.courses}></TeacherSidebar1></Col>
                    <Col md={{offset:0}}><RenderSideBar2></RenderSideBar2></Col>
                        
                        <Col md={{ offset:1 }}>
                        <br></br>
                            <div className='teacherAnnouncement' style={{paddingBottom:'28px',paddingTop:'18px'}}>
                                <LocalForm>
                                <br></br>
                                    <Row className='form-group'>           
                                        <Col md={{offset:1}}>
                                            <div className='EditBox2'style={{marginBottom:'35px'}}>
                                                <h3>Make Announcement</h3>
                                                <Row>
                                                    <Col>
                                                    Course :
                                                    <Control.text model=".course" id="course" name="course" value={course} className="form-control" style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                    <Col>
                                                    Semester:
                                                    <Control.text model=".semester" id="semester" name="semester" value={semester} className="form-control" style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <Col>
                                                    section :
                                                    <Control.text model=".section" id="section" name="section" value={section} className="form-control" style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                    <Col>
                                                    Date:
                                                    <Control.text model=".date" id="date" name="date" type='date' value={date} className="form-control"  onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <Col>
                                                    Announcement:
                                                    <Control.textarea model=".announcement" id="announcement" name="announcement" type='announcement' value={announcement} className="form-control" onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                </Row>
                                            </div>
                                            </Col>
                                    </Row>
                                    <Row>
                                        <Col md={{offset:6}}>
                                            <Button type="submit" style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'30px',paddingRight:'30px'}}>
                                                Discard
                                            </Button>
                                        </Col>
                                        <Col md={{offset:0}}>
                                        {/* onClick={()=>addStudent(this.state)} */}
                                            <Button  onClick={()=>this.addAnnouncement(this.state)} type="submit" style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'30px',paddingRight:'30px'}}>
                                                Put Announcement
                                            </Button>
                                        </Col>
                                    </Row>
                                </LocalForm>
                            </div>
                        </Col>
                    </Row>
                </Container>
           </div>
       )
     }
    }
    const mapStatetoProps=(state)=>{
        
    }
    const mapDispatchtoProps=(dispatch)=>{
        return{
            addAnnouncement:(studentinfo)=>{dispatch(addAnnouncement(studentinfo))},

        }
    }
    export default connect(mapStatetoProps,mapDispatchtoProps)(TeacherMakeAnnouncement);