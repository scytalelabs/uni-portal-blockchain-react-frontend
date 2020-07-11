import React,{Component} from 'react';
import {Container,} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Gradebookdata from './StudentViewGradesComponents';
import './main.css';
import StudentNavbarComponent from './StudentNavbarComponent';
import { connect } from 'react-redux';
import axios from 'axios';
import { baseUrl } from '../shared/basedUrl';
import StudentSidebar1 from './StudentSidebar1Component';
import { getGradeBook,getOutline } from '../redux/ActionCreators';

function RenderCoursesData(){
    const section=localStorage.getItem('section');
    const course=localStorage.getItem('course');
    return(
        <div className='container' style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}}>
                
                <Link to={'/student/course/Announcement/'+course+'/'+section}>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            Announcement 
                        </Col>
                    </Row>
                </Link>
                <Link to={'/student/course/CourseOutline/'+course+'/'+section}>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                            Course Outline
                        </Col>
                    </Row>
                </Link>
                <Link to={'/student/course/CourseMaterial/'+course+'/'+section}>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                            Course Material 
                        </Col>
                    </Row>
                </Link>
                <Link to={'/student/course/GradeBook/'+course+'/'+section}>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                            Grade Book  <span>&#x276F;</span>
                        </Col>
                    </Row>
                </Link>
                <Link to={'/student/course/LeaveStatus/'+course+'/'+section}>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                        Leave Status
                        </Col>
                    </Row>
                </Link>
                
                
                </div>
    )
}
function RenderSideBar2(){
    return(

            <div className='sidebar1'>
                <br></br>
                <br></br>
                <RenderCoursesData></RenderCoursesData>
            </div>
    )
}

class GradeBook extends Component{
    constructor(props){
      super(props);
      this.getGradeBook=this.getGradeBook.bind(this);
      this.getOutline=this.getOutline.bind(this);
    //   console.log("Grade Book Props are :",this.props);
    }
    state={
    courses:[] 
    }
    getGradeBook(gradebookinfo){

        this.props.getGradeBook(gradebookinfo);
    }
    getOutline(outlineinfo){

        this.props.getOutline(outlineinfo);
    }
    componentDidMount(){
        let id=this.props.match.params.std_id;
        this.setState({id:id});
        const section=localStorage.getItem('section');
        const course=localStorage.getItem('course')
        const course_name=localStorage.getItem('course_name')
        const token=localStorage.getItem('bearer_token');
        const regno=localStorage.getItem('regno');
        const semester=localStorage.getItem('semester');
        axios.defaults.headers.common['Authorization']=token;

          
        axios.get(baseUrl+'student/'+regno+'/'+semester+'/courses')
        .then( res => {
            this.setState({
                courses:res.data
            });
        })
        .catch(error=>{
            console.log(error)
        })

        const gradebookinfo={
            semester:semester,
            regno:regno,
            section:section,
            course:course
        }
        console.log("student/"+gradebookinfo.regno+"/"+gradebookinfo.semester+"/"+gradebookinfo.course+"/"+gradebookinfo.section+"/gradebook");
        axios.defaults.headers.common['Authorization']=token;
        axios.get(baseUrl+"student/"+gradebookinfo.regno+"/"+gradebookinfo.semester+"/"+gradebookinfo.course+"/"+gradebookinfo.section+"/gradebook")
        .then(response=>{
            console.log("GRADEBOOK :",response);
                this.getGradeBook(response.data);
          })
          .catch(error=>{
            console.log(error)
          })

          const outlineinfo={
            semester:semester,
            regno:regno,
            section:section,
            course:course
        }
        axios.defaults.headers.common['Authorization']=token;
        axios.get(baseUrl+"student/"+outlineinfo.regno+"/"+outlineinfo.semester+"/"+outlineinfo.course+"/"+outlineinfo.section+"/course_outline")
        .then(response=>{
            console.log("OUTLINE :",response);
                this.getOutline(response.data);
          })
          .catch(error=>{
            console.log(error)
          })
    }  
     render(){
         console.log(this.props);
       return(
           <div className='bg4'>
               <StudentNavbarComponent></StudentNavbarComponent>
                <Container fluid={true}>
                    <Row>
                        <Col md={{offset:0}}><StudentSidebar1 courses={this.state.courses}></StudentSidebar1></Col>
                        <Col md={{offset:0}}><RenderSideBar2></RenderSideBar2></Col>
                        <Col ><Col ><Gradebookdata gradebook={this.props.gradebook} outline={this.props.outline} ></Gradebookdata></Col></Col>
                        {/* gradebookmarks={this.props.gradebookmarks} */}
                    </Row>
                </Container>


           </div>

       )
     }
    }

    const mapStateoProps=(state)=>{
        return{
            gradebook:state.gradebook,
            outline:state.outline
        }
    }
    const mapDispatchtoProps=(dispatch)=>{
        return{
            getGradeBook:(gradebookinfo)=>{dispatch(getGradeBook(gradebookinfo))},
            getOutline:(outlineinfo)=>{dispatch(getOutline(outlineinfo))},
        }
    }
    export default connect(mapStateoProps,mapDispatchtoProps)(GradeBook);
