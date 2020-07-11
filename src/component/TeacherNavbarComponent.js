import React,{Component} from 'react';
import logo from './UCP-Logo.gif';
import {Navbar, DropdownItem, DropdownMenu, DropdownToggle, ButtonDropdown,} from 'reactstrap';
import './main.css';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../shared/basedUrl';



class TeacherNavbarComponent extends Component{
    constructor(props){
      super(props);
      const token=localStorage.getItem('token');
      let loggedin=true;
      let dropdownOpen=false;
      if(token==null)
      {
          loggedin=false;
      }
      this.state={
        dropdownOpen,
        teacherinfo:[]
      }
      this.toggle=this.toggle.bind(this);
      this.logoutHandle=this.logoutHandle.bind(this);
    }
    logoutHandle(){
        console.log("LLOGOUT")
            localStorage.removeItem('token');
            this.setState({
                loggedin:false
            })
    }
    toggle (){
        const {dropdownOpen}=this.state;
        this.setState({dropdownOpen:!dropdownOpen})
    }
    componentDidMount(){
        const token=localStorage.getItem('bearer_token');
        const regno=localStorage.getItem('reg_no');
        axios.defaults.headers.common['Authorization']=token;
        axios.get(baseUrl+'teacher/'+regno+'/personal_info')
        .then( res => {
            console.log("INFO",res)
            this.setState({
                teacherinfo:res.data[0],
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }

     render(){
        const token=localStorage.getItem('token');
        if(this.state.loggedin === false)
        {
            return <Redirect to="/tchrsignin"/>
        }
        if(this.state.teacherinfo.length===0)
        {
            return<div>Loading...</div>
        }
        else{
            return(
                <div>
                    <Navbar className='NavbarIMG'>
                        <span>
                            <h5 style={{color:'white'}}><img src={logo} className="logo" alt="logo"></img> University of Central Punjab</h5>
                        </span>
                        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} style={{marginRight:'120px'}}>
                            <DropdownToggle caret style={{borderRadius: '35px',paddingRight:'40px',paddingLeft:'20px',backgroundColor:"hsla(254, 32%, 28%, 0.7)"}}>
                            {token}
                            </DropdownToggle>
                            <DropdownMenu style={{borderRadius: '35px',paddingRight:'20px',paddingLeft:'20px',backgroundColor:"hsla(254, 32%, 28%, 0.4)"}}>
                            <DropdownItem style={{backgroundColor:'#c4c1cf'}} >{this.state.teacherinfo.name}</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem style={{backgroundColor:'#c4c1cf'}}>{this.state.teacherinfo.reg_no}</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem style={{backgroundColor:'#c4c1cf'}}>{this.state.teacherinfo.email}</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem style={{backgroundColor:'#c4c1cf'}} type="submit" onClick={this.logoutHandle}>LogOut</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </Navbar>
                    <div style={{backgroundColor:'#3C315F'}}>
                        <br></br>
                    </div>
                </div>
                        
           )
        }
       
     }
    }
    export default TeacherNavbarComponent;