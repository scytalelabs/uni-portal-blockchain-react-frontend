import React, { Component } from 'react'
import SimpleBar from 'simplebar-react';
import {Control, LocalForm } from 'react-redux-form';
import { Row, Col, Button, Container} from 'reactstrap';
import 'simplebar/dist/simplebar.min.css';
import TeacherNavbarComponent from './TeacherNavbarComponent';
import TeacherSidebar1 from './TeacherSidebar1Component';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { setTypeWeightage } from '../redux/ActionCreators';
import { baseUrl } from '../shared/basedUrl';
import RenderSetWeightagelist from './TeacherRenderSetWeightagelist';
import { connect } from 'react-redux';



function RenderCoursesData(){
    const section=localStorage.getItem('section');
    const course=localStorage.getItem('course');
    return(
        <div className='container' style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}}>

                <Link to={'/teacher/course/Announcement/'+course+'/'+section}>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            Announcement 
                        </Col>
                    </Row>
                </Link>
                <Link to={'/teacher/course/SetWeightage/'+course+'/'+section}>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            Set Weightage <span>&#x276F;</span> 
                        </Col>
                    </Row>
                </Link>
                <Link to={'/teacher/course/ViewList/'+course+'/'+section}>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                            View List
                        </Col>
                    </Row>
                </Link>
                <Link to={'/teacher/course/MakeAnnouncement/'+course+'/'+section}>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}} >
                            Make Announcement
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
// function CourseOutlineList(course_outline){
//     if(course_outline.course_outline.length===0)
//     {
//         return <div>LOADING....</div>
//     }
//         alert("ALERT A GYA J");
//         console.log("FUNCTION COURSE_OULINE IS :",course_outline.course_outline);
//         course_outline.course_outline.map(outline=>{
//             return(
//                 <Row key={outline.Type} className='form-group'>
//                     <Col>{outline.Type}</Col>
//                     <Col>
//                         <Row>
//                             <Col></Col>
//                             <Col ><Control.text model={"."+outline.Type} id={outline.Type} name={outline.Type} type='number' defaultValue={outline.weightage} className="form-control" /> </Col>
//                             <Col></Col>
//                         </Row>
//                     </Col>
//                 </Row>
//         );
    
//         });

// }
// function RenderSetWeightagelist(course_outline){
//     // console.log("FUNCTION COURSE_OULINE IS :",course_outline.course_outline);
    
//     return(
//           <div className='SetWeightage'style={{fontFamily:'"Times New Roman", Times, serif'}}>
//                 <div className='body'>      
//                 <h3>Set Weightage</h3>
//                     <LocalForm style={{marginBottom:'16px'}}>
//                         <CourseOutlineList course_outline={course_outline.course_outline}></CourseOutlineList>
//                     </LocalForm>
//                 </div>
//             </div>
//     )
// }

class RenderSetWeightage extends Component{
    constructor(props){
      super(props);
    //   console.log("SET WEIGHTAGE",this.props);
        // const  {Weightages}=this.props;
        // const course= Weightages.filter(list=>{
        //     return list.cid==this.props.id
        // })
        this.state={
            courses:[],
            assessment_types:[],
            outline:[]
        }
        this.setTypeWeightage=this.setTypeWeightage.bind(this);
    // this.state={
    //     id:course[0].id,
    //     cid:course[0].cid,
    //     Assignment:course[0].Assignment,
    //     Quiz:course[0].Quiz,
    //     Mid_Term:course[0].Mid_Term,
    //     Class_Participation:course[0].Class_Participation,
    //     Final_Term:course[0].Final_Term,
    //     Project:course[0].Project,
    //     Project_Presentation:course[0].Project_Presentation,
    // }
}
    
    // let sum=0;

    // for(let num of types)
    // {
    //     sum=sum+num.value;
    //     console.log("VALUE IS"+num.value);
    // }
    // console.log("SUM IS"+sum);
    changeHandler=e=>{
        this.setState({[e.target.name]:e.target.value})
      }
      setTypeWeightage(data,marks_type){
          console.log("ME IDDHER BH A GYA G",marks_type);
          this.props.setTypeWeightage(data,marks_type);
          
          
      }
      componentDidMount(){

        let id=this.props.match.params.std_id;
        this.setState({id:id});
        const section=localStorage.getItem('section');
        const course=localStorage.getItem('course');
        const token=localStorage.getItem('bearer_token');
        const regno=localStorage.getItem('reg_no');
        const semester=localStorage.getItem('semester');
        axios.defaults.headers.common['Authorization']=token;
        console.log("SEMESTER AND REGNO",semester,regno,token);
        axios.get(baseUrl+'teacher/'+regno+'/'+semester+'/courses')
        .then( res => {
            console.log("RESPONSE IS :",res.data);
            this.setState({
                courses:res.data
            });
        })
        .catch(error=>{
            console.log(error)
        })

        axios.get(baseUrl+'teacher/'+regno+'/assessment_types')
        .then( res => {
            console.log("RESPONSE assessment_types IS :",res.data);
            this.setState({
                assessment_types:res.data
            });
        })
        .catch(error=>{
            console.log(error)
        })

        console.log("SEMESTER AND REGNO",semester,regno,token);
        // 13.	teacher/{ teacher_Id }/{ semester }/{ course }/{ section} /course_outline

        axios.get(baseUrl+'teacher/'+regno+'/'+semester+'/'+course+'/'+section+'/course_outline')
        .then( res => {
            console.log("RESPONSE IS :",res.data);
            this.setState({
                outline:res.data
            });
        })
        .catch(error=>{
            console.log(error)
        })

    }
    render(){
        return(
            <div className='bg4'>
               <TeacherNavbarComponent></TeacherNavbarComponent>
                 <Container fluid={true}>
                     <Row>
                         <Col md={{offset:0}}><TeacherSidebar1 courses={this.state.courses}></TeacherSidebar1></Col>
                         <Col md={{offset:0}}><RenderSideBar2></RenderSideBar2></Col>


                         <Col> <br/><br/><RenderSetWeightagelist setTypeWeightage={this.setTypeWeightage} assessment_types={this.state.assessment_types} outline={this.state.outline}></RenderSetWeightagelist></Col>
                     </Row>
                 </Container>
 
 
            </div>
 
        )
   }        
    
}
const mapStateoProps=(state)=>{
    
}
const mapDispatchtoProps=(dispatch)=>{
    return{
        setTypeWeightage:(data,marks_type)=>{dispatch(setTypeWeightage(data,marks_type))},
    }
}
export default connect(mapStateoProps,mapDispatchtoProps)(RenderSetWeightage);
