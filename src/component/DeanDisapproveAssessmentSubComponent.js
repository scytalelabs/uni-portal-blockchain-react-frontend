import React from 'react';
import {Container, Button, Row, Col} from 'reactstrap';
import './main.css';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import DeanNavbarComponent from './DeanNavbarComponent';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../shared/basedUrl';


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
function Disapprove(data,state){
    console.log("LO G ME A GYA YAHA BH",data,state);

    const Disapproveinfo={
        marks_type:data.type_name,
        assesment_no:data.assesment_no,
        semester:state.semester,
        section:state.section,
        course:state.name
    }
//     Request body:
// {
//     "semester": "Fall16",
//     "course": "CCN",
//     "section": "A",
//     "marks_type": "Quiz",
//     "assesment_no": 1
// }
            const token=localStorage.getItem('bearer_token');
          axios.defaults.headers.common['Authorization']=token;
          console.log('dean/disapprove_assessment',Disapproveinfo);
          axios.put(baseUrl+'dean/disapprove_assessment',Disapproveinfo)
          .then( res => {
              console.log("DISAPPROVE:",res);
            //   this.setState({
            //     approveList:res.data,
            //     approveListFlag:true,
            // })
          })
          .catch(error=>{
              console.log(error)
          })


    

}

const DeanDisapprove =({approveList,state})=>{
    
    console.log("approveList FUNCTON",approveList)    
    // return<div>HELLOOOO</div>   
     if(approveList.status==false)
            {
                
            return(
            <div className='bg3'>
                <DeanNavbarComponent/>
                <Container fluid={true}>
                    <Row>
                        <Col  md={{ offset:0 }}>
                            <RenderSideBar1></RenderSideBar1>
                        </Col>
                        <Col>
                            <div className='Verifydean'style={{fontFamily:'"Times New Roman", Times, serif'}}>
                                <div className='body'>
                                <br></br>
                                <h3>Disapprove Assessment</h3>
                                    <SimpleBar style={{ maxHeight: 400 }}>
                                        Nothing to Disapprove
                                    </SimpleBar>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            )
        }
        else{
        const datalist=approveList.data.length?(approveList.data.map(data=>{
        return(
            <div>
                <Row>
                    <Col><h4>Assessment Number</h4></Col>
                    <Col><h4>Assessment Type</h4></Col>
                </Row>
                <Row>
                    <Col>{data.assesment_no}</Col>
                    <Col>{data.type_name}</Col>
                </Row>

                <Row>
                    <Container>
                        <Button onClick={()=>Disapprove(data,state)} style={{backgroundColor:'#3C315F', float:"right",marginRight:'10px'}}>Disapprove Assessment</Button>
                    </Container>
                </Row>
                
                
            </div>
            

        )
    }
 )):( <div></div>)

            return(
                <div className='bg3'>
                    <DeanNavbarComponent/>
                    <Container fluid={true}>
                        <Row>
                            <Col  md={{ offset:0 }}>
                                <RenderSideBar1></RenderSideBar1>
                            </Col>
                            <Col>
                            <div className='Verifydean'style={{fontFamily:'"Times New Roman", Times, serif'}}>
                                <div className='body'>
                                    <h3>VERIFICATION</h3>
                                        <SimpleBar style={{ maxHeight: 400 }}>
                                        {datalist}
                                        </SimpleBar>
                                        <br></br>
                                        
                                        
                                </div>
                            </div>
                            </Col>
                        </Row>
                        
                    </Container>
                </div>
            )
        }
    }
export default DeanDisapprove;