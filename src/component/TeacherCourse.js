import React,{Component} from 'react';
import logo from './UCP-Logo.gif';
import {Navbar, Container, Alert} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';
import RenderSetWeightage from './TeacherSetWeightageComponent'
import './main.css';
import TeacherNavbarComponent from './TeacherNavbarComponent';


function RenderCourses(){
    return(
        <div className='container' style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}}>

                <Row style={{backgroundColor:'#F3F3F3',border:'1px solid #707070',color:'#707070'}} >
                    <Col  md={{offset:1}} >
                        <i className="fa fa-align-justify"></i>{' '}Courses<br/>
                    </Col>
                </Row>
                <Link to='/teacher/course'>
                <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                    <Col  md={{offset:1}}  >
                        OOAD(C)
                    </Col>
                </Row>
                </Link>
                <Link to='/teacher/course'>
                <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                    <Col  md={{offset:1}} >
                        OOAD LAB(C)
                    </Col>
                </Row>
                </Link>
                <Link to='/teacher/course'>
                <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                    <Col  md={{offset:1}} >
                        DATABASE(E)
                    </Col>
                </Row>
                </Link>
                <Link to='/teacher/course'>
                <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                    <Col  md={{offset:1}} >
                        DATABASE LAB(E)
                    </Col>
                </Row>
                </Link>
                <Link to='/teacher/course'>
                <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                    <Col  md={{offset:1}} >
                    COMPUTER ARCHITECTURE(F)
                    </Col>
                </Row>
                </Link>
                <Link to='/teacher/course'>
                <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                    <Col  md={{offset:1}} >
                    VIEW ALL COURSES
                    </Col>
                </Row>
                </Link>

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
function RenderSideBar1(){
    return(

            <div className='sidebar1'>
                <Row>
                    <Col md={{ offset:10 }} >
                    <strong style={{color:'#3C315F'}}><span>&#x276E;&#x276E;</span> </strong>
                    </Col>
                </Row>
                <RenderCourses></RenderCourses>
                <RenderTeacherServices></RenderTeacherServices>
            </div>
    )
}


function RenderCoursesData(){
    return(
        <div className='container' style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}}>

                <Link to='/teacher/course/SetWeightage'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            Set Weightage <span>&#x276F;</span>
                        </Col>
                    </Row>
                </Link>
                <Link to='/teacher/course/ViewList'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                            View List
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
// let total=false;
// function Total(totalf){
//     console.log("total flag IS", total);
//     if(total.total==true)
//     {
//         return (
//         <Alert color="danger" style={{marginRight:'50px'}}>
//         Total Should be 100
//         </Alert>
//         ) 
//     }
//     else{
//         return(<div></div>)
//     }
// }

class TeacherCourse extends Component{
    constructor(props){
      super(props);
      this.setTypeWeightage=this.setTypeWeightage.bind(this);
      
    }
    
    state={
        Assignment:10,
        Quiz:20,
        Mid_Term:25,
        Class_Participation:5,
        Final_Term:30,
        Project:10,
        Project_Presentation:5,

    }
    setTypeWeightage(Weightage)
        {
             console.log("HELOO",Weightage);
            let total=parseInt(Weightage.Assignment)+parseInt(Weightage.Quiz)+parseInt(Weightage.Mid_Term)+parseInt(Weightage.Mid_Term)+parseInt(Weightage.Class_Participation)+parseInt(Weightage.Project)+parseInt(Weightage.Project_Presentation)

            if(total===100)
            {
                alert("Total is 100");
                this.setState({
                    Assignment:Weightage.Assignment,
                    Quiz:Weightage.Quiz,
                    Mid_Term:Weightage.Mid_Term,
                    Class_Participation:Weightage.Class_Participation,
                    Final_Term:Weightage.Final_Term,
                    Project:Weightage.Project,
                    Project_Presentation:Weightage.Project_Presentation,
                })
                total=false;
            }
            
        }
     render(){
        const {Assignment,Quiz,Mid_Term,Class_Participation,Final_Term,Project,Project_Presentation}=this.state;
       return(
           <div className='bg5'>
               <TeacherNavbarComponent></TeacherNavbarComponent>
               <Container fluid={true}>
                    <Row>
                        <Col md={{offset:0}}><RenderSideBar1></RenderSideBar1></Col>
                        <Col md={{offset:0}}><RenderSideBar2></RenderSideBar2></Col>
                        <Col> <br/><br/>
                        {/* <Total total></Total> */}
                        <RenderSetWeightage setTypeWeightage={this.setTypeWeightage} Assignment={Assignment} Quiz={Quiz} Mid_Term={Mid_Term} Class_Participation={Class_Participation} Final_Term={Final_Term} Project={Project} Project_Presentation={Project_Presentation}></RenderSetWeightage></Col>
                    </Row>
                </Container>


           </div>

       )
     }
    }

    export default TeacherCourse;
