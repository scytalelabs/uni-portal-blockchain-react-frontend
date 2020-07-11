import React,{Component} from 'react';
import { Row, Col,} from 'reactstrap';
import './main.css';
import { Link, Redirect } from 'react-router-dom';
import TeacherCourse from './TeacherCourse';

function RenderEachCourse(courses){
    if(courses.courses===undefined)
    {
        return(
            <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
            <Col  md={{offset:1}}  >
                LOADING...
            </Col>
        </Row> 
        )
    }
    console.log("COURSES are",courses.courses.courses)

    return(
        courses.courses.map(list=>{
            
            return(
                
                <a href={"/teacher/course/"+list.course_code+'/'+list.section} key={list.id}>
                <div >
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            {list.course}({list.section})
                        </Col>
                    </Row> 
                </div>
                </a>
                );
            }
        )
    )
       
}

function RenderCourses(courses){
    return(
        <div className='container' style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}}>

                <Row style={{backgroundColor:'#F3F3F3',border:'1px solid #707070',color:'#707070'}} >
                    <Col  md={{offset:1}} >
                        <i className="fa fa-align-justify"></i>{' '}Courses<br/>
                    </Col>
                </Row>
                <RenderEachCourse courses={courses.courses}></RenderEachCourse>
                
                
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
                <Link to='/teacher/personalinformation'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            PERSONAL INFORMATION
                        </Col>
                    </Row>
                </Link>
                
        </div>
    )
}
class TeacherSidebar1 extends Component{
    constructor(props){
      super(props);
      this.state={
          course:{id:"",course:"",section:""}
      }

    }
     render(){
     
       return(
        <div className='sidebar'>
            <Row>
                <Col md={{ offset:10 }} >
                <strong style={{color:'#3C315F'}}><span>&#x276E;&#x276E;</span> </strong>
            </Col>
            </Row>
            <RenderCourses courses={this.props.courses} ></RenderCourses>
            <RenderTeacherServices></RenderTeacherServices>
        </div>              
       )
     }
    }
    export default TeacherSidebar1;