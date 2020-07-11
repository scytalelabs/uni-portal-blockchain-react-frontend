import React, { Component } from 'react'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { Link } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';
import { Row, Col, Button, Container } from 'reactstrap';
import TeacherAddList from './TeacherAddListComponent';
import { connect } from 'react-redux';
import { addAssignment,addQuiz,addProjects,addFinals,addClassParticipation,addProjectPresentation,addMids ,getListAssessment} from '../redux/ActionCreators';
import axios from 'axios';
import { baseUrl } from '../shared/basedUrl';
import TeacherAddListState from './TeacherAddListStateComponent';
import TeacherVerifyMarks from './TeacherVerifyMarksComponents';
import TeacherVerifyAllAssessmentMarks from './TeacherVerifyAllAssessmentMarksComponent';
import TeacherDisplayGrade from './TeacherDisplayGrade';

function RenderAssignmentts({assignments,addMarks,approve,verify}){
    
    console.log("ASSIGNMETN",assignments);
    if(assignments!==null)
    {
        return(
            assignments.map(list=>{
                if(list.type_name.includes("Assignment") || list.type_name.includes("assignment"))
                {
                    return(
                        <div key={list.assesment_no}>
                            <Row className='form-group'>
                                <Col xs='1'>{list.assesment_no}</Col>
                                <Col>{list.type_name}</Col>
                                <Col>{list.date}</Col>
                                <Col>{list.total_marks}</Col>
        
                                    {list.status === 'Not Approved'?  <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} onClick={()=>addMarks(list,'Assignment')}><i className="fa fa-plus-circle"></i></Button></Col>   : <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} disabled><i class="fa fa-plus-circle"></i></Button ></Col> }
                                    <Col  ><Button style={{backgroundColor:'#3C315F'}} ><i className="fa fa-minus-circle"></i></Button></Col>                               

                                    {list.status === 'Not Approved'?  <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} disabled ><i class="fa fa-check-circle" ></i></Button ></Col>: <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} onClick={()=>verify(list)}><i class="fa fa-check-circle" ></i></Button ></Col> }
                                    {list.status === 'Not Approved'?  <Col><Button style={{backgroundColor:'#3C315F'}}  onClick={()=>approve(list)}><i class="fa fa-thumbs-up"></i></Button ></Col>: <Col><Button style={{backgroundColor:'#3C315F'}} disabled><i class="fa fa-thumbs-up"></i></Button ></Col> }
                               
                            </Row>
                        </div>
                        );
                }
                else
                {
                    return<div></div>
                }
                
            }
        ))

    }
    else
    {
        return<div></div>
    }
    
}
// function RenderStateAssignments({assignments,addMarksState}){
    
//     // console.log("ASSIGNMETN",assignments);
//     if(assignments===undefined)
//     {
//         return<div></div>
//     }
//         return(
//             assignments.map(list=>{

//                     return(
//                         <div key={list.id}>
//                         <Row className='form-group'>
//                             <Col xs='1'>{list.id}</Col>
//                             <Col>{list.Lable}</Col>
//                             <Col>{list.Date}</Col>
//                             <Col>{list.Total}</Col>
        
//                                     <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} onClick={()=>addMarksState(list,'Assignment')}><i className="fa fa-plus-circle"></i></Button></Col>   
//                                     <Col  ><Button style={{backgroundColor:'#3C315F'}} ><i className="fa fa-minus-circle"></i></Button></Col>                               
//                                     <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} ><i class="fa fa-check-circle" ></i></Button ></Col>
//                                     <Col><Button style={{backgroundColor:'#3C315F'}}  ><i class="fa fa-thumbs-up"></i></Button ></Col>
                               
//                             </Row>
//                         </div>
//                         );
//                 }

//         ))

    
// }
function RenderStateAssignments({assignments,addMarksState}){
    
    // console.log("ASSIGNMETN",assignments);
    if(assignments===undefined)
    {
        return<div></div>
    }
        return(
            assignments.map(list=>{

                    return(
                        <div key={list.assignment_id}>
                        <Row className='form-group'>
                            <Col xs='1'>{list.assignment_id}</Col>
                            <Col>{list.assignmnet_Lable}</Col>
                            <Col>{list.assignmnet_Date}</Col>
                            <Col>{list.assignmnet_Total}</Col>
        
                                    <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} onClick={()=>addMarksState(list,'Assignment')}><i className="fa fa-plus-circle"></i></Button></Col>   
                                    <Col  ><Button style={{backgroundColor:'#3C315F'}} ><i className="fa fa-minus-circle"></i></Button></Col>                               
                                    <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} ><i class="fa fa-check-circle" ></i></Button ></Col>
                                    <Col><Button style={{backgroundColor:'#3C315F'}}  ><i class="fa fa-thumbs-up"></i></Button ></Col>
                               
                            </Row>
                        </div>
                        );
                }

        ))
        

    
}
function RenderQuizes({quizes,addMarks,approve,verify}){
    console.log("quizes",quizes);
    if(quizes!==null)
    {
    
    return(
        quizes.map(list=>{
            if(list.type_name.includes('Quiz') || list.type_name.includes('quiz'))
            {
            return(
                <div key={list.assesment_no}>
                    <Row className='form-group'>
                        <Col xs='1'>{list.assesment_no}</Col>
                        <Col>{list.type_name}</Col>
                        <Col>{list.date}</Col>
                        <Col>{list.total_marks}</Col>

                            {list.status === 'Not Approved'?  <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} onClick={()=>addMarks(list,'Quiz')}><i className="fa fa-plus-circle"></i></Button></Col>   : <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} disabled><i class="fa fa-plus-circle"></i></Button ></Col> }
                            <Col  ><Button style={{backgroundColor:'#3C315F'}} ><i className="fa fa-minus-circle"></i></Button></Col>                               
                            {list.status === 'Not Approved'?  <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} disabled ><i class="fa fa-check-circle" ></i></Button ></Col>: <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} onClick={()=>verify(list)}><i class="fa fa-check-circle" ></i></Button ></Col> }
                            {list.status === 'Not Approved'?  <Col><Button style={{backgroundColor:'#3C315F'}}  onClick={()=>approve(list)}><i class="fa fa-thumbs-up"></i></Button ></Col>: <Col><Button style={{backgroundColor:'#3C315F'}} disabled><i class="fa fa-thumbs-up"></i></Button ></Col> }
                    </Row>
                </div>
                );
            }
            else
            {
                return<div></div>
            }
        }

    ))
    }
    else
    {
        return<div></div>
    }
}
function RenderStateQuizes({quizes,addMarksState}){
    return(
        quizes.map(list=>{
            return(
                <div key={list.quiz_id}>
                    <Row className='form-group'>
                        <Col xs='1'>{list.quiz_id}</Col>
                        <Col>{list.quiz_Lable}</Col>
                        <Col>{list.quiz_Date}</Col>
                        <Col>{list.quiz_Total}</Col>

                            <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}}onClick={()=>addMarksState(list,'Quiz')}><i className="fa fa-plus-circle"></i></Button></Col>   
                            <Col  ><Button style={{backgroundColor:'#3C315F'}}><i className="fa fa-minus-circle"></i></Button></Col>                               
                            <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}}><i class="fa fa-check-circle" ></i></Button ></Col>
                            <Col><Button style={{backgroundColor:'#3C315F'}}><i class="fa fa-thumbs-up"></i></Button ></Col>
                    </Row>
                </div>
                );
        }
    ))
}
function RenderMids({mids,addMarks,approve,verify}){
    if(mids!==null){
    return(
        mids.map(list=>{
            if(list.type_name.includes('mid') || list.type_name.includes('Mid') || list.type_name.includes('MID'))
            {
            return(
                <div key={list.assesment_no}>
                    <Row className='form-group'>
                        <Col xs='1'>{list.assesment_no}</Col>
                        <Col>{list.type_name}</Col>
                        <Col>{list.date}</Col>
                        <Col>{list.total_marks}</Col>
                        {/* <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}}onClick={()=>addMarks(list,'Mid Term')}><i className="fa fa-plus-circle"></i></Button></Col>    */}
                        {list.status === 'Not Approved'?  <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} onClick={()=>addMarks(list,'Mid-Term')}><i className="fa fa-plus-circle"></i></Button></Col>   : <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} disabled><i class="fa fa-plus-circle"></i></Button ></Col> }
                        <Col><Button style={{backgroundColor:'#3C315F'}}><i className="fa fa-minus-circle"></i></Button></Col>
                        {list.status === 'Not Approved'?  <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}}disabled ><i class="fa fa-check-circle" ></i></Button ></Col>: <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}}onClick={()=>verify(list)}><i class="fa fa-check-circle" ></i></Button ></Col> }
                        {list.status === 'Not Approved'?  <Col><Button style={{backgroundColor:'#3C315F'}} onClick={()=>approve(list)}><i class="fa fa-thumbs-up"></i></Button ></Col>: <Col><Button style={{backgroundColor:'#3C315F'}} disabled><i class="fa fa-thumbs-up"></i></Button ></Col> }
                    </Row>
                </div>
                );
            }
            else
            {
                return<div></div>
            }
        }
    ))
    }
    else
    {
        return<div></div>
    }
}
function RenderStateMids({mids,addMarksState}){
    return(
        mids.map(list=>{
            return(
                <div key={list.mid_id}>
                    <Row className='form-group'>
                        <Col xs='1'>{list.mid_id}</Col>
                        <Col>{list.mid_Lable}</Col>
                        <Col>{list.mid_Date}</Col>
                        <Col>{list.mid_Total}</Col>

                            <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}}onClick={()=>addMarksState(list,'Mid-Term')}><i className="fa fa-plus-circle"></i></Button></Col>   
                            <Col  ><Button style={{backgroundColor:'#3C315F'}}><i className="fa fa-minus-circle"></i></Button></Col>                               
                            <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}}><i class="fa fa-check-circle" ></i></Button ></Col>
                           <Col><Button style={{backgroundColor:'#3C315F'}}><i class="fa fa-thumbs-up"></i></Button ></Col>

                    </Row>
                </div>
                );
        }
    ))
}
function RenderClassParticipation({classparticipations,addMarks,approve,verify}){
    if(classparticipations!==null){
    return(
        classparticipations.map(list=>{
            if(list.type_name.includes('cp') || list.type_name.includes('class') || list.type_name.includes('CP')|| list.type_name.includes('Class'))
            {
            return(
                <div key={list.assesment_no}>
                    <Row className='form-group'>
                        <Col xs='1'>{list.assesment_no}</Col>
                        <Col>{list.type_name}</Col>
                        <Col>{list.date}</Col>
                        <Col>{list.total_marks}</Col>

                            {/* <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}}onClick={()=>addMarks(list,'Class Participation')}><i className="fa fa-plus-circle"></i></Button></Col>    */}
                            {list.status === 'Not Approved'?  <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} onClick={()=>addMarks(list,'Class-Participation')}><i className="fa fa-plus-circle"></i></Button></Col>   : <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} disabled><i class="fa fa-plus-circle"></i></Button ></Col> }
                            <Col><Button style={{backgroundColor:'#3C315F'}}><i className="fa fa-minus-circle"></i></Button></Col>
                            {list.status === 'Not Approved'?  <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}}disabled ><i class="fa fa-check-circle" ></i></Button ></Col>: <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} onClick={()=>verify(list)}><i class="fa fa-check-circle" ></i></Button ></Col> }
                            {list.status === 'Not Approved'?  <Col><Button style={{backgroundColor:'#3C315F'}}  style={{backgroundColor:'#3C315F'}}onClick={()=>approve(list)}><i class="fa fa-thumbs-up"></i></Button ></Col>: <Col><Button style={{backgroundColor:'#3C315F'}}disabled><i class="fa fa-thumbs-up"></i></Button ></Col> }

                    </Row>
                </div>
                );
            }
            else
            {
                return<div></div>
            }
        }
    ))}
    else
    {
        return<div></div>
    }
}
function RenderStateClassParticipation({classparticipations,addMarksState}){
    // console.log("classparticipations",classparticipations);
    return(
        classparticipations.map(list=>{
            return(
                <div key={list.classparticipation_id}>
                    <Row className='form-group'>
                        <Col xs='1'>{list.classparticipation_id}</Col>
                        <Col>{list.classparticipation_Lable}</Col>
                        <Col>{list.classparticipation_Date}</Col>
                        <Col>{list.classparticipation_Total}</Col>

                            <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}}onClick={()=>addMarksState(list,'Class-Participation')}><i className="fa fa-plus-circle"></i></Button></Col>   
                            <Col  ><Button style={{backgroundColor:'#3C315F'}}><i className="fa fa-minus-circle"></i></Button></Col>                               
                            <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}}><i class="fa fa-check-circle" ></i></Button ></Col>
                           <Col><Button style={{backgroundColor:'#3C315F'}}><i class="fa fa-thumbs-up"></i></Button ></Col>

                    </Row>
                </div>
                );
        }
    ))
}
function RenderFinals({finals,addMarks,approve,verify}){
    if(finals!==null){
    return(
        finals.map(list=>{
            if(list.type_name.includes('final') || list.type_name.includes('Final') || list.type_name.includes('FINAL'))
            {
            return(
                <div key={list.assesment_no}>
                    <Row className='form-group'>
                        <Col xs='1'>{list.assesment_no}</Col>
                        <Col>{list.type_name}</Col>
                        <Col>{list.date}</Col>
                        <Col>{list.total_marks}</Col>

                        {list.status === 'Not Approved'?  <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} onClick={()=>addMarks(list,'Final-Term')}><i className="fa fa-plus-circle"></i></Button></Col>   : <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} disabled><i class="fa fa-plus-circle"></i></Button ></Col> }
                        <Col><Button style={{backgroundColor:'#3C315F'}}><i className="fa fa-minus-circle"></i></Button></Col>
                        {list.status === 'Not Approved'?  <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}}disabled ><i class="fa fa-check-circle" ></i></Button ></Col>: <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}}onClick={()=>verify(list)}><i class="fa fa-check-circle" ></i></Button ></Col> }
                        {list.status === 'Not Approved'?  <Col><Button style={{backgroundColor:'#3C315F'}}  style={{backgroundColor:'#3C315F'}}onClick={()=>approve(list)}><i class="fa fa-thumbs-up"></i></Button ></Col>: <Col><Button style={{backgroundColor:'#3C315F'}}disabled><i class="fa fa-thumbs-up"></i></Button ></Col> }
                    </Row>
                </div>
                );
            }
            else
            {
                return<div></div>
            }
        }
    ))}
    else
    {
        return<div></div>
    }
}
function RenderStateFinals({finals,addMarksState}){
    return(
        finals.map(list=>{
            return(
                <div key={list.final_id}>
                    <Row className='form-group'>
                        <Col xs='1'>{list.final_id}</Col>
                        <Col>{list.final_Lable}</Col>
                        <Col>{list.final_Date}</Col>
                        <Col>{list.final_Total}</Col>

                            <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}}onClick={()=>addMarksState(list,'Final-Term')}><i className="fa fa-plus-circle"></i></Button></Col>   
                            <Col  ><Button style={{backgroundColor:'#3C315F'}}><i className="fa fa-minus-circle"></i></Button></Col>                               
                            <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}}><i class="fa fa-check-circle" ></i></Button ></Col>
                           <Col><Button style={{backgroundColor:'#3C315F'}} ><i class="fa fa-thumbs-up"></i></Button ></Col>

                    </Row>
                </div>
                );
        }
    ))
}
function RenderProjectPresentations({projectpresentations,addMarks,approve,verify}){
    if(projectpresentations!==null){
    return(
        projectpresentations.map(list=>{
            if(list.type_name.includes('presentation') || list.type_name.includes('Presentation'))
            {
            return(
                <div key={list.assesment_no}>
                    <Row className='form-group'>
                        <Col xs='1'>{list.assesment_no}</Col>
                        <Col>{list.type_name}</Col>
                        <Col>{list.date}</Col>
                        <Col>{list.total_marks}</Col>
                        
                            {list.status === 'Not Approved'?  <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} onClick={()=>addMarks(list,'Project-Presentation')}><i className="fa fa-plus-circle"></i></Button></Col>   : <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} disabled><i class="fa fa-plus-circle"></i></Button ></Col> }
                            <Col><Button style={{backgroundColor:'#3C315F'}}><i className="fa fa-minus-circle"></i></Button></Col>
                            {list.status === 'Not Approved'?  <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} disabled ><i class="fa fa-check-circle" ></i></Button ></Col>: <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}}onClick={()=>verify(list)}><i class="fa fa-check-circle" ></i></Button ></Col> }
                            {list.status === 'Not Approved'?  <Col><Button style={{backgroundColor:'#3C315F'}} onClick={()=>approve(list)}><i class="fa fa-thumbs-up"></i></Button ></Col>: <Col><Button style={{backgroundColor:'#3C315F'}}disabled><i class="fa fa-thumbs-up"></i></Button ></Col> }
                    </Row>
                </div>
                );
            }
            else
            {
                return<div></div>
            }
        }
    ))}
    else
    {
        return<div></div>
    }
}

function RenderStateProjectPresentations({projectpresentations,addMarksState}){
    return(
        projectpresentations.map(list=>{
            return(
                <div key={list.projectpresentation_id}>
                    <Row className='form-group'>
                        <Col xs='1'>{list.projectpresentation_id}</Col>
                        <Col>{list.projectpresentation_Lable}</Col>
                        <Col>{list.projectpresentation_Date}</Col>
                        <Col>{list.projectpresentation_Total}</Col>

                            <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}}onClick={()=>addMarksState(list,'Project-Presentation')}><i className="fa fa-plus-circle"></i></Button></Col>   
                            <Col  ><Button style={{backgroundColor:'#3C315F'}}><i className="fa fa-minus-circle"></i></Button></Col>                               
                            <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} ><i class="fa fa-check-circle" ></i></Button ></Col>
                           <Col><Button style={{backgroundColor:'#3C315F'}}><i class="fa fa-thumbs-up"></i></Button ></Col>

                    </Row>
                </div>
                );
        }
    ))
}

function RenderProjects({projects,addMarks,approve,verify}){
    if(projects!==null){
    return(
        projects.map(list=>{
            if(list.type_name.includes('project') || list.type_name.includes('Project'))
            {
            return(
                <div key={list.assesment_no}>
                    <Row className='form-group'>
                        <Col xs='1'>{list.assesment_no}</Col>
                        <Col>{list.type_name}</Col>
                        <Col>{list.date}</Col>
                        <Col>{list.total_marks}</Col>
                        
                            <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} onClick={()=>addMarks(list,'Project')}><i className="fa fa-plus-circle"></i></Button></Col>   
                            {list.status === 'Not Approved'?  <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} onClick={()=>addMarks(list,'Project')}><i className="fa fa-plus-circle"></i></Button></Col>   : <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} disabled><i class="fa fa-plus-circle"></i></Button ></Col> }
                            <Col><Button style={{backgroundColor:'#3C315F'}}  style={{backgroundColor:'#3C315F'}}><i className="fa fa-minus-circle"></i></Button></Col>
                            {list.status === 'Not Approved'?  <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} disabled ><i class="fa fa-check-circle" ></i></Button ></Col>: <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} onClick={()=>verify(list)}><i class="fa fa-check-circle" ></i></Button ></Col> }
                            {list.status === 'Not Approved'?  <Col><Button style={{backgroundColor:'#3C315F'}} onClick={()=>approve(list)}><i class="fa fa-thumbs-up"></i></Button ></Col>: <Col><Button style={{backgroundColor:'#3C315F'}} disabled><i class="fa fa-thumbs-up"></i></Button ></Col> }
                    </Row>
                </div>
                );
            }
            else
            {
                return<div></div>
            }
        }
    ))}
    else
    {
        return<div></div>
    }
}
function RenderStateProjects({projects,addMarksState}){
    return(
        projects.map(list=>{
            return(
                <div key={list.project_id}>
                    <Row className='form-group'>
                        <Col xs='1'>{list.project_id}</Col>
                        <Col>{list.project_Lable}</Col>
                        <Col>{list.project_Date}</Col>
                        <Col>{list.project_Total}</Col>

                            <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}} onClick={()=>addMarksState(list,'Project')}><i className="fa fa-plus-circle"></i></Button></Col>   
                            <Col  ><Button style={{backgroundColor:'#3C315F'}} ><i className="fa fa-minus-circle"></i></Button></Col>                               
                            <Col md={{offset:0}}><Button style={{backgroundColor:'#3C315F'}}><i class="fa fa-check-circle" ></i></Button ></Col>
                           <Col><Button style={{backgroundColor:'#3C315F'}} ><i class="fa fa-thumbs-up"></i></Button ></Col>

                    </Row>
                </div>
                );
        }
    ))
}

class RenderList extends Component{
    constructor(props){
        super(props);
        let are_all_assessments_approved=false;
        this.state={

            addMarksflag:false,
            addMarksStateflag:false,
            info:[],
            type:null,
            verify:null,
            verifyflag:false,
            verifyallAssessment:null,
            verifyallAssessmentflag:false,
            are_all_assessments_approved,
            gradesdata:[],
            gradesflag:false,
            id:1,
            Lable:'',
            Date:'',
            Total:'',

            assignment_id:2,
            assignmnet_Lable:"",
            assignmnet_Date:"",
            assignmnet_Total:"",

            quiz_id:6,
            quiz_Lable:"",
            quiz_Date:"",
            quiz_Total:"",

            mid_id:1,
            mid_Lable:"",
            mid_Date:"",
            mid_Total:"",

            classparticipation_id:1,
            classparticipation_Lable:"",
            classparticipation_Date:"",
            classparticipation_Total:"",

            final_id:2,
            final_Lable:"",
            final_Date:"",
            final_Total:"",

            projectpresentation_id:1,
            projectpresentation_Lable:"",
            projectpresentation_Date:"",
            projectpresentation_Total:"",

            project_id:1,
            project_Lable:"",
            project_Date:"",
            project_Total:"",
      }
    
      this.addMids=this.addMids.bind(this);
      this.addQuiz=this.addQuiz.bind(this);
      this.addFinals=this.addFinals.bind(this);
      this.addProjects=this.addProjects.bind(this);
      this.addAssignment=this.addAssignment.bind(this);
      this.addMarks=this.addMarks.bind(this);
      this.approve=this.approve.bind(this);
      this.verify=this.verify.bind(this);
      this.verifyAllAssessment=this.verifyAllAssessment.bind(this);
      this.viewGrade=this.viewGrade.bind(this);
      this.addMarksState=this.addMarksState.bind(this);
      this.addClassParticipation=this.addClassParticipation.bind(this);
      this.addProjectPresentation=this.addProjectPresentation.bind(this);
      this.getListAssessment=this.getListAssessment.bind(this);
    }
      handleChange=(e)=>{
            this.setState({[e.target.name]:e.target.value})

      }
    //   addAssignment(id,Lable,Date,Total){
    //       console.log(id,Lable,Date,Total);
    //     let assignmentinfo={id,Lable,Date,Total};
    //     this.setState({
    //         id:id+1,
    //     })
    //      this.props.addAssignment(assignmentinfo);
    //           }
      addAssignment(assignment_id,assignmnet_Lable,assignmnet_Date,assignmnet_Total){
        let assignmentinfo={assignment_id,assignmnet_Lable,assignmnet_Date,assignmnet_Total};
        this.setState({
            assignment_id:assignment_id+1,
        })
         this.props.addAssignment(assignmentinfo);
              }
      addQuiz(quiz_id,quiz_Lable,quiz_Date,quiz_Total){
        let quizinfo={quiz_id,quiz_Lable,quiz_Date,quiz_Total};
        this.setState({
            quiz_id:quiz_id+1,
        })
         this.props.addQuiz(quizinfo);
    }
    addMarks(info,Type){
        // console.log("marks info",info,Type);
        
        this.setState({
            info:info,
            type:Type,
            addMarksflag:true
        })
    }
    verify(list){
        console.log("marks",list);

        
        const semester=localStorage.getItem('semester');
        const course=localStorage.getItem('course');
        
        const section=localStorage.getItem('section'); 
        const marks_type=list.type_name;
        const assesment_no=list.assesment_no

        const token=localStorage.getItem('bearer_token');
        console.log("TOKEN IS ",token);
        const regno=localStorage.getItem('reg_no');
        axios.defaults.headers.common['Authorization']=token;
        console.log("teacher/"+regno+'/'+semester+'/'+course+'/'+section+'/'+marks_type+'/'+assesment_no+"/verify_assessment");
        axios.get(baseUrl+"teacher/"+regno+'/'+semester+'/'+course+'/'+section+'/'+marks_type+'/'+assesment_no+"/verify_assessment")
        .then(response=>{
            console.log("RESPONSE :",response);
            this.setState({
                verify:response.data,
                verifyflag:true
            })
        //     this.getListAssessment(response.data);
          })
          .catch(error=>{
            console.log(error)
          })
        
    }
    approve(list){
        // console.log("marks",list);

        
        const semester=localStorage.getItem('semester');
        const course=localStorage.getItem('course');
        const course_name=localStorage.getItem('course_name');
        const section=localStorage.getItem('section'); 
        const marks_type=list.type_name;
        const assesment_no=list.assesment_no

        const token=localStorage.getItem('bearer_token');
        // console.log("TOKEN IS ",token);
        const regno=localStorage.getItem('reg_no');
        const Data={
            semester: semester,
            course: course_name,
            section: section,
            marks_type: marks_type,
            assesment_no: assesment_no
        }
        

        axios.defaults.headers.common['Authorization']=token;
        console.log("teacher/"+regno+'/'+semester+'/'+course+'/'+section+'/'+marks_type+'/'+assesment_no+"/approve_assesment");
        axios.put(baseUrl+"teacher/"+regno+'/'+semester+'/'+course+'/'+section+'/'+marks_type+'/'+assesment_no+"/approve_assesment",Data)
        .then(response=>{
            console.log("RESPONSE :",response);
            window.location.reload(false);

          })
          .catch(error=>{
            console.log(error)
          })
        
    }
    viewGrade(){
        // console.log("ME YA BH A GYA HU");
        // 19.	teacher/{ teacher_Id }}/{semester}/{course_code}/{section}/calculate_grades
        
        const semester=localStorage.getItem('semester');
        const course=localStorage.getItem('course');
        const section=localStorage.getItem('section'); 
        const course_name=localStorage.getItem('course_name');

        const token=localStorage.getItem('bearer_token');
        console.log("TOKEN IS ",token);
        const regno=localStorage.getItem('reg_no');
        axios.defaults.headers.common['Authorization']=token;
        console.log("teacher/"+regno+'/'+semester+'/'+course+'/'+section+'/calculate_grades');
        axios.get(baseUrl+"teacher/"+regno+'/'+semester+'/'+course+'/'+section+"/calculate_grades")
        .then(response=>{
            console.log("calculate_grades :",response.data);
            this.setState({
                gradesdata:response.data.message,
                
            })
          })
          .then(response=>{
              
              const gradeinfo={
                  semester:semester,
                  section:section,
                  course:course_name
              }
                axios.post(baseUrl+"teacher/"+regno+'/'+semester+'/'+course+'/'+section+"/calculate_grades",gradeinfo)
                .then(response=>{
                    axios.post(baseUrl+"teacher/"+regno+'/store_grades_on_blockchain',gradeinfo)
                    .then(response=>{
                        this.setState({
                            gradesflag:true,
                        })
                    }).catch(error=>{
                        console.log(error)
                      })
                                // console.log("calculate_grades :",response);
                    // 23.	teacher/{ teacher_Id }/store_grades_on_blockchain

                    
                    
                })
          })
          .catch(error=>{
            console.log(error)
          })

    }
    verifyAllAssessment(){
        // console.log("CLICK HO GYA BHAIII");
        const semester=localStorage.getItem('semester');
        const course=localStorage.getItem('course');
        const section=localStorage.getItem('section'); 

        const token=localStorage.getItem('bearer_token');
        console.log("TOKEN IS ",token);
        const regno=localStorage.getItem('reg_no');
        axios.defaults.headers.common['Authorization']=token;
        console.log("teacher/"+regno+'/'+semester+'/'+course+'/'+section+'/verify_all_assessments');
        axios.get(baseUrl+"teacher/"+regno+'/'+semester+'/'+course+'/'+section+"/verify_all_assessments")
        .then(response=>{
            console.log("RESPONSE :",response);
            this.setState({
                verifyallAssessment:response.data,
                verifyallAssessmentflag:true
            })
          })
          .catch(error=>{
            console.log(error)
          })

    }
    addMarksState(info,Type){
        console.log("marks info",info,Type);
        this.setState({
            info:info,
            type:Type,
            addMarksStateflag:true
        })
        
    }
    addMids(mid_id,mid_Lable,mid_Date,mid_Total){
        let midsinfo={mid_id,mid_Lable,mid_Date,mid_Total};
        this.setState({
            mid_id:mid_id+1,
        })
         this.props.addMids(midsinfo);
    }
    addClassParticipation(classparticipation_id,classparticipation_Lable,classparticipation_Date,classparticipation_Total){
        let classparticipationinfo={classparticipation_id,classparticipation_Lable,classparticipation_Date,classparticipation_Total};
        this.setState({
            classparticipation_id:classparticipation_id+1,
        })
         this.props.addClassParticipation(classparticipationinfo);
    }

    addFinals(final_id,final_Lable,final_Date,final_Total){
        let finalinfo={final_id,final_Lable,final_Date,final_Total};
        this.setState({
            final_id:final_id+1,
        })
         this.props.addFinals(finalinfo);
    }
    addProjectPresentation(projectpresentation_id,projectpresentation_Lable,projectpresentation_Date,projectpresentation_Total){
        let projectpresentationinfo={projectpresentation_id,projectpresentation_Lable,projectpresentation_Date,projectpresentation_Total};
        this.setState({
            projectpresentation_id:projectpresentation_id+1,
        })
         this.props.addProjectPresentation(projectpresentationinfo);

    }
    addProjects(project_id,project_Lable,projectpresentation_Date,projectpresentation_Total){
        let projectinfo={project_id,project_Lable,projectpresentation_Date,projectpresentation_Total};
        this.setState({
            project_id:project_id+1,
        })
         this.props.addProjects(projectinfo);

    }
    getListAssessment(ListAssessment)
    {
        this.props.getListAssessment(ListAssessment)
    }
    componentDidMount(){
        const semester=localStorage.getItem('semester');
        const course=localStorage.getItem('course');
        const section=localStorage.getItem('section');        

        const token=localStorage.getItem('bearer_token');
        // console.log("TOKEN IS ",token);
        const regno=localStorage.getItem('reg_no');
        axios.defaults.headers.common['Authorization']=token;
        console.log("teacher/"+regno+'/'+semester+'/'+course+'/'+section+"/assessments");
        axios.get(baseUrl+"teacher/"+regno+'/'+semester+'/'+course+'/'+section+"/assessments")
        .then(response=>{
            console.log("RESPONSE :",response);
            this.getListAssessment(response.data);
          })
          .catch(error=>{
            console.log(error)
          })
        //   25.	teacher/{teacher_Id}/{semester}/{course_code}/{section}/are_all_assessments_approved 
          axios.get(baseUrl+"teacher/"+regno+'/'+semester+'/'+course+'/'+section+"/are_all_assessments_approved ")
        .then(response=>{
            console.log("are_all_assessments_approved :",response);
            this.setState({
                are_all_assessments_approved:response.data.status
            })
            


          })
          .catch(error=>{
            console.log(error)
          })
        //   {list.status === 'Not Approved'?  <Col><Button style={{backgroundColor:'#3C315F'}}  onClick={()=>approve(list)}><i class="fa fa-thumbs-up"></i></Button ></Col>: <Col><Button style={{backgroundColor:'#3C315F'}} disabled><i class="fa fa-thumbs-up"></i></Button ></Col> }
        
    }
render(){
    const {assignment_id,assignmnet_Date,assignmnet_Lable,assignmnet_Total,quiz_id,quiz_Date,quiz_Lable,quiz_Total,mid_id,mid_Date,mid_Total,mid_Lable,classparticipation_id,classparticipation_Total,classparticipation_Lable,classparticipation_Date,final_id,final_Date,final_Total,final_Lable,projectpresentation_id,projectpresentation_Date,projectpresentation_Total,projectpresentation_Lable,project_id,project_Date,project_Lable,project_Total}=this.state;
    // console.log("STATEEE ",this.state);
    if(this.state.addMarksflag==false && this.props.ListAssessment!==null && this.state.addMarksStateflag==false&& this.state.verifyflag==false && this.state.verifyallAssessmentflag==false && this.state.gradesflag==false)
    {
        return(
            <div className='ViewList'style={{fontFamily:'"Times New Roman", Times, serif'}}>
                <div className='body'>
                    <h3></h3>
                    <SimpleBar style={{ maxHeight: 492, paddingLeft:'20px' }}>
                    <div >
                         <LocalForm >
                         
                                <h4>Assignment</h4>
                                    <Row className='form-group'>
                                        <Col ><h5>Sr.</h5></Col>
                                        <Col xs="3"><h5>Lable</h5></Col>
                                        <Col xs="3"><h5>Date</h5></Col>
                                        <Col xs="3"><h5>Total Marks</h5></Col>
                                        <Col></Col>
                                    </Row>
                                    <Row className='form-group'>
                                        <Col>{this.state.assignment_id}</Col>
                                        <Col xs="3"><Control.text model=".assignmnet_Lable" id="assignmnet_Lable" name="assignmnet_Lable" type='text' defaultValue={this.state.assignmnet_Lable}  placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}} onChange={this.handleChange}/></Col>
                                        <Col xs="auto"><Control.text model=".assignmnet_Date" id="assignmnet_Date" name="assignmnet_Date" type='date' className="form-control" defaultValue={this.state.assignmnet_Date} style={{borderRadius:'0px'}} width="40px" onChange={this.handleChange}/></Col>
                                        <Col xs="3"><Control.text model=".assignmnet_Total" id="assignmnet_Total" name="assignmnet_Total" type='number' defaultValue={this.state.assignmnet_Total} placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                        <Col><Button style={{backgroundColor:'#3C315F'}} onClick={()=>this.addAssignment(assignment_id,assignmnet_Lable,assignmnet_Date,assignmnet_Total)}> add <i className="fa fa-plus-circle"></i></Button></Col>
                                    </Row>
                                    <strong>
                                    <Row className='form-group' >
                                        <Col xs='1'>Sr.</Col>
                                        <Col>Lable</Col>
                                        <Col>Date</Col>
                                        <Col>Total Marks</Col>
                                        <Col md={{offset:0}}>Update</Col>
                                        <Col>Delete</Col>
                                        <Col md={{offset:0}}>Verify</Col>
                                        <Col>Approve</Col>
                                    </Row>
                                    </strong>
                                    <RenderAssignmentts assignments={this.props.ListAssessment} addMarks={this.addMarks} approve={this.approve} verify={this.verify}></RenderAssignmentts>
                                    <RenderStateAssignments assignments={this.props.assignments} addMarksState={this.addMarksState}></RenderStateAssignments>
                                    <hr></hr>
    
                                    <h4>Quiz</h4>
                                    <Row className='form-group' style={{}}>
                                        <Col ><h5>Sr.</h5></Col>
                                        <Col xs="3"><h5>Lable</h5></Col>
                                        <Col xs="3"><h5>Date</h5></Col>
                                        <Col xs="3"><h5>Total Marks</h5></Col>
                                        <Col></Col>
                                    </Row>
                                    <Row className='form-group'>
                                        <Col>{this.state.quiz_id}</Col>
                                        <Col xs="3"><Control.text model=".quiz_Lable" id="quiz_Lable" name="quiz_Lable" type='text' value={quiz_Lable}  placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}} onChange={this.handleChange}/></Col>
                                        <Col xs="auto"><Control.text model=".quiz_Date" id="quiz_Date" name="quiz_Date" type='date' className="form-control" value={quiz_Date} style={{borderRadius:'0px'}} width="40px" onChange={this.handleChange}/></Col>
                                        <Col xs="3"><Control.text model=".quiz_Total" id="quiz_Total" name="quiz_Total" type='number' value={quiz_Total} placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                        <Col><Button style={{backgroundColor:'#3C315F'}} onClick={()=>this.addQuiz(quiz_id,quiz_Lable,quiz_Date,quiz_Total)}> add <i className="fa fa-plus-circle"></i></Button></Col>
                                    </Row>
                                    <strong>
                                    <Row className='form-group' >
                                        <Col xs='1'>Sr.</Col>
                                        <Col >Lable</Col>
                                        <Col>Date</Col>
                                        <Col>Total Marks</Col>
                                        <Col md={{offset:0}}>Update</Col>
                                        <Col>Delete</Col>
                                        <Col md={{offset:0}}>Verify</Col>
                                        <Col>Approve</Col>
                                    </Row>
                                    </strong>
                                    <RenderQuizes quizes={this.props.ListAssessment} addMarks={this.addMarks} approve={this.approve} verify={this.verify}></RenderQuizes>
                                    <RenderStateQuizes quizes={this.props.quizes} addMarksState={this.addMarksState}></RenderStateQuizes>
                                    
                                    <hr></hr>
                                    <h4>Mid-Term</h4>
                                    <Row className='form-group' style={{}}>
                                        <Col ><h5>Sr.</h5></Col>
                                        <Col xs="3"><h5>Lable</h5></Col>
                                        <Col xs="3"><h5>Date</h5></Col>
                                        <Col xs="3"><h5>Total Marks</h5></Col>
                                        <Col></Col>
                                    </Row>
                                    <Row className='form-group'>
                                        <Col >{this.state.mid_id}</Col>
                                        <Col xs="3"><Control.text model=".mid_Lable" id="mid_Lable" name="mid_Lable" type='text' value={mid_Lable} placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                        <Col xs="auto"><Control.text model=".mid_Date" id="mid_Date" name="mid_Date" type='date' value={mid_Date} placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                        <Col xs="3"><Control.text model=".mid_Total" id="mid_Total" name="mid_Total" type='number' value={mid_Total} placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                        <Col><Button style={{backgroundColor:'#3C315F'}} onClick={()=>this.addMids(mid_id,mid_Lable,mid_Date,mid_Total)}> add <i className="fa fa-plus-circle"></i></Button></Col>
                                    </Row>
                                    <strong>
                                    <Row className='form-group' >
                                        <Col xs='1'>Sr.</Col>
                                        <Col >Lable</Col>
                                        <Col>Date</Col>
                                        <Col>Total Marks</Col>
                                        <Col md={{offset:0}}>Update</Col>
                                        <Col>Delete</Col>
                                        <Col md={{offset:0}}>Verify</Col>
                                        <Col>Approve</Col>

                                    </Row>
                                    </strong>
                                    <RenderMids mids={this.props.ListAssessment} addMarks={this.addMarks} approve={this.approve} verify={this.verify}></RenderMids>
                                    <RenderStateMids mids={this.props.mids} addMarksState={this.addMarksState}></RenderStateMids>
                                    
                                    <hr></hr>
                                    <h4>Class-Participation</h4>
                                    <Row className='form-group'>
                                        <Col ><h5>Sr.</h5></Col>
                                        <Col xs="3"><h5>Lable</h5></Col>
                                        <Col xs="3"><h5>Date</h5></Col>
                                        <Col xs="3"><h5>Total Marks</h5></Col>
                                        <Col></Col>
                                    </Row>
                                    <Row className='form-group'>
                                        <Col >{this.state.classparticipation_id}</Col>
                                        <Col xs="3"><Control.text model=".classparticipation_Lable" id="classparticipation_Lable" name="classparticipation_Lable" type='text' value={classparticipation_Lable} placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                        <Col xs="auto"><Control.text model=".classparticipation_Date" id="classparticipation_Date" name="classparticipation_Date" type='date' value={classparticipation_Date} placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                        <Col xs="3"><Control.text model=".classparticipation_Total" id="classparticipation_Total" name="classparticipation_Total" type='number' value={classparticipation_Total} placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                        <Col><Button style={{backgroundColor:'#3C315F'}}  style={{backgroundColor:'#3C315F'}}onClick={()=>this.addClassParticipation(classparticipation_id,classparticipation_Lable,classparticipation_Date,classparticipation_Total)}> add <i className="fa fa-plus-circle"></i></Button></Col>
                                    </Row>
                                    <strong>
                                    <Row className='form-group' >
                                        <Col xs='1'>Sr.</Col>
                                        <Col >Lable</Col>
                                        <Col>Date</Col>
                                        <Col>Total Marks</Col>
                                        <Col md={{offset:0}}>Update</Col>
                                        <Col>Delete</Col>
                                        <Col md={{offset:0}}>Verify</Col>
                                        <Col>Approve</Col>
                                    </Row>
                                    </strong>
                                    <RenderClassParticipation classparticipations={this.props.ListAssessment} addMarks={this.addMarks} approve={this.approve} verify={this.verify}></RenderClassParticipation>
                                    <RenderStateClassParticipation classparticipations={this.props.classparticipations} addMarksState={this.addMarksState}></RenderStateClassParticipation>
                                    <hr></hr>
    
    
                                    <h4>Final-Term</h4>
                                    <Row className='form-group'>
                                        <Col ><h5>Sr.</h5></Col>
                                        <Col xs="3"><h5>Lable</h5></Col>
                                        <Col xs="3"><h5>Date</h5></Col>
                                        <Col xs="3"><h5>Total Marks</h5></Col>
                                        <Col></Col>
                                    </Row>
                                    <Row className='form-group'>
                                        <Col >{this.state.final_id}</Col>
                                        <Col xs="3"><Control.text model=".final_Lable" id="final_Lable" name="final_Lable" type='text' value={final_Lable}  placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                        <Col xs="auto"><Control.text model=".final_Date" id="final_Date" name="final_Date" type='date' value={final_Date} placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                        <Col xs="3"><Control.text model=".final_Total" id="final_Total" name="final_Total" type='number' value={final_Total} placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                         <Col><Button style={{backgroundColor:'#3C315F'}} onClick={()=>this.addFinals(final_id,final_Lable,final_Date,final_Total)}> add <i className="fa fa-plus-circle"></i></Button></Col>
                                    </Row>
                                    <strong>
                                    <Row className='form-group' >
                                        <Col xs='1'>Sr.</Col>
                                        <Col >Lable</Col>
                                        <Col>Date</Col>
                                        <Col>Total Marks</Col>
                                        <Col md={{offset:0}}>Update</Col>
                                        <Col>Delete</Col>
                                        <Col md={{offset:0}}>Verify</Col>
                                        <Col>Approve</Col>
                                    </Row>
                                    </strong>
                                    <RenderFinals finals={this.props.ListAssessment} addMarks={this.addMarks} approve={this.approve} verify={this.verify}></RenderFinals>
                                    <RenderStateFinals finals={this.props.finals} addMarksState={this.addMarksState}></RenderStateFinals>
                                    <hr></hr>
    
    
                                <h4>Project</h4>
                                    <Row className='form-group'>
                                        <Col ><h5>Sr.</h5></Col>
                                        <Col xs="3"><h5>Lable</h5></Col>
                                        <Col xs="3"><h5>Date</h5></Col>
                                        <Col xs="3"><h5>Total Marks</h5></Col>
                                        <Col></Col>
                                    </Row>
                                    <Row className='form-group'>
                                        <Col >{this.state.project_id}</Col>
                                        <Col xs="3"><Control.text model=".project_Lable" id="project_Lable" name="type_name" type='text'  value={project_Lable}placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}} onChange={this.handleChange}/></Col>
                                        <Col xs="auto"><Control.text model=".project_Date" id="project_Date" name="project_Date" type='date'  value={project_Date}placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                        <Col xs="3"><Control.text model=".project_Total" id="project_Total" name="project_Total" type='number' value={project_Total} placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                        <Col><Button style={{backgroundColor:'#3C315F'}} onClick={()=>this.addProjects(project_id,project_Lable,projectpresentation_Date,projectpresentation_Total)}> add <i className="fa fa-plus-circle"></i></Button></Col>
                                    </Row>
                                    <strong>
                                    <Row className='form-group' >
                                        <Col xs='1'>Sr.</Col>
                                        <Col >Lable</Col>
                                        <Col>Date</Col>
                                        <Col>Total Marks</Col>
                                        <Col md={{offset:0}}>Update</Col>
                                        <Col>Delete</Col>
                                        <Col md={{offset:0}}>Verify</Col>
                                        <Col>Approve</Col> 
                                    </Row>
                                    </strong>
                                    <RenderProjects projects={this.props.ListAssessment} addMarks={this.addMarks} approve={this.approve} verify={this.verify}></RenderProjects>
                                    <RenderStateProjects projects={this.props.projects} addMarksState={this.addMarksState}></RenderStateProjects>
                                    <hr></hr>
    
    
                                    <h4>Project Presentation</h4>
                                    <Row className='form-group'>
                                        <Col ><h5>Sr.</h5></Col>
                                        <Col xs="3"><h5>Lable</h5></Col>
                                        <Col xs="3"><h5>Date</h5></Col>
                                        <Col xs="3"><h5>Total Marks</h5></Col>
                                        <Col></Col>
                                    </Row>
                                    <Row className='form-group'>
                                        <Col >{this.state.projectpresentation_id}</Col>
                                        <Col xs="3"><Control.text model=".projectpresentation_Lable" id="projectpresentation_Lable" name="projectpresentation_Lable" type='text' value={projectpresentation_Lable} placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                        <Col xs="auto"><Control.text model=".projectpresentation_Date" id="projectpresentation_Date" name="projectpresentation_Date" type='Date' value={projectpresentation_Date} placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                        <Col xs="3"><Control.text model=".projectpresentation_Total" id="projectpresentation_Total" name="projectpresentation_Total" value={projectpresentation_Total} type='number' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                        <Col><Button style={{backgroundColor:'#3C315F'}} onClick={()=>this.addProjectPresentation(projectpresentation_id,projectpresentation_Lable,projectpresentation_Date,projectpresentation_Total)}> add <i className="fa fa-plus-circle"></i></Button></Col>
                                    </Row>
                                    <strong>
                                    <Row className='form-group' >
                                        <Col xs='1'>Sr.</Col>
                                        <Col >Lable</Col>
                                        <Col>Date</Col>
                                        <Col>Total Marks</Col>
                                        <Col md={{offset:0}}>Update</Col>
                                        <Col>Delete</Col>
                                        <Col md={{offset:0}}>Verify</Col>
                                        <Col>Approve</Col>  
                                    </Row>
                                    </strong>
                                    <RenderProjectPresentations projectpresentations={this.props.ListAssessment} addMarks={this.addMarks} approve={this.approve} verify={this.verify}></RenderProjectPresentations>
                                    <RenderStateProjectPresentations projectpresentations={this.props.projectpresentations} addMarksState={this.addMarksState}></RenderStateProjectPresentations>
                                    <br></br>
                                    <br></br>
                                    <Container>
                                        <Button style={{float:'right',backgroundColor:'#3C315F'}} onClick={this.verifyAllAssessment}>Verify All Assessment</Button>
                                        
                                        {this.state.are_all_assessments_approved === true?  <Button style={{float:'right',backgroundColor:'#3C315F'}} onClick={this.viewGrade}>Compile Grade</Button>:<Button style={{float:'right',backgroundColor:'#3C315F'}} onClick={this.viewGrade} disabled>Compile Grade</Button>}
                                    </Container>
                                    
                                    <br></br>
                                    <br></br>
                            </LocalForm>
                        </div>
                    </SimpleBar>
                </div>
            </div>
            );
        }
        else if( this.state.addMarksflag==true)
        { 
            return(
            <TeacherAddList info={this.state.info} type={this.state.type}></TeacherAddList>
            )
            
        }
        else if( this.state.addMarksStateflag==true)
        { 
            return(
            <TeacherAddListState info={this.state.info} type={this.state.type}></TeacherAddListState>
            )
            
        }
        else if( this.state.verifyflag==true)
        { 
            return(
            <TeacherVerifyMarks verify={this.state.verify}></TeacherVerifyMarks>
            )
        }
        else if(this.state.verifyallAssessmentflag==true)
        {
            return(
                <TeacherVerifyAllAssessmentMarks verifyallAssessment={this.state.verifyallAssessment}></TeacherVerifyAllAssessmentMarks>
                )
        }
        else if(this.state.gradesflag==true)
        {
            return(
                <TeacherDisplayGrade gradesdata={this.state.gradesdata}></TeacherDisplayGrade>
                )
        }
    
    }
}
const mapStatetoProps=(state)=>{
    return{
        ListAssessment:state.ListAssessment,
        assignments:state.assignments,
        quizes:state.quizes,
        mids:state.mids,
        classparticipations:state.classparticipations,
        finals:state.finals,
        projectpresentations:state.projectpresentations,
        projects:state.projects

    }   
}
const mapDispatchtoProps=(dispatch)=>{
    return{
        addAssignment:(assignmentinfo)=>{dispatch(addAssignment(assignmentinfo))},
        addQuiz:(quizinfo)=>{dispatch(addQuiz(quizinfo))},
        addMids:(midsinfo)=>{dispatch(addMids(midsinfo))},
        addFinals:(finalinfo)=>{dispatch(addFinals(finalinfo))},
        addClassParticipation:(classparticipationinfo)=>{dispatch(addClassParticipation(classparticipationinfo))},
        addProjectPresentation:(projectpresentationinfo)=>{dispatch(addProjectPresentation(projectpresentationinfo))},
        addProjects:(projectinfo)=>{dispatch(addProjects(projectinfo))},
        getListAssessment:(ListAssessment)=>{dispatch(getListAssessment(ListAssessment))}
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(RenderList);
