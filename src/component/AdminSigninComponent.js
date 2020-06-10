import React,{Component} from 'react';
import './main.css';
import { Row, Col ,Button,} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link, Redirect } from 'react-router-dom';

import logo from './logoAdmin.jpg';
import login from './login.gif';


const required   = (val) => val && val.length;
const validReg = (val) => /^[lL][12][fFsS]\d{2}\D{4}\d{4}$/i.test(val);



class AdminSignin extends Component{
    constructor(props){
      super(props);
      let loggedin=false;
      this.state={
        username:'',
        password:'',
        loggedin
      }
      this.handleLogin=this.handleLogin.bind(this);
    }
    handleLogin(values){
      
      const{username,password}=this.state
      // console.log('Current State is: ' + JSON.stringify(values));

      //   alert('Current State is: ' + JSON.stringify(values));
        alert('name is: ' + this.state);
        console.log("Regno is :"+username+" Password is :"+password);
        localStorage.setItem("token",username)
        this.setState({
          loggedin:true
        })
    }
    changeHandler=e=>{
      this.setState({[e.target.name]:e.target.value})
    }
     render(){
       
      const{username,password}=this.state
      if(this.state.loggedin)
       {
         return<Redirect to='/admin'/>
       }
       return(
          <div className='container'>
            
            <Row>
              <Col md={{offset:1}}><br/><img src={logo} className="" height='100px' width='160px ' alt="logo" /></Col>
              <Col><br/><br/><br/><hr/></Col>
            </Row>
            <Row  >
              <Col  md={{offset:2}}>
                <p style={{color:'red'}}><strong>HOME</strong></p>
              </Col>
            </Row>
            
            <Row>
              <Col md={{offset:2}} className="AdminSigninPage" style={{backgroundColor:'#B1B3B7', borderRadius:'25% 0% 0% 0%'}}>
              <br/>
                <p style={{color:'#646464', fontFamily:'"Times New Roman", Times, serif' }}>Administrator/Teacher Login</p>
                <p style={{color:'#646464'}}>Please login to access UCP Online Services:</p>
                <p style={{color:'red'}}>Note: Always logoff after using UCP online Services.</p>
              </Col>
              <Col Col  md={{offset:0}} className="AdminSigninPage" style={{backgroundColor:'#3C315F',borderRadius:'0% 0% 25% 0%'}}>
                <hr/>
                <h3 style={{color:'#ffffff', fontFamily:'"Times New Roman", Times, serif' }}>Administrator/Teacher services</h3>
                <hr/>
                <div style={{textAlign:'left'}}>
                    <img   src={login} className="ucp-logo " height='40px' width='100px ' alt="logo" />
                </div>
                <LocalForm onSubmit={this.handleLogin}>
                  <Row className='form-group' style={{textAlign:'left'}}>
                    
                    <Col>
                      <h4 style={{color:'#ffffff', fontFamily:'"Times New Roman", Times, serif' }}>Username:</h4>
                    </Col>
                    <Col>
                      <Control.text model=".username" id="username" name="username" value={username} placeholder="User Name" className="form-control" style={{borderRadius:'0px',height:'30px',width:'250px'}} onChange={this.changeHandler}/>  
                    </Col>
                  </Row> 
                  
                  <Row className='form-group' style={{textAlign:'left'}}>
                    <Col>
                      <h4 style={{color:'#ffffff', fontFamily:'"Times New Roman", Times, serif' }}>Password:</h4>
                    </Col>
                    <Col>
                      <Control.text model=".password" id="password" name="password" type='password' value={password} placeholder="Password" className="form-control" style={{borderRadius:'0px', height:'30px',width:'250px'}} onChange={this.changeHandler}/>  
                    </Col>
                  </Row> 
                  <Row className="form-group">
                    <Col md={{ offset:9 }}>
                      {/* <Link to='/Admin'> */}
                        <Button type="submit" on style={{backgroundColor:'#476367',borderRadius: '0px' }}>
                          GO
                        </Button>
                      {/* </Link> */}
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Col style={{alignItems:'left' ,color:'#FFFFFF'}}>
                      <h4>Forget Password?</h4>
                    </Col>
                  </Row>
                </LocalForm>

              </Col>
            </Row>
          </div>
       )
     }
    }
    export default AdminSignin;