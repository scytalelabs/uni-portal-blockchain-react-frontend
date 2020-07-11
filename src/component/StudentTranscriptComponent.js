import React,{Component} from 'react';
import {Container} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import TranscriptData from './StudentTranscriptDisplayComponent'
import './main.css';
import StudentNavbarComponent from './StudentNavbarComponent';
import { connect } from 'react-redux';
import axios from 'axios';
import StudentSidebar1 from './StudentSidebar1Component';
import { baseUrl } from '../shared/basedUrl';


class Transcript extends Component{
    constructor(props){
      super(props);
      this.state={
        courses:[]
      }
      console.log("Transcrips Props",this.props)
    }
    handleInfo(values){
        console.log('Current State is: ' + JSON.stringify(values));
          alert('Current State is: ' + JSON.stringify(values));
      }
      componentDidMount(){
        const token=localStorage.getItem('bearer_token');
        const regno=localStorage.getItem('regno');
        console.log("TOKEN IS ",token);
        console.log("REEGNO IS",regno);
        const semester=localStorage.getItem('semester');
        axios.defaults.headers.common['Authorization']=token;

          
        axios.get(baseUrl+'student/'+regno+'/'+semester+'/courses')
        .then( res => {
            this.setState({
                courses:res.data
            });
        })
        .catch(error=>{
            console.log(error)
        })
      }

     render(){
       return(
           <div className='bg4'>
               <StudentNavbarComponent></StudentNavbarComponent>
                <Container fluid={true}>
                    <Row>
                        <Col  md={{ offset:0 }}><StudentSidebar1 courses={this.state.courses} ></StudentSidebar1></Col>
                        <Col ><TranscriptData transcriptheadinginfo={this.props.transcriptheadinginfo} transcriptheadingdata={this.props.transcriptheadingdata} terminfo={this.props.terminfo} termheading={this.props.termheading} termdata={this.props.termdata} ></TranscriptData></Col>
                    </Row>
                </Container>


           </div>

       )
     }
    }
    const mapStateoProps=(state)=>{
        return{
            transcriptheadinginfo:state.transcriptheadinginfo,
            transcriptheadingdata:state.transcriptheadingdata,
            terminfo:state.terminfo,
            termheading:state.termheading,
            termdata:state.termdata
        }
        
    }
    export default connect(mapStateoProps)(Transcript);
