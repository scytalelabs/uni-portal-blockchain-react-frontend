import * as ActionTypes from './ActionTypes';
import { baseUrl} from '../shared/basedUrl';

//ADMIN STUDENT CRUD ACTIONS
export const deleteStudent=(id)=>{
    return {
        type:ActionTypes.DELETE_STUDENT,
        id:id
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
//ADMIN TEACHER CRUD ACTIONS
export const deleteTeacher=(id)=>{
    return {
        type:ActionTypes.DELETE_TEACHER,
        id:id
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
//ADMIN COURSE CRUD ACTIONS
export const deleteCourse=(id)=>{
    return {
        type:ActionTypes.DELETE_COURSE,
        id:id
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