import React,{Component} from 'react';
import logo from './UCP-Logo.gif';
import {Navbar, Container} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';
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
function RenderAddList(){
    return(
        <div className='AddList' style={{fontFamily:'"Times New Roman", Times, serif'}}>


            <LocalForm >
                <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                    <Col  md={{offset:1}}  >
                        Student List
                    </Col>
                </Row>
                <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Sr.No.</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Regestration No</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Name</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Total Marks</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Obtained Marks</Col>
                </Row>
                <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row>
                <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row> <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row> <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row>
                <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row>
                <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row> <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row> <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row> <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row> <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row> <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row> <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row> <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row> <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row> <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row>
           </LocalForm>
        </div>
    )
}

class TeacherAddList extends Component{
    constructor(props){
      super(props);
    }
    handleInfo(values){
        console.log('Current State is: ' + JSON.stringify(values));
          alert('Current State is: ' + JSON.stringify(values));
      }
      
      state={
        listinfo:[
            {id:1,lable:"Assignment"},
            {id:2,lable:"Quiz"},
            {id:3,lable:"Mid-Term"},
            {id:4,lable:"Class Participation"},
            {id:5,lable:"Final-Term"},
            {id:6,lable:"Project"},
            {id:7,lable:"Project Presentation"}
        ],
        studentinfo:[
            {lid:1, id:1 ,rollno:"L1F16BSCS0151",name:"Muhammad Adrees",totalmarks:40},
            {lid:1, id:2 ,rollno:"L1F16BSCS0157",name:"Zain Yazdan",totalmarks:40},
            {lid:1, id:3 ,rollno:"L1F16BSCS0145",name:"Muhammad Hammad Mubeen",totalmarks:40},
            {lid:1, id:4 ,rollno:"L1F16BSCS0136",name:"Muhammad Ghulam Fakhar Ud din",totalmarks:40},
            {lid:1, id:5 ,rollno:"L1F16BSCS0154",name:"Muhammad Arsal",totalmarks:40},

            {lid:2, id:1 ,rollno:"L1F16BSCS0151",name:"Muhammad Adrees",totalmarks:40},
            {lid:2, id:2 ,rollno:"L1F16BSCS0157",name:"Zain Yazdan",totalmarks:40},
            {lid:2, id:3 ,rollno:"L1F16BSCS0145",name:"Muhammad Hammad Mubeen",totalmarks:40},
            {lid:2, id:4 ,rollno:"L1F16BSCS0136",name:"Muhammad Ghulam Fakhar Ud din",totalmarks:40},
            {lid:2, id:5 ,rollno:"L1F16BSCS0154",name:"Muhammad Arsal",totalmarks:40},
            
            {lid:3, id:1 ,rollno:"L1F16BSCS0151",name:"Muhammad Adrees",totalmarks:40},
            {lid:3, id:2 ,rollno:"L1F16BSCS0157",name:"Zain Yazdan",totalmarks:40},
            {lid:3, id:3 ,rollno:"L1F16BSCS0145",name:"Muhammad Hammad Mubeen",totalmarks:40},
            {lid:3, id:4 ,rollno:"L1F16BSCS0136",name:"Muhammad Ghulam Fakhar Ud din",totalmarks:40},
            {lid:3, id:5 ,rollno:"L1F16BSCS0154",name:"Muhammad Arsal",totalmarks:40},
            
            {lid:4, id:1 ,rollno:"L1F16BSCS0151",name:"Muhammad Adrees",totalmarks:40},
            {lid:4, id:2 ,rollno:"L1F16BSCS0157",name:"Zain Yazdan",totalmarks:40},
            {lid:4, id:3 ,rollno:"L1F16BSCS0145",name:"Muhammad Hammad Mubeen",totalmarks:40},
            {lid:4, id:4 ,rollno:"L1F16BSCS0136",name:"Muhammad Ghulam Fakhar Ud din",totalmarks:40},
            {lid:4, id:5 ,rollno:"L1F16BSCS0154",name:"Muhammad Arsal",totalmarks:40},
            
            {lid:5, id:1 ,rollno:"L1F16BSCS0151",name:"Muhammad Adrees",totalmarks:40},
            {lid:5, id:2 ,rollno:"L1F16BSCS0157",name:"Zain Yazdan",totalmarks:40},
            {lid:5, id:3 ,rollno:"L1F16BSCS0145",name:"Muhammad Hammad Mubeen",totalmarks:40},
            {lid:5, id:4 ,rollno:"L1F16BSCS0136",name:"Muhammad Ghulam Fakhar Ud din",totalmarks:40},
            {lid:5, id:5 ,rollno:"L1F16BSCS0154",name:"Muhammad Arsal",totalmarks:40},
            
        ]

    }
     render(){
       return(
           <div className='bg5'>
               <TeacherNavbarComponent></TeacherNavbarComponent>
               <Container fluid={true}>
                    <Row>
                        <Col md={{offset:0}}><RenderSideBar1></RenderSideBar1></Col>
                        <Col md={{offset:0}}><RenderSideBar2></RenderSideBar2></Col>
                        <Col> <br/><br/><RenderAddList></RenderAddList></Col>
                    </Row>
                </Container>
           </div>
       )
     }
    }
    export default TeacherAddList;