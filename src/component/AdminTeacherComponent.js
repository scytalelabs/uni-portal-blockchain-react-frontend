import React,{Component} from 'react';
import { Row, Col ,Button, Container, } from 'reactstrap';
import { Control, LocalForm} from 'react-redux-form';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import './main.css';
import AdminNavbarComponent from './AdminNavBarComponent';
import AdminTeacherEdit from './AdminTeacherEditComponent';
import AdminAddNewTeacher from './AdminAddNewTeacherComponent';
import { connect } from 'react-redux';
import { deleteTeacher, addTeacher, UpdateTeacher,SetTeacher} from '../redux/ActionCreators';
import { baseUrl } from '../shared/basedUrl';
import axios from 'axios';
import 'simplebar/dist/simplebar.min.css';

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
                            TEACHER <span>&#x276F;</span>
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


class AdminTeacher extends Component{
    
      constructor(props){
        super(props);
        this.state={
            isEditing:false,
            isAdding:false,
            search:'',
            // teachers:[
            //     {id:1 ,name:"Zaid Munir",father_name:"Munir Ahmad",phone_no:"03356611986",address:"house#45,C block ,Sky Lake, Lahore Pakistan",reg_no:"L1F16BSCS0151",cnic:331029627727,dob:"01/01/1998",email:"zaid.munir@ucp.edu.pk",qualification:"MSCS"},
            //     {id:2 ,name:"Usman Younas",father_name:"Younas ahmad",phone_no:"03346611986",address:"ICHRA",reg_no:"L1F16BSCS0157",cnic:331029627727,dob:"03/01/1996",email:"Usman.younas@gmail.com",qualification:"MPHIL "},
            //     {id:3 ,name:"Mohsin Sami",father_name:"Mubeen Mohsin",phone_no:"03346611986",address:"MARAGZAAR",reg_no:"L1F16BSCS0145",cnic:331029627727,dob:"17/08/1998",email:"mohsing.sami@gmail.com",qualification:"PHD"},
            //     {id:4 ,name:"Haris",father_name:"shaikh sahab",phone_no:"03326611986",address:"SABZAZAAR",reg_no:"L1F16BSCS0154",cnic:331029627727,dob:"07/01/1998",email:"Muhammad.haris@gmail.com",qualification:"BSSE"},
            //     {id:5 ,name:"Sadaf Baloch",father_name:"Muhammad Baloch",phone_no:"03316611986",address:"IQBAL TOWN",reg_no:"L1F16BSCS0136",cnic:331029627727,dob:"23/09/1998",email:"sadaf.balouch@gmail.com",qualification:"BSCS"},
            // ],
            teacher:{id:null,name:null,father_name:null,phone_no:null,address:null,reg_no:null,cnic:null,dob:null,email:null,qualification:null,username:null,password:null}
        }
        // this.handleLogin=this.handleSearch.bind(this);
        this.ToggleEditing=this.ToggleEditing.bind(this);
        this.toggleisAdding=this.toggleisAdding.bind(this);
        this.UpdateTeacher=this.UpdateTeacher.bind(this);
        this.addTeacher=this.addTeacher.bind(this);
        this.SetTeacher=this.SetTeacher.bind(this);
      }
    //   handleSearch(){
    //       alert('Current State is: ' + this.state);
    //       console.log(this.state);
    //   }
      ToggleEditing(){
        const {isEditing}=this.state;
        this.setState({isEditing:!isEditing})
      }
      toggleisAdding(){
        const {isAdding}=this.state;
        this.setState({isAdding:!isAdding})
        
      }
      addTeacher(teacherinfo){
        
        this.props.addTeacher(teacherinfo);
        this.toggleisAdding();
      }
      UpdateTeacher(updatedteacher){
          console.log("UPDATED TEACHER IS ",updatedteacher);
          this.props.UpdateTeacher(updatedteacher);
       
        this.ToggleEditing();
        
      } 
      deleteTeacher=(regno)=>{
        this.props.deleteTeacher(regno);
    }
      changeHandler=e=>{
        this.setState({[e.target.name]:e.target.value})
      } 

      SetTeacher(teachers){
          this.props.SetTeacher(teachers);
    }
      componentDidMount(){

        const token=localStorage.getItem('bearer_token');
        const regno=localStorage.getItem('regno');
        console.log("TOKEN IS ",token);
        console.log("REEGNO IS",regno);

        axios.defaults.headers.common['Authorization']=token;
        console.log("TOKEN IS in header", axios.defaults.headers.common['Authorization'])
        axios.get(baseUrl+'admin/1/teachers')
        .then( res => {
            console.log(res);
            this.SetTeacher(res.data);

        })
        .catch(error=>{
            console.log(error)
        })
    }


     render(){
            const {isEditing,search,isAdding}=this.state;
            var search_hold=search.toUpperCase();
            console.log("TEACHERS PROPS ARE",this.props.teachers);
            var hold=this.props.teachers.filter(function(teacher) { return teacher.reg_no ===search_hold});
            if(search!=="" && hold.length==1 && search_hold == hold[0].reg_no && isEditing==false)
            {
                this.state.teacher.id=hold[0].id;
                this.state.teacher.name=hold[0].name;
                this.state.teacher.father_name=hold[0].father_name;
                this.state.teacher.qualification=hold[0].qualification;
                this.state.teacher.email=hold[0].email;
                this.state.teacher.address=hold[0].address;
                this.state.teacher.phone_no=hold[0].phone_no;
                this.state.teacher.reg_no=hold[0].reg_no;
                this.state.teacher.cnic=hold[0].cnic;
                this.state.teacher.dob=hold[0].dob;
                this.state.teacher.username=hold[0].username;
                this.state.teacher.password=hold[0].password;

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
                                            <Button type="submit" style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'100px',paddingRight:'100px'}}>
                                                SEARCH
                                            </Button>
                                              {/* </Link> */}
                                        </Col>
                                    </Row>
                                    <Row >
                                        <Col md={{offset:2}}>
                                        
                                            <div className='EmptyBox'style={{marginBottom:'12px'}}>
                                            <SimpleBar style={{ maxHeight: 250 }}>
                                            <br></br>
                                                <Row>
                                                    <Col>Name: {hold[0].name}</Col>
                                                    <Col>Qualification: {hold[0].qualification}</Col>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <Col>Father Name: {hold[0].father_name}</Col>
                                                    <Col>CNIC: {hold[0].cnic}</Col>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <Col>Phone #: {hold[0].phone_no}</Col>
                                                    <Col>DOB: {hold[0].dob}</Col>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <Col>Regno : {hold[0].reg_no}</Col>
                                                    <Col>Email : {hold[0].email}</Col>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <Col>Username : {hold[0].username}</Col>
                                                    <Col>Address : {hold[0].address}</Col>
                                                </Row>
                                                <br></br>
                                                </SimpleBar>
                                            </div>
                                            
                                        </Col>
                                    </Row>
                                    
                                    <br></br>
                                    <Row>
                                        <Col md={{offset:7}}>
                                            <Link to='/Admin/teacher'>
                                                <Button type="submit" onClick={()=>this.deleteTeacher(hold[0].reg_no)}style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'30px',paddingRight:'30px'}}>
                                                    Delete
                                                </Button>
                                            </Link>
                                        </Col>
                                        <Col md={{offset:0}}>
                                            {/* <Link to='/Admin/teacher/Edit'> */}
                                                <Button type="submit"  onClick={this.ToggleEditing } style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'30px',paddingRight:'30px'} }>
                                                    Edit
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
        else if(isEditing==true){
            return(
                <AdminTeacherEdit UpdateTeacher={this.UpdateTeacher} ToggleEditing={this.ToggleEditing} teacher={this.state.teacher}/>
            )
        }
        else if(isAdding==true){
             return(
                 <AdminAddNewTeacher addTeacher={this.addTeacher} toggleisAdding={this.toggleisAdding}/>
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
                                                    <Button type="submit" style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'100px',paddingRight:'100px'}}>
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
                                                        Add New Teacher
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
        teachers:state.teachers
    }   
}
const mapDispatchtoProps=(dispatch)=>{
    return{
        deleteTeacher:(regno)=>{dispatch(deleteTeacher(regno))},
        addTeacher:(teacherinfo)=>{dispatch(addTeacher(teacherinfo))},
        UpdateTeacher:(updatedteacher)=>{dispatch(UpdateTeacher(updatedteacher))},
        SetTeacher:(students)=>{dispatch(SetTeacher(students))},
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(AdminTeacher);