import React,{Component} from 'react';
import {Navbar, Container, Button} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';
import './main.css';
import TeacherNavbarComponent from './TeacherNavbarComponent';
import { baseUrl } from '../shared/basedUrl';
import axios from 'axios';
import RenderAddList from './TeacherRenderAddListComponent';

class TeacherAddListState extends Component{
    constructor(props){
      super(props);
      console.log("PROPS AREEEEE",props);
      this.state={
          info:[],
          all_marks:[],
          reg_nos:[],
          marks:null,
        reg_no:null,
      }
      this.marksinfo=this.marksinfo.bind(this);
    }
    handleInfo(values){
        console.log('Current State is: ' + JSON.stringify(values));
          alert('Current State is: ' + JSON.stringify(values));
      }
    
    componentDidMount(){
        alert("STATE WALI")

        const section=localStorage.getItem('section');
        const course=localStorage.getItem('course');
        const token=localStorage.getItem('bearer_token');
        const regno=localStorage.getItem('reg_no');
        const semester=localStorage.getItem('semester');
        
        const marks_type=this.props.type;
        axios.defaults.headers.common['Authorization']=token;
        console.log('teacher/'+regno+'/'+semester+'/'+course+'/'+section+'/students')
        axios.get(baseUrl+'teacher/'+regno+'/'+semester+'/'+course+'/'+section+'/students')
        .then( res => {
            console.log("RESPONSE IS :",res.data);
            this.setState({
                info:res.data
            });
        })
        .catch(error=>{
            console.log(error)
        })
    }
    addData(state){
        console.log("SATATATA",state)

        const all_marks=this.state.all_marks;
        let tempmarks=[...all_marks]
        tempmarks.push(state.marks);
            this.state.all_marks= tempmarks;
        const reg_nos=this.state.reg_nos;
        let tempregno=[...reg_nos]
        tempregno.push(state.reg_no);
        this.state.reg_nos=tempregno;
        console.log("SATe",this.state)
        const section=localStorage.getItem('section');
        const course=localStorage.getItem('course_name');
        const code=localStorage.getItem('course');
        const token=localStorage.getItem('bearer_token');
        const regno=localStorage.getItem('reg_no');
        const semester=localStorage.getItem('semester');
        axios.defaults.headers.common['Authorization']=token;
        console.log("PROSSSS",this.props);
        if(this.props!==null){
            let total=null;
            let date=null;
            let id=null;
        if(this.props.type==='Assignment')
        {

            total=this.props.info.assignmnet_Total;
            date=this.props.info.assignmnet_Date;
            id=this.props.info.assignment_id;
        }else
        if(this.props.type==='Quiz')
        {
            total=this.props.info.quiz_Total;
            date=this.props.info.quiz_Date;
            id=this.props.info.quiz_id;
        }else
        if(this.props.type==='Mid-Term'||this.props.type==='Mid Term')
        {
            total=this.props.info.mid_Total;
            date=this.props.info.mid_Date;
            id=this.props.info.mid_id;

        }else
        if(this.props.type==='Final-Term'||this.props.type==='Final Term')
        {
            total=this.props.info.final_Total;
            date=this.props.info.final_Date;
            id=this.props.info.final_id;
        }else
        if(this.props.type==='Class-Participation'||this.props.type==='Class Participation')
        {

            total=this.props.info.classparticipation_Total;
            date=this.props.info.classparticipation_Date;
            id=this.props.info.classparticipation_id;
        }else
        if(this.props.type==='Project')
        {
            total=this.props.info.project_Total;
            date=this.props.info.project_Date;
            id=this.props.info.project_id;
        }else
        if(this.props.type==='Project-Presentation')
        {
            total=this.props.info.projectpresentation_Total;
            date=this.props.info.projectpresentation_Data;
            id=this.props.info.projectpresentation_id;
        }
        const Data={
            semester:semester,
            course:course,
            section:section,
            marks_type:this.props.type,
            total_marks:total,
            assesment_no:id,
            date:date,
            time:new Date().toLocaleTimeString(),
            reg_no:this.state.reg_nos,
            obtained_marks:this.state.all_marks

        }
        console.log("Course_data",Data);
        console.log('teacher/'+regno+'/'+semester+'/'+code+'/'+section+'/'+this.props.type+'/'+id+'/upload_marks/students');
        // 14.	teacher/{ teacher_Id }/{semester}/{course}/{section}/{ marks_type }/{ assesment_no }/upload_marks/students

        axios.post(baseUrl+'teacher/'+regno+'/'+semester+'/'+code+'/'+section+'/'+this.props.type+'/'+id+'/upload_marks/students',Data)
        .then( res => {
            console.log("RESPONSE:",res.data)
            window.location.reload(false);
        })
        .catch(error=>{
            console.log(error)
        })

        }
    }
    marksinfo(state,marks){
        // console.log("STATE IS",state,marks);
        this.setState({
            all_marks:state.all_marks,
            reg_nos:state.reg_nos,
            reg_no:state.reg_no,
            marks:marks
        });
        // console.log("THIS.STATE",this.state);
    }
     render(){

        //  console.log("This.props",this.props);
       return(
        <div className='AddList' style={{fontFamily:'"Times New Roman", Times, serif',paddingBottom:'40px',paddingRight:'30px'}}>
            <LocalForm >
                <Container>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070' }}>
                        <Col  md={{offset:1}}  >
                            Student List
                        </Col>
                    </Row>
                    <Row >
                        <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Date</Col>
                        <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Regestration No</Col>
                        <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Name</Col>
                        <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Total Marks</Col>
                        <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Obtained Marks</Col>
                    </Row>

                    <RenderAddList marksinfo={this.marksinfo} value={this.state.info} Info={this.props}></RenderAddList>
                    <br></br>
                    <Button onClick={()=>this.addData(this.state)}style={{backgroundColor:'#3C315F',float: 'right'}}>CONFIRM</Button>
                </Container>
            </LocalForm>
        </div>
       )
     }
    }
    export default TeacherAddListState;