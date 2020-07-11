import React,{Component} from 'react';
import { Row, Col ,Button, Container} from 'reactstrap';
import { Control, LocalForm} from 'react-redux-form';
import { Link } from 'react-router-dom';
import './main.css';
import AdminNavbarComponent from './AdminNavBarComponent';
import axios from 'axios'
import { baseUrl } from '../shared/basedUrl';


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
                    <Col  md={{offset:1}}  >STUDENT  </Col>
                </Row>
            </Link>
            <Link to='/Admin/TeacherSection'>
                <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                    <Col  md={{offset:1}}  >TEACHER </Col>
                </Row>
            </Link>
            <Link to='/Admin/CourseSection'>
                <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                    <Col  md={{offset:1}}  >COURSE </Col>
                </Row>
            </Link>
            <Row style={{backgroundColor:'#F3F3F3',border:'1px solid #707070',color:'#707070'}}>
                <Col  md={{offset:1}} >
                    <i className="fa fa-user"></i>{' '}Admin Services<br/>
                </Col>
            </Row>
            <Link to='/Admin/Student'>
                <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                    <Col  md={{offset:1}}  >STUDENT </Col>
                </Row>
            </Link>
            <Link to='/Admin/Teacher'>
                <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                    <Col  md={{offset:1}}  >TEACHER </Col>
                </Row>
            </Link>
            <Link to='/Admin/MarksType'>
                <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                    <Col  md={{offset:1}}  >MARKS TYPE</Col>
                </Row>
            </Link>
            <Link to='/Admin/Course'>
                <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                    <Col  md={{offset:1}}  >COURSE </Col>
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
                        SECTION <span>&#x276F;</span>
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
                    <Col md={{ offset:10 }} ><strong style={{color:'#3C315F'}}><span>&#x276E;&#x276E;</span> </strong></Col>
                </Row>
                <RenderAdminServices></RenderAdminServices>
            </div>
    )
}
class AdminAddNewSection extends Component{   
      constructor(props){
        super(props);
        this.state={
            id:null,
            section:null,
            course:null,
            semester:null,
            semesters:[],
            courses:[]

        }
        
      }
      changeHandler=e=>{
          console.log("e.target.name",e.target.name);
          console.log("e.target.value",e.target.value);
        this.setState({[e.target.name]:e.target.value})
      } 
      componentDidMount(){

        const token=localStorage.getItem('bearer_token');
        axios.defaults.headers.common['Authorization']=token;
        axios.get(baseUrl+'admin/1/semester ')
        .then( res => {
            console.log("semesters:",res);
            this.setState({
                semesters:res.data
            })
        })
        .catch(error=>{
            console.log(error)
        })
        axios.get(baseUrl+'admin/1/courses')
        .then( res => {
            console.log("courses:",res);
            this.setState({
                courses:res.data
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }
     render(){
        const {semesters,courses,section,course,semester}=this.state;
        const {addSection,toggleisAdding}=this.props;
        const  rendersemester = semesters.map((semester) => {

            return (

                <option value={semester.name}>{semester.name}</option>
            );
        })
        const  rendercourse = courses.map((course) => {

            return (
                <option  value={course.name}>{course.name}</option>
            );
        })

       return(
           <div className='bg3'>
               <AdminNavbarComponent/>
                <Container fluid={true}>
                    <Row>
                        <Col  md={{ offset:0 }}>
                            <RenderSideBar1></RenderSideBar1>
                        </Col>
                        <Col md={{ offset:1 }}>
                        <br></br><br></br>
                            <div className='Services1'style={{paddingBottom:'110px',paddingTop:'110px'}}>
                                <LocalForm >
                                <br></br>      
                                    <Row className='form-group'>           
                                        <Col md={{offset:1}}>
                                            <div className='EditBox'style={{marginBottom:'11px'}}>
                                                <h3>Add Section</h3>
                                                <br></br>
                                                <Row>
                                                    <Col>
                                                        Section:
                                                        <Control.text model=".section" id="section" name="section" value={section} placeholder="Enter Section " className="form-control" onChange={this.changeHandler}  style={{borderRadius:'0px'}}/>  
                                                    </Col>
                                                    </Row>
                                                    <Row>
                                                    <Col>
                                                        Semester:
                                                        <select model=".semester" id="semester" name="semester" value={semester} className="form-control" onChange={this.changeHandler}>
                                                        <option  >Select Semester</option>
                                                            {rendersemester}
                                                         </select>
                                                        {/* <Control.text model=".section" id="section" name="section" value={section} placeholder="Enter Section " className="form-control" onChange={this.changeHandler}  style={{borderRadius:'0px'}}/>   */}
                                                    </Col>
                                                    </Row>
                                                    <Row>
                                                    <Col>
                                                        Course:
                                                        <select model=".course" id="course" name="course"  value={course} className="form-control" onChange={this.changeHandler}>
                                                        <option  >Select Course</option>
                                                            {rendercourse}
                                                         </select>
                                                        {/* <Control.text model=".section" id="section" name="section" value={section} placeholder="Enter Section " className="form-control" onChange={this.changeHandler}  style={{borderRadius:'0px'}}/>   */}
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={{offset:7}}>
                                            <Button type="submit" onClick={()=>toggleisAdding()} style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'30px',paddingRight:'30px'}}>
                                                Discard
                                            </Button>
                                        </Col>
                                        <Col md={{offset:1}}>
                                            <Button  onClick={()=>addSection(this.state)} type="submit" style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'30px',paddingRight:'30px'}}>
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
    export default AdminAddNewSection;