import React from 'react';
import './Chat.css';


const Chat = () => {
  return (
    <div class="Talkabout">
    <h1>Lets Chat</h1>
    <div class="mainchat">
        <div class="rightchat">
            {/* <img src="{% static 'Home/images/35.png' %}" alt=""> */}
            
    
        </div>

        <div class="leftchat">
           
            <p>
             Lets us speak to each other and discuss outspokenly whatever we feel like. Lets Chat and make everything familier and 
             nothing private that people or many girls itself are shy to speak about.
            </p>
            {/* <a href="https://letsuschat.herokuapp.com/"><button class="custom-btn btn-2">Lets Chat</button></a> */}
    
        </div>
        <div class="rightchat">
            {/* <img src="{% static 'Home/images/35.png' %}" alt=""> */}
            
    
        </div>
       

    </div>
    
    
   

</div>
  )
}

export default Chat;