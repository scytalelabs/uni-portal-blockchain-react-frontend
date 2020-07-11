import React, { Component } from 'react'
import { Col } from 'reactstrap';



class BeforeMarks extends Component{
    constructor(props){
        super(props);
        console.log("REGNO PROPS:",this.props)
    
}
render(){
    
    return(
        this.props.marks_before.map(marksbefore=>{
        return(
            <Col>{marksbefore}</Col>
        )
        })
    )
}
}
export default BeforeMarks;