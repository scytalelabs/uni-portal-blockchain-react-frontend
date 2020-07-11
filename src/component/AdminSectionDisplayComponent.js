import React from 'react';
import {Row, Col} from 'reactstrap';
import './main.css';


const SectionDataDisplay =({hold})=>{
    console.log("COMPONENT",hold);

        const datalist=hold.length?(hold.map(data=>{
        return(
            <div>
                <hr style={{border:'3px solid black'}}></hr>
                <Row md={{offset:1}}>
                    <Col> Course:</Col>
                    <Col> {data.course}</Col>
                    <Col> Course Code:</Col>
                    <Col> {data.courseCode}</Col>
                </Row>
                <Row md={{offset:1}}>
                    <Col> Section:</Col>
                    <Col> {data.section}</Col>
                    <Col> Semester:</Col>
                    <Col> {data.semester}</Col>
                </Row>            
                <Row md={{offset:1}}>
                    <Col> Credit Hours:</Col>
                    <Col> {data.credithours}</Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <hr style={{border:'3px solid black'}}></hr>
            </div>
            
        )
    }
    )):( <div></div>)

            return(
                <div >
                    {datalist}
                    <br></br>
                </div>
            )
    }
export default SectionDataDisplay;