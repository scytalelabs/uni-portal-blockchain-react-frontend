import * as ActionTypes from './ActionTypes';

export const initialState={
    notifications:[
            {id:1 ,date:"12-03-2019 ",title:"Makeup Class",content:  "AssalamoAlaikum, People, you have a Makeup class on Saturday 13th April 2019 at 09:40 am in 003"},
            {id:2 ,date:"14-04-2019 ",title:"Quiz 1",content:  "AssalamoAlaikum, People, you have a Quiz on Saturday 16th April 2019 at 09:40 am in 103"},
            {id:3 ,date:"16-04-2019 ",title:"Makeup Class",content:  "AssalamoAlaikum, People, you have a Makeup class on Saturday 13th April 2019 at 09:40 am in 003"},
            {id:4 ,date:"19-04-2019 ",title:"Quiz 1",content:  "AssalamoAlaikum, People, you have a Quiz on Saturday 16th April 2019 at 09:40 am in 103"},
            {id:5 ,date:"14-04-2019 ",title:"Makeup Class",content:  "AssalamoAlaikum, People, you have a Makeup class on Saturday 13th April 2019 at 09:40 am in 003"},
            {id:6 ,date:"01-04-2019 ",title:"Makeup Class",content:  "AssalamoAlaikum, People, you have a Makeup class on Saturday 13th April 2019 at 09:40 am in 003"},
            {id:7 ,date:"19-04-2019 ",title:"Quiz 1",content:  "AssalamoAlaikum, People, you have a Quiz on Saturday 16th April 2019 at 09:40 am in 103"},
            {id:8 ,date:"20-04-2019 ",title:"Quiz 1",content:  "AssalamoAlaikum, People, you have a Quiz on Saturday 16th April 2019 at 09:40 am in 103"},
            {id:9 ,date:"26-04-2019 ",title:"Makeup Class",content:  "AssalamoAlaikum, People, you have a Makeup class on Saturday 13th April 2019 at 09:40 am in 003"},
            {id:10 ,date:"30-04-2019 ",title:"Quiz 1",content:  "AssalamoAlaikum, People, you have a Quiz on Saturday 16th April 2019 at 09:40 am in 103"},
    ],
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
    gradebook:[
        {id:1 ,title:"Assignment",weightage:"10%",date:"Date",total_marks:"Total Marks",obtained_marks:"Obtained Marks"},
        {id:2 ,title:"Quiz",weightage:"10%",date:"Date",total_marks:"Total Marks",obtained_marks:"Obtained Marks"},
        {id:3 ,title:"Class Participation",weightage:"10%",date:"Date",total_marks:"Total Marks",obtained_marks:"Obtained Marks"},
        {id:4 ,title:"Mid-Term",weightage:"25%",date:"Date",total_marks:"Total Marks",obtained_marks:"Obtained Marks"},
        {id:5 ,title:"Final Term",weightage:"35%",date:"Date",total_marks:"Total Marks",obtained_marks:"Obtained Marks"},
        {id:6 ,title:"Project Presentation",weightage:"10%",date:"Date",total_marks:"Total Marks",obtained_marks:"Obtained Marks"}
    ],
    gradebookmarks:[
        {fid:1, id:1 ,date:"29-4-2019 12:00:00 AM",total_marks:"1",obtained_marks:"40"},
        {fid:1, id:2 ,date:"30-4-2019 12:00:00 AM",total_marks:"2",obtained_marks:"40"},
        {fid:1, id:3 ,date:"1-5-2019 12:00:00 AM",total_marks:"3",obtained_marks:"40"},
        {fid:1, id:4 ,date:"5-5-2019 12:00:00 AM",total_marks:"4",obtained_marks:"40"},
        {fid:2, id:1 ,date:"25-4-2019 12:00:00 AM",total_marks:"1",obtained_marks:"40"},
        {fid:2, id:2 ,date:"5-5-2019 12:00:00 AM",total_marks:"2",obtained_marks:"40"},
        {fid:2, id:3 ,date:"12-5-2019 12:00:00 AM",total_marks:"3",obtained_marks:"40"},
        {fid:3, id:1 ,date:"16-5-2019 12:00:00 AM",total_marks:"1",obtained_marks:"40"},
        {fid:3, id:2 ,date:"19-5-2019 12:00:00 AM",total_marks:"2",obtained_marks:"40"},
        {fid:3, id:3 ,date:"25-5-2019 12:00:00 AM",total_marks:"3",obtained_marks:"40"},
        {fid:4, id:1 ,date:"25-4-201912:00:00 AM",total_marks:"1",obtained_marks:"40"},
        {fid:5, id:1 ,date:"15-6-2019 12:00:00 AM",total_marks:"1",obtained_marks:"40"},
        {fid:6, id:1 ,date:"12-6-2019 12:00:00 AM",total_marks:"1",obtained_marks:"40"}
    ],
    students:[
        {id:1 ,name:"Muhammad Adrees",father_name:"Shakeel Ahmad",phone_no:"03356611986",address:"p323/1 amin town FSD",reg_no:"L1F16BSCS0151",cnic:331029627727,dob:"01/01/1998",email:"adreees0512@gmail.com"},
        {id:2 ,name:"Zain Yazdan",father_name:"Yazdan Ahmad",phone_no:"03346611986",address:"ICHRA",reg_no:"L1F16BSCS0157",cnic:331029627727,dob:"03/01/1996",email:"zainyadan@gmail.com"},
        {id:3 ,name:"Hammad Mubeen",father_name:"Mubeen Mohsin",phone_no:"03346611986",address:"MARAGZAAR",reg_no:"L1F16BSCS0145",cnic:331029627727,dob:"17/08/1998",email:"hammad123@gmail.com"},
        {id:4 ,name:"Muhammad Arsal",father_name:"shaikh sahab",phone_no:"03326611986",address:"SABZAZAAR",reg_no:"L1F16BSCS0154",cnic:331029627727,dob:"07/01/1998",email:"arsalshaikh65@gmail.com"},
        {id:5 ,name:"Muhammad Ghulam Fakhar ud din Shakeel",father_name:"Aslam Shakeel",phone_no:"03316611986",address:"IQBAL TOWN",reg_no:"L1F16BSCS0136",cnic:331029627727,dob:"23/09/1998",email:"efyudi@gmail.com"},
    ],
    courses:[
        {id:1 ,course:"Data Base + lab",semester:"Fall 19",section:"A",credit_hours:"4",course_code:"BSSC001"},
        {id:2 ,course:"CCN + lab",semester:"Fall 18",section:"B",credit_hours:"4",course_code:"BSSC002"},
        {id:3 ,course:"Persian",semester:"Fall 17",section:"C",credit_hours:"3",course_code:"BSSC003"},
        {id:4 ,course:"Game Development",semester:"Fall 16",section:"D",credit_hours:"3",course_code:"BSSC004"},
        {id:5 ,course:"OOAD + lab",semester:"Fall 15",section:"E",credit_hours:"4",course_code:"BSSC005"},   
      ],
      teachers:[
        {id:1 ,name:"Zaid Munir",father_name:"Munir Ahmad",phone_no:"03356611986",address:"house#45,C block ,Sky Lake, Lahore Pakistan",reg_no:"L1F16BSCS0151",cnic:331029627727,dob:"01/01/1998",email:"zaid.munir@ucp.edu.pk",qualification:"MSCS"},
        {id:2 ,name:"Usman Younas",father_name:"Younas ahmad",phone_no:"03346611986",address:"ICHRA",reg_no:"L1F16BSCS0157",cnic:331029627727,dob:"03/01/1996",email:"Usman.younas@gmail.com",qualification:"MPHIL "},
        {id:3 ,name:"Mohsin Sami",father_name:"Mubeen Mohsin",phone_no:"03346611986",address:"MARAGZAAR",reg_no:"L1F16BSCS0145",cnic:331029627727,dob:"17/08/1998",email:"mohsing.sami@gmail.com",qualification:"PHD"},
        {id:4 ,name:"Haris",father_name:"shaikh sahab",phone_no:"03326611986",address:"SABZAZAAR",reg_no:"L1F16BSCS0154",cnic:331029627727,dob:"07/01/1998",email:"Muhammad.haris@gmail.com",qualification:"BSSE"},
        {id:5 ,name:"Sadaf Baloch",father_name:"Muhammad Baloch",phone_no:"03316611986",address:"IQBAL TOWN",reg_no:"L1F16BSCS0136",cnic:331029627727,dob:"23/09/1998",email:"sadaf.balouch@gmail.com",qualification:"BSCS"},
    ],
}

export const Reducer=(state=initialState,action)=>{
    console.log("IN REDUCER ",action);
    if(action.type===ActionTypes.DELETE_STUDENT)
    {
        const students=state.students.filter(student=>{
            return student.id!==action.id
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
            // console.log("UPDATED STUDNET IS ",students);
            return{
                ...state,
                students:students
            }
            
    }
    else if(action.type===ActionTypes.DELETE_TEACHER)
    {
        const teachers=state.teachers.filter(teacher=>{
            return teacher.id!==action.id
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
            // console.log("ACTION TEACHER IS ",action.updatedteacher);

            const teacher=Object.assign({},state.teachers[index]);
            // console.log("FILTERD INDEX TEACHER IS ",teacher);
            action.updatedteacher.reg_no=teacher.reg_no;

            const teachers=Object.assign([],state.teachers);
            teachers[index]=action.updatedteacher;
            return{
                ...state,
                teachers:teachers
            }
            
    }
    else if(action.type===ActionTypes.DELETE_COURSE)
    {
        const courses=state.courses.filter(course=>{
            return course.id!==action.id
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
        let courses=[...state.courses,action.courseinfo]
        return{
            ...state,
            courses:courses
        }
    }
    else if(action.type===ActionTypes.UPDATE_COURSE)
    {
            const index=state.courses.findIndex((course)=>{
                    return course.id===action.updatedcourse.id
            }) 
            const course=Object.assign({},state.courses[index]);
            const courses=Object.assign([],state.courses);
            courses[index]=action.updatedcourse;
            return{
                ...state,
                courses:courses
            }
            
    }
    return state;
}