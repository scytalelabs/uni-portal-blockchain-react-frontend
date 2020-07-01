import React,{Component} from 'react';
import { Row, Col,} from 'reactstrap';
import './main.css';
import { Link, Redirect } from 'react-router-dom';
// import TeacherCourse from './TeacherCourse';

// function SetWeightage(id,course,section)
//     {
//         console.log("ID :",id,"Course: ",course,"Section:",section)
//         const courses={id,course,section}
//         // <Redirect to={{ pathname:'/teacher/course/'+id}}/>
//         // <Redirect to={{
//         //     pathname: '/order',
//         //     state: { id: '123' }
//         // }}
// // />

//     }

function RenderEachCourse(courses){
    // console.log("COURSES are",courses)
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
    return(
        courses.courses.map(list=>{
            return(
                
                <a href={"/student/course/"+list.course+"/"+list.section}>
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
                            PERSONAL INFORMATION
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
class StudentSidebar1 extends Component{
    constructor(props){
      super(props);
      this.state={
          course:{id:"",course:"",section:""}
      }

    }
     render(){
        // console.log("WELL WELL WELL",this.props)
       return(
        <div className='sidebar'>
            <Row>
                <Col md={{ offset:10 }} >
                <strong style={{color:'#3C315F'}}><span>&#x276E;&#x276E;</span> </strong>
            </Col>
            </Row>
            <RenderCourses courses={this.props.courses} ></RenderCourses>
            <RenderStudentServices ></RenderStudentServices>
        </div>              
       )
     }
    }
    export default StudentSidebar1;