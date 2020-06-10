import React,{Component} from 'react';
import './main.css';
import { Row, Col ,Button, Label} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link, Redirect } from 'react-router-dom';
import logo from './UCP-Logo.gif';



const required   = (val) => val && val.length;
const validReg = (val) => /^\w{2,10}\.\w{2,20}$/i.test(val);

class TeacherSignin extends Component{
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
  handleLogin(values){
    
    const{id,password}=this.state
    // console.log('Current State is: ' + JSON.stringify(values));

    //   alert('Current State is: ' + JSON.stringify(values));
      alert('name is: ' + this.state);
      console.log("Regno is :"+id+" Password is :"+password);
      localStorage.setItem("token",id)
      this.setState({
        loggedin:true
      })
  }
  changeHandler=e=>{
    this.setState({[e.target.name]:e.target.value})
  }
     render(){
      const {id,password}=this.state;
      if(this.state.loggedin)
      {
        return<Redirect to='/teacher'/>
      }
      
       return(
          <div className='bg1'>

            <div class="signinboxteacher" style={{marginTop:'81px',marginBottom:'81px'}}>
            <Row>
              <Col>
              <img src={logo} className="ucp-logo " height='150px' width='150px ' alt="logo" />
                <br></br>
                <h4><p className='' style={{color:'#FC675F',fontFamily:'"Times New Roman", Times, serif'}}>University of Central Punjab</p></h4>
                <LocalForm onSubmit={this.handleLogin}>
                  <Row className='form-group'>
                    <Col md={{offset:2}} style={{fontSize:'25px'}}>
                      <i className="fa fa-user"></i>
                    </Col>
                    <Col md={{offset:1}}>
                      <Control.text model=".id" id="id" name="id" type="text"className="form-control" value={id} onChange={this.changeHandler}
                                    validators={{required, validReg}} 
                                    style={{backgroundColor:'#B1B3B7',borderRadius: '10px',border:'#F50F0F 1px solid'}}/>  
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
                                    style={{backgroundColor:'#B1B3B7',borderRadius: '10px',border:'#F50F0F 1px solid'}}/>  
                    </Col>
                    <Errors  className="text-danger" model=".password" show="touched"
                          messages={{ required: 'Required'}}/>
                  </Row> 
                  <Row className="form-group">
                    <Col md={{ offset:5 }}>
                      {/* <Link to='/teacher'> */}
                        <Button type="submit" style={{backgroundColor:'#FC675F' ,color:'white' }}>
                          LOGIN
                        </Button>
                      {/* </Link> */}
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Col style={{alignItems:'center' ,color:'red'}}>
                          <p>Forget Password</p>          
                    </Col>
                  </Row>
                </LocalForm>
              </Col>
              <div style={{borderLeft:'1px solid #707070',height:'300px'}}/>
              <Col>
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
    export default TeacherSignin;

    