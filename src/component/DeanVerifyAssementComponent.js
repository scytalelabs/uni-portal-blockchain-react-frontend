import React from 'react';
import {Navbar, Container, Button, Row, Col, ButtonToolbar} from 'reactstrap';

import './main.css';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import RegNo from './TeacherRenderRegnoVerifyComponent';
import BeforMarks from './TeacherRenderBeforeMarksVerifyComponent';
import AfterMarks from './TeacherRenderAfterMarksVerifyComponent';
import DeanNavbarComponent from './DeanNavbarComponent';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/basedUrl';
import axios from 'axios';


function RenderDeanServices(){
    return(
        <div className='container' style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}}>
                    <Row style={{backgroundColor:'#F3F3F3',border:'1px solid #707070',color:'#707070'}}>
                        <Col  md={{offset:1}} >
                            <i className="fa fa-check-circle"></i>{' '}Verify Assessment By<br/>
                        </Col>
                    </Row>
                    <Link to='/dean/AssessmentVerifyBySection'>
                        <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                            <Col  md={{offset:1}}  >
                                Section 
                            </Col>
                        </Row>
                    </Link>
                    <Link to='/dean/AssessmentVerifyByCourse'>
                        <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                            <Col  md={{offset:1}}  >
                                Course 
                            </Col>
                        </Row>
                    </Link>
                    <Link to='/dean/AssessmentVerifyBySemester'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            Semester 
                        </Col>
                    </Row>
                    </Link>
                    
                    <Row style={{backgroundColor:'#F3F3F3',border:'1px solid #707070',color:'#707070'}}>
                        <Col  md={{offset:1}} >
                            <i className="fa fa-check"></i>{' '}Verify Grades By<br/>
                        </Col>
                    </Row>
                    <Link to='/dean/GradeVerifyBySection'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            Section 
                        </Col>
                    </Row>
                    </Link>
                    <Link to='/dean/GradeVerifyByCourse'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            Course 
                        </Col>
                    </Row>
                    </Link>
                    <Link to='/dean/GradeVerifyBySemester'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            Semester 
                        </Col>
                    </Row>
                    </Link>
                    <Row style={{backgroundColor:'#F3F3F3',border:'1px solid #707070',color:'#707070'}}>
                        <Col  md={{offset:1}} >
                            <i className="fa fa-thumbs-down"></i>{' '}Disapprove<br/>
                        </Col>
                    </Row>
                    <Link to='/dean/disapprove'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            Disapprove Assessment 
                        </Col>
                    </Row>
                    </Link>
        </div>
    )
}
function RenderSideBar1(){
    return(    
        
            <div className='sidebar6'>
                <Row>
                    <Col md={{ offset:10 }} >
                    <strong style={{color:'#3C315F'}}><span>&#x276E;&#x276E;</span> </strong>
                    </Col>
                </Row>
                <RenderDeanServices></RenderDeanServices>
            </div>
    )
}

function Revert(marks_type, assessment_no,semester,section,course,courses){
    console.log("HELLO ME A GYA YAHA PE",marks_type, assessment_no,semester,section,course,courses);
    let course_name;
    if(courses.length!==0)
    {
        courses.map(list=>{
            if(list.course_code===course)
            {
                course_name=list.course_name
            }
            
            if(course_name!==undefined)
            {
                console.log(course_name);
                const token=localStorage.getItem('bearer_token');
                const Req_body={
                    semester:semester,
                    course: course_name,
                    section: section,
                    marks_type: marks_type,
                    assesment_no: assessment_no
                    }
                    console.log("REQUEST BODY",Req_body);
                    axios.defaults.headers.common['Authorization']=token;
                    axios.put(baseUrl+'dean/revert_assessment_marks',Req_body)  
                    .then( res => {
                            console.log("revert_assessment_marks:",res);
                        })
                        .catch(error=>{
                            console.log(error)
                        })
    
            }
        })    
    }
    else{
        const token=localStorage.getItem('bearer_token');
        const Req_body={
            semester:semester,
            course: course,
            section: section,
            marks_type: marks_type,
            assesment_no: assessment_no
            }
            console.log("REQUEST BODY",Req_body);
            axios.defaults.headers.common['Authorization']=token;
            axios.put(baseUrl+'dean/revert_assessment_marks',Req_body)  
            .then( res => {
                console.log("revert_assessment_marks:",res);
            })
            .catch(error=>{
                console.log(error)
            })
    }
    

    
}
const DeanVerifyAssessment =({verify,state})=>{
    
    console.log("verify FUNCTON",verify)       
    console.log("verify STATE",state)  
     if(verify.status==true)
            {
                
            return(
            <div className='bg3'>
                <DeanNavbarComponent/>
                <Container fluid={true}>
                    <Row>
                        <Col  md={{ offset:0 }}>
                            <RenderSideBar1></RenderSideBar1>
                        </Col>
                        <Col>
                            <div className='Verifydean'style={{fontFamily:'"Times New Roman", Times, serif'}}>
                                <div className='body'>
                                <br></br>
                                <h3>VERIFICATION</h3>
                                    <SimpleBar style={{ maxHeight: 400 }}>
                                        <h4 >{verify.message}</h4>
                                    </SimpleBar>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    
                </Container>
            </div>
            )
        }
        else if(state.section!==null && state.course!==null && state.semester!==null){
        const datalist=verify.data.length?(verify.data.map(data=>{
        return(
            <div>
                <hr></hr>
                <h6>Assessment :{data[0].marks_type} {data[0].assessment_no} </h6>
                <hr></hr>
                <Row style={{backgroundColor:'#3C315F',color:'white',marginRight:"30px"}}>
                    <Col>Registrtion Number</Col>
                    <Col>Marks Before Tampring</Col>
                    <Col>Marks Now</Col>
                </Row>
                <Row>
                    <Col><RegNo regno={data[0].reg_no}></RegNo>  </Col>
                    <Col><BeforMarks marks_before={data[0].marks_before}></BeforMarks> </Col>
                    <Col><AfterMarks marks_now={data[0].marks_now}></AfterMarks> </Col>
                </Row>
                <Row>
                
                    <Container>
                        <Button onClick={()=>Revert(data[0].marks_type, data[0].assessment_no,state.semester,state.section,state.course,state.courses)} style={{backgroundColor:'#3C315F', float:"right",marginRight:'10px'}}>Revert Assessment</Button>
                    </Container>
                </Row> 
            </div>

        )
    }
 )):( <div></div>)

            return(
                <div className='bg3'>
                    <DeanNavbarComponent/>
                    <Container fluid={true}>
                        <Row>
                            <Col  md={{ offset:0 }}>
                                <RenderSideBar1></RenderSideBar1>
                            </Col>
                            <Col>
                            <div className='Verifydean'style={{fontFamily:'"Times New Roman", Times, serif'}}>
                                <div className='body'>
                                    <h3>VERIFICATION</h3>
                                    <SimpleBar style={{ maxHeight: 400 }}>
                                    <h4 >{verify.message}</h4>
                                    {datalist}
                                    </SimpleBar>
                                    <br></br>     
                                </div>
                            </div>
                            </Col>
                        </Row>
                        
                    </Container>
                </div>
            )
        }
        else if(state.section===null && state.course!==null && state.semester!==null){
            // let coursename=state.course
            const datalist=verify.data.length?(verify.data.map(data=>{
            return(
                <div>
                    <hr></hr>
                    <h6>Section : {data[0].section}</h6>
                    <h6>Assessment :{data[0].marks_type} {data[0].assessment_no} </h6>
                    <hr></hr>
                    <Row style={{backgroundColor:'#3C315F',color:'white',marginRight:"30px"}}>
                        <Col>Registrtion Number</Col>
                        <Col>Marks Before Tampring</Col>
                        <Col>Marks Now</Col>
                    </Row>
                    <Row>
                        <Col><RegNo regno={data[0].reg_no}></RegNo>  </Col>
                        <Col><BeforMarks marks_before={data[0].marks_before}></BeforMarks> </Col>
                        <Col><AfterMarks marks_now={data[0].marks_now}></AfterMarks> </Col>
                    </Row>
                    <Row>
                        <Container>
                        <Button onClick={()=>Revert(data[0].marks_type, data[0].assessment_no,state.semester,data[0].section,state.course,state.courses)} style={{backgroundColor:'#3C315F', float:"right",marginRight:'10px'}}>Revert Assessment</Button>
                        </Container>
                    </Row>
                    
                </div>
                
    
            )
        }
     )):( <div></div>)
    
                return(
                    <div className='bg3'>
                        <DeanNavbarComponent/>
                        <Container fluid={true}>
                            <Row>
                                <Col  md={{ offset:0 }}>
                                    <RenderSideBar1></RenderSideBar1>
                                </Col>
                                <Col>
                                <div className='Verifydean'style={{fontFamily:'"Times New Roman", Times, serif'}}>
                                    <div className='body'>
                                        <h3>VERIFICATION</h3>
                                            <SimpleBar style={{ maxHeight: 400 }}>
                                            <h4 >{verify.message}</h4>
                                            {datalist}
                                            </SimpleBar>
                                            <br></br>
                                            
                                            
                                    </div>
                                </div>
                                </Col>
                            </Row>
                            
                        </Container>
                    </div>
                )
            }
            else if(state.section===null && state.course===null && state.semester!==null){
                const datalist=verify.data.length?(verify.data.map(data=>{
                return(
                    <div>
                        <hr></hr>
                        <h6>Section : {data[0].section}</h6>
                        <h6>Course : {data[0].course}</h6>
                        <h6>Assessment :{data[0].marks_type} {data[0].assessment_no} </h6>
                        <hr></hr>
                        <Row style={{backgroundColor:'#3C315F',color:'white',marginRight:"30px"}}>
                            <Col>Registrtion Number</Col>
                            <Col>Marks Before Tampring</Col>
                            <Col>Marks Now</Col>
                        </Row>
                        <Row >
                            <Col><RegNo regno={data[0].reg_no}></RegNo>  </Col>
                            <Col><BeforMarks marks_before={data[0].marks_before}></BeforMarks> </Col>
                            <Col><AfterMarks marks_now={data[0].marks_now}></AfterMarks> </Col>
                        </Row>
                        <Row>
                            <Container>
                                <Button onClick={()=>Revert(data[0].marks_type, data[0].assessment_no,state.semester,data[0].section,data[0].course,state.courses)} style={{backgroundColor:'#3C315F', float:"right",marginRight:'10px'}}>Revert Assessment</Button>
                            </Container>
                        </Row>
                        
                        
                    </div>
                    
        
                )
            }
         )):( <div></div>)
        
                    return(
                        <div className='bg3'>
                            <DeanNavbarComponent/>
                            <Container fluid={true}>
                                <Row>
                                    <Col  md={{ offset:0 }}>
                                        <RenderSideBar1></RenderSideBar1>
                                    </Col>
                                    <Col>
                                    <div className='Verifydean'style={{fontFamily:'"Times New Roman", Times, serif'}}>
                                        <div className='body'>
                                            <h3>VERIFICATION</h3>
                                                <SimpleBar style={{ maxHeight: 400 }}>
                                                <h4 >{verify.message}</h4>
                                                {datalist}
                                                </SimpleBar>
                                                <br></br>
                                                
                                                
                                        </div>
                                    </div>
                                    </Col>
                                </Row>
                                
                            </Container>
                        </div>
                    )
                }
    }
export default DeanVerifyAssessment;