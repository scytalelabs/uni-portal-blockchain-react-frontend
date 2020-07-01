import React, { Component } from 'react'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { Link } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';
import { Row, Col, Button } from 'reactstrap';
import TeacherAddList from './TeacherAddListComponent';
import { connect } from 'react-redux';
import { addAssignment,addQuiz,addProjects,addFinals,addClassParticipation,addProjectPresentation,addMids } from '../redux/ActionCreators';

function RenderAssignmentts({assignments,addAssignmentMarks}){
    // console.log("ASSIGNMENTSSS",assignments);
    // return(
    //     <div>HELLOOOOO</div>
    // )
    return(
        assignments.map(list=>{
            return(
                <div key={list.assignment_id}>
                    <Row className='form-group'>
                        <Col xs='1'>{list.assignment_id}</Col>
                        <Col>{list.assignmnet_Lable}</Col>
                        <Col>{list.assignmnet_Date}</Col>
                        <Col>{list.assignmnet_Total}</Col>
                        <Col>
                            <Row >
                            <Col><Button onClick={()=>addAssignmentMarks(list)}><i className="fa fa-plus-circle"></i></Button></Col>   
                            <Col><Button ><i className="fa fa-minus-circle"></i></Button></Col>
                            </Row>
                        </Col>
                        
                        {/* onClick={()=>this.addAssignment(this.state)} */}
                    </Row>
                </div>
                );
            }
    ))
}
function RenderQuizes({quizes}){
    return(
        quizes.map(list=>{
            return(
                <div key={list.quiz_id}>
                    <Row className='form-group'>
                        <Col xs='1'>{list.quiz_id}</Col>
                        <Col>{list.quiz_Lable}</Col>
                        <Col>{list.quiz_Date}</Col>
                        <Col>{list.quiz_Total}</Col>
                        <Col>
                            <Row >
                            <Col><Button ><i className="fa fa-plus-circle"></i></Button></Col>
                            <Col><Button ><i className="fa fa-minus-circle"></i></Button></Col>
                            </Row>
                        </Col>
                        
                        {/* onClick={()=>this.addAssignment(this.state)} */}
                    </Row>
                </div>
                );
            }
    ))
}
function RenderMids({mids}){
    return(
        mids.map(list=>{
            return(
                <div key={list.mid_id}>
                    <Row className='form-group'>
                        <Col xs='1'>{list.mid_id}</Col>
                        <Col>{list.mid_Lable}</Col>
                        <Col>{list.mid_Date}</Col>
                        <Col>{list.mid_Total}</Col>
                        <Col>
                            <Row >
                            <Col><Button ><i className="fa fa-plus-circle"></i></Button></Col>
                            <Col><Button ><i className="fa fa-minus-circle"></i></Button></Col>
                            </Row>
                        </Col>
                        {/* onClick={()=>this.addAssignment(this.state)} */}
                    </Row>
                </div>
                );
            }
    ))
}

function RenderClassParticipation({classparticipations}){
    return(
        classparticipations.map(list=>{
            return(
                <div key={list.classParticipation_id}>
                    <Row className='form-group'>
                        <Col xs='1'>{list.classParticipation_id}</Col>
                        <Col>{list.classParticipation_Lable}</Col>
                        <Col>{list.classParticipation_Date}</Col>
                        <Col>{list.classParticipation_Total}</Col>
                        <Col>
                            <Row >
                            <Col><Button ><i className="fa fa-plus-circle"></i></Button></Col>
                            <Col><Button ><i className="fa fa-minus-circle"></i></Button></Col>
                            </Row>
                        </Col>
                        {/* onClick={()=>this.addAssignment(this.state)} */}
                    </Row>
                </div>
                );
            }
    ))
}
function RenderFinals({finals}){
    return(
        finals.map(list=>{
            return(
                <div key={list.final_id}>
                    <Row className='form-group'>
                        <Col xs='1'>{list.final_id}</Col>
                        <Col>{list.final_Lable}</Col>
                        <Col>{list.final_Date}</Col>
                        <Col>{list.final_Total}</Col>
                        <Col>
                            <Row >
                            <Col><Button ><i className="fa fa-plus-circle"></i></Button></Col>
                            <Col><Button ><i className="fa fa-minus-circle"></i></Button></Col>
                            </Row>
                        </Col>
                        {/* onClick={()=>this.addAssignment(this.state)} */}
                    </Row>
                </div>
                );
            }
    ))
}

function RenderProjectPresentations({projectpresentations}){
    return(
        projectpresentations.map(list=>{
            return(
                <div key={list.projectpresentation_id}>
                    <Row className='form-group'>
                        <Col xs='1'>{list.projectpresentation_id}</Col>
                        <Col>{list.projectpresentation_Lable}</Col>
                        <Col>{list.projectpresentation_Date}</Col>
                        <Col>{list.projectpresentation_Total}</Col>
                        <Col>
                            <Row >
                            <Col><Button ><i className="fa fa-plus-circle"></i></Button></Col>
                            <Col><Button ><i className="fa fa-minus-circle"></i></Button></Col>
                            </Row>
                        </Col>
                        {/* onClick={()=>this.addAssignment(this.state)} */}
                    </Row>
                </div>
                );
            }
    ))
}


function RenderProjects({projects}){
    return(
        projects.map(list=>{
            return(
                <div key={list.project_id}>
                    <Row className='form-group'>
                        <Col xs='1'>{list.project_id}</Col>
                        <Col>{list.project_Lable}</Col>
                        <Col>{list.project_Date}</Col>
                        <Col>{list.project_Total}</Col>
                        <Col>
                            <Row >
                            <Col><Button ><i className="fa fa-plus-circle"></i></Button></Col>
                            <Col><Button ><i className="fa fa-minus-circle"></i></Button></Col>
                            </Row>
                        </Col>
                        {/* onClick={()=>this.addAssignment(this.state)} */}
                    </Row>
                </div>
                );
            }
    ))
}
class RenderList extends Component{
    constructor(props){
        super(props);
        this.state={
            addAssignment:false,
            assignment_id:3,
            assignmnet_Lable:"",
            assignmnet_Date:"",
            assignmnet_Total:"",

            quiz_id:3,
            quiz_Lable:"",
            quiz_Date:"",
            quiz_Total:"",

            mid_id:2,
            mid_Lable:"",
            mid_Date:"",
            mid_Total:"",

            classParticipation_id:2,
            classParticipation_Lable:"",
            classParticipation_Date:"",
            classParticipation_Total:"",

            final_id:2,
            final_Lable:"",
            final_Date:"",
            final_Total:"",

            projectpresentation_id:2,
            projectpresentation_Lable:"",
            projectpresentation_Date:"",
            projectpresentation_Total:"",

            project_id:2,
            project_Lable:"",
            project_Date:"",
            project_Total:"",
      }
    
      this.addMids=this.addMids.bind(this);
      this.addQuiz=this.addQuiz.bind(this);
      this.addFinals=this.addFinals.bind(this);
      this.addProjects=this.addProjects.bind(this);
      this.addAssignment=this.addAssignment.bind(this);
      this.addAssignmentMarks=this.addAssignmentMarks.bind(this);
      this.addClassParticipation=this.addClassParticipation.bind(this);
      this.addProjectPresentation=this.addProjectPresentation.bind(this);
    }
      handleChange=(e)=>{
          console.log("HANDLE CHANGE",e.target.value)
          console.log("ASSIGNMENT STATE IS",this.state.assignment)
            this.setState({[e.target.name]:e.target.value})

      }
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
    addAssignmentMarks(info){
        console.log("marks info",info);
        this.setState({
            assignmnet:info,
            addAssignment:true

        })
    }
    addMids(mid_id,mid_Lable,mid_Date,mid_Total){
        let midsinfo={mid_id,mid_Lable,mid_Date,mid_Total};
        this.setState({
            mid_id:mid_id+1,
        })
         this.props.addMids(midsinfo);
    }
    addClassParticipation(classParticipation_id,classParticipation_Lable,classParticipation_Date,classParticipation_Total){
        let classparticipationinfo={classParticipation_id,classParticipation_Lable,classParticipation_Date,classParticipation_Total};
        this.setState({
            classParticipation_id:classParticipation_id+1,
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
render(){
    const {assignment_id,assignmnet_Date,assignmnet_Lable,assignmnet_Total,quiz_id,quiz_Date,quiz_Lable,quiz_Total,mid_id,mid_Date,mid_Total,mid_Lable,classParticipation_id,classParticipation_Total,classParticipation_Lable,classParticipation_Date,final_id,final_Date,final_Total,final_Lable,projectpresentation_id,projectpresentation_Date,projectpresentation_Total,projectpresentation_Lable,project_id,project_Date,project_Lable,project_Total}=this.state;
    console.log("PROPS ASSIGNMENT ",this.props.assignments);
    if(this.state.addAssignment==false)
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
                                        <Col><Button onClick={()=>this.addAssignment(assignment_id,assignmnet_Lable,assignmnet_Date,assignmnet_Total)}> add <i className="fa fa-plus-circle"></i></Button></Col>
                                    </Row>
                                    <strong>
                                    <Row className='form-group' >
                                        <Col xs='1'>Sr.</Col>
                                        <Col>Lable</Col>
                                        <Col>Date</Col>
                                        <Col>Total Marks</Col>
                                        <Col>
                                            <Row >
                                                <Col>Add</Col>
                                                <Col>Delete</Col>
                                            </Row>
                                        </Col>  
                                    </Row>
                                    </strong>
                                    <RenderAssignmentts assignments={this.props.assignments} addAssignmentMarks={this.addAssignmentMarks}></RenderAssignmentts>
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
                                        <Col>{this.state.id}</Col>
                                        <Col xs="3"><Control.text model=".quiz_Lable" id="quiz_Lable" name="quiz_Lable" type='text' value={quiz_Lable}  placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}} onChange={this.handleChange}/></Col>
                                        <Col xs="auto"><Control.text model=".quiz_Date" id="quiz_Date" name="quiz_Date" type='date' className="form-control" value={quiz_Date} style={{borderRadius:'0px'}} width="40px" onChange={this.handleChange}/></Col>
                                        <Col xs="3"><Control.text model=".quiz_Total" id="quiz_Total" name="quiz_Total" type='number' value={quiz_Total} placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                        <Col><Button onClick={()=>this.addQuiz(quiz_id,quiz_Lable,quiz_Date,quiz_Total)}> add <i className="fa fa-plus-circle"></i></Button></Col>
                                    </Row>
                                    <strong>
                                    <Row className='form-group' >
                                        <Col xs='1'>Sr.</Col>
                                        <Col >Lable</Col>
                                        <Col>Date</Col>
                                        <Col>Total Marks</Col>
                                        <Col>
                                            <Row >
                                                <Col>Add</Col>
                                                <Col>Delete</Col>
                                            </Row>
                                        </Col>  
                                    </Row>
                                    </strong>
                                    <RenderQuizes quizes={this.props.quizes}></RenderQuizes>
                                    
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
                                        <Col><Button onClick={()=>this.addMids(mid_id,mid_Lable,mid_Date,mid_Total)}> add <i className="fa fa-plus-circle"></i></Button></Col>
                                    </Row>
                                    <strong>
                                    <Row className='form-group' >
                                        <Col xs='1'>Sr.</Col>
                                        <Col >Lable</Col>
                                        <Col>Date</Col>
                                        <Col>Total Marks</Col>
                                        <Col>
                                            <Row >
                                                <Col>Add</Col>
                                                <Col>Delete</Col>
                                            </Row>
                                        </Col>  
                                    </Row>
                                    </strong>
                                    <RenderMids mids={this.props.mids} ></RenderMids>
                                    
                                    <hr></hr>
                                    <h4>Class Participation</h4>
                                    <Row className='form-group'>
                                        <Col ><h5>Sr.</h5></Col>
                                        <Col xs="3"><h5>Lable</h5></Col>
                                        <Col xs="3"><h5>Date</h5></Col>
                                        <Col xs="3"><h5>Total Marks</h5></Col>
                                        <Col></Col>
                                    </Row>
                                    <Row className='form-group'>
                                        <Col >{this.state.classParticipation_id}</Col>
                                        <Col xs="3"><Control.text model=".classParticipation_Lable" id="classParticipation_Lable" name="classParticipation_Lable" type='text' value={classParticipation_Lable} placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                        <Col xs="auto"><Control.text model=".classParticipation_Date" id="classParticipation_Date" name="classParticipation_Date" type='date' value={classParticipation_Date} placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                        <Col xs="3"><Control.text model=".classParticipation_Total" id="classParticipation_Total" name="classParticipation_Total" type='number' value={classParticipation_Total} placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                        <Col><Button onClick={()=>this.addClassParticipation(classParticipation_id,classParticipation_Lable,classParticipation_Date,classParticipation_Total)}> add <i className="fa fa-plus-circle"></i></Button></Col>
                                    </Row>
                                    <strong>
                                    <Row className='form-group' >
                                        <Col xs='1'>Sr.</Col>
                                        <Col >Lable</Col>
                                        <Col>Date</Col>
                                        <Col>Total Marks</Col>
                                        <Col>
                                            <Row >
                                                <Col>Add</Col>
                                                <Col>Delete</Col>
                                            </Row>
                                        </Col>  
                                    </Row>
                                    </strong>
                                    <RenderClassParticipation classparticipations={this.props.classparticipations}></RenderClassParticipation>
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
                                         <Col><Button onClick={()=>this.addFinals(final_id,final_Lable,final_Date,final_Total)}> add <i className="fa fa-plus-circle"></i></Button></Col>
                                    </Row>
                                    <strong>
                                    <Row className='form-group' >
                                        <Col xs='1'>Sr.</Col>
                                        <Col >Lable</Col>
                                        <Col>Date</Col>
                                        <Col>Total Marks</Col>
                                        <Col>
                                            <Row >
                                                <Col>Add</Col>
                                                <Col>Delete</Col>
                                            </Row>
                                        </Col>  
                                    </Row>
                                    </strong>
                                    <RenderFinals finals={this.props.finals}></RenderFinals>
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
                                        <Col xs="3"><Control.text model=".project_Lable" id="project_Lable" name="project_Lable" type='text'  value={project_Lable}placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}} onChange={this.handleChange}/></Col>
                                        <Col xs="auto"><Control.text model=".project_Date" id="project_Date" name="project_Date" type='date'  value={project_Date}placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                        <Col xs="3"><Control.text model=".project_Total" id="project_Total" name="project_Total" type='number' value={project_Total} placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                        <Col><Button onClick={()=>this.addProjects(project_id,project_Lable,projectpresentation_Date,projectpresentation_Total)}> add <i className="fa fa-plus-circle"></i></Button></Col>
                                    </Row>
                                    <strong>
                                    <Row className='form-group' >
                                        <Col xs='1'>Sr.</Col>
                                        <Col >Lable</Col>
                                        <Col>Date</Col>
                                        <Col>Total Marks</Col>
                                        <Col>
                                            <Row >
                                                <Col>Add</Col>
                                                <Col>Delete</Col>
                                            </Row>
                                        </Col>  
                                    </Row>
                                    </strong>
                                    <RenderProjects projects={this.props.projects}></RenderProjects>
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
                                        <Col><Button onClick={()=>this.addProjectPresentation(projectpresentation_id,projectpresentation_Lable,projectpresentation_Date,projectpresentation_Total)}> add <i className="fa fa-plus-circle"></i></Button></Col>
                                    </Row>
                                    <strong>
                                    <Row className='form-group' >
                                        <Col xs='1'>Sr.</Col>
                                        <Col >Lable</Col>
                                        <Col>Date</Col>
                                        <Col>Total Marks</Col>
                                        <Col>
                                            <Row >
                                                <Col>Add</Col>
                                                <Col>Delete</Col>
                                            </Row>
                                        </Col>  
                                    </Row>
                                    </strong>
                                    <RenderProjectPresentations projectpresentations={this.props.projectpresentations}></RenderProjectPresentations>
                                    <br></br>
                                    <br></br>
                            </LocalForm>
                        </div>
                    </SimpleBar>
                </div>
            </div>
            );
        }
        else if( this.state.addAssignment==true)
        { 
            return(
            <TeacherAddList assignment_id={this.state.assignment.assignment_id } assignmnet_Total={this.state.assignment.assignmnet_Total} assignmnet_Date={this.state.assignment.assignmnet_Date} assignmnet_Lable={this.state.assignment.assignmnet_Lable} ></TeacherAddList>

            )
            
        }
    
    }
}
const mapStatetoProps=(state)=>{
    return{
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
        addProjects:(projectinfo)=>{dispatch(addProjects(projectinfo))}
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(RenderList);
