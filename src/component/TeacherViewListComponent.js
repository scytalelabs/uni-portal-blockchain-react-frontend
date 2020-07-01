import React,{Component} from 'react';
import { Container} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';
import './main.css';
import TeacherNavbarComponent from './TeacherNavbarComponent';
import RenderList from './TeacherRenderListComponent';
import TeacherSidebar1 from './TeacherSidebar1Component';

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
    const Course_Id=localStorage.getItem('Course_Id');
    return(
        <div className='container' style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}}>
            
                <Link to={'/teacher/course/SetWeightage/'+Course_Id}>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            Set Weightage
                        </Col>
                    </Row>
                </Link>
                <Link to={'/teacher/course/ViewList/'+Course_Id}>
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
        ]    ,
        courses:[
            {id:1,course:"CCN",section:"C"},
            {id:2,course:"OOAD",section:"A"},
            {id:3,course:"CC",section:"B"},
            {id:4,course:"DB",section:"E"},
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
                        <Col  md={{ offset:0 }}><TeacherSidebar1 courses={this.state.courses}></TeacherSidebar1></Col>
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
