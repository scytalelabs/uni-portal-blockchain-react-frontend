import React,{Component} from 'react';
import { Row, Col ,Button, Container, } from 'reactstrap';
import { Control, LocalForm} from 'react-redux-form';
import { Link } from 'react-router-dom';
import './main.css';
import AdminNavbarComponent from './AdminNavBarComponent';
import { connect } from 'react-redux';
import { deleteTeacherSection,addTeacherSection,SetTeacherSection} from '../redux/ActionCreators';
import { baseUrl } from '../shared/basedUrl';
import axios from 'axios';
import AdminAddNewTeacherSection from './AdminAddNewTeacherSectionComponent';
import TeacherDataDisplay from './AdminTeacherSectionDisplayComponent';
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
                            STUDENT
                        </Col>
                    </Row>
                </Link>
                <Link to='/Admin/TeacherSection'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            TEACHER  <span>&#x276F;</span>
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

            teacherSectioninfo:{id:null,Teachername:null,reg_no:null,semester:null,course:null,section:null}
        }
        this.toggleisAdding=this.toggleisAdding.bind(this);
        this.addTeacherSection=this.addTeacherSection.bind(this);
        this.SetTeacherSection=this.SetTeacherSection.bind(this);
        
      }
      toggleisAdding(){
        const {isAdding}=this.state;
        this.setState({isAdding:!isAdding})
        
      }
      addTeacherSection(teacherSectioninfo){
        
        this.props.addTeacherSection(teacherSectioninfo);
        this.toggleisAdding();
      }
      deleteTeacherSection=(reg_no)=>{
        this.props.deleteTeacherSection(reg_no);
    }
      changeHandler=e=>{
        this.setState({
            [e.target.name]:e.target.value,
            searchflag:false,
        })
      } 

      SetTeacherSection(sectiondata){
          this.props.SetTeacherSection(sectiondata);
    }
    search(search)
    {
        const token=localStorage.getItem('bearer_token');
        axios.defaults.headers.common['Authorization']=token;
        axios.get(baseUrl+'admin/1/assign_section/teachers/'+search)
        .then( res => {
            this.props.SetTeacherSection(res.data);
            this.setState({
                searchflag:true
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }
     render(){
            const {search,isAdding}=this.state;
            var search_hold=search.toUpperCase();
            console.log("LENGTHHH",this.props.teacherSectioninfo)
            if(this.props.teacherSectioninfo.length!==0  && this.state.searchflag===true)
            {
            if(search!=="" && this.props.teacherSectioninfo!==undefined && search_hold == this.props.teacherSectioninfo[0].reg_no)
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
                                            <SimpleBar style={{maxHeight:'220px'}}>
                                            <TeacherDataDisplay hold={this.props.teacherSectioninfo}></TeacherDataDisplay>
                                            </SimpleBar>
                                                {/* <Row>
                                                    <Col>Name: {this.props.teacherSectioninfo.Teachername}</Col>
                                                    <Col>Semester: {this.props.teacherSectioninfo.semester}</Col>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <Col>Course: {this.props.teacherSectioninfo.course}</Col>
                                                    <Col>Section: {this.props.teacherSectioninfo.section}</Col>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <Col>Registration No: {this.props.teacherSectioninfo.reg_no}</Col>
                                                </Row>
                                                <br></br> */}
                                            </div>
                                            
                                        </Col>
                                    </Row>
                                    
                                    <br></br>
                                    <Row>
                                        <Col md={{offset:7}}>
                                            {/* <Link to='/Admin/teacher'> */}
                                                <Button type="submit" onClick={()=>this.deleteTeacherSection(this.props.teacherSectioninfo.reg_no)}style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'30px',paddingRight:'30px'}}>
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
        )}
        }
        else if(isAdding==true){
             return(
                 <AdminAddNewTeacherSection addTeacherSection={this.addTeacherSection} toggleisAdding={this.toggleisAdding}/>
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
                                            <Control.text model=".search" id="search" name="search" value={search} placeholder="Enter Teacher ID here to Search" className="form-control" onChange={this.changeHandler} style={{borderRadius: '35px',paddingRight:'250px'}}/>  
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
        teacherSectioninfo :state.teacherSectioninfo
    }   
}
const mapDispatchtoProps=(dispatch)=>{
    return{
        deleteTeacherSection:(reg_no)=>{dispatch(deleteTeacherSection(reg_no))},
        addTeacherSection:(teacherSectioninfo)=>{dispatch(addTeacherSection(teacherSectioninfo))},
        SetTeacherSection:(sectiondata)=>{dispatch(SetTeacherSection(sectiondata))},
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(AdminStudentSection);