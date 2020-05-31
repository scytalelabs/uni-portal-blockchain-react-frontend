import React,{Component} from 'react';
import { Container} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';
import './main.css';
import TeacherNavbarComponent from './TeacherNavbarComponent';
import RenderList from './TeacherRenderListComponent';

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
                            Set Weightage
                        </Col>
                    </Row>
                </Link>
                <Link to='/teacher/course/ViewList'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                            View List <span>&#x276F;</span>
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
function RenderViewList(){
    return(
        <div className='ViewList' style={{fontFamily:'"Times New Roman", Times, serif'}}>

            <LocalForm >
            <h4>Assignment</h4>
                <Row className='form-group'>
                    <Col>Sr.</Col>
                    <Col>Lable</Col>
                    <Col>Date</Col>
                    <Col>Total Marks</Col>
                    <Col></Col>
                </Row>
                <Row className='form-group'>
                    <Col >1</Col>
                    <Col><Control.text model=".assignmnet_Lable" id="assignmnet_Lable" name="assignmnet_Lable" type='assignmnet_Lable' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}} /></Col>
                    <Col><Control.text model=".assignmnet_Date" id="assignmnet_Date" name="assignmnet_Date" type='assignmnet_Date' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}/></Col>
                    <Col><Control.text model=".assignmnet_Total" id="assignmnet_Total" name="assignmnet_Total" type='assignmnet_Total' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}/></Col>
                    <Col> Edit<Link to='/teacher/course/ViewList/AddList'>      <i class="fa fa-edit"></i></Link></Col>
                </Row>
                <hr></hr>
                <h4>Quiz</h4>
                <Row className='form-group'>
                    <Col>Sr.</Col>
                    <Col>Lable</Col>
                    <Col>Date</Col>
                    <Col>Total Marks</Col>
                    <Col></Col>
                </Row>
                <Row className='form-group'>
                    <Col >1</Col>
                    <Col><Control.text model=".quiz_Lable" id="quiz_Lable" name="quiz_Lable" type='quiz_Lable' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}} /></Col>
                    <Col><Control.text model=".quiz_Date" id="quiz_Date" name="quiz_Date" type='quiz_Date' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}/></Col>
                    <Col><Control.text model=".quiz_Total" id="quiz_Total" name="quiz_Total" type='quiz_Total' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}/></Col>
                    <Col> Edit<Link to='/teacher/course/ViewList/AddList'>      <i class="fa fa-edit"></i></Link></Col>
                </Row>
                <hr></hr>
                <h4>Mid-Term</h4>
                <Row className='form-group'>
                    <Col>Sr.</Col>
                    <Col>Lable</Col>
                    <Col>Date</Col>
                    <Col>Total Marks</Col>
                    <Col></Col>
                </Row>
                <Row className='form-group'>
                    <Col >1</Col>
                    <Col><Control.text model=".mid_Lable" id="mid_Lable" name="mid_Lable" type='mid_Lable' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}} /></Col>
                    <Col><Control.text model=".mid_Date" id="mid_Date" name="mid_Date" type='mid_Date' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}/></Col>
                    <Col><Control.text model=".mid_Total" id="mid_Total" name="mid_Total" type='mid_Total' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}/></Col>
                    <Col> Edit<Link to='/teacher/course/ViewList/AddList'>      <i class="fa fa-edit"></i></Link></Col>

                </Row>
                <hr></hr>
                <h4>Class Participation</h4>
                <Row className='form-group'>
                    <Col>Sr.</Col>
                    <Col>Lable</Col>
                    <Col>Date</Col>
                    <Col>Total Marks</Col>
                    <Col></Col>
                </Row>
                <Row className='form-group'>
                    <Col >1</Col>
                    <Col><Control.text model=".classParticipation_Lable" id="classParticipation_Lable" name="classParticipation_Lable" type='classParticipation_Lable' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}} /></Col>
                    <Col><Control.text model=".classParticipation_Date" id="classParticipation_Date" name="classParticipation_Date" type='classParticipation_Date' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}/></Col>
                    <Col><Control.text model=".classParticipation_Total" id="classParticipation_Total" name="classParticipation_Total" type='classParticipation_Total' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}/></Col>
                    <Col> Edit<Link to='/teacher/course/ViewList/AddList'>      <i class="fa fa-edit"></i></Link></Col>

                </Row>
                <hr></hr>
                <h4>Final-Term</h4>
                <Row className='form-group'>
                    <Col>Sr.</Col>
                    <Col>Lable</Col>
                    <Col>Date</Col>
                    <Col>Total Marks</Col>
                    <Col></Col>
                </Row>
                <Row className='form-group'>
                    <Col >1</Col>
                    <Col><Control.text model=".final_Lable" id="final_Lable" name="final_Lable" type='final_Lablet' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}} /></Col>
                    <Col><Control.text model=".final_Date" id="final_Date" name="final_Date" type='final_Date' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}/></Col>
                    <Col><Control.text model=".final_Total" id="final_Total" name="final_Total" type='final_Total' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}/></Col>
                    <Col> Edit<Link to='/teacher/course/ViewList/AddList'>      <i class="fa fa-edit"></i></Link></Col>

                </Row>
                <hr></hr>
            <h4>Project</h4>
                <Row className='form-group'>
                    <Col>Sr.</Col>
                    <Col>Lable</Col>
                    <Col>Date</Col>
                    <Col>Total Marks</Col>
                    <Col></Col>
                </Row>
                <Row className='form-group'>
                    <Col >1</Col>
                    <Col><Control.text model=".project_Lable" id="project_Lable" name="project_Lable" type='project_Lablet' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}} /></Col>
                    <Col><Control.text model=".project_Date" id="project_Date" name="project_Date" type='project_Date' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}/></Col>
                    <Col><Control.text model=".project_Total" id="project_Total" name="project_Total" type='project_Total' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}/></Col>
                    <Col> Edit<Link to='/teacher/course/ViewList/AddList'>      <i class="fa fa-edit"></i></Link></Col>

                </Row>
                <hr></hr>
                <h4>Project Presentation</h4>
                <Row className='form-group'>
                    <Col>Sr.</Col>
                    <Col>Lable</Col>
                    <Col>Date</Col>
                    <Col>Total Marks</Col>
                    <Col></Col>
                </Row>
                <Row className='form-group'>
                    <Col >1</Col>
                    <Col><Control.text model=".projectPresentation_Lable" id="projectPresentation_Lable" name="projectPresentation_Lable" type='assignmnet_Lablet' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}} /></Col>
                    <Col><Control.text model=".projectPresentation_Date" id="projectPresentation_Date" name="projectPresentation_Date" type='assignmnet_Date' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}/></Col>
                    <Col><Control.text model=".projectPresentation_Total" id="projectPresentation_Total" name="projectPresentation_Total" type='assignmnet_Total' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}/></Col>
                    <Col> Edit<Link to='/teacher/course/ViewList/AddList'>      <i class="fa fa-edit"></i></Link></Col>
                </Row>
                <br></br>
                <br></br>
           </LocalForm>
        </div>
    )
}

class TeacherViewList extends Component{
    constructor(props){
      super(props);
    }
    handleInfo(values){
        console.log('Current State is: ' + JSON.stringify(values));
          alert('Current State is: ' + JSON.stringify(values));
      }
    state={
        listinfo:[
            {id:1,head:"Assignment",sr:"Sr.no",lable:"Lable",date:"Date",total:"Total Marks"},
            {id:2,head:"Quiz",sr:"Sr.no",lable:"Lable",date:"Date",total:"Total Marks"},
            {id:3,head:"Mid-Term",sr:"Sr.no",lable:"Lable",date:"Date",total:"Total Marks"},
            {id:4,head:"Class Participation",sr:"Sr.no",lable:"Lable",date:"Date",total:"Total Marks"},
            {id:5,head:"Final-Term",sr:"Sr.no",lable:"Lable",date:"Date",total:"Total Marks"},
            {id:6,head:"Project",sr:"Sr.no",lable:"Lable",date:"Date",total:"Total Marks"},
            {id:7,head:"Project Presentation",sr:"Sr.no",lable:"Lable",date:"Date",total:"Total Marks"}
        ],
        lists:
        [
            {lid:1 ,id:1 ,lable:"assignment1",date:"12-5-2020",total:30},
        ]    
        
    }
    AddList=(list)=>{
        list.id=Math.random()*1000;
        let lists=[...this.state.lists,list]
        this.setState({
            lists:lists
        })

    }
     render(){
       return(
           <div className='bg5'>
               <TeacherNavbarComponent></TeacherNavbarComponent>
                <Container fluid={true}>
                    <Row>
                        <Col md={{offset:0}}><RenderSideBar1></RenderSideBar1></Col>
                        <Col md={{offset:0}}><RenderSideBar2></RenderSideBar2></Col>
                        <Col> <RenderList AddList={this.AddList} listinfo={this.state.listinfo} lists={this.state.lists}></RenderList></Col>
                        {/* <Col> <br/><br/><RenderViewList></RenderViewList></Col> */}
                    </Row>
                </Container>
           </div>
       )
     }
    }
    export default TeacherViewList;
