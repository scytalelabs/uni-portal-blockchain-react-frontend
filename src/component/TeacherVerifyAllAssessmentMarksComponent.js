import React from 'react';
import {Navbar, Container, Button, Row, Col} from 'reactstrap';

import './main.css';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import RegNo from './TeacherRenderRegnoVerifyComponent';
import BeforMarks from './TeacherRenderBeforeMarksVerifyComponent';
import AfterMarks from './TeacherRenderAfterMarksVerifyComponent';

const TeacherVerifyAllAssessmentMarks =({verifyallAssessment})=>{
    
    console.log("verify FUNCTON",verifyallAssessment.data)       
     if(verifyallAssessment.status==true)
            {
                
            return(

                <div className='Verify'style={{fontFamily:'"Times New Roman", Times, serif'}}>

                <div className='body'>
                <br></br>
                <h3>VERIFICATION</h3>
                    <SimpleBar style={{ maxHeight: 400 }}>

                        <h4 >{verifyallAssessment.message}</h4>
                    </SimpleBar>

                </div>
            </div>
            )
        }
        else{
        const datalist=verifyallAssessment.data.length?(verifyallAssessment.data.map(data=>{
        return(
            <div>
                {data[0].marks_type} {data[0].assessment_no}
                <Row>
                    <Col>Reg_No</Col>
                    <Col>Marks_Befor</Col>
                    <Col>Marks_Now</Col>
                </Row>
                <Row>
                    <Col><RegNo regno={data[0].reg_no}></RegNo>  </Col>
                    <Col><BeforMarks marks_before={data[0].marks_before}></BeforMarks> </Col>
                    <Col><AfterMarks marks_now={data[0].marks_now}></AfterMarks> </Col>
                </Row>
                

            </div>
            

        )
    }
 )):( <div></div>)

            return(

                <div className='Verify'style={{fontFamily:'"Times New Roman", Times, serif'}}>
                <div className='body'>
                <h3>VERIFICATION</h3>
                    <SimpleBar style={{ maxHeight: 400 }}>
                    <h4 >{verifyallAssessment.message}</h4>
                    {datalist}
                    </SimpleBar>

                </div>
            </div>
            )
        }
    }
export default TeacherVerifyAllAssessmentMarks;