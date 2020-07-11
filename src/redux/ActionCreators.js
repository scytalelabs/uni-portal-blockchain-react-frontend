import * as ActionTypes from './ActionTypes';
import { baseUrl} from '../shared/basedUrl';

//ADMIN STUDENT CRUD ACTIONS
export const deleteStudent=(regno)=>{
    return {
        type:ActionTypes.DELETE_STUDENT,
        regno:regno
    }
}
export const addStudent=(studentinfo)=>{
    return {
        type:ActionTypes.ADD_STUDENT,
        studentinfo:studentinfo
    }
}
export const UpdateStudent=(updatedstudent)=>{
    return {
        type:ActionTypes.UPDATE_STUDENT,
        updatedstudent:updatedstudent
    }
}
export const SetStudent=(students)=>{
    return {
        type:ActionTypes.SET_STUDENT,
        students:students
    }
}
//ADMIN TEACHER CRUD ACTIONS
export const deleteTeacher=(regno)=>{
    return {
        type:ActionTypes.DELETE_TEACHER,
        regno:regno
    }
}
export const addTeacher=(teacherinfo)=>{
    return {
        type:ActionTypes.ADD_TEACHER,
        teacherinfo:teacherinfo
    }
}
export const UpdateTeacher=(updatedteacher)=>{
    return {
        type:ActionTypes.UPDATE_TEACHER,
        updatedteacher:updatedteacher
    }
}
export const SetTeacher=(teachers)=>{
    return {
        type:ActionTypes.SET_TEACHER,
        teachers:teachers
    }
}

//ADMIN COURSE CRUD ACTIONS
export const deleteCourse=(code)=>{
    return {
        type:ActionTypes.DELETE_COURSE,
        code:code
    }
}
export const addCourse=(courseinfo)=>{
    return {
        type:ActionTypes.ADD_COURSE,
        courseinfo:courseinfo
    }
}
export const UpdateCourse=(updatedcourse)=>{
    return {
        type:ActionTypes.UPDATE_COURSE,
        updatedcourse:updatedcourse
    }
}
export const SetCourses=(courses)=>{
    return {
        type:ActionTypes.SET_COURSE,
        courses:courses
    }
}

//ADMIN MARKS TYPE CRUD ACTIONS
export const deleteMarksType=(type_name)=>{
    return {
        type:ActionTypes.DELETE_MARKS_TYPES,
        type_name:type_name
    }
}
export const addMarksType=(markstypeinfo)=>{
    return {
        type:ActionTypes.ADD_MARKS_TYPES,
        markstypeinfo:markstypeinfo
    }
}
export const SetMarksType=(types)=>{
    return {
        type:ActionTypes.SET_MARKS_TYPES,
        types:types
    }
}
//ADMIN SEMESTER CRUD ACTIONS
export const deleteSemester=(name)=>{
    return {
        type:ActionTypes.DELETE_SEMESTER,
        name:name
    }
}
export const addSemester=(semesterinfo)=>{
    return {
        type:ActionTypes.ADD_SEMESTER,
        semesterinfo:semesterinfo
    }
}
export const SetSemester=(semester)=>{
    return {
        type:ActionTypes.SET_SEMESTER,
        semester:semester
    }
}
//ADMIN SECTION CRUD ACTIONS
export const deleteSection=(section)=>{
    return {
        type:ActionTypes.DELETE_SECTION,
        section:section
    }
}
export const addSection=(sectioninfo)=>{
    return {
        type:ActionTypes.ADD_SECTION,
        sectioninfo:sectioninfo
    }
}
export const SetSection=(section)=>{
    return {
        type:ActionTypes.SET_SECTION,
        section:section
    }
}
//ADMIN SET STUDENT SECTION CRUD ACTIONS
export const deleteStudentSection=(reg_no)=>{
    return {
        type:ActionTypes.DELETE_STUDENT_SECTION,
        reg_no:reg_no
    }
}
export const addStudentSection=(studentSectioninfo)=>{
    return {
        type:ActionTypes.ADD_STUDENT_SECTION,
        studentSectioninfo:studentSectioninfo
    }
}
export const SetStudentSection=(sectiondata)=>{
    return {
        type:ActionTypes.SET_STUDENT_SECTION,
        sectiondata:sectiondata
    }
}
//ADMIN SET TEACHER SECTION CRUD ACTIONS
export const deleteTeacherSection=(reg_no)=>{
    return {
        type:ActionTypes.DELETE_TEACHER_SECTION,
        reg_no:reg_no
    }
}
export const addTeacherSection=(teacherSectioninfo)=>{
    return {
        type:ActionTypes.ADD_TEACHER_SECTION,
        teacherSectioninfo:teacherSectioninfo
    }
}
export const SetTeacherSection=(sectiondata)=>{
    return {
        type:ActionTypes.SET_TEACHER_SECTION,
        sectiondata:sectiondata
    }
}
//TEACHER ADD ASSIGNMENT
export const addAssignment=(assignmentinfo)=>{
    return {
        type:ActionTypes.TEACHER_ADD_ASSIGNMENT,
        assignmentinfo:assignmentinfo
    }
}
export const addQuiz=(quizinfo)=>{
    return {
        type:ActionTypes.TEACHER_ADD_QUIZ,
        quizinfo:quizinfo
    }
}
export const addMids=(midsinfo)=>{
    return {
        type:ActionTypes.TEACHER_ADD_MIDS,
        midsinfo:midsinfo
    }
}
export const addClassParticipation=(classparticipationinfo)=>{
    return {
        type:ActionTypes.TEACHER_ADD_CLASSPARTICIPATION,
        classparticipationinfo:classparticipationinfo
    }
}
export const addFinals=(finalinfo)=>{
    return {
        type:ActionTypes.TEACHER_ADD_FINALS,
        finalinfo:finalinfo
    }
}
export const addProjectPresentation=(projectpresentationinfo)=>{
    return {
        type:ActionTypes.TEACHER_ADD_PROJECTPRESENTATION,
        projectpresentationinfo:projectpresentationinfo
    }
}
export const addProjects=(projectinfo)=>{
    return {
        type:ActionTypes.TEACHER_ADD_PROJECTS,
        projectinfo:projectinfo
    }
}

export const getAnnouncement=(announcementinfo)=>{
    return {
        type:ActionTypes.GET_ANNOUNCEMENT,
        announcementinfo:announcementinfo
    }
}
export const addAnnouncement=(announcementinfo)=>{
    return {
        type:ActionTypes.ADD_ANNOUNCEMENT,
        announcementinfo:announcementinfo
    }
}
export const getOutline=(outlineinfo)=>{
    return {
        type:ActionTypes.GET_COURSE_OULINE,
        outlineinfo:outlineinfo
    }
}
export const getGradeBook=(gradebookinfo)=>{
    return {
        type:ActionTypes.GET_GRADE_BOOK,
        gradebookinfo:gradebookinfo
    }
}
export const setTypeWeightage=(data,marks_type)=>{
    return {
        type:ActionTypes.SET_TYPE_WEIGHTAGE,
        data:data,
        marks_type:marks_type
    }
}
export const getListAssessment=(ListAssessment)=>{
    return{
        type:ActionTypes.GET_LIST_ASSESSMENT,
        ListAssessment:ListAssessment
    }
}


