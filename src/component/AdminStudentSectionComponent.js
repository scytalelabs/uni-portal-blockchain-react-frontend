import React,{Component} from 'react';
import { Row, Col ,Button, Container, } from 'reactstrap';
import { Control, LocalForm} from 'react-redux-form';
import { Link } from 'react-router-dom';
import './main.css';
import AdminNavbarComponent from './AdminNavBarComponent';
import { connect } from 'react-redux';
import { deleteStudentSection,addStudentSection,SetStudentSection} from '../redux/ActionCreators';
import { baseUrl } from '../shared/basedUrl';
import axios from 'axios';
import AdminAddNewStudentSection from './AdminAddNewStudentSectionComponent';
import StudentDataDisplay from './AdminStudentSectionDisplayComponent';
import 'simplebar/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react';



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
                            STUDENT <span>&#x276F;</span>
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
                            SEMESTER
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


class AdminStudentSection extends Component{
    
      constructor(props){
        super(props);
        this.state={
            isAdding:false,
            searchflag:false,
            search:'',
            studentSectioninfo:{id:null,name:null,reg_no:null,semester:null,course:null,section:null}
        }
        this.toggleisAdding=this.toggleisAdding.bind(this);
        this.addStudentSection=this.addStudentSection.bind(this);
        this.SetStudentSection=this.SetStudentSection.bind(this);
        
      }
      toggleisAdding(){
        const {isAdding}=this.state;
        this.setState({isAdding:!isAdding})
        
      }
      addStudentSection(studentSectioninfo){
        
        this.props.addStudentSection(studentSectioninfo);
        this.toggleisAdding();
      }
      deleteStudentSection=(reg_no)=>{
        this.props.deleteStudentSection(reg_no);
    }
      changeHandler=e=>{

        this.setState({
            [e.target.name]:e.target.value,
            searchflag:false,
        })
      } 

      SetStudentSection(sectiondata){
          this.props.SetStudentSection(sectiondata);
    }
    search(search)
    {

         const token=localStorage.getItem('bearer_token');
        console.log("TOKEN IS ",token);
        axios.defaults.headers.common['Authorization']=token;
        axios.get(baseUrl+'admin/1/assign_section/students/'+search)
        .then( res => {
            console.log("STUDENTS IS ",res.data);
            this.props.SetStudentSection(res.data);
            this.setState({
                searchflag:true
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }
    //   componentDidMount(){

    
    // }


     render(){
            const {search,isAdding}=this.state;
            var search_hold=search.toUpperCase();
            console.log("PROPS SETUDENT INFO",this.props.studentSectioninfo)
            if(this.props.studentSectioninfo.length!==0  && this.state.searchflag===true)
            {
            if(search!=="" && this.props.studentSectioninfo!==undefined && search_hold == this.props.studentSectioninfo[0].reg_no)
            {

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
                                            <Control.text model=".search" id="search" name="search" defaultValue={search} placeholder="Enter Teacher ID here to Search" className="form-control" onChange={this.changeHandler} style={{borderRadius: '35px',paddingRight:'250px'}}/>  
                                        </Col>
                                        <Col md={{ offset:1 }}>
                                            {/* <Link to='/Admin/teacher/Search' > */}
                                            <Button type="submit" onClick={()=>this.search(search)} style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'100px',paddingRight:'100px'}}>
                                                SEARCH
                                            </Button>
                                              {/* </Link> */}
                                        </Col>
                                    </Row>
                                    <Row >
                                        <Col md={{offset:2}}>
                                        
                                            <div className='EmptyBox'style={{marginBottom:'12px'}}>
                                            <br></br>
                                            <br></br>
                                                <SimpleBar style={{maxHeight:'200px'}}>
                                                    <StudentDataDisplay hold={this.props.studentSectioninfo}></StudentDataDisplay>
                                                </SimpleBar>
                                            </div>
                                            
                                        </Col>
                                    </Row>
                                    
                                    <br></br>
                                    <Row>
                                        <Col md={{offset:7}}>
                                            {/* <Link to='/Admin/teacher'> */}
                                                <Button type="submit" onClick={()=>this.deleteStudentSection(this.props.studentSectioninfo.reg_no)}style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'30px',paddingRight:'30px'}}>
                                                    Delete All
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
    }
        else if(isAdding==true){
             return(
                 <AdminAddNewStudentSection addStudentSection={this.addStudentSection} toggleisAdding={this.toggleisAdding}/>
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
                            <br></br><br></br>
                            <div className='Services1' style={{paddingBottom:'14px',marginBottom:'32px'}}>
                                    <LocalForm >
                                    <br></br><br></br>
                                        <Row className='form-group'>            
                                            <Col md={{offset:1}}>
                                            <Control.text model=".search" id="search" name="search" value={search} placeholder="Enter Student ID here to Search" className="form-control" onChange={this.changeHandler} style={{borderRadius: '35px',paddingRight:'250px'}}/>  
                                            </Col>
                                            <Col md={{ offset:1 }}>
                                                {/* <Link to='/Admin/Teacher/Search'> */}
                                                    <Button type="submit" onClick={()=>this.search(search)} style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'100px',paddingRight:'100px'}}>
                                                        SEARCH
                                                    </Button>
                                                {/* </Link> */}
                                            </Col>
                                        </Row>
                                        <Row >
                                            <Col md={{offset:2}}>    
                                                <div className='EmptyBox'style={{marginBottom:'12px'}}>
                                                    No Result
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={{offset:1}}>
                                                {/* <Link to='/Admin/Teacher/AddTeacher'> */}
                                                <br></br>
                                                    <Button type="submit" onClick={this.toggleisAdding } style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'100px',paddingRight:'100px'}}>
                                                        Assign Section
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
        studentSectioninfo :state.studentSectioninfo
    }   
}
const mapDispatchtoProps=(dispatch)=>{
    return{
        deleteStudentSection:(reg_no)=>{dispatch(deleteStudentSection(reg_no))},
        addStudentSection:(studentSectioninfo)=>{dispatch(addStudentSection(studentSectioninfo))},
        SetStudentSection:(sectiondata)=>{dispatch(SetStudentSection(sectiondata))},
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(AdminStudentSection);