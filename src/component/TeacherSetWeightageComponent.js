import React, { Component } from 'react'
import SimpleBar from 'simplebar-react';
import {Control, LocalForm } from 'react-redux-form';
import { Row, Col, Button, Container} from 'reactstrap';
import 'simplebar/dist/simplebar.min.css';

class RenderSetWeightage extends Component{
    constructor(props){
      super(props);
    //   console.log("SET WEIGHTAGE",this.props);
        const  {Weightages}=this.props;
        const course= Weightages.filter(list=>{
            return list.cid==this.props.id
        })
    this.state={
        id:course[0].id,
        cid:course[0].cid,
        Assignment:course[0].Assignment,
        Quiz:course[0].Quiz,
        Mid_Term:course[0].Mid_Term,
        Class_Participation:course[0].Class_Participation,
        Final_Term:course[0].Final_Term,
        Project:course[0].Project,
        Project_Presentation:course[0].Project_Presentation,
    }
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
      
    render(){
        const {setTypeWeightage}=this.props;
            const {id,cid,Assignment,Quiz,Mid_Term,Class_Participation,Final_Term,Project,Project_Presentation}=this.state;
            
            return(

                <div className='SetWeightage'style={{fontFamily:'"Times New Roman", Times, serif'}}>
                    
                    <div className='body'>
                        
                    <h3>Set Weightage</h3>
                        <LocalForm style={{marginBottom:'16px'}}>
                            <Row className='form-group'>
                                <Col><h5>Type</h5></Col>
                                <Col></Col>
                                <Col><h5>Percentage</h5></Col>
                            </Row>
                            <SimpleBar style={{ maxHeight: 320 }}>
                                <Container>
                                    <Row className='form-group'>
                                        <Col>Assignment</Col>
                                        <Col>
                                            <Row>
                                                <Col></Col>
                                                <Col ><Control.text model={".Assignment"} id='Assignment' type='number' name='Assignment' defaultValue={this.state.Assignment} className="form-control" onChange={this.changeHandler}/> </Col>
                                                <Col></Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className='form-group'>
                                        <Col>Quiz</Col>
                                        <Col>
                                            <Row>
                                                <Col></Col>
                                                <Col ><Control.text model={".Quiz"} id='Quiz' name='Quiz' type='number' defaultValue={Quiz} className="form-control" onChange={this.changeHandler}/> </Col>
                                                <Col></Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className='form-group'>
                                        <Col>Mid_Term</Col>
                                        <Col>
                                            <Row>
                                                <Col></Col>
                                                <Col ><Control.text model=".Mid_Term" id='Mid_Term' name='Mid_Term' type='number' defaultValue={Mid_Term} className="form-control" onChange={this.changeHandler} /> </Col>
                                                <Col></Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className='form-group'>
                                        <Col>Class_Participation</Col>
                                        <Col>
                                            <Row>
                                                <Col></Col>
                                                <Col ><Control.text model=".Class_Participation" id='Class_Participation' name='Class_Participation'type='number' defaultValue={Class_Participation} className="form-control" onChange={this.changeHandler}/> </Col>
                                                <Col></Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className='form-group'>
                                        <Col>Final_Term</Col>
                                        <Col>
                                            <Row>
                                                <Col></Col>
                                                <Col ><Control.text model=".Final_Term" id='Final_Term' name='Final_Term' type='number' defaultValue={Final_Term} className="form-control" onChange={this.changeHandler}/> </Col>
                                                <Col></Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className='form-group'>
                                        <Col>Project</Col>
                                        <Col>
                                            <Row>
                                                <Col></Col>
                                                <Col ><Control.text model=".Project" id='Project' name='Project' type='number' defaultValue={Project} className="form-control" onChange={this.changeHandler}/> </Col>
                                                <Col></Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className='form-group'>
                                        <Col>Project_Presentation</Col>
                                        <Col>
                                            <Row>
                                                <Col></Col>
                                                <Col ><Control.text model={".Project_Presentation"} id='Project_Presentation'type='number' name='Project_Presentation' defaultValue={Project_Presentation} className="form-control" onChange={this.changeHandler} /> </Col>
                                                <Col></Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>Total<p style={{color:'red'}}>(MUST BE 100)</p></Col>
                                        <Col></Col>
                                        <Col><Button type="submit" onClick={()=>setTypeWeightage(this.state)}   style={{backgroundColor:'#3C315F',borderRadius: '35px'}}>Done</Button></Col>
                                        {/* onClick={()=>this.setTypeWeightage(types)}  */}
                                    </Row>
                                </Container>
                            </SimpleBar>
                        </LocalForm>
            
                    </div>
                </div>
                )
            }        
    
        }

export default RenderSetWeightage;
