import React,{Component} from 'react';
import { Row, Col ,Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import './main.css';
import StudentNavbarComponent from './StudentNavbarComponent';
import Axios from 'axios';
import { baseUrl } from '../shared/basedUrl';
import StudentSidebar1 from './StudentSidebar1Component';
import { connect } from 'react-redux';
import { getOutline } from '../redux/ActionCreators';

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
                            Course Outline <span>&#x276F;</span>
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
                            Grade Book
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
function RenderOutlineinfo(outline){
    console.log("CHECK KRO",outline.outline)
    return(
    outline.outline.map(info=>{
        return(
            <Row>
                <Col style={{border:'1px solid #707070'}}>{info.Type}</Col>
                <Col style={{border:'1px solid #707070'}}>{info.weightage}</Col>
                <Col style={{border:'1px solid #707070',marginRight:'20px'}}>{info.no_of_selected}</Col>
            </Row>
        );
    })
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
function RenderOutline(outline){
    
    if(outline.outline==null)
    {
        return(   <p>LOADING...</p>)
    }
    
    return(
        <div className='CourseOutline' style={{fontFamily:'"Times New Roman", Times, serif'}}>
            <h3>Course Outline</h3>
            <u>Course Description</u><br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;NULL
            <hr/>
            <u>Assessment and Evaluation Reference Books</u>
            <div className='container'>
            <Row style={{textAlign:'center'}}>
                <Col style={{border:'1px solid #707070'}}>Exam Type</Col>
                <Col style={{border:'1px solid #707070'}}>Percentage</Col>
                <Col style={{border:'1px solid #707070',marginRight:'20px'}}>Consider Top</Col>
            </Row>
                <RenderOutlineinfo outline={outline.outline}></RenderOutlineinfo>
            <hr/>
           <u> Plagiarism and Intellectual Property Policy:</u>
            <p>Reproduction of the writing or literary work or concepts or inventions of another person as one's own product without writing proper 
            acknowledgment to the actual author, willfully or unintentionally, is termed as plagiarism. The actual author has a right to bring a 
            lawsuit for unauthorized use of his/her work against the plagiarist. University of Central Punjab discourages plagiarism and warns 
            students to be careful while using someone else's work in their written work to meet requirements of a course or a degree. It may 
            be clarified that quotes which are brief or are acknowledged as quotes do not constitute plagiarism.
            Be watchful - Every written material/assignment shall come under the careful scrutiny of others. Do  ensure that published work of 
            others is properly cited; source of unpublished material obtained from lectures, oral communication or interviews are duly acknowledged. 
            UCP's statutes 2004 - Clause 22 at Chapter 15 and UCP regulations 2005 - Clause 8.18 and Clause 13 at Chapter 13 deal with plagiarism and 
            intellectual property rights, which may be consulted by the UCP students and employees.
            A fellow student, a Faculty member or a member of the UCP Administration can report any instance of plagiarism to the Dean of the Faculty,
            who after P
            </p>

            </div>
            
        </div>
    )
}

class CourseOutline extends Component{
    constructor(props){
      super(props);
      this.state={
        courses:[]
      }
      this.getOutline=this.getOutline.bind(this);
    }
    getOutline(outlineinfo){

        this.props.getOutline(outlineinfo);
    }
    componentDidMount(){
        let id=this.props.match.params.std_id;
        this.setState({id:id});
        const section=localStorage.getItem('section');
        const course=localStorage.getItem('course');
        const token=localStorage.getItem('bearer_token');
        const regno=localStorage.getItem('regno');
        const semester=localStorage.getItem('semester');
        Axios.defaults.headers.common['Authorization']=token;

          
        Axios.get(baseUrl+'student/'+regno+'/'+semester+'/courses')
        .then( res => {
            this.setState({
                courses:res.data
            });
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
    
        Axios.defaults.headers.common['Authorization']=token;
        Axios.get(baseUrl+"student/"+outlineinfo.regno+"/"+outlineinfo.semester+"/"+outlineinfo.course+"/"+outlineinfo.section+"/course_outline")
        .then(response=>{
            console.log("RESPONSE :",response);
                this.getOutline(response.data);
          })
          .catch(error=>{
            console.log(error)
          })
       
    }     
     render(){
       return(
           <div className='bg4'>
               <StudentNavbarComponent></StudentNavbarComponent>
                <Container fluid={true}> 
                    <Row>
                        <Col md={{offset:0}}><StudentSidebar1 courses={this.state.courses}></StudentSidebar1></Col>
                        <Col md={{offset:0}}><RenderSideBar2></RenderSideBar2></Col>
                        <Col ><RenderOutline outline={this.props.outline}></RenderOutline></Col>
                    </Row>
                </Container>
                
                
           </div>
        
       )
     }
    }
    const mapStateoProps=(state)=>{
        return{
            outline:state.outline
        }
        
    }
    const mapDispatchtoProps=(dispatch)=>{
        return{
            getOutline:(outlineinfo)=>{dispatch(getOutline(outlineinfo))},
        }
    }
    export default connect(mapStateoProps,mapDispatchtoProps)(CourseOutline);