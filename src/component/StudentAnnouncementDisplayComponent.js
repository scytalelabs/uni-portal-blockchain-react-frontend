import React from 'react'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { Container } from 'reactstrap';

const Notification =({notifications})=>{
    console.log("NOTIFICATION FUNCTON",notifications)
    // return(<p>Announcements</p>)
    
    const notificationlist=notifications.length?(notifications.map(notification=>{
        return(
            <div key={notification.time}>
                <span>{notification.time}</span><br/>
                <span><em><strong> &nbsp;&nbsp;{notification.date}</strong></em></span><br/>
                <span>{notification.announcement}</span>
                <hr/>
            </div>

        )
    }
    )):( <Container> <p style={{paddingBottom:'220px',marginBottom:'150px' }}><h4>No Announcements In this Course</h4></p></Container>)
return(
    <div className='Announcements'style={{fontFamily:'"Times New Roman", Times, serif'}}>
        <div className='body'>
        <h3>Announcements</h3>
            <SimpleBar style={{ maxHeight: 400 }}>
                {notificationlist}
            </SimpleBar>

        </div>
    </div>
    )
}

export default Notification;