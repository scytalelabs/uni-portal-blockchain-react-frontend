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
          search:''
        }
        this.handleLogin=this.handleSearch.bind(this);
      }
      handleSearch(values){
          alert('Current State is: ' + this.state);
          console.log(this.state);
      }
      changeHandler=e=>{
        this.setState({[e.target.name]:e.target.value})
      } 
     render(){
        const {search}=this.state;
       return(
           <div className='bg3'>
              <AdminNavbarComponent></AdminNavbarComponent>
              <Container fluid={true}>
                    <Row>
                        <Col  md={{ offset:0 }}>
                            <RenderSideBar1></RenderSideBar1>
                        </Col>
                        
                        <Col md={{ offset:1 }}>
                        <br></br><br></br>
                            <div className='Services1'>
                                <LocalForm onSubmit={(values)=>this.handleSearch(values)}>
                                <br></br>
                                    <Row className='form-group'>           
                                        <Col md={{offset:1}}>
                                            <div className='EditBox'>
                                                <Row>
                                                    <Col>
                                                    Name:
                                                    <Control.text model=".name" id="name" name="name" value={search} placeholder="Enter Name" className="form-control" onChange={this.changeHandler}  style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                    <Col>
                                                    Registration No:
                                                    <Control.text model=".regno" id="regno" name="regno" value={search} placeholder="Enter Registration Number" className="form-control" onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <Col>
                                                    Father Name:
                                                    <Control.text model=".fathername" id="fathername" name="fathername" value={search} placeholder="Enter Father Name" className="form-control" onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                    <Col>
                                                    CNIC:
                                                    <Control.text model=".cnic" id="cnic" name="cnic" value={search} placeholder="Enter CNIC Number" className="form-control" onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <Col>
                                                    Phone #:
                                                    <Control.text model=".phone" id="phone" name="phone" value={search} placeholder="Enter Phone Number" className="form-control" onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                    <Col>
                                                    DOB:
                                                    <Control.text model="." id="dob" name="dob" value={search} placeholder="Enter Date of Birth" className="form-control" onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <Col>
                                                    Address:
                                                    <Control.text model=".address" id="address" name="address" value={search} placeholder="Enter Address" className="form-control" onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                    <Col>
                                                    Email:
                                                    <Control.text model=".email" id="email" name="email" value={search} placeholder="Enter Email" className="form-control" onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                    <Col md={{offset:7}}>
                                            <Link to='/Admin/Student'>
                                                <Button type="submit" style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'30px',paddingRight:'30px'}}>
                                                    Discard
                                                </Button>
                                            </Link>
                                        </Col>
                                        <Col md={{offset:1}}>
                                            <Link to='/Admin/Student/AddStudent/Add'>
                                                <Button type="submit" style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'30px',paddingRight:'30px'}}>
                                                    Add
                                                </Button>
                                            </Link>
                                        </Col>
                                    </Row>
                                </LocalForm>>
                            </div>
                        </Col>
                    </Row>
                </Container>
           </div>
       )
     }
    }
    export default AdminAddNewStudent;