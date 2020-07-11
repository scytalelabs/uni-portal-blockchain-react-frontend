import React, { Component } from 'react'
import { Col } from 'reactstrap';



class RegNo extends Component{
    constructor(props){
        super(props);
        console.log("REGNO PROPS:",this.props)
    
}
render(){
    
    return(
        this.props.regno.map(regno=>{
        return(
            <Col>{regno}</Col>
        )
        })
    )
}
}
export default RegNo;