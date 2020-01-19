import React,{Component} from 'react';
import logo from './UCP-Logo.gif';
import {Navbar,} from 'reactstrap';
import { Row, Col ,Button, Label} from 'reactstrap';
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
                            TRANSCRIPT  <span>&#x276F;</span>
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
function RenderSideBar1(){
    return(    
        
            <div className='sidebar1'>
                <Row>
                    <Col md={{ offset:10 }} >
                    <strong style={{color:'#3C315F'}}><span>&#x276E;&#x276E;</span> </strong>
                    </Col>
                </Row>
                <RenderCourses></RenderCourses>
                <RenderStudentServices></RenderStudentServices>
            </div>
    )
}



function RenderTranscript(){
    return(
        <div className='Transcript' style={{fontFamily:'"Times New Roman", Times, serif'}}>
            <h3>Transcript</h3>
            <div className='container'>
                <Row style={{backgroundColor:'#CEDAF1',border:'1px solid black'}}>
                    <Col>Credit Attempted</Col>
                    <Col >Credit Accepted toward degree Completion</Col>
                    <Col>Credit Earned</Col>
                    <Col>CGPA</Col>
                </Row>  
                <Row style={{borderLeft:'1px solid black',borderBottom:'1px solid black',borderRight:'1px solid black'}}>
                    <Col>48</Col>
                    <Col>48</Col>
                    <Col>48</Col>
                    <Col>4</Col>
                </Row>
            </div>
            <u>Fall 19</u>
            <div className='container' >
                
                <Row style={{backgroundColor:'#CEDAF1',borderLeft:'1px solid black',borderTop:'1px solid black',borderBottom:'1px solid black'}}>
                    <Col>Course ID</Col>
                    <Col>Course Title</Col>
                    <Col>Course Credit</Col>
                    <Col>Grade</Col>
                </Row>
                <Row style={{borderLeft:'1px solid black'}}>
                    <Col>CSSS0123</Col>
                    <Col>Data Base</Col>
                    <Col>3</Col>
                    <Col>A</Col>
                </Row>
                <Row style={{borderLeft:'1px solid black'}}>
                    <Col>CSSS0123</Col>
                    <Col>Pakistan Studies</Col>
                    <Col>3</Col>
                    <Col>A</Col>
                </Row>
                <Row style={{borderLeft:'1px solid black'}}>
                    <Col>CSSS0123</Col>
                    <Col>Numerical Computng</Col>
                    <Col>3</Col>
                    <Col>A</Col>
                </Row>
                <Row style={{borderLeft:'1px solid black'}}>
                    <Col>CSSS0123</Col>
                    <Col>Data Base Lab</Col>
                    <Col>3</Col>
                    <Col>A</Col>
                </Row>
                <Row style={{borderLeft:'1px solid black',borderBottom:'1px solid black'}}>
                    <Col>CSSS0123</Col>
                    <Col>Logical Thinking</Col>
                    <Col>3</Col>
                    <Col>A</Col>
                </Row>
                <Row >
                    <Col></Col>
                    <Col></Col>
                    <Col style={{borderLeft:'1px solid black'}}>Total 12</Col>
                    <Col style={{borderRight:'1px solid black'}}>GPA 4</Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col style={{borderLeft:'1px solid black',borderBottom:'1px solid black',borderRadius:'0px 0px 0px 35px'}}>Total Beginning to Date 12</Col>
                    <Col style={{borderRight:'1px solid black',borderBottom:'1px solid black',borderRadius:'0px 0px 35px 0px'}}>CGPA 4</Col>
                </Row>     
            </div>
            <u>Fall 19</u>
            <div className='container' >
                
            <Row style={{backgroundColor:'#CEDAF1',borderLeft:'1px solid black',borderTop:'1px solid black',borderBottom:'1px solid black'}}>
                    <Col>Course ID</Col>
                    <Col>Course Title</Col>
                    <Col>Course Credit</Col>
                    <Col>Grade</Col>
                </Row>
                <Row style={{borderLeft:'1px solid black'}}>
                    <Col>CSSS0123</Col>
                    <Col>Data Base</Col>
                    <Col>3</Col>
                    <Col>A</Col>
                </Row>
                <Row style={{borderLeft:'1px solid black'}}>
                    <Col>CSSS0123</Col>
                    <Col>Pakistan Studies</Col>
                    <Col>3</Col>
                    <Col>A</Col>
                </Row>
                <Row style={{borderLeft:'1px solid black'}}>
                    <Col>CSSS0123</Col>
                    <Col>Numerical Computng</Col>
                    <Col>3</Col>
                    <Col>A</Col>
                </Row>
                <Row style={{borderLeft:'1px solid black'}}>
                    <Col>CSSS0123</Col>
                    <Col>Data Base Lab</Col>
                    <Col>3</Col>
                    <Col>A</Col>
                </Row>
                <Row style={{borderLeft:'1px solid black',borderBottom:'1px solid black'}}>
                    <Col>CSSS0123</Col>
                    <Col>Logical Thinking</Col>
                    <Col>3</Col>
                    <Col>A</Col>
                </Row>
                <Row >
                    <Col></Col>
                    <Col></Col>
                    <Col style={{borderLeft:'1px solid black'}}>Total 12</Col>
                    <Col style={{borderRight:'1px solid black'}}>GPA 4</Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col style={{borderLeft:'1px solid black',borderBottom:'1px solid black',borderRadius:'0px 0px 0px 35px'}}>Total Beginning to Date 12</Col>
                    <Col style={{borderRight:'1px solid black',borderBottom:'1px solid black',borderRadius:'0px 0px 35px 0px'}}>CGPA 4</Col>
                </Row>     
            </div>
            <u>Fall 19</u>
            <div className='container' >
                
            <Row style={{backgroundColor:'#CEDAF1',borderLeft:'1px solid black',borderTop:'1px solid black',borderBottom:'1px solid black'}}>
                    <Col>Course ID</Col>
                    <Col>Course Title</Col>
                    <Col>Course Credit</Col>
                    <Col>Grade</Col>
                </Row>
                <Row style={{borderLeft:'1px solid black'}}>
                    <Col>CSSS0123</Col>
                    <Col>Data Base</Col>
                    <Col>3</Col>
                    <Col>A</Col>
                </Row>
                <Row style={{borderLeft:'1px solid black'}}>
                    <Col>CSSS0123</Col>
                    <Col>Pakistan Studies</Col>
                    <Col>3</Col>
                    <Col>A</Col>
                </Row>
                <Row style={{borderLeft:'1px solid black'}}>
                    <Col>CSSS0123</Col>
                    <Col>Numerical Computng</Col>
                    <Col>3</Col>
                    <Col>A</Col>
                </Row>
                <Row style={{borderLeft:'1px solid black'}}>
                    <Col>CSSS0123</Col>
                    <Col>Data Base Lab</Col>
                    <Col>3</Col>
                    <Col>A</Col>
                </Row>
                <Row style={{borderLeft:'1px solid black',borderBottom:'1px solid black'}}>
                    <Col>CSSS0123</Col>
                    <Col>Logical Thinking</Col>
                    <Col>3</Col>
                    <Col>A</Col>
                </Row>
                <Row >
                    <Col></Col>
                    <Col></Col>
                    <Col style={{borderLeft:'1px solid black'}}>Total 12</Col>
                    <Col style={{borderRight:'1px solid black'}}>GPA 4</Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col style={{borderLeft:'1px solid black',borderBottom:'1px solid black',borderRadius:'0px 0px 0px 35px'}}>Total Beginning to Date 12</Col>
                    <Col style={{borderRight:'1px solid black',borderBottom:'1px solid black',borderRadius:'0px 0px 35px 0px'}}>CGPA 4</Col>
                </Row>     
            </div>
            <u>Fall 19</u>
            <div className='container' >
                
            <Row style={{backgroundColor:'#CEDAF1',borderLeft:'1px solid black',borderTop:'1px solid black',borderBottom:'1px solid black'}}>
                    <Col>Course ID</Col>
                    <Col>Course Title</Col>
                    <Col>Course Credit</Col>
                    <Col>Grade</Col>
                </Row>
                <Row style={{borderLeft:'1px solid black'}}>
                    <Col>CSSS0123</Col>
                    <Col>Data Base</Col>
                    <Col>3</Col>
                    <Col>A</Col>
                </Row>
                <Row style={{borderLeft:'1px solid black'}}>
                    <Col>CSSS0123</Col>
                    <Col>Pakistan Studies</Col>
                    <Col>3</Col>
                    <Col>A</Col>
                </Row>
                <Row style={{borderLeft:'1px solid black'}}>
                    <Col>CSSS0123</Col>
                    <Col>Numerical Computng</Col>
                    <Col>3</Col>
                    <Col>A</Col>
                </Row>
                <Row style={{borderLeft:'1px solid black'}}>
                    <Col>CSSS0123</Col>
                    <Col>Data Base Lab</Col>
                    <Col>3</Col>
                    <Col>A</Col>
                </Row>
                <Row style={{borderLeft:'1px solid black',borderBottom:'1px solid black'}}>
                    <Col>CSSS0123</Col>
                    <Col>Logical Thinking</Col>
                    <Col>3</Col>
                    <Col>A</Col>
                </Row>
                <Row >
                    <Col></Col>
                    <Col></Col>
                    <Col style={{borderLeft:'1px solid black'}}>
                        Total 12
                    </Col>
                    <Col style={{borderRight:'1px solid black'}}>GPA 4</Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col style={{borderLeft:'1px solid black',borderBottom:'1px solid black',borderRadius:'0px 0px 0px 35px'}}>Total Beginning to Date 12</Col>
                    <Col style={{borderRight:'1px solid black',borderBottom:'1px solid black',borderRadius:'0px 0px 35px 0px'}}>CGPA 4</Col>
                </Row>     
            </div>
        </div>
    )
}

class Transcript extends Component{
    constructor(props){
      super(props);
    }
    handleInfo(values){
        console.log('Current State is: ' + JSON.stringify(values));
          alert('Current State is: ' + JSON.stringify(values));   
      }      
     render(){
       return(
           <div className='bg4'>
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
                    
                    <Col ><RenderTranscript></RenderTranscript></Col>
                </Row>
                
                
           </div>
        
       )
     }
    }
    export default Transcript;