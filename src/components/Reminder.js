import React from 'react';
import './Reminder.css'

const Reminder = () => {
  return (
    <div class="reminder">
    <div class="imgrem">
        {/* <img src="{% static 'Home/images/menstrual-calendar.jpg' %}" alt=""> */}

    </div>
    <div class="contentrem">
        <h2>Track Your dates</h2>
        <p>Don't forget your date, Register yourself and get mails on your upcoming periods. </p>
        <a href=""><button class="custom-btn btn-2">Explore</button></a>

    </div>

</div>
  )
}

export default Reminder;