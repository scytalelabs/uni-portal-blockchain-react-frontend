import React, { Component } from 'react'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { Link } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';
import { Row, Col, Button } from 'reactstrap';




function RenderAssignmentts({assignments}){
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
                            <Col><Button ><i class="fa fa-plus-circle"></i></Button></Col>
                            <Col><Button ><i class="fa fa-minus-circle"></i></Button></Col>
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
                            <Col><Button ><i class="fa fa-plus-circle"></i></Button></Col>
                            <Col><Button ><i class="fa fa-minus-circle"></i></Button></Col>
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
                            <Col><Button ><i class="fa fa-plus-circle"></i></Button></Col>
                            <Col><Button ><i class="fa fa-minus-circle"></i></Button></Col>
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
                            <Col><Button ><i class="fa fa-plus-circle"></i></Button></Col>
                            <Col><Button ><i class="fa fa-minus-circle"></i></Button></Col>
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
                            <Col><Button ><i class="fa fa-plus-circle"></i></Button></Col>
                            <Col><Button ><i class="fa fa-minus-circle"></i></Button></Col>
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
                            <Col><Button ><i class="fa fa-plus-circle"></i></Button></Col>
                            <Col><Button ><i class="fa fa-minus-circle"></i></Button></Col>
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
                            <Col><Button ><i class="fa fa-plus-circle"></i></Button></Col>
                            <Col><Button ><i class="fa fa-minus-circle"></i></Button></Col>
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
            projectPresentation_Lable:"",
            projectPresentation_Date:"",
            projectPresentation_Total:"",

            project_id:2,
            project_Lable:"",
            project_Date:"",
            project_Total:"",

            assignments:[
                { assignment_id:1,assignmnet_Lable: "Assignment 1",assignmnet_Date:"2020-06-10",assignmnet_Total:"20"},
                { assignment_id:2,assignmnet_Lable: "Assignment 2",assignmnet_Date:"2020-06-10",assignmnet_Total:"30"},
                
            ],
            quizes:[
                { quiz_id:1,quiz_Lable: "Quiz 1",quiz_Date:"2020-06-10",quiz_Total:"20"},
                { quiz_id:2,quiz_Lable: "Quiz 2",quiz_Date:"2020-06-10",quiz_Total:"30"},
            ],
            mids:[
                { mid_id:1,mid_Lable:"Mid-Term",mid_Date:"2020-06-10",mid_Total:"20"},
            ],
            classparticipations:[
                { classParticipation_id:1,classParticipation_Lable:"CP 1",classParticipation_Date:"2020-06-10",classParticipation_Total:"20"},
            ],
            finals:[
                { final_id:1,final_Lable:"Final-Term",final_Date:"2020-06-10",final_Total:"20"},
            ],
            projectpresentations:[
                { projectpresentation_id:1,projectpresentation_Lable:"Project_Presentation",projectpresentation_Date:"2020-06-10",projectpresentation_Total:"40"},
            ],
            projects:[
                { project_id:1,project_Lable:"Project",project_Date:"2020-06-10",project_Total:"40"},
            ]
      }

    }
      handleChange=(e)=>{
            this.setState({[e.target.name]:e.target.value})

      }
      addAssignment(assignmentinfo){
          console.log("ASSIGNMENT",assignmentinfo);
          
        assignmentinfo.id=this.state.assignment_id;
        let id=this.state.assignment_id+1;
        let assignments=[... this.state.assignments,assignmentinfo]
        this.setState({
            assignments,
            id:id
         });

      }
      addQuiz(quizinfo){
        // console.log("quizinfo",quizinfo);
        
        quizinfo.id=this.state.quiz_id;
      let quiz_id=this.state.quiz_id+1;
      let quizes=[... this.state.quizes,quizinfo]
      this.setState({
          quizes,
          quiz_id:quiz_id
       });

    }
    addMids(midsinfo){
        // console.log("quizinfo",quizinfo);
        
        midsinfo.id=this.state.mid_id;
      let mid_id=this.state.mid_id+1;
      let mids=[... this.state.mids,midsinfo]
      this.setState({
          mids,
          mid_id:mid_id
       });

    }
    addClassParticipation(classparticipationinfo){
        // console.log("quizinfo",quizinfo);
        
        classparticipationinfo.id=this.state.classParticipation_id;
      let classParticipation_id=this.state.classParticipation_id+1;
      let classparticipations=[... this.state.classparticipations,classparticipationinfo]
      this.setState({
        classparticipations,
        classParticipation_id:classParticipation_id
       });

    }

    addFinals(finalinfo){
        // console.log("quizinfo",quizinfo);
        
        finalinfo.id=this.state.final_id;
      let final_id=this.state.final_id+1;
      let finals=[... this.state.finals,finalinfo]
      this.setState({
        finals,
        final_id:final_id
       });

    }
    addProjectPresentation(projectpresentationinfo){
        // console.log("quizinfo",quizinfo);
        
        projectpresentationinfo.id=this.state.projectpresentation_id;
      let projectpresentation_id=this.state.projectpresentation_id+1;
      let projectpresentations=[... this.state.projectpresentations,projectpresentationinfo]
      this.setState({
        projectpresentations,
        projectpresentation_id:projectpresentation_id
       });

    }
    addProjects(projectinfo){
        // console.log("quizinfo",quizinfo);
        
        projectinfo.id=this.state.project_id;
      let project_id=this.state.project_id+1;
      let projects=[... this.state.projects,projectinfo]
      this.setState({
        projects,
        project_id:project_id
       });

    }
render(){
    const {assignmnet_Lable,assignmnet_Date,assignmnet_Total,quiz_Date,quiz_Lable,quiz_Total,mid_Date,mid_Total,mid_Lable,classParticipation_Total,classParticipation_Lable,classParticipation_Date,final_Date,final_Total,final_Lable,projectpresentation_Date,projectpresentation_Total,projectpresentation_Lable,project_Date,project_Lable,project_Total}=this.state;
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
                                    <Col>{this.state.id}</Col>
                                    <Col xs="3"><Control.text model=".assignmnet_Lable" id="assignmnet_Lable" name="assignmnet_Lable" type='text' value={assignmnet_Lable}  placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}} onChange={this.handleChange}/></Col>
                                    <Col xs="auto"><Control.text model=".assignmnet_Date" id="assignmnet_Date" name="assignmnet_Date" type='date' className="form-control" value={assignmnet_Date} style={{borderRadius:'0px'}} width="40px" onChange={this.handleChange}/></Col>
                                    <Col xs="3"><Control.text model=".assignmnet_Total" id="assignmnet_Total" name="assignmnet_Total" type='number' value={assignmnet_Total} placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                    <Col><Button onClick={()=>this.addAssignment(this.state)}> add <i class="fa fa-plus-circle"></i></Button></Col>
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
                                <RenderAssignmentts assignments={this.state.assignments}></RenderAssignmentts>
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
                                    <Col><Button onClick={()=>this.addQuiz(this.state)}> add <i class="fa fa-plus-circle"></i></Button></Col>
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
                                <RenderQuizes quizes={this.state.quizes}></RenderQuizes>
                                
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
                                    <Col><Button onClick={()=>this.addQuiz(this.state)}> add <i class="fa fa-plus-circle"></i></Button></Col>
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
                                <RenderMids mids={this.state.mids}></RenderMids>
                                
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
                                    <Col><Button onClick={()=>this.addClassParticipation(this.state)}> add <i class="fa fa-plus-circle"></i></Button></Col>
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
                                <RenderClassParticipation classparticipations={this.state.classparticipations}></RenderClassParticipation>
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
                                     <Col><Button onClick={()=>this.addFinals(this.state)}> add <i class="fa fa-plus-circle"></i></Button></Col>
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
                                <RenderFinals finals={this.state.finals}></RenderFinals>
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
                                    <Col><Button onClick={()=>this.addProjects(this.state)}> add <i class="fa fa-plus-circle"></i></Button></Col>
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
                                <RenderProjects projects={this.state.projects}></RenderProjects>
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
                                    <Col><Button onClick={()=>this.addProjectPresentation(this.state)}> add <i class="fa fa-plus-circle"></i></Button></Col>
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
                                <RenderProjectPresentations projectpresentations={this.state.projectpresentations}></RenderProjectPresentations>

                                <br></br>
                                <br></br>
                        </LocalForm>
                    </div>
                </SimpleBar>
            </div>
        </div>
        );
    }
}

export default RenderList;
