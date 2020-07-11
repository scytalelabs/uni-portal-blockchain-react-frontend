import React from 'react';
import {Navbar, Container, Button, Row, Col, ButtonToolbar} from 'reactstrap';

import './main.css';
import axios from 'axios';
import { baseUrl } from '../shared/basedUrl';

function deleteStudentSection(data){
    console.log("DATA",data);
    const RequestBody={
    semester: data.semester,
    course: data.course,
    reg_no: data.reg_no
    }

    const token=localStorage.getItem('bearer_token');
    axios.defaults.headers.common['Authorization']=token;
    console.log("admin/1/assign_section/teachers",RequestBody)
    axios.delete(baseUrl+"admin/1/assign_section/teachers",RequestBody)
    .then(response=>{
        console.log("RESPONSE :",response);
        // window.location.reload(false);
        })
        .catch(error=>{
        console.log(error)
        })



}
const TeacherDataDisplay =({hold})=>{
    console.log("COMPONENT",hold);

        const datalist=hold.length?(hold.map(data=>{
        return(
            <div key={data.section}>
                <hr style={{border:'3px solid black'}}></hr>
                <Row>
                    <Col>Name: {data.Teachername}</Col>
                    <Col>Semester: {data.semester}</Col>
                </Row>
                <br></br>
                <Row>
                    <Col>Course: {data.course}</Col>
                    <Col>Section: {data.section}</Col>
                </Row>
                <br></br>
                <Row>
                    <Col>Registration No: {data.reg_no}</Col>
                </Row>
                <br></br>
                <Button type="submit"  onClick={()=>deleteStudentSection(data)} style={{backgroundColor:'#c4c1cf',color:'black',borderRadius: '35px',paddingLeft:'30px',paddingRight:'30px'  ,float:'right'}}>
                    Delete
                </Button>
                <br></br>
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
export default TeacherDataDisplay;