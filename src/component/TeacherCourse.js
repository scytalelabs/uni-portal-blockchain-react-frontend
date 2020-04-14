import React,{Component} from 'react';
import logo from './UCP-Logo.gif';
import {Navbar} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import './main.css';


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
        
            <div className='sidebar1'>
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


function RenderCoursesData(){
    return(
        <div className='container' style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}}>
                
                <Link to='/teacher/course/SetWeightage'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            Set Weightage <span>&#x276F;</span>
                        </Col>
                    </Row>
                </Link>
                <Link to='/teacher/course/ViewList'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                            View List
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
function RenderSetWeightage(){
    return(
        <div className='SetWeightage' style={{fontFamily:'"Times New Roman", Times, serif'}}>
            
            <LocalForm >
            <Row className='form-group'>
                <Col><h4>Type</h4></Col>
                <Col></Col>
                <Col><h4>Percentage</h4></Col>
            </Row>
            <hr></hr>
            <Row className='form-group'>
                    <Col>Assignment</Col>
                    <Row>
                        <Col></Col>
                        <Col ><Control.text model=".input" id="input" name="input" type='input' placeholder="" className="form-control" /> </Col>
                        <Col></Col>
                    </Row>
                </Row> 
                <Row className='form-group'>
                    <Col>Quiz</Col>
                    <Row>
                        <Col></Col>
                        <Col ><Control.text model=".input0" id="input0" name="input0" type='input0' placeholder="" className="form-control" /> </Col>
                        <Col></Col>
                    </Row>
                </Row> 
                
                <Row className='form-group'>
                    <Col>Mid-Term</Col>
                    
                    <Row>
                        <Col></Col>
                        <Col><Control.text model=".input1" id="input1" name="input1" type='input1' placeholder="" className="form-control" />   </Col>
                        <Col></Col>
                    </Row>
                </Row>
                
                <Row className='form-group'>
                    <Col>Class Participation</Col>
                    
                    <Row>
                        <Col></Col>
                        <Col ><Control.text model=".input2" id="input2" name="input2" type='input2' placeholder="" className="form-control" />   </Col>
                        <Col></Col>
                    </Row>
                </Row>
                
                <Row className='form-group'>
                    <Col>Final Term</Col>
                    
                    <Row>
                        <Col></Col>
                        <Col ><Control.text model=".input3" id="input3" name="input3" type='input3' placeholder="" className="form-control" />   </Col>
                        <Col></Col>
                    </Row>
                </Row>
                
                <Row className='form-group'>
                    <Col>Project</Col>
                    
                    <Row>
                        <Col></Col>
                        <Col ><Control.text model=".input4" id="input4" name="input4" type='input4' placeholder="" className="form-control" />   </Col>
                        <Col></Col>
                    </Row>
                </Row>
                
                <Row className='form-group'>
                    <Col>Project Presentation</Col>

                    <Row>
                        <Col></Col>
                        <Col ><Control.text model=".input5" id="input5" name="input5" type='input5' placeholder="" className="form-control" />   </Col>
                        <Col></Col>
                    </Row>
                    
                </Row>
                
                <Row className='form-group'>
                    <Col>Total<p style={{color:'red'}}>(MUST BE 100)</p></Col>
                    
                    <Row>
                    <Col></Col>
                    <Col ><Control.text model=".input6" id="input6" name="input6" type='input6' width='10px' placeholder="" className="form-control" />   </Col>
                    <Col></Col>
                    </Row>
                    
                </Row>
           </LocalForm>
        </div>
    )
}

 

class TeacherCourse extends Component{
    constructor(props){
      super(props);
    }
    handleInfo(values){
        console.log('Current State is: ' + JSON.stringify(values));
          alert('Current State is: ' + JSON.stringify(values));   
      }      
     render(){
       return(
           <div className='bg5'>
               <Navbar style={{backgroundColor: '#A5A4A4'}} dark>
                    <span>
                        <h5 style={{color:'white'}}><img src={logo} className="logo" alt="logo"></img> University of Central Punjab</h5>
                    </span>
                    <LocalForm onSubmit={(values)=>this.handleLogin(values)}>
                        <Row className='form-group'>
                            <Col className='shadow' style={{paddingRight:'50px'}}>
                                    <Control.select  model='.userinfo' id='userinfo' name='userinfo' className='form-control' style={{backgroundColor:'#ECECEC',borderRadius: '35px',paddingRight:'50px'}}>
                                        <option value='Muhammad Adrees' selected>Muhammad Adrees</option>
                                        <option>L1F16BSCS0151</option>
                                        <option>adreees012@ucp.edu.pk></option>
                                        <option>Logout</option>
                                    </Control.select>
                                </Col>
                        </Row>
                    </LocalForm>
                </Navbar>
                <div style={{backgroundColor:'#3C315F'}}>
                    <br></br>
                </div>
                <Row>
                    <Col md={{offset:0}}><RenderSideBar1></RenderSideBar1></Col>
                    <Col md={{offset:0}}><RenderSideBar2></RenderSideBar2></Col>
                    
                    <Col> <br/><br/><RenderSetWeightage></RenderSetWeightage></Col>
                </Row>
                
                
           </div>
        
       )
     }
    }
    export default TeacherCourse;