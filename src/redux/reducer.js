import * as ActionTypes from './ActionTypes';
import axios from 'axios';
import { baseUrl } from '../shared/basedUrl';

export const initialState={
    // notifications:[
    //         {id:1 ,date:"12-03-2019 ",title:"Makeup Class",content:  "AssalamoAlaikum, People, you have a Makeup class on Saturday 13th April 2019 at 09:40 am in 003"},
    //         {id:2 ,date:"14-04-2019 ",title:"Quiz 1",content:  "AssalamoAlaikum, People, you have a Quiz on Saturday 16th April 2019 at 09:40 am in 103"},
    //         {id:3 ,date:"16-04-2019 ",title:"Makeup Class",content:  "AssalamoAlaikum, People, you have a Makeup class on Saturday 13th April 2019 at 09:40 am in 003"},
    //         {id:4 ,date:"19-04-2019 ",title:"Quiz 1",content:  "AssalamoAlaikum, People, you have a Quiz on Saturday 16th April 2019 at 09:40 am in 103"},
    //         {id:5 ,date:"14-04-2019 ",title:"Makeup Class",content:  "AssalamoAlaikum, People, you have a Makeup class on Saturday 13th April 2019 at 09:40 am in 003"},
    //         {id:6 ,date:"01-04-2019 ",title:"Makeup Class",content:  "AssalamoAlaikum, People, you have a Makeup class on Saturday 13th April 2019 at 09:40 am in 003"},
    //         {id:7 ,date:"19-04-2019 ",title:"Quiz 1",content:  "AssalamoAlaikum, People, you have a Quiz on Saturday 16th April 2019 at 09:40 am in 103"},
    //         {id:8 ,date:"20-04-2019 ",title:"Quiz 1",content:  "AssalamoAlaikum, People, you have a Quiz on Saturday 16th April 2019 at 09:40 am in 103"},
    //         {id:9 ,date:"26-04-2019 ",title:"Makeup Class",content:  "AssalamoAlaikum, People, you have a Makeup class on Saturday 13th April 2019 at 09:40 am in 003"},
    //         {id:10 ,date:"30-04-2019 ",title:"Quiz 1",content:  "AssalamoAlaikum, People, you have a Quiz on Saturday 16th April 2019 at 09:40 am in 103"},
    // ],
    transcriptheadinginfo:[
        {id:1 ,credit_attempted:"Credit Attempted",credit_accepted_toward_degree_completion:"Credit Accepted toward degree Completion",credit_earned:"Credit Earned",cgpa:"CGPA"}
    ],
    transcriptheadingdata:[
        {id:1 ,credit_attempted:0,credit_accepted_toward_degree_completion:0,credit_earned:0,cgpa:0}
    ],
    terminfo:[
        {id:1 ,title:"Fall 16"},
        {id:2 ,title:"Spring 17"},
        {id:3 ,title:"Fall 17"},
        {id:4 ,title:"Spring 18"},
        {id:5 ,title:"Fall 19"}
    ],
    termheading:[
        {id:1 ,courseid:"Course ID",course_title:"Course Title",course_credit:"Course Credit",grade:"Grade"}
    ],
    termdata:[
        {tid:1,id:1,courseid:"BSCS01",course_title:"DataBase",course_credit:3,grade:"A"},
        {tid:1,id:2,courseid:"BSCS02",course_title:"Pak Studies",course_credit:3,grade:"A"},
        {tid:1,id:3,courseid:"BSCS03",course_title:"Numerical Computing",course_credit:3,grade:"A"},
        {tid:1,id:4,courseid:"BSCS04",course_title:"DataBase Lab",course_credit:1,grade:"A"},
        {tid:1,id:5,courseid:"BSCS05",course_title:"Logical Thinking",course_credit:3,grade:"A"},
        {tid:2,id:1,courseid:"BSCS11",course_title:"Data Science",course_credit:3,grade:"A"},
        {tid:2,id:2,courseid:"BSCS12",course_title:"CloudComputing",course_credit:3,grade:"B+"},
        {tid:2,id:3,courseid:"BSCS13",course_title:"Operating System",course_credit:3,grade:"A"},
        {tid:2,id:4,courseid:"BSCS14",course_title:"Operating System Lab",course_credit:1,grade:"B"},
        {tid:2,id:5,courseid:"BSCS15",course_title:"English I",course_credit:3,grade:"A-"},
        {tid:3,id:1,courseid:"BSCS21",course_title:"Data Science",course_credit:3,grade:"A"},
        {tid:3,id:2,courseid:"BSCS22",course_title:"CloudComputing",course_credit:3,grade:"B+"},
        {tid:3,id:3,courseid:"BSCS23",course_title:"Artificial Intelligence",course_credit:3,grade:"A"},
        {tid:3,id:4,courseid:"BSCS24",course_title:"Artificial Intelligence Lab",course_credit:1,grade:"B"},
        {tid:3,id:5,courseid:"BSCS25",course_title:"English II",course_credit:3,grade:"A-"},
        {tid:4,id:1,courseid:"BSCS31",course_title:"Data Science",course_credit:3,grade:"A"},
        {tid:4,id:2,courseid:"BSCS32",course_title:"CloudComputing",course_credit:3,grade:"B+"},
        {tid:4,id:3,courseid:"BSCS33",course_title:"Introduction to computr Science",course_credit:3,grade:"A"},
        {tid:4,id:4,courseid:"BSCS34",course_title:"Introduction to computr Science Lab",course_credit:1,grade:"B"},
        {tid:4,id:5,courseid:"BSCS35",course_title:"English II",course_credit:3,grade:"A-"},
        {tid:5,id:1,courseid:"BSCS41",course_title:"Programming Fundamentals",course_credit:3,grade:"A"},
        {tid:5,id:2,courseid:"BSCS42",course_title:"CloudComputing",course_credit:3,grade:"B+"},
        {tid:5,id:3,courseid:"BSCS43",course_title:"Object Oriented and Paradigm",course_credit:3,grade:"A"},
        {tid:5,id:4,courseid:"BSCS44",course_title:"Object Oriented and Paradigm Lab",course_credit:1,grade:"B"},
        {tid:5,id:5,courseid:"BSCS45",course_title:"Multivariat Calculus",course_credit:3,grade:"A-"}
    ],
    // gradebook:[
    //     {id:1 ,title:"Assignment",weightage:"10%",date:"Date",total_marks:"Total Marks",obtained_marks:"Obtained Marks"},
    //     {id:2 ,title:"Quiz",weightage:"10%",date:"Date",total_marks:"Total Marks",obtained_marks:"Obtained Marks"},
    //     {id:3 ,title:"Class Participation",weightage:"10%",date:"Date",total_marks:"Total Marks",obtained_marks:"Obtained Marks"},
    //     {id:4 ,title:"Mid-Term",weightage:"25%",date:"Date",total_marks:"Total Marks",obtained_marks:"Obtained Marks"},
    //     {id:5 ,title:"Final Term",weightage:"35%",date:"Date",total_marks:"Total Marks",obtained_marks:"Obtained Marks"},
    //     {id:6 ,title:"Project Presentation",weightage:"10%",date:"Date",total_marks:"Total Marks",obtained_marks:"Obtained Marks"}
    // ],
    // gradebookmarks:[
    //     {fid:1, id:1 ,date:"29-4-2019 12:00:00 AM",total_marks:"1",obtained_marks:"40"},
    //     {fid:1, id:2 ,date:"30-4-2019 12:00:00 AM",total_marks:"2",obtained_marks:"40"},
    //     {fid:1, id:3 ,date:"1-5-2019 12:00:00 AM",total_marks:"3",obtained_marks:"40"},
    //     {fid:1, id:4 ,date:"5-5-2019 12:00:00 AM",total_marks:"4",obtained_marks:"40"},
    //     {fid:2, id:1 ,date:"25-4-2019 12:00:00 AM",total_marks:"1",obtained_marks:"40"},
    //     {fid:2, id:2 ,date:"5-5-2019 12:00:00 AM",total_marks:"2",obtained_marks:"40"},
    //     {fid:2, id:3 ,date:"12-5-2019 12:00:00 AM",total_marks:"3",obtained_marks:"40"},
    //     {fid:3, id:1 ,date:"16-5-2019 12:00:00 AM",total_marks:"1",obtained_marks:"40"},
    //     {fid:3, id:2 ,date:"19-5-2019 12:00:00 AM",total_marks:"2",obtained_marks:"40"},
    //     {fid:3, id:3 ,date:"25-5-2019 12:00:00 AM",total_marks:"3",obtained_marks:"40"},
    //     {fid:4, id:1 ,date:"25-4-201912:00:00 AM",total_marks:"1",obtained_marks:"40"},
    //     {fid:5, id:1 ,date:"15-6-2019 12:00:00 AM",total_marks:"1",obtained_marks:"40"},
    //     {fid:6, id:1 ,date:"12-6-2019 12:00:00 AM",total_marks:"1",obtained_marks:"40"}
    // ],
    // students:[
    //     {id:1 ,name:"Muhammad Adrees",father_name:"Shakeel Ahmad",phone_no:"03356611986",address:"p323/1 amin town FSD",reg_no:"L1F16BSCS0151",cnic:331029627727,dob:"01/01/1998",email:"adreees0512@gmail.com"},
    //     {id:2 ,name:"Zain Yazdan",father_name:"Yazdan Ahmad",phone_no:"03346611986",address:"ICHRA",reg_no:"L1F16BSCS0157",cnic:331029627727,dob:"03/01/1996",email:"zainyadan@gmail.com"},
    //     {id:3 ,name:"Hammad Mubeen",father_name:"Mubeen Mohsin",phone_no:"03346611986",address:"MARAGZAAR",reg_no:"L1F16BSCS0145",cnic:331029627727,dob:"17/08/1998",email:"hammad123@gmail.com"},
    //     {id:4 ,name:"Muhammad Arsal",father_name:"shaikh sahab",phone_no:"03326611986",address:"SABZAZAAR",reg_no:"L1F16BSCS0154",cnic:331029627727,dob:"07/01/1998",email:"arsalshaikh65@gmail.com"},
    //     {id:5 ,name:"Muhammad Ghulam Fakhar ud din Shakeel",father_name:"Aslam Shakeel",phone_no:"03316611986",address:"IQBAL TOWN",reg_no:"L1F16BSCS0136",cnic:331029627727,dob:"23/09/1998",email:"efyudi@gmail.com"},
    // ],
    // courses:[
    //     {id:1 ,course:"Data Base + lab",semester:"Fall 19",section:"A",credit_hours:"4",course_code:"BSSC001"},
    //     {id:2 ,course:"CCN + lab",semester:"Fall 18",section:"B",credit_hours:"4",course_code:"BSSC002"},
    //     {id:3 ,course:"Persian",semester:"Fall 17",section:"C",credit_hours:"3",course_code:"BSSC003"},
    //     {id:4 ,course:"Game Development",semester:"Fall 16",section:"D",credit_hours:"3",course_code:"BSSC004"},
    //     {id:5 ,course:"OOAD + lab",semester:"Fall 15",section:"E",credit_hours:"4",course_code:"BSSC005"},   
    //   ],
    //   teachers:[
    //     {id:1 ,name:"Zaid Munir",father_name:"Munir Ahmad",phone_no:"03356611986",address:"house#45,C block ,Sky Lake, Lahore Pakistan",reg_no:"L1F16BSCS0151",cnic:331029627727,dob:"01/01/1998",email:"zaid.munir@ucp.edu.pk",qualification:"MSCS"},
    //     {id:2 ,name:"Usman Younas",father_name:"Younas ahmad",phone_no:"03346611986",address:"ICHRA",reg_no:"L1F16BSCS0157",cnic:331029627727,dob:"03/01/1996",email:"Usman.younas@gmail.com",qualification:"MPHIL "},
    //     {id:3 ,name:"Mohsin Sami",father_name:"Mubeen Mohsin",phone_no:"03346611986",address:"MARAGZAAR",reg_no:"L1F16BSCS0145",cnic:331029627727,dob:"17/08/1998",email:"mohsing.sami@gmail.com",qualification:"PHD"},
    //     {id:4 ,name:"Haris",father_name:"shaikh sahab",phone_no:"03326611986",address:"SABZAZAAR",reg_no:"L1F16BSCS0154",cnic:331029627727,dob:"07/01/1998",email:"Muhammad.haris@gmail.com",qualification:"BSSE"},
    //     {id:5 ,name:"Sadaf Baloch",father_name:"Muhammad Baloch",phone_no:"03316611986",address:"IQBAL TOWN",reg_no:"L1F16BSCS0136",cnic:331029627727,dob:"23/09/1998",email:"sadaf.balouch@gmail.com",qualification:"BSCS"},
    // ],
    assignments:[
        // { assignment_id:1,assignmnet_Lable: "Assignment 1",assignmnet_Date:"2020-06-10",assignmnet_Total:"20"},
        // { assignment_id:2,assignmnet_Lable: "Assignment 2",assignmnet_Date:"2020-06-10",assignmnet_Total:"30"},
        
    ],
    quizes:[
        // { quiz_id:1,quiz_Lable: "Quiz 1",quiz_Date:"2020-06-10",quiz_Total:"20"},
        // { quiz_id:2,quiz_Lable: "Quiz 2",quiz_Date:"2020-06-10",quiz_Total:"30"},
    ],
    mids:[
        // { mid_id:1,mid_Lable:"Mid-Term",mid_Date:"2020-06-10",mid_Total:"20"},
    ],
    classparticipations:[
        // { classparticipation_id:1,classparticipation_Lable:"CP 1",classparticipation_Date:"2020-06-10",classparticipation_Total:"20"},
    ],
    finals:[
        // { final_id:1,final_Lable:"Final-Term",final_Date:"2020-06-10",final_Total:"20"},
    ],
    projectpresentations:[
        // { projectpresentation_id:1,projectpresentation_Lable:"Project_Presentation",projectpresentation_Date:"2020-06-10",projectpresentation_Total:"40"},
    ],
    projects:[
        // { project_id:1,project_Lable:"Project",project_Date:"2020-06-10",project_Total:"40"},
    ],
    students:[],
    teachers:[],
    courses:[],
    marks_type:[],
    semester:[],
    section:[],
    studentSectioninfo:[],
    teacherSectioninfo:[],
    notifications:[],
    outline:[],
    gradebook:[],
    ListAssessment:[]
}

// axios.get(baseUrl+'/admin/1/students/')
export const Reducer=(state=initialState,action)=>{
    // console.log("IN REDUCER ",action);
    if(action.type===ActionTypes.DELETE_STUDENT)
    {
        // console.log("REGNO IS :",action.regno)
        axios.delete(baseUrl+"admin/1/students/"+action.regno)
        .then(response=>{
            console.log("RESPONSE :",response);
          })
          .catch(error=>{
            console.log(error)
          })
          const students=state.students.filter(student=>{
            return student.reg_no!==action.regno
        })
        return{
            ...state,
            students:students
        }
    }
    else if(action.type===ActionTypes.ADD_STUDENT)
    {
        action.studentinfo.id=Math.random();
        console.log(action);
        const data={
            name:action.studentinfo.name,
            cnic:action.studentinfo.cnic,
            dob:action.studentinfo.dob,
            phone_no:action.studentinfo.phone_no,
            father_name:action.studentinfo.father_name,
            email:action.studentinfo.email,
            reg_no:action.studentinfo.reg_no,
            address:action.studentinfo.address,
            password:action.studentinfo.password,
            username:action.studentinfo.username,
        }
        // console.log("DATAAAAA:",data)
        const token=localStorage.getItem('bearer_token');
        // console.log("TOKEN IS ",token);
        axios.defaults.headers.common['Authorization']=token;
        axios.post(baseUrl+"admin/1/students",data)
        .then(response=>{
            console.log("RESPONSE :",response);
          })
          .catch(error=>{
            console.log(error)
          })
        let students=[...state.students,action.studentinfo]
        return{
            ...state,
            students:students
        }
    }
    else if(action.type===ActionTypes.UPDATE_STUDENT)
    {
            const index=state.students.findIndex((student)=>{
                    return student.id===action.updatedstudent.id
            }) 
            const student=Object.assign({},state.students[index]);
            // console.log("FILTERED STUDNET IS ",student);
            const students=Object.assign([],state.students);
            // console.log("UPDATEDddd STUDNET IS ",students);
            students[index]=action.updatedstudent;

            const data={
                name:action.updatedstudent.name,
                cnic:action.updatedstudent.cnic,
                dob:action.updatedstudent.dob,
                phone_no:action.updatedstudent.phone_no,
                father_name:action.updatedstudent.father_name,
                email:action.updatedstudent.email,
                reg_no:action.updatedstudent.reg_no,
                address:action.updatedstudent.address,
                password:action.updatedstudent.password,
                username:action.updatedstudent.username,
            }

            console.log("DATAAAAA:",data)
            const token=localStorage.getItem('bearer_token');
            console.log("TOKEN IS ",token);
            axios.defaults.headers.common['Authorization']=token;
            axios.put(baseUrl+"admin/1/students/"+action.updatedstudent.reg_no,data)
            .then(response=>{
                console.log("RESPONSE :",response);
              })
              .catch(error=>{
                console.log(error)
              })
            return{
                ...state,
                students:students
            }
            
    }
    else if(action.type===ActionTypes.DELETE_TEACHER)
    {
        const teachers=state.teachers.filter(teacher=>{
            return teacher.reg_no!==action.regno
        })
        const token=localStorage.getItem('bearer_token');
        axios.defaults.headers.common['Authorization']=token;
        
        axios.delete(baseUrl+"admin/1/teachers/"+action.regno)
        .then(response=>{
            console.log("RESPONSE :",response);
          })
          .catch(error=>{
            console.log(error)
          })
        return{
            ...state,
            teachers:teachers
        }
        
    }
    else if(action.type===ActionTypes.ADD_TEACHER)
    {
        action.teacherinfo.id=Math.random();
        console.log(action);

        const data={
            name:action.teacherinfo.name,
            cnic:action.teacherinfo.cnic,
            dob:action.teacherinfo.dob,
            phone_no:action.teacherinfo.phone_no,
            father_name:action.teacherinfo.father_name,
            email:action.teacherinfo.email,
            reg_no:action.teacherinfo.reg_no,
            address:action.teacherinfo.address,
            qualification:action.teacherinfo.qualification,
            password:action.teacherinfo.password,
            username:action.teacherinfo.username,
        }
        console.log("DATAAAAA:",data)
        const token=localStorage.getItem('bearer_token');
        console.log("TOKEN IS ",token);
        axios.defaults.headers.common['Authorization']=token;
        axios.post(baseUrl+"admin/1/teachers",data)
        .then(response=>{
            console.log("RESPONSE :",response);
          })
          .catch(error=>{
           
            console.log(error)
          })
        let teachers=[...state.teachers,action.teacherinfo]
        return{
            ...state,
            teachers:teachers
        }
    }
    else if(action.type===ActionTypes.UPDATE_TEACHER)
    {
            const index=state.teachers.findIndex((teacher)=>{
                    return teacher.id===action.updatedteacher.id
            }) 
            console.log("ACTION TEACHER IS ",action.updatedteacher);
            const teacher=Object.assign({},state.teachers[index]);
            action.updatedteacher.reg_no=teacher.reg_no;
            const teachers=Object.assign([],state.teachers);

            const data={
                name:action.updatedteacher.name,
                cnic:action.updatedteacher.cnic,
                dob:action.updatedteacher.dob,
                phone_no:action.updatedteacher.phone_no,
                father_name:action.updatedteacher.father_name,
                email:action.updatedteacher.email,
                reg_no:action.updatedteacher.reg_no,
                address:action.updatedteacher.address,
                qualification:action.updatedteacher.qualification,
                password:action.updatedteacher.password,
                username:action.updatedteacher.username,
            }

            console.log("DATAAAAA:",data)
            const token=localStorage.getItem('bearer_token');
            console.log("TOKEN IS ",token);
            axios.defaults.headers.common['Authorization']=token;
            axios.put(baseUrl+"admin/1/teachers/"+action.updatedteacher.reg_no,data)
            .then(response=>{
                console.log("RESPONSE :",response);
              })
              .catch(error=>{
                console.log(error)
              })


            teachers[index]=action.updatedteacher;
            return{
                ...state,
                teachers:teachers
            }
            
    }
    else if(action.type===ActionTypes.DELETE_COURSE)
    {
        
        const courses=state.courses.filter(course=>{
            return course.code!==action.code
        })
        const token=localStorage.getItem('bearer_token');
        axios.defaults.headers.common['Authorization']=token;
        console.log("NAME",action)
        axios.delete(baseUrl+"admin/1/courses/"+action.code)
        .then(response=>{
            console.log("RESPONSE :",response);
          })
          .catch(error=>{
            console.log(error)
          })
        return{
            ...state,
            courses:courses
        }

    }
    else if(action.type===ActionTypes.ADD_COURSE)
    {
        action.courseinfo.id=Math.random();
        console.log(action);


        const Course_data={
            name:action.courseinfo.name,
            credithours:action.courseinfo.credithours,
            code:action.courseinfo.code,   
        }
        console.log("DATAAAAA:",Course_data)
        const token=localStorage.getItem('bearer_token');
        console.log("TOKEN IS ",token);
        axios.defaults.headers.common['Authorization']=token;
        axios.post(baseUrl+"admin/1/courses",Course_data)
        .then(response=>{
            console.log("RESPONSE :",response);
          })
          .catch(error=>{
           
            console.log(error)
          })
        let courses=[...state.courses,action.courseinfo]
        return{
            ...state,
            courses:courses
        }
    }
    else if(action.type===ActionTypes.UPDATE_COURSE)
    {
            const index=state.courses.findIndex((course)=>{
                    return course.code==action.updatedcourse.code
            }) 
            
            const course=Object.assign({},state.courses[index]);
            const courses=Object.assign([],state.courses);
            courses[index]=action.updatedcourse;
            const Course_data={
                name:action.updatedcourse.name,
                credithours:action.updatedcourse.credithours,
                code:action.updatedcourse.code,   
            }
            console.log("DATAAAAA:",Course_data)
            const token=localStorage.getItem('bearer_token');
            console.log("TOKEN IS ",token);
            axios.defaults.headers.common['Authorization']=token;
            axios.put(baseUrl+"admin/1/courses/"+action.updatedcourse.code,Course_data)
            .then(response=>{
                console.log("RESPONSE :",response);
              })
              .catch(error=>{
               
                console.log(error)
              })

            
            return{
                ...state,
                courses:courses
            }
            
    }
    else if(action.type===ActionTypes.DELETE_MARKS_TYPES)
    {
        
        const marks_type=state.marks_type.filter(type=>{
            return type.type_name!==action.type_name
        })
        const token=localStorage.getItem('bearer_token');
        axios.defaults.headers.common['Authorization']=token;
        console.log("admin/1/assessment_type/",action.type_name)
        axios.delete(baseUrl+"admin/1/assessment_type/"+action.type_name)
        .then(response=>{
            console.log("RESPONSE :",response);
          })
          .catch(error=>{
            console.log(error)
          })
        return{
            ...state,
            marks_type:marks_type
        }

    }
    else if(action.type===ActionTypes.ADD_MARKS_TYPES)
    {
        action.markstypeinfo.id=Math.random();
        console.log(action);
        const MarksType_data={
            type_name:action.markstypeinfo.type_name,
               
        }
        console.log("DATAAAAA:",MarksType_data)
        const token=localStorage.getItem('bearer_token');
        console.log("TOKEN IS ",token);
        axios.defaults.headers.common['Authorization']=token;
        axios.post(baseUrl+"admin/1/assessment_type",MarksType_data )
        .then(response=>{
            console.log("RESPONSE :",response);
          })
          .catch(error=>{
           
            console.log(error)
          })
        let marks_type=[...state.marks_type,action.markstypeinfo]
        return{
            ...state,
            marks_type:marks_type
        }
    }
    else if(action.type===ActionTypes.DELETE_SEMESTER)
    {
        
        const semester=state.semester.filter(type=>{
            return type.name!==action.name
        })
        const token=localStorage.getItem('bearer_token');
        axios.defaults.headers.common['Authorization']=token;
        console.log("admin/1/semester/",action.name)
        axios.delete(baseUrl+"admin/1/semester/"+action.name)
        .then(response=>{
            console.log("RESPONSE :",response);
          })
          .catch(error=>{
            console.log(error)
          })
        return{
            ...state,
            semester:semester
        }

    }
    else if(action.type===ActionTypes.ADD_SEMESTER)
    {
        action.semesterinfo.id=Math.random();
        console.log(action);
        const Semester_data={
            name:action.semesterinfo.name,
        }
        console.log("DATAAAAA:",Semester_data)
        const token=localStorage.getItem('bearer_token');
        console.log("TOKEN IS ",token);
        axios.defaults.headers.common['Authorization']=token;
        axios.post(baseUrl+"admin/1/semester",Semester_data )
        .then(response=>{
            console.log("RESPONSE :",response);
          })
          .catch(error=>{
           
            console.log(error)
          })
          let semester=[...state.semester,action.semesterinfo]
          return{
              ...state,
              semester:semester
          }
          
        //   axios.get(baseUrl+"admin/1/semester" )
        // .then(response=>{
        //     console.log("RESPONSE in GET",response.data);
        //     let semester=response.data;
        //     console.log("SEMESTER in GET",semester);

        //     return{
        //         ...state,
        //         semester:semester
        //     }
        //  })
        //   .catch(error=>{
        //     console.log(error)
        //   })
        
    }
    else if(action.type===ActionTypes.DELETE_SECTION)
    {
        
        const section=state.semester.filter(type=>{
            return type.section!==action.section
        })
        const token=localStorage.getItem('bearer_token');
        axios.defaults.headers.common['Authorization']=token;
        console.log("admin/1/semester/",action.section)
        axios.delete(baseUrl+"admin/1/sections/"+action.section)
        .then(response=>{
            console.log("RESPONSE :",response);
          })
          .catch(error=>{
            console.log(error)
          })
        return{
            ...state,
            section:section
        }

    }
    else if(action.type===ActionTypes.ADD_SECTION)
    {
        action.sectioninfo.id=Math.random();
        console.log(action);
        const Section_data={
            section:action.sectioninfo.section,
            course:action.sectioninfo.course,
            semester:action.sectioninfo.semester,
        
        }
        console.log("DATAAAAA:",Section_data)
        const token=localStorage.getItem('bearer_token');
        console.log("TOKEN IS ",token);
        axios.defaults.headers.common['Authorization']=token;
        axios.post(baseUrl+"admin/1/sections",Section_data )
        .then(response=>{
            console.log("RESPONSE :",response);
          })
          .catch(error=>{
           
            console.log(error)
          })
        let section=[...state.section,action.sectioninfo]
        return{
            ...state,
            section:section
        }
        
    }
    else if(action.type===ActionTypes.DELETE_STUDENT_SECTION)
    {
        const token=localStorage.getItem('bearer_token');
        axios.defaults.headers.common['Authorization']=token;
        console.log("admin/1/assign_section/students",action.reg_no)
        axios.delete(baseUrl+"admin/1/assign_section/students/"+action.reg_no)
        .then(response=>{
            console.log("RESPONSE :",response);
          })
          .catch(error=>{
            console.log(error)
          })

    }
    else if(action.type===ActionTypes.ADD_STUDENT_SECTION)
    {
        console.log("AGYAAA",action);
        const StudentSection_data={
            reg_no:action.studentSectioninfo.reg_no,
            course:action.studentSectioninfo.name,
            semester:action.studentSectioninfo.semester,
            section:action.studentSectioninfo.section,
        }
        console.log("DATAAAAA:",StudentSection_data)
        const token=localStorage.getItem('bearer_token');
        console.log("TOKEN IS ",token);
        axios.defaults.headers.common['Authorization']=token;
        axios.post(baseUrl+"admin/1/assign_section/students",StudentSection_data )
        .then(response=>{
            console.log("RESPONSE :",response);
          })
          .catch(error=>{    
            console.log(error)
          })
    }
    else if(action.type===ActionTypes.DELETE_TEACHER_SECTION)
    {
        const token=localStorage.getItem('bearer_token');
        axios.defaults.headers.common['Authorization']=token;
        console.log("admin/1/assign_section/teachers",action.reg_no)
        axios.delete(baseUrl+"admin/1/assign_section/teachers/"+action.reg_no)
        .then(response=>{
            console.log("RESPONSE :",response);
          })
          .catch(error=>{
            console.log(error)
          })

    }
    else if(action.type===ActionTypes.ADD_TEACHER_SECTION)
    {
        console.log(action);
        const TeachertSection_data={
            reg_no:action.teacherSectioninfo.reg_no,
            course:action.teacherSectioninfo.name,
            semester:action.teacherSectioninfo.semester,
            section:action.teacherSectioninfo.section,
        }
        console.log("DATAAAAA:",TeachertSection_data)
        const token=localStorage.getItem('bearer_token');
        console.log("TOKEN IS ",token);
        axios.defaults.headers.common['Authorization']=token;
        axios.post(baseUrl+"admin/1/assign_section/teachers",TeachertSection_data )
        .then(response=>{
            console.log("RESPONSE :",response);
          })
          .catch(error=>{    
            console.log(error)
          })
           
    }
    else if(action.type===ActionTypes.TEACHER_ADD_ASSIGNMENT)
    {
        console.log("REDUCER",action.assignmentinfo)
        let assignments=[...state.assignments,action.assignmentinfo]
        return{
            ...state,
            assignments:assignments,
        }
    }
    else if(action.type===ActionTypes.TEACHER_ADD_QUIZ)
    {
        let quizes=[...state.quizes,action.quizinfo]
        return{
            ...state,
            quizes:quizes,
        }
    }
    else if(action.type===ActionTypes.TEACHER_ADD_MIDS)
    {
        let mids=[...state.mids,action.midsinfo]
        return{
            ...state,
            mids:mids,
        }
    }
    else if(action.type===ActionTypes.TEACHER_ADD_CLASSPARTICIPATION)
    {
        let classparticipations=[...state.classparticipations,action.classparticipationinfo]
        return{
            ...state,
            classparticipations:classparticipations,
        }
    }
    else if(action.type===ActionTypes.TEACHER_ADD_FINALS)
    {
        let finals=[...state.finals,action.finalinfo]
        return{
            ...state,
            finals:finals,
        }
    }
    else if(action.type===ActionTypes.TEACHER_ADD_PROJECTPRESENTATION)
    {
        let projectpresentations=[...state.projectpresentations,action.projectpresentationinfo]
        return{
            ...state,
            projectpresentations:projectpresentations,
        }
    }
    else if(action.type===ActionTypes.TEACHER_ADD_PROJECTS)
    {
        let projects=[...state.projects,action.projectinfo]
        return{
            ...state,
            projects:projects,
        }
    }
    else if(action.type===ActionTypes.SET_STUDENT)
    {
        console.log("REDUCER",action.students)
        return{
            ...state,
            students:action.students,
        }
        
    }
    else if(action.type===ActionTypes.SET_TEACHER)
    {
        console.log("REDUCER",action.teachers)
        return{
            ...state,
            teachers:action.teachers,
        }
        
    }
    else if(action.type===ActionTypes.SET_COURSE)
    {
        console.log("REDUCER",action.courses)
        return{
            ...state,
            courses:action.courses,
        }
        
    }
    else if(action.type===ActionTypes.SET_MARKS_TYPES)
    {
        console.log("REDUCER",action.types)
        return{
            ...state,
            marks_type:action.types,
        }
        
    }
    else if(action.type===ActionTypes.SET_SEMESTER)
    {
        console.log("REDUCER",action.semester)
        return{
            ...state,
            semester:action.semester,
        }
        
    }
    else if(action.type===ActionTypes.SET_SECTION)
    {
        console.log("REDUCER",action.section)
        return{
            ...state,
            section:action.section,
        }
        
    }
    else if(action.type===ActionTypes.SET_STUDENT_SECTION)
    {
        console.log("REDUCER",action)
        return{
            ...state,
            studentSectioninfo:action.sectiondata,
        }
        
    }
    else if(action.type===ActionTypes.SET_TEACHER_SECTION)
    {
        console.log("REDUCER",action)
        return{
            ...state,
            teacherSectioninfo:action.sectiondata,
        }
        
    }
    else if(action.type===ActionTypes.GET_ANNOUNCEMENT)
    {

        console.log("REDUCER",action)

        return{
            ...state,
            notifications:action.announcementinfo,
        }
        
    }
    else if(action.type===ActionTypes.GET_COURSE_OULINE)
    {
        console.log("REDUCER",action)
        return{
            ...state,
            outline:action.outlineinfo,
        }
        
    }
    else if(action.type===ActionTypes.GET_GRADE_BOOK)
    {
        console.log("REDUCER",action)
        return{
            ...state,
            gradebook:action.gradebookinfo,
        }
        
    }
    else if(action.type===ActionTypes.ADD_ANNOUNCEMENT)
    {
        console.log("REDUCER ANNOUNCEMENT",action)
        const course=localStorage.getItem('course_name');
        const Announcement_data={
            semester:action.announcementinfo.semester,
            course:course,
            section:action.announcementinfo.section,   
            announcement:action.announcementinfo.announcement,   
            date:action.announcementinfo.date,   
            time:action.announcementinfo.time,   
        }
        console.log("DATAAAAA:",Announcement_data)
        const token=localStorage.getItem('bearer_token');
        console.log("TOKEN IS ",token);
        const regno=localStorage.getItem('reg_no');
        const semester=localStorage.getItem('semester');
        const section=localStorage.getItem('section');
        axios.defaults.headers.common['Authorization']=token;
        // 11.	teacher/{ teacher_Id }/{ semester }/{ course }/{ section} / announcements    
        console.log("teacher/"+regno+'/'+semester+'/'+course+'/'+section+"/announcements",Announcement_data);
        axios.post(baseUrl+"teacher/"+regno+'/'+semester+'/'+course+'/'+section+"/announcements",Announcement_data)
        .then(response=>{
            console.log("RESPONSE :",response);
          })
          .catch(error=>{
            console.log(error)
          })
    }
    else if(action.type===ActionTypes.SET_TYPE_WEIGHTAGE)
    {
        console.log("REDUCER SET_TYPE_WEIGHTAGE",action)
        
        const semester=localStorage.getItem('semester');
        const course=localStorage.getItem('course_name');
        const section=localStorage.getItem('section');        
        const Weightage_Data={
            semester:semester,
            course:course,
            section:section,   
            marks_type:action.marks_type,   
            weightage:action.data.weightage,   
            no_of_selected:0,   
        }
        console.log('DATAAAA',Weightage_Data)
        const token=localStorage.getItem('bearer_token');
        console.log("TOKEN IS ",token);
        const regno=localStorage.getItem('reg_no');
        axios.defaults.headers.common['Authorization']=token;
        console.log("teacher/"+regno+'/'+semester+'/'+course+'/'+section+"/course_outline",Weightage_Data);
        axios.post(baseUrl+"teacher/"+regno+'/'+semester+'/'+course+'/'+section+"/course_outline",Weightage_Data)
        .then(response=>{
            console.log("RESPONSE :",response);
          })
          .catch(error=>{
            console.log(error)
          })
    }
    else if(action.type===ActionTypes.GET_LIST_ASSESSMENT)
    {
        console.log("REDUCER",action.ListAssessment)
        return{
            ...state,
            ListAssessment:action.ListAssessment,
        }
        
    }
    
    return state;
}