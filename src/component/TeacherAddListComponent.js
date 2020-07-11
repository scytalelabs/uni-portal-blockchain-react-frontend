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


class TeacherAddList extends Component{
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
    updateData(state){
        console.log("SATATATA",state)
    }
    
    componentDidMount(){
        

        const section=localStorage.getItem('section');
        const course=localStorage.getItem('course');
        const token=localStorage.getItem('bearer_token');
        const regno=localStorage.getItem('reg_no');
        const semester=localStorage.getItem('semester');
        
        const marks_type=this.props.type;
        const assesment_no=this.props.info.assesment_no;

        axios.defaults.headers.common['Authorization']=token;
        console.log('teacher/'+regno+'/'+semester+'/'+course+'/'+section+'/'+marks_type+'/'+assesment_no+'/upload_marks/students')
        // 14.	teacher/{ teacher_Id }/{semester}/{course}/{section}/{ marks_type }/{ assesment_no }/upload_marks/students

        // console.log("SEMESTER AND REGNO",semester,regno,token);
        axios.get(baseUrl+'teacher/'+regno+'/'+semester+'/'+course+'/'+section+'/'+marks_type+'/'+assesment_no+'/upload_marks/students')
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
    marksinfo(state,marks){
        console.log("STATE IS",state,marks);
        this.setState({
            all_marks:state.all_marks,
            reg_nos:state.reg_no,
            reg_no:state.reg_no,
            marks:marks
        });
        console.log("THIS.STATE",this.state);
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
                    <RenderAddList marksinfo={this.marksinfo}  value={this.state.info} Info={null}></RenderAddList>
                    <br></br>
                    <Button onClick={()=>this.updateData(this.state)} style={{ backgroundColor:'#3C315F',float: 'right'}}>CONFIRM</Button>
                </Container>
            </LocalForm>
        </div>
       )
     }
    }
    export default TeacherAddList;