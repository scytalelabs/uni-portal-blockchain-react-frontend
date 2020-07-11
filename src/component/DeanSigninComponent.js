import React,{Component} from 'react';
import './main.css';
import { Row, Col ,Button, Label} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link, Redirect } from 'react-router-dom';
import logo from './UCP-Logo.gif';
import axios from 'axios';
import { baseUrl } from '../shared/basedUrl';



const required   = (val) => val && val.length;
const validReg = (val) => /^\w{2,10}\.\w{2,20}$/i.test(val);

class DeanSignin extends Component{
  constructor(props){
    super(props);
    let loggedin=false;
    this.state={
      id:'',
      password:'',
      loggedin
    }
    this.handleLogin=this.handleLogin.bind(this);
  }
  handleLogin(){
    
    const{id,password}=this.state
    // console.log('Current State is: ' + JSON.stringify(values));

    //   alert('Current State is: ' + JSON.stringify(values));
      alert('name is: ' + this.state);
      console.log("Regno is :"+id+" Password is :"+password);
      localStorage.setItem("token",id)
      // this.setState({
      //   loggedin:true
      // })

      const data={
        username:id,
        password:password
      }

       axios.post(baseUrl+'dean/1/login',data)
       .then(response=>{
         console.log("RESPONSE :",response);
         if(response.data.status===true)
         {
          this.setState({
            loggedin:true
          })
          localStorage.setItem("bearer_token",response.data.token);
          console.log('Bearer Token',response.data.token)
          localStorage.setItem("regno",id);
         }
         
       })
       .catch(error=>{
        
         console.log(error)
       })

  }
  changeHandler=e=>{
    this.setState({[e.target.name]:e.target.value})
  }

     render(){
      const {id,password}=this.state;
      if(this.state.loggedin)
      {
        return<Redirect to='/dean'/>
      }
      
       return(
          <div className='bg1'>

            <div class="signinboxdean" style={{marginTop:'81px',marginBottom:'81px'}}>
            <Row>
              <Col>
              <img src={logo} className="ucp-logo " height='150px' width='150px ' alt="logo" />
                <br></br>
                
                <h4><p className='' style={{color:'#d4e2d0',fontFamily:'"Times New Roman", Times, serif'}}>University of Central Punjab</p></h4>
                <LocalForm onSubmit={this.handleLogin}>
                  <Row className='form-group'>
                    <Col md={{offset:2}} style={{fontSize:'25px'}}>
                      <i className="fa fa-user"></i>
                    </Col>
                    <Col md={{offset:1}}>
                      <Control.text model=".id" id="id" name="id" type="text"className="form-control" value={id} onChange={this.changeHandler}
                                    validators={{required, validReg}} 
                                    style={{backgroundColor:'##d4e2d0',borderRadius: '10px',border:'#72A165 1px solid'}}/>  
                    </Col>
                    <Errors  className="text-danger" model=".id" show="touched"
                            messages={{ required: 'Required' }}/>
                  </Row> 
                  <Row className='form-group'>
                    <Col md={{offset:2}}style={{fontSize:'25px'}}>
                    <i className="fa fa-lock"></i>
                    </Col>
                    
                  
                    <Col md={{offset:1}}>
                      <Control.text model=".password" id="password" name="password" type="password"className="form-control" value={password} onChange={this.changeHandler}
                                    validators={{required}} 
                                    style={{backgroundColor:'##d4e2d0',borderRadius: '10px',border:'#72A165 1px solid'}}/>  
                    </Col>
                    <Errors  className="text-danger" model=".password" show="touched"
                          messages={{ required: 'Required'}}/>
                  </Row> 
                  <Row className="form-group">
                    <Col md={{ offset:5 }}>
                      {/* <Link to='/dean'> */}
                      
                        <Button type="submit" style={{backgroundColor:'#d4e2d0' ,color:'#395032' }}>
                          LOGIN
                        </Button>
                      {/* </Link> */}
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Col style={{alignItems:'center' ,color:'#d4e2d0'}}>
                          <p>Forget Password</p>          
                    </Col>
                  </Row>
                </LocalForm>
              </Col>
              <div style={{borderLeft:'2px solid #707070',height:'300px'}}/>

              
              <Col style={{color:'#d4e2d0'}}>
              <br></br><br></br>
              <strong ><u>Instructions</u></strong>
              
              <p>Please login to access UCP Online Services </p>
              <p>Always logoff after using UCP Online Services.</p>
              <br></br><br></br><br></br><br></br>
              <p style={{color:'#707070', fontSize:'12px'}}>Copyrights © 2007 - All rights are reserved.<br></br>
                  University of Central Punjab, Lahore, PAKISTAN</p>
              </Col>
            </Row> 
            </div>
          </div>
       )
     }
    }
    export default DeanSignin;

    