import React,{Component} from 'react';
import logo from './UCP-Logo.gif';
import {Navbar,Container} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm} from 'react-redux-form';
import TranscriptData from './StudentTranscriptDisplayComponent'
import './main.css';
import StudentNavbarComponent from './StudentNavbarComponent';



function RenderCourses(){
    return(
        <div className='container' style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}}>

                <Row style={{backgroundColor:'#F3F3F3',border:'1px solid #707070',color:'#707070'}} >
                    <Col  md={{offset:1}} >
                        <i className="fa fa-align-justify"></i>{' '}Courses<br/>
                    </Col>
                </Row>
                <Link to='/student/course'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            OOAD(C)
                        </Col>
                    </Row>
                </Link>
                <Link to='/student/course'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                            OOAD LAB(C)
                        </Col>
                    </Row>
                </Link>
                <Link to='/student/course'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                            DATABASE(E)
                        </Col>
                    </Row>
                </Link>
                <Link to='/student/course'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                            DATABASE LAB(E)
                        </Col>
                    </Row>
                </Link>
                <Link to='/student/course'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                        COMPUTER ARCHITECTURE(F)
                        </Col>
                    </Row>
                </Link>
                <Link to='/student/course'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                        VIEW ALL COURSES
                        </Col>
                    </Row>
                </Link>
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
                            TRANSCRIPT  <span>&#x276F;</span>
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
function RenderSideBar1(){
    return(

            <div className='sidebar1'>
                <Row>
                    <Col md={{ offset:10 }} >
                    <strong style={{color:'#3C315F'}}><span>&#x276E;&#x276E;</span> </strong>
                    </Col>
                </Row>
                <RenderCourses></RenderCourses>
                <RenderStudentServices></RenderStudentServices>
            </div>
    )
}




class Transcript extends Component{
    constructor(props){
      super(props);
    }
    state={
        transcriptheadinginfo:[
            {id:1 ,credit_attempted:"Credit Attempted",credit_accepted_toward_degree_completion:"Credit Accepted toward degree Completion",credit_earned:"Credit Earned",cgpa:"CGPA"}
        ],
        transcriptheadingdata:[
            {id:1 ,credit_attempted:0,credit_accepted_toward_degree_completion:0,credit_earned:0,cgpa:0}
        ],
        terminfo:[
            {id:1 ,title:"Fall 16"},
            {id:2 ,title:"Spring 17"},
            {id:3 ,title:"Fall 17"},
            {id:4 ,title:"Spring 18"},
            {id:5 ,title:"Fall 19"}
        ],
        termheading:[
            {id:1 ,courseid:"Course ID",course_title:"Course Title",course_credit:"Course Credit",grade:"Grade"}
        ],
        termdata:[
            {tid:1,id:1,courseid:"BSCS01",course_title:"DataBase",course_credit:3,grade:"A"},
            {tid:1,id:2,courseid:"BSCS02",course_title:"Pak Studies",course_credit:3,grade:"A"},
            {tid:1,id:3,courseid:"BSCS03",course_title:"Numerical Computing",course_credit:3,grade:"A"},
            {tid:1,id:4,courseid:"BSCS04",course_title:"DataBase Lab",course_credit:1,grade:"A"},
            {tid:1,id:5,courseid:"BSCS05",course_title:"Logical Thinking",course_credit:3,grade:"A"},
            {tid:2,id:1,courseid:"BSCS11",course_title:"Data Science",course_credit:3,grade:"A"},
            {tid:2,id:2,courseid:"BSCS12",course_title:"CloudComputing",course_credit:3,grade:"B+"},
            {tid:2,id:3,courseid:"BSCS13",course_title:"Operating System",course_credit:3,grade:"A"},
            {tid:2,id:4,courseid:"BSCS14",course_title:"Operating System Lab",course_credit:1,grade:"B"},
            {tid:2,id:5,courseid:"BSCS15",course_title:"English I",course_credit:3,grade:"A-"},
            {tid:3,id:1,courseid:"BSCS21",course_title:"Data Science",course_credit:3,grade:"A"},
            {tid:3,id:2,courseid:"BSCS22",course_title:"CloudComputing",course_credit:3,grade:"B+"},
            {tid:3,id:3,courseid:"BSCS23",course_title:"Artificial Intelligence",course_credit:3,grade:"A"},
            {tid:3,id:4,courseid:"BSCS24",course_title:"Artificial Intelligence Lab",course_credit:1,grade:"B"},
            {tid:3,id:5,courseid:"BSCS25",course_title:"English II",course_credit:3,grade:"A-"},
            {tid:4,id:1,courseid:"BSCS31",course_title:"Data Science",course_credit:3,grade:"A"},
            {tid:4,id:2,courseid:"BSCS32",course_title:"CloudComputing",course_credit:3,grade:"B+"},
            {tid:4,id:3,courseid:"BSCS33",course_title:"Introduction to computr Science",course_credit:3,grade:"A"},
            {tid:4,id:4,courseid:"BSCS34",course_title:"Introduction to computr Science Lab",course_credit:1,grade:"B"},
            {tid:4,id:5,courseid:"BSCS35",course_title:"English II",course_credit:3,grade:"A-"},
            {tid:5,id:1,courseid:"BSCS41",course_title:"Programming Fundamentals",course_credit:3,grade:"A"},
            {tid:5,id:2,courseid:"BSCS42",course_title:"CloudComputing",course_credit:3,grade:"B+"},
            {tid:5,id:3,courseid:"BSCS43",course_title:"Object Oriented and Paradigm",course_credit:3,grade:"A"},
            {tid:5,id:4,courseid:"BSCS44",course_title:"Object Oriented and Paradigm Lab",course_credit:1,grade:"B"},
            {tid:5,id:5,courseid:"BSCS45",course_title:"Multivariat Calculus",course_credit:3,grade:"A-"}

        ]

    }
    handleInfo(values){
        console.log('Current State is: ' + JSON.stringify(values));
          alert('Current State is: ' + JSON.stringify(values));
      }

     render(){
       return(
           <div className='bg4'>
               <StudentNavbarComponent></StudentNavbarComponent>
                <Container fluid={true}>
                    <Row>
                        <Col md={{offset:0}}><RenderSideBar1></RenderSideBar1></Col>
                        <Col><TranscriptData transcriptheadinginfo={this.state.transcriptheadinginfo} transcriptheadingdata={this.state.transcriptheadingdata} terminfo={this.state.terminfo} termheading={this.state.termheading} termdata={this.state.termdata} ></TranscriptData></Col>
                    </Row>
                </Container>


           </div>

       )
     }
    }
    export default Transcript;
