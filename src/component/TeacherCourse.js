import React,{Component} from 'react';
import logo from './UCP-Logo.gif';
import {Navbar, Container, Alert} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';
import RenderSetWeightage from './TeacherSetWeightageComponent'
import './main.css';
import TeacherNavbarComponent from './TeacherNavbarComponent';
import TeacherSidebar1 from './TeacherSidebar1Component';



function RenderCoursesData(){
    const Course_Id=localStorage.getItem('Course_Id');
    return(
        <div className='container' style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}}>

                <Link to={'/teacher/course/SetWeightage/'+Course_Id}>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            Set Weightage <span>&#x276F;</span>
                        </Col>
                    </Row>
                </Link>
                <Link to={'/teacher/course/ViewList/'+Course_Id}>
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

        Weightages:[
            {id:1,cid:1,Assignment:10,Quiz:20,Mid_Term:25,Class_Participation:5,Final_Term:30,Project:10,Project_Presentation:5},
            {id:2,cid:2,Assignment:20,Quiz:20,Mid_Term:25,Class_Participation:5,Final_Term:30,Project:10,Project_Presentation:5,},
            {id:3,cid:3,Assignment:30,Quiz:20,Mid_Term:25,Class_Participation:5,Final_Term:30,Project:10,Project_Presentation:5,},
            {id:4,cid:4,Assignment:40,Quiz:20,Mid_Term:25,Class_Participation:5,Final_Term:30,Project:10,Project_Presentation:5,},
            

        ],
        courses:[
            {id:1,course:"CCN",section:"C"},
            {id:2,course:"OOAD",section:"A"},
            {id:3,course:"CC",section:"B"},
            {id:4,course:"DB",section:"E"},
        ]

    }
    setTypeWeightage(Weightage)
        {
             console.log("HELOO",Weightage);
            //  const course=this.state.Weightages.filter(list=>{
            //     return list.id===Weightage.id
            // })


            let total=parseInt(Weightage.Assignment)+parseInt(Weightage.Quiz)+parseInt(Weightage.Mid_Term)+parseInt(Weightage.Mid_Term)+parseInt(Weightage.Class_Participation)+parseInt(Weightage.Project)+parseInt(Weightage.Project_Presentation)

            if(total===100)
            {
                alert("Total is 100");
                  this.setState(state => {
                    state.Weightages.map(list => 
                    {
                    if(list.id===Weightage.id)
                    {
                        list.Assignment=Weightage.Assignment;
                        list.Quiz=Weightage.Quiz;
                        list.Mid_Term=Weightage.Mid_Term;
                        list.Class_Participation=Weightage.Class_Participation;
                        list.Final_Term=Weightage.Final_Term;
                        list.Project=Weightage.Project;
                        list.Project_Presentation=Weightage.Project_Presentation;
                    }
                }
                );

          });
            }
            console.log("UPDATED STATE IS",this.state.Weightages);   
        }
     render(){
        const {Weightages}=this.state;
        console.log("PROPSSSSSSSSSSSSSS:",this.props.match.params.id)
        localStorage.setItem("Course_Id",this.props.match.params.id);
       return(
           <div className='bg5'>
               
               <TeacherNavbarComponent></TeacherNavbarComponent>
               <Container fluid={true}>
                    <Row>
                    <Col  md={{ offset:0 }}><TeacherSidebar1 courses={this.state.courses}></TeacherSidebar1></Col>
                        <Col md={{offset:0}}><RenderSideBar2></RenderSideBar2></Col>
                        <Col> <br/><br/>
                        {/* <Total total></Total> */}
                        <RenderSetWeightage setTypeWeightage={this.setTypeWeightage} Weightages={Weightages} id={this.props.match.params.id}></RenderSetWeightage></Col>
                    </Row>
                </Container>


           </div>

       )
     }
    }

    export default TeacherCourse;
