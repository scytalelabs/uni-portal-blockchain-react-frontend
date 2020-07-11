import React,{Component} from 'react';
import logo from './UCP-Logo.gif';
import {Navbar, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,} from 'reactstrap';
import { Redirect } from 'react-router-dom';
import './main.css';



class AdminNavbarComponent extends Component{
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
        dropdownOpen
      }
      this.toggle=this.toggle.bind(this);
      this.logoutHandle=this.logoutHandle.bind(this);
    }
    logoutHandle(){
            localStorage.removeItem('token');
            this.setState({
                loggedin:false
            })
    }
    toggle (){
        const {dropdownOpen}=this.state;
        this.setState({dropdownOpen:!dropdownOpen})
    }

    
     render(){
        const token=localStorage.getItem('token');
        if(this.state.loggedin === false)
        {
            return <Redirect to="/admsignin"/>
        }
       return(
            <div>
                <Navbar className='NavbarIMG' style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}}>
                    <span>
                        <h5 style={{color:'white'}}><img src={logo} className="logo" alt="logo"></img> University of Central Punjab</h5>
                    </span>
                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} style={{marginRight:'90px'}}>
                        <DropdownToggle caret style={{borderRadius: '35px',paddingRight:'40px',paddingLeft:'20px',backgroundColor:"hsla(254, 32%, 28%, 0.7)"}}>
                        {token}
                        </DropdownToggle>
                        <DropdownMenu style={{borderRadius: '10px',paddingRight:'20px',paddingLeft:'20px',backgroundColor:"hsla(254, 32%, 28%, 0.4)"}}>
                            <DropdownItem style={{backgroundColor:'#c4c1cf'}} >{token}</DropdownItem>
                            <DropdownItem  style={{backgroundColor:'#c4c1cf'}} divider />
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
    export default AdminNavbarComponent;