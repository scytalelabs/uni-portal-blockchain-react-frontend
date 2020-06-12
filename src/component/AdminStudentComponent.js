import React,{Component} from 'react';
import { Container} from 'reactstrap';
import { Row, Col ,Button} from 'reactstrap';
import { Control, LocalForm} from 'react-redux-form';
import { Link } from 'react-router-dom';

import './main.css';
import AdminNavbarComponent from './AdminNavBarComponent';
import AdminStudentEdit from './AdminStudentEditComponent'
import AdminAddNewStudent from './AdminAddNewStudentComponent';
import { connect } from 'react-redux';
import {deleteStudent,UpdateStudent,addStudent} from '../redux/ActionCreators'

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
                            STUDENT <span>&#x276F;</span>
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


class AdminStudent extends Component{
    
      constructor(props){
        super(props);
        console.log("Admin Student Components",this.props)
        this.state={
            isEditing:false,
            isAdding:false,
            search:'',
            // students:[
            //     {id:1 ,name:"Muhammad Adrees",father_name:"Shakeel Ahmad",phone_no:"03356611986",address:"p323/1 amin town FSD",reg_no:"L1F16BSCS0151",cnic:331029627727,dob:"01/01/1998",email:"adreees0512@gmail.com"},
            //     {id:2 ,name:"Zain Yazdan",father_name:"Yazdan Ahmad",phone_no:"03346611986",address:"ICHRA",reg_no:"L1F16BSCS0157",cnic:331029627727,dob:"03/01/1996",email:"zainyadan@gmail.com"},
            //     {id:3 ,name:"Hammad Mubeen",father_name:"Mubeen Mohsin",phone_no:"03346611986",address:"MARAGZAAR",reg_no:"L1F16BSCS0145",cnic:331029627727,dob:"17/08/1998",email:"hammad123@gmail.com"},
            //     {id:4 ,name:"Muhammad Arsal",father_name:"shaikh sahab",phone_no:"03326611986",address:"SABZAZAAR",reg_no:"L1F16BSCS0154",cnic:331029627727,dob:"07/01/1998",email:"arsalshaikh65@gmail.com"},
            //     {id:5 ,name:"Muhammad Ghulam Fakhar ud din Shakeel",father_name:"Aslam Shakeel",phone_no:"03316611986",address:"IQBAL TOWN",reg_no:"L1F16BSCS0136",cnic:331029627727,dob:"23/09/1998",email:"efyudi@gmail.com"},
            // ],
            student:{id:null,name:null,father_name:null,phone_no:null,address:null,reg_no:null,cnic:null,dob:null,email:null}

        }
        // this.handleLogin=this.handleSearch.bind(this);
        this.ToggleEditing=this.ToggleEditing.bind(this);
        this.UpdateStudent=this.UpdateStudent.bind(this);
        this.toggleisAdding=this.toggleisAdding.bind(this);
        this.addStudent=this.addStudent.bind(this);
      }
    //   handleSearch(values){
    //       alert('Current State is: ' + this.state.search);
          
    //     //   console.log(this.state);
    //   }
      changeHandler=e=>{
        this.setState({[e.target.name]:e.target.value})
      } 
      ToggleEditing(){
        const {isEditing}=this.state;
        this.setState({isEditing:!isEditing})
      }
      
      toggleisAdding(){
        const {isAdding}=this.state;
        this.setState({isAdding:!isAdding})
        
      }
      addStudent(studentinfo){
        this.props.addStudent(studentinfo);
        // console.log("NAME IS "+studentinfo.name)
        // studentinfo.id=Math.random();
        // let students=[... this.state.students,studentinfo]
        // this.setState({
        //     students,
        // });
        this.toggleisAdding();
        

      }
      deleteStudent=(id)=>{
          this.props.deleteStudent(id);
        // const students=this.state.students.filter(student=>{
        //     return student.id!==id
        // })
        // this.setState({
        //     students
        // })
    }
      UpdateStudent(updatedstudent){
        // console.log("UPPDATED Student IS" +updatedstudent.father_name);
        this.props.UpdateStudent(updatedstudent);
        // this.setState(state => {
        //     const list = state.students.map(student => 
        //         {
        //             if(student.id==updatedstudent.id)
        //             {
        //                 student.id=updatedstudent.id;
        //                 student.name=updatedstudent.name;
        //                 student.father_name=updatedstudent.father_name;
        //                 student.dob=updatedstudent.dob;
        //                 student.email=updatedstudent.email;
        //                 student.phone_no=updatedstudent.phone_no;
        //                 student.cnic=updatedstudent.cnic;
        //                 student.address=updatedstudent.address;
        //                 student.reg_no=updatedstudent.reg_no;
        //             }
        //         }
        //         );

        //   });
        this.ToggleEditing();
      } 

     render(){

        const {search,isEditing,isAdding}=this.state;
        var search_hold=search.toUpperCase();
        var hold=this.props.students.filter(function(student) { return student.reg_no ===search_hold;  });
        // console.log(hold);
        // console.log("length is :"+hold.length)
        if(search!=="" && hold.length==1 && search_hold == hold[0].reg_no && isEditing==false)
        {
            this.state.student.id=hold[0].id;
            this.state.student.name=hold[0].name;
            this.state.student.father_name=hold[0].father_name;
            this.state.student.email=hold[0].email;
            this.state.student.address=hold[0].address;
            this.state.student.phone_no=hold[0].phone_no;
            this.state.student.reg_no=hold[0].reg_no;
            this.state.student.cnic=hold[0].cnic;
            this.state.student.dob=hold[0].dob;

            // console.log("Student state is"+this.state.student.name);

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
                                        <Control.text model=".search" id="search" name="search" value={search} placeholder="Enter Student ID here to Search" className="form-control" onChange={this.changeHandler} style={{borderRadius: '35px',paddingRight:'250px'}}/>  
                                    </Col>
                                    <Col md={{ offset:1 }}>
                                        {/* <Link to='/Admin/Student/Search' > */}
                                            <Button type="submit" style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'100px',paddingRight:'100px'}}>
                                                SEARCH
                                            </Button>
                                        {/* </Link> */}
                                    </Col>
                                </Row>
                                    <Row >
                                        <Col md={{offset:2}}>
                                            <div className='EmptyBox' style={{marginBottom:'12px'}}>
                                            <br></br>
                                                <Row>
                                                    <Col>Name: {hold[0].name}</Col>
                                                    <Col>Registration No: {hold[0].reg_no}</Col>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <Col>Father Name: {hold[0].father_name}</Col>
                                                    <Col>CNIC: {hold[0].cnic}</Col>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <Col>Phone #: {hold[0].phone_no}</Col>
                                                    <Col>DOB:{hold[0].dob}</Col>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <Col>Address : {hold[0].address}</Col>
                                                    <Col>Email : {hold[0].email}</Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col md={{offset:7}}>
                                            {/* <Link to='/Admin/Student'> */}
                                                <Button type="submit"  onClick={()=>this.deleteStudent(hold[0].id)}style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'30px',paddingRight:'30px'}}>
                                                    Delete
                                                </Button>
                                            {/* </Link> */}
                                        </Col>
                                        <Col md={{offset:0}}>
                                            {/* <Link to='/Admin/Student/Edit'> */}
                                                <Button type="submit"  onClick={this.ToggleEditing } style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'30px',paddingRight:'30px'}}>
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
             ) }
             else if(isEditing==true){
                 return(
                     <AdminStudentEdit UpdateStudent={this.UpdateStudent}  ToggleEditing={this.ToggleEditing} student={this.state.student}/>
                 )
             }
             else if(isAdding==true){
                 return(
                     <AdminAddNewStudent addStudent={this.addStudent} toggleisAdding={this.toggleisAdding}/>
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
                                                 {/* <Link to='/Admin/Student/Search' > */}
                                                     <Button type="submit" style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'100px',paddingRight:'100px'}}>
                                                         SEARCH
                                                     </Button>
                                                 {/* </Link> */}
                                             </Col>
                                         </Row>
                                         <Row >
                                             <Col md={{offset:2}}>    
                                                 <div className='EmptyBox' style={{marginBottom:'12px'}}>
                                                     No Result
                                                 </div>
                                             </Col>
                                         </Row>
                                         <Row>
                                             <Col md={{offset:1}}>
                                                 {/* <Link to='/Admin/Student/AddStudent' > */}
                                                 <br></br>
                                                     <Button  type="submit"  onClick={this.toggleisAdding}  style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'100px',paddingRight:'100px'}}>
                                                         Add New Student
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
            students:state.students
        }   
    }
    const mapDispatchtoProps=(dispatch)=>{
        return{
            deleteStudent:(id)=>{dispatch(deleteStudent(id))},
            addStudent:(studentinfo)=>{dispatch(addStudent(studentinfo))},
            UpdateStudent:(updatedstudent)=>{dispatch(UpdateStudent(updatedstudent))}
        }
    }
    export default connect(mapStatetoProps,mapDispatchtoProps)(AdminStudent);