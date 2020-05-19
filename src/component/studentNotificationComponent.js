import React from 'react'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const Notification =({notifications})=>{

    const notificationlist=notifications.length?(notifications.map(notification=>{
        return(
            <div key={notification.id}>
                <span>{notification.date}</span><br/>
                <span><em><strong> &nbsp;&nbsp;{notification.title}</strong></em></span><br/>
                <span>{notification.content}</span>
                <hr/>
            </div>

        )

    }
    )):( <p>No Announcements</p>)
    // 12-04-2019
    //         <em><strong> &nbsp;&nbsp;Makeup Class</strong></em><br/>
    //         AssalamoAlaikum, People, you have a Makeup class on Saturday 13th April
    //         2018 at 09:40 am in 003

return(
    <div className='notification'style={{fontFamily:'"Times New Roman", Times, serif'}}>
        <div className='body'>
        <h3>Announcements</h3>
            <SimpleBar style={{ maxHeight: 150 }}>
                {notificationlist}
            </SimpleBar>

        </div>
    </div>
    )
}

export default Notification;