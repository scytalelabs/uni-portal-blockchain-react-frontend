import React,{Component} from 'react';
import {Container} from 'reactstrap';
import { Row, Col ,Button} from 'reactstrap';
import { LocalForm} from 'react-redux-form';
import { Link } from 'react-router-dom';

import './main.css';

import { connect } from 'react-redux';
import axios from 'axios';
import { baseUrl } from '../shared/basedUrl';
import DeanNavbarComponent from './DeanNavbarComponent';
import DeanVerifyAssessment from './DeanVerifyAssementComponent';
import DeanDisapprove from './DeanDisapproveAssessmentSubComponent';



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


class DeanDisapproveAssessment extends Component{
    
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
            approveList:[],
            approveListFlag:false,
            status:false,
        }
        this.getList=this.getList.bind(this);
      }
      getList(state){
        const token=localStorage.getItem('bearer_token');
          axios.defaults.headers.common['Authorization']=token;
          console.log('dean/'+state.semester+'/'+state.course+'/'+state.section+'/approved_assessments');
          axios.get(baseUrl+'dean/'+state.semester+'/'+state.course+'/'+state.section+'/approved_assessments')
          .then( res => {
              console.log("courses:",res);
              this.setState({
                approveList:res.data,
                approveListFlag:true,
            })
          })
          .catch(error=>{
              console.log(error)
          })
          console.log(state);
          
        
      }
      changeHandler=e=>{
        // console.log("e.target.name",e.target.name);
        // console.log("e.target.value",e.target.value);
        if(e.target.name==='semester'){
          axios.get(baseUrl+'dean/'+e.target.value+'/courses')
          .then( res => {
              console.log("courses:",res);
              this.setState({
                  courses:res.data.data,
                  status:res.data.status,
              })
          })
          .catch(error=>{
              console.log(error)
          })
        }
        if(e.target.name==='course')
      {
          console.log(this.state.courses)
          this.state.courses.map(course=>{
              if(course.course_code===e.target.value)
              {
                  this.setState({
                      name:course.course_name
                  })
              }
          })
          axios.get(baseUrl+'dean/'+this.state.semester+'/'+e.target.value+'/sections')
          .then( res => {
        //   console.log("Section:",res.data.data[0]);
          this.setState({
              sections:res.data.data
          })
      })
      .catch(error=>{
          console.log(error)
      }) 
      }
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
        if(this.state.approveListFlag===false)
        {
            const {semesters,sections,courses,course,semester,section}=this.state;
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
        
        const  rendersection = sections.map((section) => {

            return (
                <option  value={section.section}>{section.section}</option>
            );
        })
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
                                             <h3>Disapprove Assessments</h3>
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
                                                 <Row>
                                                 <Col>
                                                     Course:
                                                     <select model=".course" id="course" name="course"  value={course} className="form-control" onChange={this.changeHandler}>
                                                     <option  >Select Course</option>
                                                         {rendercourse}
                                                      </select>
                                                 </Col>
                                                 <Col>
                                                     Section:
                                                     <select model=".section" id="section" name="section"  value={section} className="form-control" onChange={this.changeHandler}>
                                                     <option  >Select Section</option>
                                                         {rendersection}
                                                      </select>
                                                 </Col>
                                             </Row>
                                         </div>
                                     </Col>
                                 </Row>
                                 <Row>

                                     <Col md={{offset:1}}>
                                         <Button type="submit" onClick={()=>this.getList(this.state)}style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'30px',paddingRight:'30px'}}>
                                             Get Apprived Assessment List
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
        else if(this.state.approveListFlag===true)
        {
            return <DeanDisapprove approveList={this.state.approveList} state={this.state}></DeanDisapprove>
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
    export default connect(mapStatetoProps,mapDispatchtoProps)(DeanDisapproveAssessment);