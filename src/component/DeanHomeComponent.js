import React,{Component} from 'react';
import logo from './UCP-Logo.gif';
import {Navbar, Container, Button} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import './main.css';
import DeanNavbarComponent from './DeanNavbarComponent';
import DeanVerifyAssessmentBySection from './DeanVerifyAssessmentBySectionComponent';
import DeanVerifyAssessmentByCourse from './DeanVerifyAssessmentByCourseComponent';
import DeanVerifyAssessmentBySemester from './DeanVerifyAssessmentBySemesterComponent';
import DeanDisapproveAssessment from './DeanDisapproveAssessmentComponent';
import DeanVerifyGradeBySemester from './DeanVerifyGradeBySemesterComponen';
import DeanVerifyGradeBySection from './DeanVerifyGradeBySectionComponent';
import DeanVerifyGradeByCourse from './DeanVerifyGradeByCourseComponent';


class DeanHome extends Component{
    constructor(props){
      super(props);
      this.state={
        AssessmentBySection:false,
        AssessmentByCourse:false,
        AssessmentBySemester:false,
        GradeByCourse:false,
        GradeBySection:false,
        GradeBySemester:false,
        DisApproveAssessment:false,
      }
      this.AssessmentBySection=this.AssessmentBySection.bind(this);
      this.AssessmentByCourse=this.AssessmentByCourse.bind(this);
      this.AssessmentBySemester=this.AssessmentBySemester.bind(this);
      this.GradeByCourse=this.GradeByCourse.bind(this);
      this.GradeBySection=this.GradeBySection.bind(this);
      this.GradeBySemester=this.GradeBySemester.bind(this);
      this.DisApproveAssessment=this.DisApproveAssessment.bind(this);
    }
    AssessmentBySection(){
        console.log('AssessmentBySection')
        this.setState({
            AssessmentBySection:true
        })
        
    }      
    AssessmentByCourse(){
        console.log('AssessmentByCourse')
        this.setState({
            AssessmentByCourse:true
        })
    }   
    AssessmentBySemester(){
        console.log('AssessmentBySemester')
        this.setState({
            AssessmentBySemester:true
        })
    }      
    GradeByCourse(){
        console.log('GradeByCourse')
        this.setState({
            GradeByCourse:true
        })
        
    }    
    GradeBySection(){
        console.log('GradeBySection')
        this.setState({
            GradeBySection:true
        })
    }   
    GradeBySemester(){
        console.log('GradeBySemester')
        this.setState({
            GradeBySemester:true
        })
    }   
    DisApproveAssessment(){
        console.log('DisApproveAssessment')
        this.setState({
            DisApproveAssessment:true
        })
    }   
     render(){
         const {AssessmentBySection,AssessmentByCourse,AssessmentBySemester,GradeByCourse,GradeBySection,DisApproveAssessment,GradeBySemester}=this.state;
         if(AssessmentBySection===false&&AssessmentByCourse===false&GradeByCourse===false&&GradeBySection===false &&DisApproveAssessment===false && AssessmentBySemester===false && GradeBySemester===false)
       return(
           <div className='bg3' >
               <DeanNavbarComponent></DeanNavbarComponent>
                <Container>
                    <Row>
                        <Col >
                            <br></br>
                            <br></br>
                            <div className='DeanServices'style={{marginBottom:'37px'}}>
                                <Container  >
                                <br></br>
                                <hr></hr>
                                <hr></hr><hr></hr><hr></hr>
                                    <Row style={{display: "flex",justifyContent: "center",alignItems: "center"}} >
                                        <Col><p style={{color:'white', float:'left'} }>Verify Assessment By:</p></Col>
                                        <Col>
                                            <Button onClick={this.AssessmentBySection}style={{fontFamily:'"Times New Roman", Times, serif',color:'black',backgroundColor:"#C4C1CF"}} >Specific Section</Button>
                                        </Col>
                                        <Col>    
                                            <Button onClick={this.AssessmentByCourse}style={{fontFamily:'"Times New Roman", Times, serif',color:'black',backgroundColor:"#C4C1CF"}} >Specific Course</Button>
                                        </Col>
                                        <Col>    
                                            <Button onClick={this.AssessmentBySemester}style={{fontFamily:'"Times New Roman", Times, serif',color:'black',backgroundColor:"#C4C1CF"}} >Specific Semester</Button>
                                        </Col>
                                    </Row>
                                    <hr></hr>
                                    <hr></hr>
                                    <Row style={{display: "flex",justifyContent: "center",alignItems: "center"}} >
                                    <Col><p style={{color:'white', float:'left'} }>Verify Grades By:</p></Col>
                                        <Col>
                                            <Button onClick={this.GradeBySection} style={{fontFamily:'"Times New Roman", Times, serif',color:'black',backgroundColor:"#C4C1CF"}} >Specific Section</Button>
                                        </Col>
                                        <Col>
                                            <Button onClick={this.GradeByCourse}style={{fontFamily:'"Times New Roman", Times, serif',color:'black',backgroundColor:"#C4C1CF"}} >Specific Course</Button>
                                        </Col>
                                        <Col>
                                            <Button onClick={this.GradeBySemester}style={{fontFamily:'"Times New Roman", Times, serif',color:'black',backgroundColor:"#C4C1CF"}} >Specific Semester</Button>
                                        </Col>
                                    </Row>
                                    
                                    <hr></hr>
                                    <hr></hr>
                                    <Row style={{display: "flex",justifyContent: "center",alignItems: "center"}} > 
                                        <Col>
                                            <p style={{color:'white', float:'left'} }>Disapprove Assessment </p>                       
                                        </Col>
                                        <Col>
                                            <Container>
                                                <Button onClick={this.DisApproveAssessment} style={{fontFamily:'"Times New Roman", Times, serif',color:'black',backgroundColor:"#C4C1CF",width:'700px', marginRight:'30px'}} >Disapprove Assessment</Button>
                                            </Container>
                                        </Col>
                                    </Row>
                                    
                                    
                                </Container>            
                            </div>
                        </Col>
                    </Row>
                </Container>
           </div>
       )
       else if(AssessmentBySection===true)
       {
           return(
            <DeanVerifyAssessmentBySection></DeanVerifyAssessmentBySection>
           )
           
       }
       else if(AssessmentByCourse===true)
       {
           return(
            <DeanVerifyAssessmentByCourse></DeanVerifyAssessmentByCourse>
           )
       }
       else if(AssessmentBySemester===true)
       {
           return(
            <DeanVerifyAssessmentBySemester></DeanVerifyAssessmentBySemester>
           )
       }
       else if(DisApproveAssessment===true)
       {
           return(
            <DeanDisapproveAssessment></DeanDisapproveAssessment>
           )
       }
       else if(GradeBySemester===true){
           return(
            <DeanVerifyGradeBySemester></DeanVerifyGradeBySemester>
           )
       }
       else if(GradeBySection===true){
           return(
            <DeanVerifyGradeBySection></DeanVerifyGradeBySection>
           )
       }
       else if(GradeByCourse===true){
        return(
            <DeanVerifyGradeByCourse></DeanVerifyGradeByCourse>
        )
    }
       
       
     }
    }
    export default DeanHome;