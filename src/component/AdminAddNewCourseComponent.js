import React,{Component} from 'react';
import { Row, Col ,Button, Container} from 'reactstrap';
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
                            STUDENT 
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
                            COURSE <span>&#x276F;</span>
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


class AdminAddNewCourse extends Component{
    
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
                            <div className='Services1'style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}}>
                                <LocalForm onSubmit={(values)=>this.handleSearch(values)}>
                                <br></br>
                                    
                                    <Row className='form-group'>           
                                        <Col md={{offset:1}}>
                                            <div className='EditBox'>
                                                <h3>ADD COURSE</h3>
                                            <br></br>
                                                <Row>
                                                    <Col>
                                                    Course:
                                                    <Control.text model=".Course" id="Course" name="Course" value={search} placeholder="Enter Course Name" className="form-control" onChange={this.changeHandler}  style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                    <Col>
                                                    Semester:
                                                    <Control.text model=".semester" id="semester" name="semester" value={search} placeholder="Enter Semester(FALL 19)" className="form-control" onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <Col>
                                                Section:
                                                    <Control.text model=".section" id="section" name="section" value={search} placeholder="Enter Section Name" className="form-control" onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                    <Col>
                                                    Credi Hours:
                                                    <Control.text model=".credithours" id="credithours" name="credithours" value={search} placeholder="Enter Credit Hours" className="form-control" onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <Col>
                                                    Course Code:
                                                    <Control.text model=".coursecode" id="coursecode" name="coursecode" value={search} placeholder="Enter Course Code" className="form-control" onChange={this.changeHandler} style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                    
                                                </Row>
                                                <br></br>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                    <Col md={{offset:7}}>
                                            <Link to='/Admin/Course'>
                                                <Button type="submit" style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'30px',paddingRight:'30px'}}>
                                                    Discard
                                                </Button>
                                            </Link>
                                        </Col>
                                        <Col md={{offset:1}}>
                                            <Link to='/Admin/Course/AddCourse/Add'>
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
    export default AdminAddNewCourse;