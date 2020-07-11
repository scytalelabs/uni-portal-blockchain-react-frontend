import React,{Component} from 'react';
import './main.css';
import { Media } from 'reactstrap';
import logo from '../ucp-logo.png';
import { Link } from 'react-router-dom';
import {Navbar} from 'reactstrap';

class MainPage extends Component{
    constructor(props){
      super(props);
      console.log(this.props);
      this.state = {
        classes: [
            {
              id: 0,
              name:'Student',
              image: 'assets/images/student.png',
              category: 'students',
            },
            {
              id: 1,
              name:'Teacher',
              image: 'assets/images/teacher.png',
              category: 'teacher',
            },
            {
              id: 2,
              name:'Administrator',
              image: 'assets/images/admin.png',
              category: 'administrator',
            },
            {
                id: 3,
                name:'Dean',
                image: 'assets/images/dean.png',
                category: 'dean',
              },
           ],
    };
      }
     render(){

        const student = this.state.classes.map((classe) => {
            if(classe.id===0)
            {
            return (
                <div key={classe.id} className=" classes" >
                     <Link to='stdsignin'>
                        <Media left middle>
                        <br></br>
                            <Media object src={classe.image} alt={classe.name}  style={{height:'120px'}}></Media>
                        </Media>
                    </Link>
                </div>
            );
            }
            else{
                return(
                    <div>
                    </div>
                );
            }
        });

        const teacher = this.state.classes.map((classe) => {
            if(classe.id===1)
            {
                return (
                    <div key={classe.id} className=" classes">
                        <Link to='tchrsignin'>
                            <Media left middle>
                                <br></br>
                                <Media object src={classe.image} alt={classe.name}  style={{height:'120px'}} ></Media>
                            </Media>
                        </Link>
                    </div>
                  );
            }
            else{
                return(
                    <div>
                    </div>
                );
            }
        });
        
        const admin= this.state.classes.map((classe) => {
            if(classe.id===2)
            {
                return (
                <div key={classe.id}>
                    <Link to='admsignin'>
                        <Media left middle>
                        <br></br>
                            <Media object src={classe.image} alt={classe.name}  style={{height:'120px'}}></Media>
                        </Media>
                    </Link>
                </div>
                );
            }
            else{
                return(
                    <div>
                    </div>
                );
                
            }
        });
        const dean= this.state.classes.map((classe) => {
            if(classe.id===3)
            {
                return (
                <div key={classe.id}>
                    <Link to='/deansignin'>
                        <Media left middle>
                        <br></br>
                            <Media object src={classe.image} alt={classe.name}  style={{height:'120px'}}></Media>
                        </Media>
                    </Link>
                </div>
                );
            }
            else{
                return(
                    <div>
                    </div>
                );
                
            }
        });
       return(
        <div style={{backgroundColor: '#EBE4E4'}}>
            <Navbar style={{backgroundColor: '#D9CBCB'}} dark>
                <img src={logo} className="App-logo" alt="logo" />
              </Navbar>
            <div style={{backgroundColor: '#EBE4E4'}}>
                <div className='container'style={{marginTop:'150px',paddingBottom:'150px'}}> 
                
                    <div className='row'>
                        <div className='col-12 col-sm-3'>
                            <span className='Student-circle'>
                                {student}   
                            </span>
                            <p style={{color:'grey'}}>Student Portal</p>
                        </div>
                        <div className='col-12 col-sm-3'>
                            <span className='Teacher-circle'>
                                {teacher}
                            </span>
                            <p style={{color:'grey'}}>Teacher Portal</p>
                        </div>
                        <div className='col-12 col-sm-3'>
                            <span className='Admin-circle'>
                                {admin}
                            </span>
                            <p style={{color:'grey'}}>Administrator Portal</p>
                        </div>
                        <div className='col-12 col-sm-3'>
                            <span className='Dean-circle'>
                                {dean}
                            </span>
                            <p style={{color:'grey'}}>Dean Portal</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       )
     }
    }
    export default MainPage;