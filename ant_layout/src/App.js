import React, { useEffect, useState } from 'react';
import './App.css'
// import Nav from './Nav';
// import Nav from './Nav';
// import Nav from './Nav';

import { UilEstate } from '@iconscout/react-unicons'
import { UilBars } from '@iconscout/react-unicons'
import { UilFilesLandscapes } from '@iconscout/react-unicons'
import { UilChart } from '@iconscout/react-unicons'
import { UilThumbsUp } from '@iconscout/react-unicons'
import { UilComments } from '@iconscout/react-unicons'
import { UilShare } from '@iconscout/react-unicons'
import { UilSignout } from '@iconscout/react-unicons'
import { UilMoon } from '@iconscout/react-unicons'
import { UilSearchAlt } from '@iconscout/react-unicons'
import { UilTachometerFastAlt } from '@iconscout/react-unicons'
import { UilClockThree } from '@iconscout/react-unicons'
import { UilUserCircle } from '@iconscout/react-unicons'
import { UilReact } from '@iconscout/react-unicons'
// import UimBox from '@iconscout/react-unicons-monochrome/icons/uim-box'

function App(){
// const App = () => {
    const[sbclass,setSbclass]=useState('');
    const[themeclass,setThemeclass]=useState('');

function stog(){

    if(sbclass!="close"){setSbclass("close")}
    else{setSbclass('')};
    
}
function mtog(){

    if(themeclass!="dark"){setThemeclass("dark")}
    else{setThemeclass()};
    
}

  return (
    <body class={themeclass}>
      <nav class={sbclass} >
        <div class="logo-name">
            <div class="logo-image">
                <i><UilReact/></i>
                {/* <!--<img src="images/logo.png" alt="">--> */}
            </div>

            <span class="logo_name">CodingLab</span> 
        </div>

        <div class="menu-items">
            <ul class="nav-links">
                <li><a href="#">
                    <i class="uil uil-estate"><UilEstate/></i>
                    <span class="link-name">Dahsboard</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-files-landscapes"><UilFilesLandscapes/></i>
                    <span class="link-name">Content</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-chart"><UilChart/></i>
                    <span class="link-name">Analytics</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-thumbs-up"><UilThumbsUp/></i>
                    <span class="link-name">Like</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-comments"><UilComments/></i>
                    <span class="link-name">Comment</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-share"><UilShare/></i>
                    <span class="link-name">Share</span>
                </a></li>
            </ul>
            
            <ul class="logout-mode">
                <li><a href="#">
                    <i class="uil uil-signout"><UilSignout/></i>
                    <span class="link-name">Logout</span>
                </a></li>

                <li class="mode">
                    <a href="#">
                        <i class="uil uil-moon"><UilMoon/></i>
                    <span class="link-name">Dark Mode</span>
                </a>

                <div class="mode-toggle">
                  <span class="switch" onClick={mtog}></span>
                </div>
            </li>
            </ul>
        </div>
    </nav>
    <section class="dashboard">
        <div class="top">
            <i class="uil uil-bars sidebar-toggle" onClick={stog}><UilBars /></i>

            <div class="search-box">
                <i class="uil uil-search"><UilSearchAlt/></i>
                <input type="text" placeholder="Search here..."/>
            </div>
            <UilUserCircle/>
            {/* <!--<img src="images/profile.jpg" alt="">--> */}
        </div>

        <div class="dash-content">
            <div class="overview">
                <div class="title">
                    <i class="uil uil-tachometer-fast-alt"><UilTachometerFastAlt/></i>
                    <span class="text">Dashboard</span>
                </div>

                <div class="boxes">
                    <div class="box box1">
                        <i class="uil uil-thumbs-up"><UilThumbsUp/></i>
                        <span class="text">Total Likes</span>
                        <span class="number">50,120</span>
                    </div>
                    <div class="box box2">
                        <i class="uil uil-comments"><UilComments/></i>
                        <span class="text">Comments</span>
                        <span class="number">20,120</span>
                    </div>
                    <div class="box box3">
                        <i class="uil uil-share"><UilShare/></i>
                        <span class="text">Total Share</span>
                        <span class="number">10,120</span>
                    </div>
                </div>
            </div>

            <div class="activity">
                <div class="title">
                    <i class="uil uil-clock-three"><UilClockThree/></i>
                    <span class="text">Recent Activity</span>
                </div>

                <div class="activity-data">
                    <div class="data names">
                        <span class="data-title">Name</span>
                        <span class="data-list">Prem Shahi</span>
                        <span class="data-list">Deepa Chand</span>
                        <span class="data-list">Manisha Chand</span>
                        <span class="data-list">Pratima Shahi</span>
                        <span class="data-list">Man Shahi</span>
                        <span class="data-list">Ganesh Chand</span>
                        <span class="data-list">Bikash Chand</span>
                    </div>
                    <div class="data email">
                        <span class="data-title">Email</span>
                        <span class="data-list">premshahi@gmail.com</span>
                        <span class="data-list">deepachand@gmail.com</span>
                        <span class="data-list">prakashhai@gmail.com</span>
                        <span class="data-list">manishachand@gmail.com</span>
                        <span class="data-list">pratimashhai@gmail.com</span>
                        <span class="data-list">manshahi@gmail.com</span>
                        <span class="data-list">ganeshchand@gmail.com</span>
                    </div>
                    <div class="data joined">
                        <span class="data-title">Joined</span>
                        <span class="data-list">2022-02-12</span>
                        <span class="data-list">2022-02-12</span>
                        <span class="data-list">2022-02-13</span>
                        <span class="data-list">2022-02-13</span>
                        <span class="data-list">2022-02-14</span>
                        <span class="data-list">2022-02-14</span>
                        <span class="data-list">2022-02-15</span>
                    </div>
                    <div class="data type">
                        <span class="data-title">Type</span>
                        <span class="data-list">New</span>
                        <span class="data-list">Member</span>
                        <span class="data-list">Member</span>
                        <span class="data-list">New</span>
                        <span class="data-list">Member</span>
                        <span class="data-list">New</span>
                        <span class="data-list">Member</span>
                    </div>
                    <div class="data status">
                        <span class="data-title">Status</span>
                        <span class="data-list">Liked</span>
                        <span class="data-list">Liked</span>
                        <span class="data-list">Liked</span>
                        <span class="data-list">Liked</span>
                        <span class="data-list">Liked</span>
                        <span class="data-list">Liked</span>
                        <span class="data-list">Liked</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </body>
  );
};
export default App;