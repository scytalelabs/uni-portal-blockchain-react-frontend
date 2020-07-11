import React, { Component } from 'react'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { Container, Col, Row, Button } from 'reactstrap';
import { LocalForm, Control } from 'react-redux-form';
import axios from 'axios';
import { baseUrl } from '../shared/basedUrl';

class RenderSetWeightagelist extends Component{
    constructor(props){
      super(props);
      this.state={
      }

      
    }

      changeHandler=e=>{
        console.log("e.target.name",e.target.name);
        console.log("e.target.value",e.target.value);
        this.setState({[e.target.name]:e.target.value})
      }
    render(){
        const {setTypeWeightage}=this.props;
        console.log(this.state);
        // const renderourtline=this.outline.map((outline)=>{
            
        // })
        const  renderType = this.props.assessment_types.map((types) => {
            return (
                <Row className='form-group' key={types.type_name}>
                    <Col className='form-group'>{types.type_name}</Col>  
                    <Col className='form-group'><Control.text model={"."+types.type_name} id='weightage' name='weightage' min={0} max={100} type='number' defaultValue='0'  onChange={this.changeHandler} className="form-control"/> </Col>  
                    <Col><Button type="submit"  onClick={()=>setTypeWeightage(this.state,types.type_name)} style={{backgroundColor:'#3C315F',borderRadius: '35px'}}>Done</Button></Col>
                </Row>
            );
        })
        return(
            <div className='SetWeightage'style={{fontFamily:'"Times New Roman", Times, serif'}}>
                  <div className='body'>      
                  <br></br>
                  <h3>Set Weightage</h3>
                      <LocalForm style={{marginBottom:'66px',marginTop:'65px'}}>
                          <Container>
                          <Row className='form-group' >  
                            <Col><h5>TYPE</h5></Col>
                            <Col><h5>WEIGHTAGE</h5></Col>
                          </Row>
                          <hr></hr>
                          {renderType}

                          </Container>                            
                      </LocalForm>
                  </div>
              </div>
      )

    }
   
}

export default RenderSetWeightagelist;