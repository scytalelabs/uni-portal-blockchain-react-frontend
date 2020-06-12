import React,{Component} from 'react';
import {Container} from 'reactstrap';
import { Row, Col ,Button} from 'reactstrap';
import { Control, LocalForm} from 'react-redux-form';
import { Link } from 'react-router-dom';

import './main.css';
import AdminNavbarComponent from './AdminNavBarComponent';


function RenderAdminServices(){
    return(
        <div className='container' style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}}>
                
                    <Row style={{backgroundColor:'#F3F3F3',border:'1px solid #707070',color:'#707070'}}>
                        <Col  md={{offset:1}} >
                            <i className="fa fa-cog"></i>{' '}SET SECTION<br/>
                        </Col>
                    </Row>
                <Link to='/Admin/StudentSection'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            STUDENT 
                        </Col>
                    </Row>
                </Link>
                <Link to='/Admin/TeacherSection'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            TEACHER 
                        </Col>
                    </Row>
                </Link>
                <Link to='/Admin/CourseSection'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            COURSE 
                        </Col>
                    </Row>
                </Link>
                <Row style={{backgroundColor:'#F3F3F3',border:'1px solid #707070',color:'#707070'}}>
                        <Col  md={{offset:1}} >
                            <i className="fa fa-user"></i>{' '}Admin Services<br/>
                        </Col>
                </Row>
                <Link to='/Admin/Student'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            STUDENT <span>&#x276F;</span>
                        </Col>
                    </Row>
                </Link>
                <Link to='/Admin/Teacher'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            TEACHER 
                        </Col>
                    </Row>
                </Link>
                <Link to='/Admin/MarksType'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            MARKS TYPE
                        </Col>
                    </Row>
                </Link>
                <Link to='/Admin/Course'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            COURSE
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
                <RenderAdminServices></RenderAdminServices>
            </div>
    )
}


class AdminAddNewStudent extends Component{
    
      constructor(props){
        super(props);
        this.state={
          
          id:null,
          name:null,
          father_name:null,
          phone_no:null,
          address:null,
          reg_no:null,
          cnic:null,
          dob:null,
          email:null
        }
      }
      changeHandler=e=>{
        this.setState({[e.target.name]:e.target.value})
      } 

     render(){
        const {id,name,father_name,phone_no,address,reg_no,cnic,dob,email}=this.state;
        const {addStudent,toggleisAdding}=this.props;
       return(
           <div className='bg3'>
              <AdminNavbarComponent></AdminNavbarComponent>
              <Container fluid={true}>
                    <Row>
                        <Col  md={{ offset:0 }}>
                            <RenderSideBar1></RenderSideBar1>
                        </Col>
                        
                        <Col md={{ offset:1 }}>
                        <br></br>
                            <div className='Services1' style={{paddingBottom:'28px',paddingTop:'18px'}}>
                                <LocalForm>
                                <br></br>
                                    <Row className='form-group'>           
                                        <Col md={{offset:1}}>
                                            <div className='EditBox'style={{marginBottom:'16px'}}>
                                                <Row>
                                                    <Col>
                                                    Name:
                                                    <Control.text model=".name" id="name" name="name" value={name} placeholder="Enter Name" className="form-control" onChange={this.changeHandler}  style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                    <Col>
                                                    Registration No:
                                                    <Control.text model=".reg_no" id="reg_no" name="reg_no" value={reg_no} placeholder="Enter Registration Number" className="form-control" onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <Col>
                                                    Father Name:
                                                    <Control.text model=".father_name" id="father_name" name="father_name" value={father_name} placeholder="Enter Father Name" className="form-control" onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                    <Col>
                                                    CNIC:
                                                    <Control.text model=".cnic" id="cnic" name="cnic" value={cnic} placeholder="Enter CNIC Number" className="form-control" onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <Col>
                                                    Phone #:
                                                    <Control.text model=".phone_no" id="phone_no" name="phone_no" value={phone_no} placeholder="Enter Phone Number" className="form-control" onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                    <Col>
                                                    DOB:
                                                    <Control.text model="." id="dob" name="dob" value={dob} placeholder="Enter Date of Birth" className="form-control" onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <Col>
                                                    Address:
                                                    <Control.text model=".address" id="address" name="address" value={address} placeholder="Enter Address" className="form-control" onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                    <Col>
                                                    Email:
                                                    <Control.text model=".email" id="email" name="email" value={email} placeholder="Enter Email" className="form-control" onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={{offset:7}}>
                                            <Button type="submit" onClick={()=>toggleisAdding()}style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'30px',paddingRight:'30px'}}>
                                                Discard
                                            </Button>
                                        </Col>
                                        <Col md={{offset:1}}>
                                            <Button  onClick={()=>addStudent(this.state)}  type="submit" style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'30px',paddingRight:'30px'}}>
                                                Add
                                            </Button>
                                        </Col>
                                    </Row>
                                </LocalForm>
                            </div>
                        </Col>
                    </Row>
                </Container>
           </div>
       )
     }
    }
    export default AdminAddNewStudent;