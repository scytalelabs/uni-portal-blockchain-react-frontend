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
                    <Col  md={{offset:1}}  >STUDENT  </Col>  <span>&#x276F;</span>
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
                    <Col md={{ offset:10 }} ><strong style={{color:'#3C315F'}}><span>&#x276E;&#x276E;</span> </strong></Col>
                </Row>
                <RenderAdminServices></RenderAdminServices>
            </div>
    )
}
class AdminAddNewStudentSection extends Component{   
      constructor(props){
        super(props);
        this.state={
            id:null,
            reg_no:null,
            name:null,
            code:null,
            semester:null,
            section:null,
            semesters:[],
            courses:[],
            students:[],
            sections:[],

        }
        
      }
      changeHandler=e=>{
          console.log("e.target.name",e.target.name);
          console.log("e.target.value",e.target.value);
          if(e.target.name==='semester'){
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
          if(e.target.name==='course')
        {
            this.state.courses.map(course=>{
                if(course.code===e.target.value)
                {
                    this.setState({
                        name:course.name
                    })
                }
            })
            console.log('admin/1/'+this.state.semester+'/'+e.target.value);
            axios.get(baseUrl+'admin/1/'+this.state.semester+'/'+e.target.value)
            .then( res => {
            console.log("Section:",res);
            this.setState({
                sections:res.data
            })
        })
        .catch(error=>{
            console.log(error)
        }) 
        }
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
        axios.get(baseUrl+'admin/1/students')
        .then( res => {
            console.log("Students:",res);
            this.setState({
                students:res.data
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }
     render(){
        const {students,semesters,sections,courses,reg_no,code,semester,section}=this.state;
        const {addStudentSection,toggleisAdding}=this.props;
        const  rendersemester = semesters.map((semester) => {
            if(semester.status==='current')
            return (

                <option value={semester.name}>{semester.name}</option>
            );
        })
        const  renderstudent = students.map((student) => {
            return (

                <option value={student.reg_no}>{student.reg_no}</option>
            );
        })
        const  rendercourse = courses.map((course) => {

            return (
                <option  value={course.code}>{course.name} {course.code}</option>
            );
        })
        const  rendersection = sections.map((section) => {

            return (
                <option  value={section.section}>{section.section}</option>
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
                                                <h3>Add Student Section</h3>
                                                <br></br>
                                                <Row>
                                                    <Col>
                                                        Registration No:
                                                        <select model=".reg_no" id="reg_no" name="reg_no" value={reg_no} className="form-control" onChange={this.changeHandler}>
                                                        <option  >Select Registration Number</option>
                                                            {renderstudent}
                                                         </select>
                                                    </Col>
                                                    </Row>
                                                    <Row>
                                                    <Col>
                                                        Semester:
                                                        <select model=".semester" id="semester" name="semester" value={semester} className="form-control" onChange={this.changeHandler}>
                                                        <option  >Select Semester</option>
                                                            {rendersemester}
                                                         </select>
                                                    </Col>
                                                    </Row>
                                                    <Row>
                                                    <Col>
                                                        Course:
                                                        <select model=".course" id="course" name="course"  value={code} className="form-control" onChange={this.changeHandler}>
                                                        <option  >Select Course</option>
                                                            {rendercourse}
                                                         </select>
                                                    </Col>
                                                    <Col>
                                                        Section:
                                                        <select model=".section" id="section" name="section"  value={section} className="form-control" onChange={this.changeHandler}>
                                                        <option  >Select Section</option>
                                                            {rendersection}
                                                         </select>
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
                                            <Button  onClick={()=>addStudentSection(this.state)} type="submit" style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'30px',paddingRight:'30px'}}>
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
    export default AdminAddNewStudentSection;