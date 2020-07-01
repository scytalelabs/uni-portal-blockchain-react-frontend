import React,{Component} from 'react';
import {Container} from 'reactstrap';
import { Row, Col ,Button} from 'reactstrap';
import { Control, LocalForm} from 'react-redux-form';
import { Link } from 'react-router-dom';

import './main.css';
import AdminNavbarComponent from './AdminNavBarComponent';
import { connect } from 'react-redux';
import { deleteSection, addSection ,SetSection} from '../redux/ActionCreators';
import axios from 'axios';
import { baseUrl } from '../shared/basedUrl';
import AdminAddNewSection from './AdminAddNewSection';


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
                            SEMESTER
                        </Col>
                    </Row>
                </Link>
                <Link to='/Admin/Section'>
                    <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                        <Col  md={{offset:1}}  >
                            SECTION <span>&#x276F;</span>
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


class AdminSection extends Component{
    
      constructor(props){
        super(props);
        this.state={
          search:'',
          isAdding:false,
          section:{section: null,semester: null,course: null,credithours:null,courseCode: null},
        }
        this.toggleisAdding=this.toggleisAdding.bind(this);
        this.addSection=this.addSection.bind(this);
        this.SetSection=this.SetSection.bind(this);
      }
      changeHandler=e=>{
        this.setState({[e.target.name]:e.target.value})
      } 
      toggleisAdding(){
        const {isAdding}=this.state;
        this.setState({isAdding:!isAdding})
        
      }
      addSection(sectioninfo){
        this.props.addSection(sectioninfo);
        this.toggleisAdding();
      }
      deleteSection=(section)=>{
        
        this.props.deleteSection(section);
      }
      SetSection(semester){
          this.props.SetSection(semester);
    }
      componentDidMount(){

        const token=localStorage.getItem('bearer_token');
        axios.defaults.headers.common['Authorization']=token;
        axios.get(baseUrl+'admin/1/sections')
        .then( res => {
            console.log("sections:",res);
            this.SetSection(res.data);
        })
        .catch(error=>{
            console.log(error)
        })
    }

     render(){
        const {search,isAdding}=this.state;
        var search_hold=search
        // console.log("PROPSSSS",this.props)
        // console.log("SEARCHHOLD",search_hold)
            var hold=this.props.section.filter(function(type) { 
                console.log("type.type_name",type.section)
                return type.section == search_hold;  });

             console.log("SEARCH",hold[1])
                this.state.searched_section=hold;
             console.log("SEARCH HOLD",this.state.searched_section)
            if(search!=="" && hold.length===1 && search_hold === hold[0].section )
            {
                // this.state.section.section=hold[0].section,
                // this.state.section.semester=hold[0].semester,
                // this.state.section.course=hold[0].course,
                // this.state.section.credithours=hold[0].credithours,
                // this.state.section.courseCode=hold[0].courseCode
                // const rendersection = []

                // for (const [index, data] of hold.entries()) {
                //     rendersection.push(
                //         <div key={index}>
                
                //         </div>
                    // <li >{value}</li>
                //     )
                // }
                // const  rendersection = hold.map((data) => {
                    // return (
                    //     <div key={data.courseCode}>
                    //         HELOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOo
                           
                    //     </div>
                    // );
                // })
        
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
                                            <Control.text model=".search" id="search" name="search" value={search} placeholder="Enter Section to Search" className="form-control" onChange={this.changeHandler} style={{borderRadius: '35px',paddingRight:'250px'}}/>  
                                        </Col>
                                        <Col md={{ offset:1 }}>
                                            <Button type="submit" style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'100px',paddingRight:'100px'}}>
                                                SEARCH
                                            </Button>
                                        </Col>
                                    </Row>
                                    <Row >
                                        <h5>
                                        <Col md={{offset:2}}>
                                            <div className='EmptyBox'style={{marginBottom:'12px'}}>
                                            <br></br>
                                            <Row md={{offset:1}}>
                                                <Col> Course:</Col>
                                                <Col> {hold[0].course}</Col>
                                                <Col></Col>
                                            </Row>
                                            <br></br>
                                            <Row md={{offset:1}}>
                                                <Col> Course Code:</Col>
                                                <Col> {hold[0].courseCode}</Col>
                                                <Col></Col>
                                            </Row>
                                            <br></br>
                                            <Row md={{offset:1}}>
                                                <Col> Section:</Col>
                                                <Col> {hold[0].section}</Col>
                                                <Col></Col>
                                            </Row>
                                            <br></br>
                                            <Row md={{offset:1}}>
                                                <Col> Semester:</Col>
                                                <Col> {hold[0].semester}</Col>
                                                <Col></Col>
                                            </Row>
                                            <br></br>
                                            <Row md={{offset:1}}>
                                                <Col> Credit Hours:</Col>
                                                <Col> {hold[0].credithours}</Col>
                                                <Col></Col>
                                            </Row>
                                            </div>
                                        </Col>
                                        </h5>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col md={{offset:7}}>
                                            {/* <Link to='/Admin/course'> */}
                                                <Button type="submit" onClick={()=>this.deleteSection(hold[0].section) }style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'30px',paddingRight:'30px'}}>
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
                <AdminAddNewSection addSection={this.addSection} toggleisAdding={this.toggleisAdding}/>
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
                                        <Control.text model=".search" id="search" name="search" value={search} placeholder="Enter Section name Search" className="form-control" onChange={this.changeHandler} style={{borderRadius: '35px',paddingRight:'250px'}}/>  
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
                                                    Add New Section
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
            section:state.section
        }   
    }
    const mapDispatchtoProps=(dispatch)=>{
        return{
            deleteSection:(section)=>{dispatch(deleteSection(section))},
            addSection:(sectioninfo)=>{dispatch(addSection(sectioninfo))},
            SetSection:(section)=>{dispatch(SetSection(section))},
        }
    }
    export default connect(mapStatetoProps,mapDispatchtoProps)(AdminSection);