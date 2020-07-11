import React, { Component } from 'react'
import { Col } from 'reactstrap';



class AfterMarks extends Component{
    constructor(props){
        super(props);
        console.log("REGNO PROPS:",this.props)
    
}
render(){
    
    return(
        this.props.marks_now.map(marksnow=>{
        return(
            <Col>{marksnow}</Col>
        )
        })
    )
}
}
export default AfterMarks;