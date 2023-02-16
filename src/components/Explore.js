import React from 'react';
import './Explore.css'


const Explore = () => {
  return (
    <div class="Blogmore">
    <h1>Explore Blogs</h1>
    <div class="blogmain">
        <div class="blogimg">
            {/* <img src="{% static 'Home/images/18.png' %}" alt=""> */}

        </div>
        <div class="blogcontent">

            <p>Blogs are the ways to communicate and share your thoughts. Explore how others dealt with their periods, getting stain stories, myths about periods and much more, share your experience too.</p>
            {/* <a href="{% url 'App_Blog:blog_list' %}"><button class="custom-btn btn-2">Explore</button></a> */}

        </div>
        <div class="blogimg">
            {/* <img src="{% static 'Home/images/18.png' %}" alt=""/> */}

        </div>
    </div>
    </div>
  )
}

export default Explore;