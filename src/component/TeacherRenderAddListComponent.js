import React, { Component } from 'react'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { Container, Col, Row, Button, Alert } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';
import TeacherAddListState from './TeacherAddListStateComponent';

const required   = (val) => val && val.length;

class RenderAddList extends Component{
    constructor(props){
      super(props);
      this.state={
        all_marks:[],
        reg_nos:[],
        marks:null,
        reg_no:null,
        total:null,
        totalflag:false
      }
    }
    changeHandler1=e=>{
        e.preventDefault();
        console.log('TOTAL',e.target)

        // if(e.target.value<=this.state.total)
        // {
        //     this.setState({
        //         totalflag:false
        //     })
        //     if(this.state.reg_no!==e.target.id && this.state.reg_no!=null)
        // {
        //         const all_marks=this.state.all_marks;
        //         let tempmarks=[...all_marks]
        //         tempmarks.push(this.state.marks);
        //         this.setState({
        //             all_marks: tempmarks
        //         });
        //         const reg_nos=this.state.reg_nos;
        //         let tempregno=[...reg_nos]
        //         tempregno.push(this.state.reg_no);
        //         this.setState({
        //         reg_nos: tempregno
        //         });
        // }
        // this.setState({[e.target.name]:e.target.value})

        // this.setState({reg_no:e.target.id})
        // console.log(' this.state.all_marks,this.state.reg_nos,this.state.marks,this.state.reg_no', e.target.value);
        // this.props.marksinfo(this.state,e.target.value)
        // }
        // else{
        //     this.setState({
        //         totalflag:true
        //     })
            
        // }
    
    }
  changeHandler=e=>{

            e.preventDefault();
            console.log('TOTAL',e.target.max)
            console.log("value",e.target.value);

                if(this.state.reg_no!==e.target.id && this.state.reg_no!=null)
                {
                    const all_marks=this.state.all_marks;
                    let tempmarks=[...all_marks]
                    tempmarks.push(this.state.marks);
                    this.setState({
                        all_marks: tempmarks
                    });
                    const reg_nos=this.state.reg_nos;
                    let tempregno=[...reg_nos]
                    tempregno.push(this.state.reg_no);
                    this.setState({
                    reg_nos: tempregno
                    });
                }
                this.setState({[e.target.name]:e.target.value})
                this.setState({reg_no:e.target.id})
                // console.log(' this.state.all_marks,this.state.reg_nos,this.state.marks,this.state.reg_no', e.target.value);
                this.props.marksinfo(this.state,e.target.value)
      }
    render(){
        
        if(this.props.Info!==null){
            let total=null;
        let date=null
        // alert("HELLOO G")
        // total=this.props.Info.info.Total;
        // date=this.props.Info.info.Date;
        if(this.props.Info.type==='Assignment')
        {
            
            total=this.props.Info.info.assignmnet_Total;
            date=this.props.Info.info.assignmnet_Date;
        }else
        if(this.props.Info.type==='Quiz')
        {
            total=this.props.Info.info.quiz_Total;
            date=this.props.Info.info.quiz_Date;
        }else
        if(this.props.Info.type==='Mid-Term')
        {
            total=this.props.Info.info.mid_Total;
            date=this.props.Info.info.mid_Date;

        }else
        if(this.props.Info.type==='Final-Term')
        {
            total=this.props.Info.info.final_Total;
            date=this.props.Info.info.final_Date;;
        }else
        if(this.props.Info.type==='Class-Participation')
        {

            total=this.props.Info.info.classparticipation_Total;
            date=this.props.Info.info.classparticipation_Date;
        }else
        if(this.props.Info.type==='Project')
        {
            total=this.props.Info.info.project_Total;
            date=this.props.Info.info.project_Date;
        }else
        if(this.props.Info.type==='Project-Presentation')
        {
            total=this.props.Info.info.projectpresentation_Total;
            date=this.props.Info.info.projectpresentation_Data;
        }
        this.state.total=total;
        return(

            this.props.value.map(val=>{
                return(
                    <Row key={val.reg_no} >
                        <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>{date}</Col>
                        <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>{val.reg_no}</Col>
                        <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>{val.name}</Col>
                        <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>{total}</Col>
                        <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model={"."+val.reg_no} id={val.reg_no} min={0} max={total} name='marks' type='number' defaultValue={val.obtained_marks} placeholder="Type Here" className="form-control" validators={{required}} onChange={this.changeHandler} />
                        
                            {this.state.totalflag ? ( 
                                <Alert  color="danger">
                                    invalid
                              </Alert>
                            ) : (
                                null
                            )}
                        <Errors  className="text-danger" model={"."+val.reg_no} show="touched"
                            messages={{ required: 'Empty' }}/>
                        </Col>
                    </Row>
        )       
       })
       
        )
        
        }
        else{
            
            console.log("TARGET",this.props);
            if(this.props.value.length!==0)
            {
                this.state.all_marks=this.props.value.obtained_marks;
                this.state.reg_nos=this.props.value.reg_no;
                console.log("STATE",this.state);
            }
            console.log("STATATATTAATTATAAT",this.state);
            return(
                this.props.value.map(val=>{
                    this.state.total=val.total_marks;
                    return(
                        <Row key={val.reg_no} >
                            <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>{val.date}</Col>
                            <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>{val.reg_no}</Col>
                            <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>{val.name}</Col>
                            <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>{val.total_marks}</Col>
                            <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model={"."+val.reg_no} id={val.reg_no} name='marks' min={0} max={val.total_marks} type='marks' defaultValue={val.obtained_marks} placeholder="Type Here" className="form-control" onChange={this.changeHandler1} validators={{required}}  style={{border:'1px solid white'}}/> 
                            {this.state.totalflag ? ( 
                                <Alert  color="danger">
                                    invalid
                              </Alert>
                            ) : (
                                null
                            )}
                            <Errors  className="text-danger" model={"."+val.reg_no} show="touched"
                            messages={{ required: 'Empty' }}/>
                            </Col>

                        </Row>
                )
                })

            )
        }

    }
   
}

export default RenderAddList;