import React,{Component} from 'react';
import logo from './UCP-Logo.gif';
import {Navbar,} from 'reactstrap';
import { Row, Col,Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm} from 'react-redux-form';
import './main.css';
import { baseUrl} from '../shared/basedUrl';
import StudentNavbarComponent from './StudentNavbarComponent';
import axios from 'axios';


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
                            PERSONAL INFORMATION  <span>&#x276F;</span>
                        </Col>
                    </Row>
                </Link>
                <Link to='/student/transcript'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                            TRANSCRIPT
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
                <Row>
                    <Col>Password:</Col>
                    <Col>{StudentInfo.StudentInfo.password}</Col>
                </Row>

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
                        <Col  md={{offset:0}}><RenderSideBar1></RenderSideBar1></Col>        
                        <Col  ><Renderpersonalinformation StudentInfo={this.state.StudentInfo}></Renderpersonalinformation></Col>
                    </Row>
                </Container>    
            </div>

       )
     }
    }
    export default personalinformation;