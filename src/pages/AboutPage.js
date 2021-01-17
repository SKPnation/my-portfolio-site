import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hello, my name is Ayomide. I'm a full stack mobile app developer with experience in Java, React Native, React JS, Node JS, MySQL, SQLite, Firebase, and Adobe XD.</p>

                <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>

                <p>I'm constantly learning new things. currently those things include gaining more experience with Swift, React, Express JS, and Node JS</p>

                <p>My latest project, Thesel, is a therapeutic tele-counselling platform for everyone going through various life challenges and seeking solutions.
                 You can check it out <a href="https://play.google.com/store/apps/details?id=com.skiplab.theselproject" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. 
                It is built with Angular, MongoDB, Express JS, and Node JS. However, I will be rebuilding it using React in the coming months</p>

                <p>When I'm not learning something new chances are I'm creating some YouTube videos. You can find those <a href="http://www.youtube.com/c/GarrettLove1" target="_blank" rel="noopener noreferrer">here</a></p>
            </Content>
        </div>
    );

}

export default AboutPage;