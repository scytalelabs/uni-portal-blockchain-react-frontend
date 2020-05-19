import React from 'react'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { Row, Col } from 'reactstrap';

var totalCreditHours=0;
var semesterCreditHaurs=0;
function RenderTermData({id, termdata}){
    return(
            termdata.map(term=>{
            if(id==term.tid)
            {
                totalCreditHours+=term.course_credit;
                return(
                    <div key={term.id}>
                        <Row style={{borderLeft:'1px solid black',borderRight:'1px solid black',marginRight:'15px'}}>
                            <Col>{term.courseid}</Col>
                            <Col>{term.course_title}</Col>
                            <Col>{term.course_credit}</Col>
                            <Col>{term.grade}</Col>
                        </Row>
                    </div>
                );
            }
        }
    ))

}

function RenderTermHeading({id,termheading, termdata}){
    return(

        termheading.map(term=>{
            return(
                <div className='container' key={term.id} >
                    <Row style={{backgroundColor:'#CEDAF1',borderLeft:'1px solid black',borderRight:'1px solid black',borderTop:'1px solid black',borderBottom:'1px solid black' ,marginRight:'15px'}}>
                        <Col>{term.courseid}</Col>
                        <Col>{term.course_title}</Col>
                        <Col>{term.course_credit}</Col>
                        <Col>{term.grade}</Col>
                    </Row>
                    <RenderTermData id={id} termdata={termdata} ></RenderTermData>
                    <Row style={{borderTop:'1px solid black',marginRight:'15px'}}>
                        <Col></Col>
                        <Col></Col>
                        <Col style={{borderLeft:'1px solid black'}}>Total {semesterCreditHaurs}</Col>
                        <Col style={{borderRight:'1px solid black'}}>GPA 4</Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col style={{borderLeft:'1px solid black',borderBottom:'1px solid black',borderRadius:'0px 0px 0px 35px'}}>Total Beginning to Date {totalCreditHours+=semesterCreditHaurs}</Col>
                        <Col style={{borderRight:'1px solid black',borderBottom:'1px solid black',borderRadius:'0px 0px 35px 0px',marginRight:'30px'}}>CGPA 4</Col>
                    </Row>
                </div>
            );

        }
    ))
}


const TranscriptData =({transcriptheadinginfo,transcriptheadingdata,terminfo,termheading,termdata})=>{

    const transcriptheadinginfolist=transcriptheadinginfo.length?(transcriptheadinginfo.map(transcriptheading=>{
        return(
            <div className='container' key={transcriptheading.id}>
                <Row style={{backgroundColor:'#CEDAF1',border:'1px solid black',marginRight:'15px'}}>
                    <Col>{transcriptheading.credit_attempted}</Col>
                    <Col>{transcriptheading.credit_accepted_toward_degree_completion}</Col>
                    <Col>{transcriptheading.credit_earned}</Col>
                    <Col>{transcriptheading.cgpa}</Col>
                </Row>
            </div>
        );

    }
    )):( null)
    const transcriptheadingdatalist=transcriptheadingdata.length?(transcriptheadingdata.map(transcriptheading=>{
        return(
            <div className='container' key={transcriptheading.id}>
               <Row style={{borderLeft:'1px solid black',borderBottom:'1px solid black',borderRight:'1px solid black',marginRight:'15px'}}>
                    <Col>{transcriptheading.credit_attempted}</Col>
                    <Col>{transcriptheading.credit_accepted_toward_degree_completion}</Col>
                    <Col>{transcriptheading.credit_earned}</Col>
                    <Col>{transcriptheading.cgpa}</Col>
                </Row>
            </div>
        );

    }
    )):( null)

    const terminfolist=terminfo.length?(terminfo.map(term=>{
        return(
            <div key={term.id}>
                <u>{term.title}</u>

                <RenderTermHeading id={term.id} termheading={termheading} termdata={termdata} ></RenderTermHeading>
                <br></br>
            </div>

        );

    }
    )):( null)




return(
    <div className='Transcript' style={{fontFamily:'"Times New Roman", Times, serif'}}>
        <div className='body'>
            <h3>Transcript</h3>
            <SimpleBar style={{ maxHeight: 492, paddingLeft:'20px' }}>
                {transcriptheadinginfolist}
                {transcriptheadingdatalist}
                {terminfolist}
            </SimpleBar>
        </div>
    </div>
    );
}

export default TranscriptData;
