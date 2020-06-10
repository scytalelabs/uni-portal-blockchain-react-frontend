import React,{Component} from 'react';
import {Container} from 'reactstrap';
import { Row, Col ,Button} from 'reactstrap';
import { Control, LocalForm} from 'react-redux-form';
import { Link } from 'react-router-dom';

import './main.css';
import AdminNavbarComponent from './AdminNavBarComponent';
import AdminCourseEdit from './AdminCourseEditComponent';
import AdminAddNewCourse from './AdminAddNewCourseComponent';



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


class AdminCourse extends Component{
    
      constructor(props){
        super(props);
        this.state={
          search:'',
          isEditing:false,
          isAdding:false,
          courses:[
            {id:1 ,course:"Data Base + lab",semester:"Fall 19",section:"A",credit_hours:"4",course_code:"BSSC001"},
            {id:2 ,course:"CCN + lab",semester:"Fall 18",section:"B",credit_hours:"4",course_code:"BSSC002"},
            {id:3 ,course:"Persian",semester:"Fall 17",section:"C",credit_hours:"3",course_code:"BSSC003"},
            {id:4 ,course:"Game Development",semester:"Fall 16",section:"D",credit_hours:"3",course_code:"BSSC004"},
            {id:5 ,course:"OOAD + lab",semester:"Fall 15",section:"E",credit_hours:"4",course_code:"BSSC005"},   
          ],
          course:{id:null ,course:null,semester:null,section:null,credit_hours:null,course_code:null}
        }
        this.ToggleEditing=this.ToggleEditing.bind(this);
        this.UpdateCourse=this.UpdateCourse.bind(this);
        this.toggleisAdding=this.toggleisAdding.bind(this);
        this.addCourse=this.addCourse.bind(this);
      }
      changeHandler=e=>{
        this.setState({[e.target.name]:e.target.value})
      } 
      ToggleEditing(){
        const {isEditing}=this.state;
        this.setState({isEditing:!isEditing})
      }
      toggleisAdding(){
        const {isAdding}=this.state;
        this.setState({isAdding:!isAdding})
        
      }
      addCourse(courseinfo){
        alert("NAME IS "+courseinfo.course)
        courseinfo.id=Math.random();
        let courses=[... this.state.courses,courseinfo]
        this.setState({
            courses,
        });
        this.toggleisAdding();
        

      }
      deleteCourse=(id)=>{
          const courses=this.state.courses.filter(course=>{
              return course.id!==id
          })
          this.setState({
              courses
          })
      }
      UpdateCourse(updatedcourse){

        this.setState(state => {
            const list = state.courses.map(course => 
                {
                    if(course.id==updatedcourse.id)
                    {
                        course.course_code=updatedcourse.course_code;
                        course.course=updatedcourse.course;
                        course.semester=updatedcourse.semester;
                        course.section=updatedcourse.section;
                        course.credit_hours=updatedcourse.credit_hours;
                        
                    }
                }
                );

          });
        this.ToggleEditing();
      } 

     render(){
        const {search,isEditing,isAdding}=this.state;
        var search_hold=search.toUpperCase();
            var hold=this.state.courses.filter(function(course) { return course.course_code == search_hold;  });
            
            if(search!=="" && hold.length==1 && search_hold == hold[0].course_code && isEditing==false)
            {
                this.state.course.id=hold[0].id;
                this.state.course.course_code=hold[0].course_code;
                this.state.course.course=hold[0].course;
                this.state.course.semester=hold[0].semester;
                this.state.course.section=hold[0].section;
                this.state.course.credit_hours=hold[0].credit_hours;
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
                                <div className='Services1'style={{paddingBottom:'14px',marginBottom:'32px'}}>
                                    <LocalForm >
                                    <br></br><br></br>
                                    <Row className='form-group'>            
                                        <Col md={{offset:1}}>
                                            <Control.text model=".search" id="search" name="search" value={search} placeholder="Enter Course ID here to Search" className="form-control" onChange={this.changeHandler} style={{borderRadius: '35px',paddingRight:'250px'}}/>  
                                        </Col>
                                        <Col md={{ offset:1 }}>
                                            {/* <Link to='/Admin/course/Search' > */}
                                            <Button type="submit" style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'100px',paddingRight:'100px'}}>
                                                SEARCH
                                            </Button>
                                              {/* </Link> */}
                                        </Col>
                                    </Row>
                                    <Row >
                                        <Col md={{offset:2}}>
                                            <div className='EmptyBox'style={{marginBottom:'12px'}}>
                                            <br></br>
                                            <br></br>
                                                <Row md={{offset:1}}>
                                                    <Col> Course:{hold[0].course}</Col>
                                                    <Col> Semester:{hold[0].semester}</Col>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <Col> Section:{hold[0].section}</Col>
                                                    <Col> Credit Hours:{hold[0].credit_hours}</Col>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <Col> Course Code: {hold[0].course_code}</Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col md={{offset:7}}>
                                            {/* <Link to='/Admin/course'> */}
                                                <Button type="submit" onClick={()=>this.deleteCourse(hold[0].id) }style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'30px',paddingRight:'30px'}}>
                                                    Delete
                                                </Button>
                                            {/* </Link> */}
                                        </Col>
                                        <Col md={{offset:0}}>
                                            {/* <Link to='/Admin/course/Edit'> */}
                                                <Button type="submit"  onClick={this.ToggleEditing } style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'30px',paddingRight:'30px'}}>
                                                    Edit
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
        )   }
        else if(isEditing==true){
             return(
                 <AdminCourseEdit UpdateCourse={this.UpdateCourse} course={this.state.course}/>
             )
         }
         else if(isAdding==true){
            return(
                <AdminAddNewCourse addCourse={this.addCourse}/>
            )
        }
        else{
       return(
           <div className='bg3'>
               <AdminNavbarComponent></AdminNavbarComponent>
               <Container fluid={true}>
                    <Row>
                        <Col  md={{ offset:0 }}>
                            <RenderSideBar1></RenderSideBar1>
                        </Col>
                        
                        <Col md={{ offset:1 }}>
                        <br/>
                            <div className='Services1' style={{paddingBottom:'40px',marginBottom:'42px'}}>
                                <LocalForm >
                                <br></br><br></br>
                                    <Row className='form-group'>            
                                        <Col md={{offset:1}}>
                                        <Control.text model=".search" id="search" name="search" value={search} placeholder="Enter Course ID here to Search" className="form-control" onChange={this.changeHandler} style={{borderRadius: '35px',paddingRight:'250px'}}/>  
                                        </Col>
                                        <Col md={{ offset:1 }}>
                                            {/* <Link to='/Admin/Course/Search'> */}
                                                <Button type="submit" style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'100px',paddingRight:'100px'}}>
                                                    SEARCH
                                                </Button>
                                            {/* </Link> */}
                                        </Col>
                                    </Row>
                                    <Row >
                                        <Col md={{offset:2}}>
                                            <div className='EmptyBox'>
                                                No Result
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={{offset:1}}>
                                            {/* <Link to='/Admin/Course/AddCourse'> */}
                                            <br></br>
                                                <Button type="submit"  onClick={this.toggleisAdding} style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'50px',paddingRight:'50px'}}>
                                                    Add New Course
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
    }
    export default AdminCourse;