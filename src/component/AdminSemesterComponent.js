import React,{Component} from 'react';
import {Container} from 'reactstrap';
import { Row, Col ,Button} from 'reactstrap';
import { Control, LocalForm} from 'react-redux-form';
import { Link } from 'react-router-dom';

import './main.css';
import AdminNavbarComponent from './AdminNavBarComponent';
import { connect } from 'react-redux';
import { deleteSemester, addSemester ,SetSemester} from '../redux/ActionCreators';
import axios from 'axios';
import { baseUrl } from '../shared/basedUrl';
import AdminAddNewSemester from './AdminAddNewSemester';


function RenderAdminServices(){
    return(
        <div className='container' style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}}>
                    <Row style={{backgroundColor:'#F3F3F3',border:'1px solid #707070',color:'#707070'}}>
                        <Col  md={{offset:1}} >
                            <i className="fa fa-cog"></i>{' '}SET SECTION<br/>
                        </Col>
                    </Row>
                <Link to='/Admin/StudentSection'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            STUDENT 
                        </Col>
                    </Row>
                </Link>
                <Link to='/Admin/TeacherSection'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            TEACHER 
                        </Col>
                    </Row>
                </Link>
                <Link to='/Admin/CourseSection'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            COURSE 
                        </Col>
                    </Row>
                </Link>
                <Row style={{backgroundColor:'#F3F3F3',border:'1px solid #707070',color:'#707070'}}>
                        <Col  md={{offset:1}} >
                            <i className="fa fa-user"></i>{' '}Admin Services<br/>
                        </Col>
                </Row>
                <Link to='/Admin/Student'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            STUDENT
                        </Col>
                    </Row>
                </Link>
                <Link to='/Admin/Teacher'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            TEACHER 
                        </Col>
                    </Row>
                </Link>
                <Link to='/Admin/MarksType'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            MARKS TYPE 
                        </Col>
                    </Row>
                </Link>
                <Link to='/Admin/Course'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            COURSE
                        </Col>
                    </Row>
                </Link>
                <Link to='/Admin/Semester'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            SEMESTER <span>&#x276F;</span>
                        </Col>
                    </Row>
                </Link>
                <Link to='/Admin/Section'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            SECTION
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
                <RenderAdminServices></RenderAdminServices>
            </div>
    )
}


class AdminSemester extends Component{
    
      constructor(props){
        super(props);
        this.state={
          search:'',
          isAdding:false,
          semester:{id:null,name:null,status:null}
        }
        this.toggleisAdding=this.toggleisAdding.bind(this);
        this.addSemester=this.addSemester.bind(this);
        this.SetSemester=this.SetSemester.bind(this);
      }
      changeHandler=e=>{
        this.setState({[e.target.name]:e.target.value})
      } 
      toggleisAdding(){
        const {isAdding}=this.state;
        this.setState({isAdding:!isAdding})
        
      }
      addSemester(semesterinfo){
        this.props.addSemester(semesterinfo);
        this.toggleisAdding();
      }
      deleteSemester=(name)=>{
        
        this.props.deleteSemester(name);
      }
      SetSemester(semester){
          this.props.SetSemester(semester);
    }
      componentDidMount(){

        const token=localStorage.getItem('bearer_token');

        axios.defaults.headers.common['Authorization']=token;
        axios.get(baseUrl+'admin/1/semester')
        .then( res => {
            console.log("semester:",res);
            this.SetSemester(res.data);
        })
        .catch(error=>{
            console.log(error)
        })
    }

     render(){
        const {search,isAdding}=this.state;
        var search_hold=search
        console.log("PROPSSSS",this.props)
        console.log("SEARCHHOLD",search_hold)
            var hold=this.props.semester.filter(function(type) { 
                // console.log("type.type_name",type.name)
                return type.name == search_hold;  });

             console.log("SEARCH",hold[0])
            if(search!=="" && hold.length===1 && search_hold === hold[0].name )
            {
                this.state.semester.name=hold[0].name;
                this.state.semester.status=hold[0].status;
            return(
            <div className='bg3'>
                <AdminNavbarComponent></AdminNavbarComponent>
                    <Container fluid={true}>
                        <Row>
                            <Col  md={{ offset:0 }}>
                                <RenderSideBar1></RenderSideBar1>
                            </Col>
                            <Col md={{ offset:1 }}>
                                <br></br><br></br>
                                <div className='Services1'style={{paddingBottom:'14px',marginBottom:'32px'}}>
                                    <LocalForm >
                                    <br></br><br></br>
                                    <Row className='form-group'>            
                                        <Col md={{offset:1}}>
                                            <Control.text model=".search" id="search" name="search" value={search} placeholder="Enter Semester to Search" className="form-control" onChange={this.changeHandler} style={{borderRadius: '35px',paddingRight:'250px'}}/>  
                                        </Col>
                                        <Col md={{ offset:1 }}>
                                            <Button type="submit" style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'100px',paddingRight:'100px'}}>
                                                SEARCH
                                            </Button>
                                        </Col>
                                    </Row>
                                    <Row >
                                        <h3>
                                        <Col md={{offset:2}}>
                                            <div className='EmptyBox'style={{marginBottom:'12px'}}>
                                            <br></br>
                                            <br></br>
                                                <Row md={{offset:1}}>
                                                    <Col> Type:</Col>
                                                    <Col> {hold[0].name}</Col>
                                                    <Col></Col>
                                                </Row>
                                                <Row md={{offset:1}}>
                                                    <Col> Status:</Col>
                                                    <Col> {hold[0].status}</Col>
                                                    <Col></Col>
                                                </Row>
                                            </div>
                                        </Col>
                                        </h3>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col md={{offset:7}}>
                                            {/* <Link to='/Admin/course'> */}
                                                <Button type="submit" onClick={()=>this.deleteSemester(hold[0].name) }style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'30px',paddingRight:'30px'}}>
                                                    Delete
                                                </Button>
                                            {/* </Link> */}
                                        </Col>
                                    </Row>
                                </LocalForm>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )   }
         else if(isAdding===true){
            return(
                <AdminAddNewSemester addSemester={this.addSemester} toggleisAdding={this.toggleisAdding}/>
            )
        }
        else{
       return(
           <div className='bg3'>
               <AdminNavbarComponent></AdminNavbarComponent>
               <Container fluid={true}>
                    <Row>
                        <Col  md={{ offset:0 }}>
                            <RenderSideBar1></RenderSideBar1>
                        </Col>
                        
                        <Col md={{ offset:1 }}>
                        <br/>
                            <div className='Services1' style={{paddingBottom:'40px',marginBottom:'42px'}}>
                                <LocalForm >
                                <br></br><br></br>
                                    <Row className='form-group'>            
                                        <Col md={{offset:1}}>
                                        <Control.text model=".search" id="search" name="search" value={search} placeholder="Enter Semester name Search" className="form-control" onChange={this.changeHandler} style={{borderRadius: '35px',paddingRight:'250px'}}/>  
                                        </Col>
                                        <Col md={{ offset:1 }}>
                                            <Button type="submit" style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'100px',paddingRight:'100px'}}>
                                                SEARCH
                                            </Button>
                                        </Col>
                                    </Row>
                                    <Row >
                                        <Col md={{offset:2}}>
                                            <div className='EmptyBox'>
                                                No Result
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={{offset:1}}>
                                            {/* <Link to='/Admin/Course/AddCourse'> */}
                                            <br></br>
                                                <Button type="submit"  onClick={this.toggleisAdding} style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'50px',paddingRight:'50px'}}>
                                                    Add New Semester
                                                </Button>
                                            {/* </Link> */}
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
    }
    }
    const mapStatetoProps=(state)=>{
        return{
            semester:state.semester
        }   
    }
    const mapDispatchtoProps=(dispatch)=>{
        return{
            deleteSemester:(semesterinfo)=>{dispatch(deleteSemester(semesterinfo))},
            addSemester:(name)=>{dispatch(addSemester(name))},
            SetSemester:(semester)=>{dispatch(SetSemester(semester))},
        }
    }
    export default connect(mapStatetoProps,mapDispatchtoProps)(AdminSemester);