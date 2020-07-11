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

// import AdminCourseSection from './AdminCourseSectionComponent';
import AdminTeacher from './AdminTeacherComponent';
import AdminStudent from './AdminStudentComponent';
import AdminMarksType from './AdminMarksTypeComponent';
import AdminCourse from './AdminCourseComponent'
// import AdminAddNewTeacher from './AdminAddNewTeacherComponent';
// import AdminAddNewStudent from './AdminAddNewStudentComponent';
import TeacherAnnouncements from './TeacherAnnouncementComponent'
import TeacherMakeAnnouncement from './TeacherMakeAnnouncementComponent'
import RenderSetWeightage from './TeacherSetWeightageComponent';
//import AdminTeacherSearch from './AdminTeacherSearchComponent';
// import AdminStudentSearch from './AdminStudentSearchComponent';
import AdminStudentEdit from './AdminStudentEditComponent';
import AdminTeacherEdit from './AdminTeacherEditComponent';
import AdminAddNewCourse from './AdminAddNewCourseComponent';
//import AdminCourseSearch from './AdminCourseSearchComponent';
import AdminCourseEdit from './AdminCourseEditComponent';
import AdminSemester from './AdminSemesterComponent';
import AdminSection from './AdminSectionComponent';

import DeanSignin from './DeanSigninComponent.js';
import DeanHome from './DeanHomeComponent';

import { BrowserRouter,Route,Redirect,Switch } from 'react-router-dom';
import DeanVerifyAssessmentBySection from './DeanVerifyAssessmentBySectionComponent';
import DeanVerifyAssessmentByCourse from './DeanVerifyAssessmentByCourseComponent';
import DeanVerifyAssessmentBySemester from './DeanVerifyAssessmentBySemesterComponent';
import DeanDisapproveAssessment from './DeanDisapproveAssessmentComponent';
import DeanVerifyGradeBySemester from './DeanVerifyGradeBySemesterComponen';
import DeanVerifyGradeBySection from './DeanVerifyGradeBySectionComponent';
import DeanVerifyGradeByCourse from './DeanVerifyGradeByCourseComponent';


class Main extends Component{
  constructor(props){
    super(props);
    //console.log(props);
    }
  render(){
      
    return (
      <BrowserRouter>
        <div>
          <Switch>
          <Route exact path='/home' component={MainPage} ></Route>
          <Route exact path='/student' component={StudentHome}></Route>
          {/* <Route exact path='/:std_id' component={StudentHome}></Route> */}
          <Route exact path='/teacher' component={TeacherHome}></Route>
          <Route exact path='/Admin' component={AdminHome}></Route>
          <Route exact path='/Dean' component={DeanHome}></Route>

          
          <Route exact path='/student/course/Announcement/:course/:section' component={Announcement}></Route>
          <Route exact path='/student/course/CourseOutline/:course/:section' component={CourseOutline}></Route>
          <Route exact path='/student/course/CourseMaterial/:course/:section' component={CourseMaterial}></Route>
          <Route exact path='/student/course/GradeBook/:course/:section' component={GradeBook}></Route>
          <Route exact path='/student/transcript' component={Transcript}></Route>
          <Route exact path='/student/personalinformation' component={personalinformation}></Route>
          <Route path='/student/course/:course/:section' component={StudentCourse}></Route>

          <Route exact path='/teacher/course/SetWeightage/:course/:section' component={RenderSetWeightage}></Route>
          <Route exact path='/teacher/course/ViewList/AddList/:course/:section' component={TeacherAddList}></Route>
          <Route exact path='/teacher/course/ViewList/:course/:section' component={TeacherViewList}></Route>
          <Route exact path="/teacher/course/:course/:section" component={TeacherCourse}></Route>
          <Route exact path='/teacher/course/Announcement/:course/:section' component={TeacherAnnouncements}></Route>
          <Route exact path='/teacher/course/MakeAnnouncement/:course/:section' component={TeacherMakeAnnouncement}></Route>
          
          
          <Route exact path='/teacher/personalinformation' component={Teacherpersonalinformation}></Route>

          <Route exact path='/Admin/StudentSection'component={AdminStudentSection}></Route>
          {/* <Route exact path='/Admin/StudentSection/setSection'></Route> */}
          <Route exact path='/Admin/TeacherSection'component={AdminTeacherSection}></Route>
          {/* <Route exact path='/Admin/TeacherSection/setSection'></Route> */}
          {/* <Route exact path='/Admin/CourseSection'component={AdminCourseSection}></Route> */}
          {/* <Route exact path='/Admin/CourseSection/setSection'></Route>  */}
          <Route exact path='/Admin/Student' component={AdminStudent} ></Route>
          {/* <Route exact path='/Admin/Student/AddStudent' component={AdminAddNewStudent}></Route> */}
          {/* <Route exact path='/Admin/Student/Search' component={AdminStudentSearch}></Route> */}
          <Route exact path='/Admin/Student/Edit' component={AdminStudentEdit}></Route>

          <Route exact path='/Admin/Teacher' component={AdminTeacher}></Route>
          {/* <Route exact path='/Admin/Teacher/AddTeacher' component={AdminAddNewTeacher}></Route> */}
          {/* <Route exact path='/Admin/Teacher/Search' component={AdminTeacherSearch}></Route> */}
          <Route exact path='/Admin/Teacher/Edit' component={AdminTeacherEdit}></Route>
          
          <Route exact path='/Admin/MarksType'component={AdminMarksType}></Route>
          <Route exact path='/Admin/MarksType/AddMarksType' component={AdminAddNewCourse}></Route>

          <Route exact path='/Admin/Course' component={AdminCourse}></Route>
          <Route exact path='/Admin/Course/AddCourse' component={AdminAddNewCourse}></Route>
          {/* <Route exact path='/Admin/Course/Search' component={AdminCourseSearch}></Route> */}
          <Route exact path='/Admin/Course/edit' component={AdminCourseEdit}></Route>
          
          <Route exact path='/Admin/Semester' component={AdminSemester}></Route>
          <Route exact path='/Admin/Section' component={AdminSection}></Route>

          
          
          

          {/* 
          <Link to='/Admin/MarksType/Search'>
          <Link to='/Admin/MarksType/AddMarksType'>
          */}
          <Route exact path='/dean/AssessmentVerifyBySection' component={DeanVerifyAssessmentBySection}></Route>
          <Route exact path='/dean/AssessmentVerifyByCourse' component={DeanVerifyAssessmentByCourse}></Route>
          <Route exact path='/dean/AssessmentVerifyBySemester' component={DeanVerifyAssessmentBySemester}></Route>
          <Route exact path='/dean/disapprove' component={DeanDisapproveAssessment}></Route>
          <Route exact path='/dean/GradeVerifyBySemester' component={DeanVerifyGradeBySemester}></Route>
          <Route exact path='/dean/GradeVerifyByCourse' component={DeanVerifyGradeByCourse}></Route>
          <Route exact path='/dean/GradeVerifyBySection' component={DeanVerifyGradeBySection}></Route>
          
          <Route exact path='/stdsignin' component={StudentSignin}></Route>
          <Route exact path='/tchrsignin' component={TeacherSignin}></Route>
          <Route exact path='/admsignin' component={AdminSignin}></Route>
          <Route exact path="/deansignin" component={DeanSignin}></Route>

          <Redirect to="/home" />
          </Switch>
          
        </div>
       </BrowserRouter>
      );
    }
  }

export default Main;
