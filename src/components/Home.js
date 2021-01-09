import React from 'react';
import '../css/App.css';
import pfp from '../assets/pfp.png';

function Home() {

    const iconStyle = {
        'padding-left': '25px'
    };

    const topStyle = {
        'margin-top': '0.5em'
    };

    return(
        <div className="homepage">
            <div className="home-textbox">
                <img src={pfp} alt="pfp" className="profile-pic"></img>
                <div className="home--textbox-text">
                    <h1>Hey there!</h1>
                    <h2 style={topStyle}>My name is Paula Batoon.</h2>
                    <h3>I'm currently an Infrastructure Engineer with USAA.</h3>
                    <h3 className="facts-header">Some quick facts:</h3>
                    <ul className="facts-list">
                        <li>I work in IT operations by day. By night, I like to develop software around topics that interest me. </li>
                        <li>I mostly work on virtual machine technologies such as Citrix and VMware and seek to automate processes wherever possible. </li>
                        <li>I did my undergrad at Marist College and I'm currently enrolled in the OMSCS graduate program at Georgia Tech.</li>
                        <li>When I'm not behind a computer screen, you can catch me practicing Muay Thai, crocheting, playing DnD, or building mechanical keyboards. </li>
                    </ul>
                    <h2 className="link-up" style={topStyle}>Let's link up soon!</h2>
                </div>
            </div>
            <div className="social-textbox">
                <h2 className="social-heading">Catch me on social media! </h2>
                <a href="https://www.linkedin.com/in/paula-batoon-5499b9b2/"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/pbatoon"><i class="fab fa-github" style={iconStyle}></i></a>
                <a href="https://dev.to/pbatoon"><i class="fab fa-dev" style={iconStyle}></i></a>
            </div>
        </div>

    )
}

export default Home