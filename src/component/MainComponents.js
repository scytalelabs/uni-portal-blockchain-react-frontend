import React,{Component} from 'react';
import MainPage from './MainPageComopnet';
import TeacherSignin from './TeacherSiginComoponent';
import AdminSignin from './AdminSigninComponent';
import TeacherHome from './TeacherHome';
import StudentHome from './StudentHome';
import AdminHome from './AdminHome';
import StudentCourse from './StudentCourse';
import StudentSignin from './StudentSignInComponent';
import Announcement from './StudentAnnouncementComponent';
import CourseOutline from './StudentCourseoutlineComponent';
import CourseMaterial from './StudentCourseMaterialCompnent';
import GradeBook from'./StudentGradeBookComponent';
import Transcript from './StudentTranscriptComponent';
import personalinformation from './StudentPersonalInformation';
import Teacherpersonalinformation from './TeacherPersonalInformation';
import TeacherCourse from './TeacherCourse';
import TeacherViewList from './TeacherViewListComponent'
import TeacherAddList from './TeacherAddListComponent';
import AdminStudentSection from './AdminStudentSectionComponent'
import AdminTeacherSection from './AdminTeacherSectionComponent';
import AdminCourseSection from './AdminCourseSectionComponent';
import AdminTeacher from './AdminTeacherComponent';
import AdminStudent from './AdminStudentComponent';
import AdminMarksType from './AdminMarksTypeComponent';
import AdminCourse from './AdminCourseComponent'
import AdminAddNewTeacher from './AdminAddNewTeacherComponent';
import AdminAddNewStudent from './AdminAddNewStudentComponent';
import AdminTeacherSearch from './AdminTeacherSearchComponent';
import AdminStudentSearch from './AdminStudentSearchComponent';
import AdminStudentEdit from './AdminStudentEditComponent';
import AdminTeacherEdit from './AdminTeacherEditComponent';
import AdminAddNewCourse from './AdminAddNewCourseComponent';
import AdminCourseSearch from './AdminCourseSearchComponent';
import AdminCourseEdit from './AdminCourseEditComponent';
import { BrowserRouter,Route,Redirect,Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { TransitionGroup,CSSTransition} from 'react-transition-group';

class Main extends Component{
  constructor(props){
    super(props);
    console.log(props);
    }
  render(){
    // const HomePage = ()=>{
    //   return(
    //     <Home dish={this.props.dishes.dishes.filter((dish)=> dish.featured)[0]}
    //     dishesLoading={this.props.dishes.isLoading}
    //     dishesErrMess={this.props.dishes.errMess}
    //     promotion={this.props.promotions.promotions.filter((promos)=> promos.featured)[0]}
    //     promosLoading={this.props.promotions.isLoading}
    //     promosErrMess={this.props.promotions.errMess}
    //     leader={this.props.leaders.filter((leader)=> leader.featured)[0]}
    //     />
    //     );
    // }
    // const DishWithId=( {match})=>{
    //   if(match!=null)
    //   {
    //       return(
    //         <div > 
    //           { <Detail DishSelected={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
    //                   isLoading={this.props.dishes.isLoading}
    //                   errMess={this.props.dishes.errMess}
    //                   comments={this.props.comments.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId,10))}
    //                   errMess={this.props.comments.errMess}
    //                   postComment={this.props.postComment}/> }
    //         </div>     
    //       );
    //   }
    //   else{
    //       return(
    //           <div></div>
    //       );
    //   }
    // }

      
    return (
      <BrowserRouter>
        <div>
          <Switch>
          <Route exact path='/home' component={MainPage} ></Route>
          <Route exact path='/student' component={StudentHome}></Route>
          {/* <Route exact path='/:std_id' component={StudentHome}></Route> */}
          <Route exact path='/teacher' component={TeacherHome}></Route>
          <Route exact path='/Admin' component={AdminHome}></Route>

          
          <Route exact path='/student/course' component={StudentCourse}></Route>
          <Route exact path='/student/course/Announcement' component={Announcement}></Route>
          <Route exact path='/student/course/CourseOutline' component={CourseOutline}></Route>
          <Route exact path='/student/course/CourseMaterial' component={CourseMaterial}></Route>
          <Route exact path='/student/course/GradeBook' component={GradeBook}></Route>
          <Route exact path='/student/transcript' component={Transcript}></Route>
          <Route exact path='/student/personalinformation' component={personalinformation}></Route>

          <Route exact path='/teacher/course' component={TeacherCourse}></Route>
          <Route exact path='/teacher/course/SetWeightage' component={TeacherCourse}></Route>
          <Route exact path='/teacher/course/ViewList' component={TeacherViewList}></Route>
          <Route exact path='/teacher/course/ViewList/AddList' component={TeacherAddList}></Route>
          <Route exact path='/teacher/personalinformation' component={Teacherpersonalinformation}></Route>

          <Route exact path='/Admin/StudentSection'component={AdminStudentSection}></Route>
          {/* <Route exact path='/Admin/StudentSection/setSection'></Route> */}
          <Route exact path='/Admin/TeacherSection'component={AdminTeacherSection}></Route>
          {/* <Route exact path='/Admin/TeacherSection/setSection'></Route> */}
          <Route exact path='/Admin/CourseSection'component={AdminCourseSection}></Route>
          {/* <Route exact path='/Admin/CourseSection/setSection'></Route>  */}
          <Route exact path='/Admin/Student' component={AdminStudent} ></Route>
          <Route exact path='/Admin/Student/AddStudent' component={AdminAddNewStudent}></Route>
          <Route exact path='/Admin/Student/Search' component={AdminStudentSearch}></Route>
          <Route exact path='/Admin/Student/Edit' component={AdminStudentEdit}></Route>

          <Route exact path='/Admin/Teacher' component={AdminTeacher}></Route>
          <Route exact path='/Admin/Teacher/AddTeacher' component={AdminAddNewTeacher}></Route>
          <Route exact path='/Admin/Teacher/Search' component={AdminTeacherSearch}></Route>
          <Route exact path='/Admin/Teacher/Edit' component={AdminTeacherEdit}></Route>
          
          <Route exact path='/Admin/MarksType'component={AdminMarksType}></Route>
          <Route exact path='/Admin/MarksType/AddMarksType' component={AdminAddNewCourse}></Route>


          

          <Route exact path='/Admin/Course' component={AdminCourse}></Route>
          <Route exact path='/Admin/Course/AddCourse' component={AdminAddNewCourse}></Route>
          <Route exact path='/Admin/Course/Search' component={AdminCourseSearch}></Route>
          <Route exact path='/Admin/Course/edit' component={AdminCourseEdit}></Route>
          
          
          

          {/* 
          <Link to='/Admin/MarksType/Search'>
          <Link to='/Admin/MarksType/AddMarksType'>
          */}
          
          <Route exact path='/stdsignin' component={StudentSignin}></Route>
          <Route exact path='/tchrsignin' component={TeacherSignin}></Route>
          <Route exact path='/admsignin' component={AdminSignin}></Route>
          <Redirect to="/home" />
          </Switch>
          
        </div>
       </BrowserRouter>
      );
    }
  }

export default Main;
