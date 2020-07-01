import React,{Component} from 'react';
import {Navbar, Container} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';
import './main.css';
import TeacherNavbarComponent from './TeacherNavbarComponent';



function RenderMarksList(AssignmentMarks){
    console.log("ASSIGNMENT MARKS ARE ",AssignmentMarks);
    return(
        <div className='AddList' style={{fontFamily:'"Times New Roman", Times, serif'}}>
            <LocalForm >
                <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                    <Col  md={{offset:1}}  >
                        Student List
                    </Col>
                </Row>
                <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Sr.No.</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Regestration No</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Name</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Total Marks</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Obtained Marks</Col>
                </Row>
                <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row>
                </LocalForm>  
        </div>
    )
}
function RenderAddList(){
    return(
        <div className='AddList' style={{fontFamily:'"Times New Roman", Times, serif'}}>


            <LocalForm >
                <Row style={{color:'white',backgroundColor:'#3C315F',border:'1px solid #707070'}}>
                    <Col  md={{offset:1}}  >
                        Student List
                    </Col>
                </Row>
                <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Sr.No.</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Regestration No</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Name</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Total Marks</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Obtained Marks</Col>
                </Row>
                <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row>
                <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row> <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row> <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row>
                <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row>
                <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row> <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row> <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row> <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row> <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row> <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row> <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row> <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row> <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row> <Row >
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>1</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>L1F16BSCS0151</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>Muhammad Adrees</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}>40</Col>
                    <Col style={{backgroundColor:'white',border:'1px solid #707070'}}><Control.text model=".Final-Terminput" id="Final-Terminput" name="Final-Terminput" type='Final-Terminput' placeholder="Type Here" className="form-control"  style={{border:'1px solid white'}}/></Col>
                </Row>
           </LocalForm>
        </div>
    )
}

class TeacherAddList extends Component{
    constructor(props){
      super(props);
      console.log("PROPS AREEEEE",props);
    }
    handleInfo(values){
        console.log('Current State is: ' + JSON.stringify(values));
          alert('Current State is: ' + JSON.stringify(values));
      }
      
      state={
        listinfo:[
            {id:1,lable:"Assignment"},
            {id:2,lable:"Quiz"},
            {id:3,lable:"Mid-Term"},
            {id:4,lable:"Class Participation"},
            {id:5,lable:"Final-Term"},
            {id:6,lable:"Project"},
            {id:7,lable:"Project Presentation"}
        ],
        AssignmentMarks:[
            {aid:1, id:1 ,rollno:"L1F16BSCS0151",name:"Muhammad Adrees",totalmarks:""},
            {aid:1, id:2 ,rollno:"L1F16BSCS0157",name:"Zain Yazdan",totalmarks:""},
            {aid:1, id:3 ,rollno:"L1F16BSCS0145",name:"Muhammad Hammad Mubeen",totalmarks:""},
            {aid:1, id:4 ,rollno:"L1F16BSCS0136",name:"Muhammad Ghulam Fakhar Ud din",totalmarks:""},
            {aid:1, id:5 ,rollno:"L1F16BSCS0154",name:"Muhammad Arsal",totalmarks:""},
        ],
        students:[
            { id:1 ,rollno:"L1F16BSCS0151",name:"Muhammad Adrees"},
            { id:2 ,rollno:"L1F16BSCS0157",name:"Zain Yazdan"},
            { id:3 ,rollno:"L1F16BSCS0145",name:"Muhammad Hammad Mubeen"},
            { id:4 ,rollno:"L1F16BSCS0136",name:"Muhammad Ghulam Fakhar Ud din"},
            { id:5 ,rollno:"L1F16BSCS0154",name:"Muhammad Arsal"},
        ],
        studentinfo:[
            {lid:1, id:1 ,rollno:"L1F16BSCS0151",name:"Muhammad Adrees",totalmarks:40},
            {lid:1, id:2 ,rollno:"L1F16BSCS0157",name:"Zain Yazdan",totalmarks:40},
            {lid:1, id:3 ,rollno:"L1F16BSCS0145",name:"Muhammad Hammad Mubeen",totalmarks:40},
            {lid:1, id:4 ,rollno:"L1F16BSCS0136",name:"Muhammad Ghulam Fakhar Ud din",totalmarks:40},
            {lid:1, id:5 ,rollno:"L1F16BSCS0154",name:"Muhammad Arsal",totalmarks:40},

            {lid:2, id:1 ,rollno:"L1F16BSCS0151",name:"Muhammad Adrees",totalmarks:40},
            {lid:2, id:2 ,rollno:"L1F16BSCS0157",name:"Zain Yazdan",totalmarks:40},
            {lid:2, id:3 ,rollno:"L1F16BSCS0145",name:"Muhammad Hammad Mubeen",totalmarks:40},
            {lid:2, id:4 ,rollno:"L1F16BSCS0136",name:"Muhammad Ghulam Fakhar Ud din",totalmarks:40},
            {lid:2, id:5 ,rollno:"L1F16BSCS0154",name:"Muhammad Arsal",totalmarks:40},
            
            {lid:3, id:1 ,rollno:"L1F16BSCS0151",name:"Muhammad Adrees",totalmarks:40},
            {lid:3, id:2 ,rollno:"L1F16BSCS0157",name:"Zain Yazdan",totalmarks:40},
            {lid:3, id:3 ,rollno:"L1F16BSCS0145",name:"Muhammad Hammad Mubeen",totalmarks:40},
            {lid:3, id:4 ,rollno:"L1F16BSCS0136",name:"Muhammad Ghulam Fakhar Ud din",totalmarks:40},
            {lid:3, id:5 ,rollno:"L1F16BSCS0154",name:"Muhammad Arsal",totalmarks:40},
            
            {lid:4, id:1 ,rollno:"L1F16BSCS0151",name:"Muhammad Adrees",totalmarks:40},
            {lid:4, id:2 ,rollno:"L1F16BSCS0157",name:"Zain Yazdan",totalmarks:40},
            {lid:4, id:3 ,rollno:"L1F16BSCS0145",name:"Muhammad Hammad Mubeen",totalmarks:40},
            {lid:4, id:4 ,rollno:"L1F16BSCS0136",name:"Muhammad Ghulam Fakhar Ud din",totalmarks:40},
            {lid:4, id:5 ,rollno:"L1F16BSCS0154",name:"Muhammad Arsal",totalmarks:40},
            
            {lid:5, id:1 ,rollno:"L1F16BSCS0151",name:"Muhammad Adrees",totalmarks:40},
            {lid:5, id:2 ,rollno:"L1F16BSCS0157",name:"Zain Yazdan",totalmarks:40},
            {lid:5, id:3 ,rollno:"L1F16BSCS0145",name:"Muhammad Hammad Mubeen",totalmarks:40},
            {lid:5, id:4 ,rollno:"L1F16BSCS0136",name:"Muhammad Ghulam Fakhar Ud din",totalmarks:40},
            {lid:5, id:5 ,rollno:"L1F16BSCS0154",name:"Muhammad Arsal",totalmarks:40},
            
        ]

    }
     render(){
       return(
        <RenderAddList></RenderAddList>
       )
     }
    }
    export default TeacherAddList;