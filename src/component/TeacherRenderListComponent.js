import React, { Component } from 'react'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { Link } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';
import { Row, Col, Button } from 'reactstrap';




function RenderOldLists({lists}){
    return(
        lists.map(list=>{
            return(
                <div key={list.id}>
                    <Row className='form-group'>
                        <Col>{list.id}</Col>
                        <Col>{list.lable}</Col>
                        <Col>{list.date}</Col>
                        <Col>{list.total}</Col>
                        <Col></Col>
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
            lid:1,
            id:0,
            lable:"",
            date:"",
            total:0
        }
      }
 
      handleChange=(e)=>{
            this.setState({[e.target.name]:e.target.value})

      }
      handleSubmit=(e)=>{
          this.props.AddList(this.state);
      }
render(){
    const {id,lable,date,total}=this.state;
    // const listinfolist=this.props.listinfo.length?(this.props.listinfo.map(info=>{
    //     return(
    
    //     );
    //     })):( null)
    return(
        <div className='ViewList'style={{fontFamily:'"Times New Roman", Times, serif'}}>
            <div className='body'>
                <h3></h3>
                <SimpleBar style={{ maxHeight: 492, paddingLeft:'20px' }}>
                <div >
                     <LocalForm onSubmit={this.handleSubmit}>
                            <h4>Assignment</h4>
                                <Row className='form-group'>
                                    <Col >Sr.</Col>
                                    <Col>Lable</Col>
                                    <Col>Date</Col>
                                    <Col>Total Marks</Col>
                                    <Col></Col>
                                </Row>
                                <Row className='form-group'>
                                    <Col >1</Col>
                                    <Col ><Control.text model=".assignmnet_Lable" id="assignmnet_Lable" name="assignmnet_Lable" type='assignmnet_Lable' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}} onChange={this.handleChange}/></Col>
                                    <Col><Control.text model=".assignmnet_Date" id="assignmnet_Date" name="assignmnet_Date" type='date' className="form-control" style={{borderRadius:'0px'}} width="40px" onChange={this.handleChange}/></Col>
                                    <Col><Control.text model=".assignmnet_Total" id="assignmnet_Total" name="assignmnet_Total" type='assignmnet_Total' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                    <Col><Button> add <i class="fa fa-plus-circle"></i></Button></Col>
                                </Row>
                                <RenderOldLists id={1} lists={this.props.lists}></RenderOldLists>
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
                                    <Col><Control.text model=".quiz_Lable" id="quiz_Lable" name="quiz_Lable" type='quiz_Lable' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}} onChange={this.handleChange}/></Col>
                                    <Col><Control.text model=".quiz_Date" id="quiz_Date" name="quiz_Date" type='quiz_Date' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                    <Col><Control.text model=".quiz_Total" id="quiz_Total" name="quiz_Total" type='quiz_Total' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                    <Col><Button> add <i class="fa fa-plus-circle"></i></Button></Col>
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
                                    <Col><Control.text model=".mid_Lable" id="mid_Lable" name="mid_Lable" type='mid_Lable' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                    <Col><Control.text model=".mid_Date" id="mid_Date" name="mid_Date" type='mid_Date' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                    <Col><Control.text model=".mid_Total" id="mid_Total" name="mid_Total" type='mid_Total' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                    <Col><Button> add<i class="fa fa-add"></i></Button></Col>

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
                                    <Col><Control.text model=".classParticipation_Lable" id="classParticipation_Lable" name="classParticipation_Lable" type='classParticipation_Lable' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                    <Col><Control.text model=".classParticipation_Date" id="classParticipation_Date" name="classParticipation_Date" type='classParticipation_Date' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                    <Col><Control.text model=".classParticipation_Total" id="classParticipation_Total" name="classParticipation_Total" type='classParticipation_Total' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                    <Col><Button> add<i class="fa fa-add"></i></Button></Col>

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
                                    <Col><Control.text model=".final_Lable" id="final_Lable" name="final_Lable" type='final_Lablet' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                    <Col><Control.text model=".final_Date" id="final_Date" name="final_Date" type='final_Date' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                    <Col><Control.text model=".final_Total" id="final_Total" name="final_Total" type='final_Total' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                    <Col><Button> add<i class="fa fa-add"></i></Button></Col>
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
                                    <Col><Control.text model=".project_Lable" id="project_Lable" name="project_Lable" type='project_Lablet' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}} onChange={this.handleChange}/></Col>
                                    <Col><Control.text model=".project_Date" id="project_Date" name="project_Date" type='project_Date' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                    <Col><Control.text model=".project_Total" id="project_Total" name="project_Total" type='project_Total' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                    <Col><Button> add<i class="fa fa-add"></i></Button></Col>

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
                                    <Col><Control.text model=".projectPresentation_Lable" id="projectPresentation_Lable" name="projectPresentation_Lable" type='assignmnet_Lablet' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                    <Col><Control.text model=".projectPresentation_Date" id="projectPresentation_Date" name="projectPresentation_Date" type='assignmnet_Date' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                    <Col><Control.text model=".projectPresentation_Total" id="projectPresentation_Total" name="projectPresentation_Total" type='assignmnet_Total' placeholder="Type Here" className="form-control" style={{borderRadius:'0px'}}onChange={this.handleChange}/></Col>
                                    <Col><Button> add<i class="fa fa-add"></i></Button></Col>
                                    {/* <Col> Edit<Link to='/teacher/course/ViewList/AddList'>      <i class="fa fa-edit"></i></Link></Col> */}
                                </Row>
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
