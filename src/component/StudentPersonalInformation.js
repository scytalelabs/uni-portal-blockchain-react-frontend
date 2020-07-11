import React,{Component} from 'react';
import logo from './UCP-Logo.gif';
import {Navbar,} from 'reactstrap';
import { Row, Col,Container} from 'reactstrap';
import './main.css';
import { baseUrl} from '../shared/basedUrl';
import StudentNavbarComponent from './StudentNavbarComponent';
import axios from 'axios';
import StudentSidebar1 from './StudentSidebar1Component';


function Renderpersonalinformation(StudentInfo){
    console.log("IN FUNCTIION",StudentInfo.StudentInfo);
        return(
        <div className='PersonalInformation' style={{fontFamily:'"Times New Roman", Times, serif'}}>
            <h3>Student Information</h3>

            <div className='container'>
                <h5 style={{backgroundColor:'#CEDAF1'}}>Personal Information</h5>
                <Row>
                    <Col>Student Name</Col>
                    <Col>{StudentInfo.StudentInfo.name}</Col>
                </Row>
                <Row>
                    <Col>Father Name</Col>
                    <Col>{StudentInfo.StudentInfo.father_name}</Col>
                </Row>
                <Row>
                    <Col>Registration Number</Col>
                    <Col>{StudentInfo.StudentInfo.reg_no}</Col>
                </Row>
                <Row>
                    <Col>Email</Col>
                    <Col>{StudentInfo.StudentInfo.email}</Col>
                </Row>
                <Row>
                    <Col>Phone Number</Col>
                    <Col>{StudentInfo.StudentInfo.phone_no} &nbsp;&nbsp;&nbsp;<i className='fa fa-edit'></i></Col>
                </Row>
                <Row>
                    <Col>Address</Col>
                    <Col>{StudentInfo.StudentInfo.address}</Col>
                </Row>
                <hr></hr>
                <h5 style={{backgroundColor:'#CEDAF1'}}>Academic Information</h5>
                <Row>
                    <Col>CGPA</Col>
                    <Col>3.93</Col>
                </Row>
                <Row>
                    <Col>Programme</Col>
                    <Col>BS</Col>
                </Row>
                <Row>
                    <Col>Term</Col>
                    <Col>F19</Col>
                </Row>
                <Row>
                    <Col>Total earn Credit hours</Col>
                    <Col>99</Col>
                </Row>
                <Row>
                    <Col>Total  attempt Credit hours</Col>
                    <Col>99</Col>
                </Row>
                <Row>
                    <Col>Accepted Credit hours</Col>
                    <Col>99</Col>
                </Row>
                <hr></hr>
                <h5 style={{backgroundColor:'#CEDAF1'}}>E-mail Status</h5>
                <Row>
                    <Col>Registration ID:</Col>
                    <Col>{StudentInfo.StudentInfo.reg_no}</Col>
                </Row>
                <Row>
                    <Col>Request Received Date:</Col>
                    <Col>3-11-2016 9:38:34 AM</Col>
                </Row>
                <Row>
                    <Col>Approved Email Address:</Col>
                    <Col>{StudentInfo.StudentInfo.email}</Col>
                </Row>
                <Row>
                    <Col>User Name</Col>
                    <Col>{StudentInfo.StudentInfo.username}</Col>
                </Row>
                <br></br>

            </div>
        </div>
    )
}
class personalinformation extends Component{
    constructor(props){
      super(props);
      this.state={
        StudentInfo:{  
            id: "",
            reg_no: "",
            uid:"",
            name:"",
            cnic: "",
            dob: "",
            phone_no:"",
            address: "",
            father_name: "",
            email: "",
            username: "",
            password: ""
        },
      isLoading: false,
          
      }
    }
    
    handleInfo(values){
        console.log('Current State is: ' + JSON.stringify(values));
          alert('Current State is: ' + JSON.stringify(values));
      }
    componentDidMount() {
        this.setState({
            isLoading:true
        })
        const token=localStorage.getItem('bearer_token');
        const regno=localStorage.getItem('regno');
        console.log("TOKEN IS ",token);
        console.log("REEGNO IS",regno);
        const semester=localStorage.getItem('semester');
        axios.defaults.headers.common['Authorization']=token;

          
        axios.get(baseUrl+'student/'+regno+'/'+semester+'/courses')
        .then( res => {
            this.setState({
                courses:res.data
            });
        })
        .catch(error=>{
            console.log(error)
        })
        axios.defaults.headers.common['Authorization']=token;
        axios.get(baseUrl+'student/'+regno+'/personal_info')
        .then( res => {
            this.setState({
                StudentInfo:res.data[0],
                isLoading:false
            })
        })
        .catch(error=>{
            console.log(error)
        })
}

     render(){
        const { isLoading } = this.state;

        if (isLoading) {
            return <p>Loading ...</p>;
          }
          
       return(
           <div className='bg4'>
               <StudentNavbarComponent></StudentNavbarComponent>
                <Container fluid={true}>
                    <Row>
                        <Col md={{offset:0}}><StudentSidebar1 courses={this.state.courses}></StudentSidebar1></Col>
                        <Col  ><Renderpersonalinformation StudentInfo={this.state.StudentInfo}></Renderpersonalinformation></Col>
                    </Row>
                </Container>    
            </div>

       )
     }
    }
    export default personalinformation;