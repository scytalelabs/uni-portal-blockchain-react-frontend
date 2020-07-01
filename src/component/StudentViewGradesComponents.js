import React from 'react'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { Row, Col } from 'reactstrap';

function RenderGradebookMarks({id,markslist}){
    return(
        markslist.map(marks=>{
            if(id===marks.type_name)
            {
            return(
                <div key={marks.id}>
                    <Row style={{border:'1px solid #707070',marginRight:'15px'}}>
                        <Col  md={{size:6}} style={{border:'1px solid #707070'}}>{marks.date} {marks.time}</Col>
                        <Col style={{border:'1px solid #707070',textAlign:'center'}}>{marks.total_marks}</Col>
                        <Col style={{border:'1px solid #707070',textAlign:'center'}}>{marks.obtained_marks}</Col>
                    </Row>
                </div>
                );
            }
            else
            {
                return (
                    null
                );
            }
        }
    ))
}


const Gradebookdata =({gradebook,outline})=>{
    // console.log("HELOOOOOOOOOOOOOOOOOOOOOO G",gradebook);
    // console.log("HELOOOOOOOOOOOOOOOOOOOOOO G2",outline);
    const gradebooklist=outline.length?(outline.map(outlineitem=>{
        return(
            <div key={outlineitem.Type}>
            <Row >
                <Col md={{offset:0}}>
                <h5><span>{outlineitem.Type}</span> &nbsp;</h5></Col>
                <Col md={{offset:0}}>
                <div style={{borderRadius:'30px 30px 30px 30px',height:'25px',width:'50px',backgroundColor:'#CEDAF1',border:'1px solid #707070' ,paddingLeft:'10px' ,paddingRight:'10px'}}>{outlineitem.weightage}%</div>
                </Col>
                <Col style={{marginRight:'15px'}}>
                <div style={{textAlign:'right'}}><i class=" fa fa-chevron-down"></i> </div>
                </Col>
            </Row>
            <Row style={{border:'1px solid #707070',textAlign:'center',backgroundColor:'#CEDAF1',marginRight:'15px'}}>
                <Col  md={{size:6}} style={{border:'1px solid #707070'}}  >DATE</Col>
                <Col style={{border:'1px solid #707070'}}>TOATAL MARKS</Col>
                <Col style={{border:'1px solid #707070'}}>OBTAINED</Col>
            </Row>
        <RenderGradebookMarks id={outlineitem.Type} markslist={gradebook} ></RenderGradebookMarks>
          <br></br>
        </div>
        );
    }
    )):( null)




return(
    <div className='GradeBook'style={{fontFamily:'"Times New Roman", Times, serif'}}>
        <div className='body'>
            <h3>Grade Book</h3>
            <SimpleBar style={{ maxHeight: 492, paddingLeft:'20px' }}>
                {gradebooklist}
            </SimpleBar>
        </div>
    </div>
    );
}

export default Gradebookdata;
