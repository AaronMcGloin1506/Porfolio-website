import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            
            <Hero title={props.title}/>   

            <Content>
               
                <p>Hello, my name is Aaron. I am Computer Science information and technology graduate from National University of Ireland, Galway, and am now in training to be a front-end developer using React</p>
                <p>During the covid pandemic, I decided to to futher my education in the IT sector after taking a few years off and enrolled in the Web Developing with React course by <a href="https://www.codecademy.com/learn/paths/web-development" target="_blank" rel="noopener noreferrer">Codecademy</a>. This course begins with basic HTML, CSS and Javascript and runs deeper into builing Front-end applications with React, Back-end developement with Node.js, and then SQL and database developement  </p>
                <p>When I'm not learning web development you can find me either surfing or playing drums</p>
                  
            </Content> 
        </div>
    );
}

export default AboutPage;