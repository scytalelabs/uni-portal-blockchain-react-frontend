import React,{Component} from 'react';
import {Container} from 'reactstrap';
import { Row, Col ,Button} from 'reactstrap';
import { Control, LocalForm} from 'react-redux-form';
import { Link } from 'react-router-dom';

import './main.css';

import { connect } from 'react-redux';
import axios from 'axios';
import { baseUrl } from '../shared/basedUrl';
import DeanNavbarComponent from './DeanNavbarComponent';
import DeanVerifyAssessment from './DeanVerifyAssementComponent';



function RenderDeanServices(){
    return(
        <div className='container' style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}}>
                    <Row style={{backgroundColor:'#F3F3F3',border:'1px solid #707070',color:'#707070'}}>
                        <Col  md={{offset:1}} >
                            <i className="fa fa-check-circle"></i>{' '}Verify Assessment By<br/>
                        </Col>
                    </Row>
                    <Link to='/dean/AssessmentVerifyBySection'>
                        <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                            <Col  md={{offset:1}}  >
                                Section 
                            </Col>
                        </Row>
                    </Link>
                    <Link to='/dean/AssessmentVerifyByCourse'>
                        <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                            <Col  md={{offset:1}}  >
                                Course 
                            </Col>
                        </Row>
                    </Link>
                    <Link to='/dean/AssessmentVerifyBySemester'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            Semester 
                        </Col>
                    </Row>
                    </Link>
                    
                    <Row style={{backgroundColor:'#F3F3F3',border:'1px solid #707070',color:'#707070'}}>
                        <Col  md={{offset:1}} >
                            <i className="fa fa-check"></i>{' '}Verify Grades By<br/>
                        </Col>
                    </Row>
                    <Link to='/dean/GradeVerifyBySection'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            Section 
                        </Col>
                    </Row>
                    </Link>
                    <Link to='/dean/GradeVerifyByCourse'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            Course 
                        </Col>
                    </Row>
                    </Link>
                    <Link to='/dean/GradeVerifyBySemester'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            Semester 
                        </Col>
                    </Row>
                    </Link>
                    <Row style={{backgroundColor:'#F3F3F3',border:'1px solid #707070',color:'#707070'}}>
                        <Col  md={{offset:1}} >
                            <i className="fa fa-thumbs-down"></i>{' '}Disapprove<br/>
                        </Col>
                    </Row>
                    <Link to='/dean/disapprove'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            Disapprove Assessment 
                        </Col>
                    </Row>
                    </Link>
        </div>
    )
}
function RenderSideBar1(){
    return(    
        
            <div className='sidebar6'>
                <Row>
                    <Col md={{ offset:10 }} >
                    <strong style={{color:'#3C315F'}}><span>&#x276E;&#x276E;</span> </strong>
                    </Col>
                </Row>
                <RenderDeanServices></RenderDeanServices>
            </div>
    )
}


class DeanVerifyAssessmentBySemester extends Component{
    
      constructor(props){
        super(props);
        this.state={
            id:null,
            name:null,
            course:null,
            semester:null,
            section:null,
            semesters:[],
            courses:[],
            sections:[],
            verify:[],
            verifyflag:false,
            status:false,
        }
        this.Verify=this.Verify.bind(this);
      }
      Verify(state){
        const token=localStorage.getItem('bearer_token');
          axios.defaults.headers.common['Authorization']=token;
          axios.get(baseUrl+'dean/'+state.semester+'/has_approved_assessments')
          .then( res => {
              console.log("courses:",res);
              if(res.data.status==true)
              {
                    axios.defaults.headers.common['Authorization']=token;
                    console.log('dean/'+state.semester+'/verify_all_assessments/specific_semester');
                    
                    axios.get(baseUrl+'dean/'+state.semester+'/verify_all_assessments/specific_semester')
                    .then( res => {
                        console.log("courses:",res);
                        this.setState({
                            verify:res.data,
                            verifyflag:true,
                        })
                    })
                    .catch(error=>{
                        console.log(error)
                    })
              }
            //   this.setState({
            //       verify:res.data,
            //       verifyflag:true,
            //   })
          })
          .catch(error=>{
              console.log(error)
          })
          console.log(state);
          
        
      }
      changeHandler=e=>{
      this.setState({[e.target.name]:e.target.value})
    } 
  
     
      componentDidMount(){

        const token=localStorage.getItem('bearer_token');
        // console.log("TOKEN IS IN DEAN ",token);

        axios.defaults.headers.common['Authorization']=token;
        // console.log("TOKEN TOKEN",axios.defaults.headers.common['Authorization']);
        axios.get(baseUrl+'dean/semesters')
        .then( res => {
            // console.log("Semester",res);
            this.setState({
                semesters:res.data.data
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }

     render(){
         console.log("STATE :",this.state);
        if(this.state.verifyflag===false)
        {
            const {semesters,courses,course,semester}=this.state;
        const  rendersemester = semesters.map((semester) => {
            return (

                <option style={{color:'black'}} value={semester.semester}>{semester.semester}</option>
            );
        })
        
         let rendercourse=null;

         if(this.state.status===true)
         {
            rendercourse = courses.map((course) => {

                return (
                    <option  value={course.course_code}>{course.course_name} {course.course_code}</option>
                );
            })

         }
         return (
            <div className='bg3'>
            <DeanNavbarComponent/>
             <Container fluid={true}>
                 <Row>
                     <Col  md={{ offset:0 }}>
                         <RenderSideBar1></RenderSideBar1>
                     </Col>
                     <Col md={{ offset:1 }}>
                     <br></br><br></br>
                         <div className='Services1'style={{paddingBottom:'110px',paddingTop:'110px'}}>
                             <LocalForm >
                             <br></br>      
                                 <Row className='form-group'>           
                                     <Col md={{offset:1}}>
                                         <div className='EditBox'style={{marginBottom:'11px'}}>
                                             <h3>Verify Assessment By Semester</h3>
                                             <br></br>
                                                 <Row>
                                                    <Col>
                                                        Semester:
                                                        <select model=".semester" id="semester" name="semester" value={semester} className="form-control" onChange={this.changeHandler}>
                                                        <option  >Select Semester</option>
                                                            {rendersemester}
                                                        </select>
                                                    </Col>
                                                 </Row>
                                         </div>
                                     </Col>
                                 </Row>
                                 <Row>

                                     <Col md={{offset:1}}>
                                         <Button type="submit" onClick={()=>this.Verify(this.state)}style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'30px',paddingRight:'30px'}}>
                                             Verify
                                         </Button>
                                     </Col>
                                 </Row>
                             </LocalForm>
                         </div>
                     </Col>
                 </Row>
             </Container>
        </div>
         )        
        }
        else if(this.state.verifyflag===true)
        {
            return <DeanVerifyAssessment verify={this.state.verify} state={this.state}></DeanVerifyAssessment>
        }
   }
        
    }
    const mapStatetoProps=(state)=>{
        return{

        }   
    }
    const mapDispatchtoProps=(dispatch)=>{
        return{

        }
    }
    export default connect(mapStatetoProps,mapDispatchtoProps)(DeanVerifyAssessmentBySemester);