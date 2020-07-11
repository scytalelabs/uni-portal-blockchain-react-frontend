import React,{Component} from 'react';
import logo from './UCP-Logo.gif';
import {Navbar, Container,} from 'reactstrap';
import { Row, Col ,Button, Label} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import './main.css';
import TeacherNavbarComponent from './TeacherNavbarComponent';
import { baseUrl } from '../shared/basedUrl';
import axios from 'axios';
import TeacherSidebar1 from './TeacherSidebar1Component';



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
            <Link to='/teacher/course/personalinformation'>
                <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                    <Col  md={{offset:1}}  >
                        PERSONAL INFORMATION <span>&#x276F;</span>
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



function Renderpersonalinformation(teacherinfo){
    return(
        <div className='PersonalInformation' style={{fontFamily:'"Times New Roman", Times, serif'}}>
            <h3>Teacher Information</h3>

            <div className='container'>
                <h5 style={{backgroundColor:'#CEDAF1'}}>Personal Information</h5>
                <Row>
                    <Col>Name</Col>
                    <Col>{teacherinfo.teacherinfo.name}</Col>
                </Row>
                <Row>
                    <Col>Father Name</Col>
                    <Col>{teacherinfo.teacherinfo.father_name}</Col>
                </Row>
                <Row>
                    <Col>Registration Number</Col>
                    <Col>{teacherinfo.teacherinfo.reg_no}</Col>
                </Row>
                <Row>
                    <Col>Email</Col>
                    <Col>{teacherinfo.teacherinfo.email}</Col>
                </Row>
                <Row>
                    <Col>CNIC:</Col>
                    <Col>{teacherinfo.teacherinfo.cnic}</Col>
                </Row>
                <Row>
                    <Col>Phone Number</Col>
                    <Col>{teacherinfo.teacherinfo.phone_no} &nbsp;&nbsp;&nbsp;<i className='fa fa-edit'></i></Col>
                </Row>
                <Row>
                    <Col>Address</Col>
                    <Col>{teacherinfo.teacherinfo.address}</Col>
                </Row>
                <Row>
                    <Col>DOB:</Col>
                    <Col>{teacherinfo.teacherinfo.dob}</Col>
                </Row>
                
                <hr></hr>
                <h5 style={{backgroundColor:'#CEDAF1'}}>Academic Information</h5>
                <Row>
                    <Col>Programme</Col>
                    <Col>BS</Col>
                </Row>
                <Row>
                    <Col>Term</Col>
                    <Col>F19</Col>
                </Row>
        
                <hr></hr>
                <h5 style={{backgroundColor:'#CEDAF1'}}>E-mail Status</h5>
                <Row>
                    <Col>Registration ID:</Col>
                    <Col>{teacherinfo.teacherinfo.reg_no}</Col>
                </Row>
                <Row>
                    <Col>Request Received Date:</Col>
                    <Col>3-11-2016 9:38:34 AM</Col>
                </Row>
                <Row>
                    <Col>Approved Email Address:</Col>
                    <Col>{teacherinfo.teacherinfo.email}</Col>
                </Row>
                <Row>
                    <Col>User Name:</Col>
                    <Col>{teacherinfo.teacherinfo.username}</Col>
                </Row>
                <br></br>
                
            </div>
        </div>
    )
}

class Teacherpersonalinformation extends Component{
    constructor(props){
      super(props);
      this.state={
        teacherinfo:{  
            id:"",
            reg_no:"",
            qualification:"",
            uid:"",
            name:"",
            cnic: "",
            dob:"",
            phone_no:"",
            address: "",
            father_name:"",
            email: "",
            username: "",
            password: ""
        },
      isLoading: false,
      courses:[]
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
        const regno=localStorage.getItem('reg_no');
        const semester=localStorage.getItem('semester');
        console.log("TOKEN IS ",token);
        console.log("REEGNO IS",regno);
        axios.defaults.headers.common['Authorization']=token;
        axios.get(baseUrl+'teacher/'+regno+'/'+semester+'/courses')
        .then( res => {
            console.log("RESPONSE IS :",res.data);
            this.setState({
                courses:res.data
            });
        })
        .catch(error=>{
            console.log(error)
            window.location.reload(false)
        })
        axios.get(baseUrl+'teacher/'+regno+'/personal_info')
        .then( res => {
            console.log("RESPONSE:",res.data)
            this.setState({
                teacherinfo:res.data[0],
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
          console.log("INFO IS",this.state.teacherinfo)
       return(
           <div className='bg5'>
               <TeacherNavbarComponent></TeacherNavbarComponent>
               <Container fluid={true}>
                    <Row>
                        <Col  md={{ offset:0 }}><TeacherSidebar1 courses={this.state.courses}></TeacherSidebar1></Col>
                        <Col ><Renderpersonalinformation teacherinfo={this.state.teacherinfo}></Renderpersonalinformation></Col>
                    </Row>
                </Container>
           </div>
        
       )
     }
    }
    export default Teacherpersonalinformation;