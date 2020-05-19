import React from 'react'
import SimpleBar from 'simplebar-react';
import {Control, LocalForm } from 'react-redux-form';
import { Row, Col } from 'reactstrap';
import 'simplebar/dist/simplebar.min.css';

const RenderSetWeightage =({types})=>{

    const typeslist=types.length?(types.map(type=>{
        return(
            <div key={type.id}>
                <Row className='form-group'>
                     <Col>{type.data}</Col>
                     <Row>
                         <Col></Col>
                         <Col ><Control.text model={"."+type.data} id={type.data} name={type.data} type={type.data} placeholder="" className="form-control" /> </Col>
                         <Col></Col>
                     </Row>
                 </Row>
            </div>

        )

    }
    )):( null)

return(
    <div className='SetWeightage'style={{fontFamily:'"Times New Roman", Times, serif'}}>
        <div className='body'>

        <h3>Set Weightage</h3>
            <LocalForm >
                <Row className='form-group'>
                    <Col><h5>Type</h5></Col>
                    <Col></Col>
                    <Col><h5>Percentage</h5></Col>
                </Row>
                <SimpleBar style={{ maxHeight: 320 }}>
                    {typeslist}
                    Total<p style={{color:'red'}}>(MUST BE 100)</p>
                </SimpleBar>
            </LocalForm>

        </div>
    </div>
    )
}

export default RenderSetWeightage;