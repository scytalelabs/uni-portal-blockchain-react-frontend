import React from 'react';
import {Navbar, Container, Button, Row, Col} from 'reactstrap';

import './main.css';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import RegNo from './TeacherRenderRegnoVerifyComponent';
import BeforMarks from './TeacherRenderBeforeMarksVerifyComponent';
import AfterMarks from './TeacherRenderAfterMarksVerifyComponent';

const TeacherVerifyMarks =({verify})=>{
    
    console.log("verify FUNCTON",verify)
        if(verify.status==true)
            {
                
            return(
                <div className='Verify'style={{fontFamily:'"Times New Roman", Times, serif'}}>
                    <br></br>    
                <br></br>    
                <div className='body'>
                    
                <h3>VERIFICATION</h3>
                    <SimpleBar style={{ maxHeight: 400 }}>
                        <h4 >Data is Not Tampered</h4>
                    </SimpleBar>

                </div>
            </div>
            )
        }
        else{
            const datalist=verify.data.length?(verify.data.map(data=>{
                return(
                    <div>
                        <Row>
                            <Col>Registration Number</Col>
                            <Col>Marks Before Tampering</Col>
                            <Col>Marks Now</Col>
                        </Row>
                        <Row>
                            <Col><RegNo regno={data.reg_no}></RegNo>  </Col>
                            <Col><BeforMarks marks_before={data.marks_before}></BeforMarks> </Col>
                            <Col><AfterMarks marks_now={data.marks_now}></AfterMarks> </Col>
                        </Row>
                        
        
                    </div>
                    
        
                )
            }
         )):( <div></div>)
            return(
                <div className='Verify'style={{fontFamily:'"Times New Roman", Times, serif'}}>
                    <br></br>    

                <div className='body'>
                <br></br>    
                <h3>VERIFICATION</h3>
                <br></br>    
                    <SimpleBar style={{ maxHeight: 400 }}>
                    <h4>Data is Tampered</h4>
                    {datalist}
                    </SimpleBar>

                </div>
            </div>
            )
        }
    }
export default TeacherVerifyMarks;