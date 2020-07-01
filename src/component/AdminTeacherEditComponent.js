import React,{Component} from 'react';
import { Row, Col ,Button, Container,} from 'reactstrap';
import { Control, LocalForm} from 'react-redux-form';
import { Link } from 'react-router-dom';
import './main.css';
import AdminNavbarComponent from './AdminNavBarComponent';
import 'simplebar/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react';


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
                            STUDENT 
                        </Col>
                    </Row>
                </Link>
                <Link to='/Admin/Teacher'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            TEACHER <span>&#x276F;</span>
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
                <Link to='/Admin/Semester'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            SEMESTER
                        </Col>
                    </Row>
                </Link>
                <Link to='/Admin/Section'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            SECTION
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


class AdminTeacherEdit extends Component{
    
      constructor(props){
        super(props);
       // console.log("PROPS ARE :"+props.teacher.name);
        this.state={
          id:props.teacher.id,
          name:props.teacher.name,
          father_name:props.teacher.father_name,
          qualification:props.teacher.qualification,
          cnic:props.teacher.cnic,
          dob:props.teacher.dob,
          address:props.teacher.address,
          phone_no:props.teacher.phone_no,
          email:props.teacher.email,
          password:props.teacher.password,
          username:props.teacher.username
        }

      }
      changeHandler=e=>{
        this.setState({[e.target.name]:e.target.value})
      } 

     render(){
        const {name}=this.state;
        const {UpdateTeacher,ToggleEditing}=this.props;
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
                            <div className='Services1'style={{paddingBottom:'12px',marginBottom:'30px'}}>
                                <LocalForm >
                                <br></br>
                                    <Row className='form-group'>           
                                        <Col md={{offset:1}}>
                                            <div className='EditBox'style={{marginBottom:'32px'}}>
                                            <SimpleBar style={{ maxHeight: 320 }}>
                                                <Row>
                                                    <Col>
                                                    Name:
                                                    <Control.text model=".name" id="name" name="name" value={name} defaultValue={this.props.teacher.name} className="form-control" onChange={this.changeHandler}  style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                    <Col>
                                                    Qualification:
                                                    <Control.text model=".qualification" id="qualification" name="qualification" defaultValue={this.props.teacher.qualification} className="form-control" onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <Col>
                                                    Father Name:
                                                    <Control.text model=".father_name" id="father_name" name="father_name" defaultValue={this.props.teacher.father_name} className="form-control" onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                    <Col>
                                                    CNIC:
                                                    <Control.text model=".cnic" id="cnic" name="cnic" defaultValue={this.props.teacher.cnic} className="form-control" onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <Col>
                                                    Phone #:
                                                    <Control.text model=".phone_no" id="phone_no" name="phone_no" defaultValue={this.props.teacher.phone_no} className="form-control" onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                    <Col>
                                                    DOB:
                                                    <Control.text model=".dob" id="dob" name="dob" defaultValue={this.props.teacher.dob} className="form-control" onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <Col>
                                                    Address:
                                                    <Control.text model=".address" id="address" name="address" defaultValue={this.props.teacher.address} className="form-control" onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                    <Col>
                                                    Email:
                                                    <Control.text model=".email" id="email" name="email" defaultValue={this.props.teacher.email} className="form-control" onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <Col>
                                                    Username:
                                                    <Control.text model=".username" id="username" name="username" defaultValue={this.props.teacher.username} className="form-control" onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                    <Col>
                                                    Password:
                                                    <Control.text model=".password" id="password" name="password" defaultValue={this.props.teacher.password} className="form-control" onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                </Row>
                                                </SimpleBar>
                                            </div>
                                        </Col>
                                    </Row>
                                    
                                    <Row>
                                        <Col md={{offset:7}}>
                                            {/* <Link to='/Admin/teacher/search'> */}
                                                <Button type="submit" onClick={()=>ToggleEditing()}style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'30px',paddingRight:'30px'}}>
                                                    Discard
                                                </Button>
                                            {/* </Link> */}
                                        </Col>
                                        <Col md={{offset:0}}>
                                            {/* <Link to='/Admin/Teacher/search'> */}
                                            
                                                <Button  type="submit" onClick={()=>UpdateTeacher(this.state)} style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'30px',paddingRight:'30px'}}>
                                                    Confirm
                                                </Button>
                                            {/* </Link> */}
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
    export default AdminTeacherEdit;