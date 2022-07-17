import React from 'react'
import doubleCheck from './assets/done_all.svg'
import User_add from './assets/User_add.svg'
import Home from './assets/Home.svg'
import Filter from './assets/Filter.svg'
import Search from './assets/Search.svg'
import user9 from './assets/user9.jpg'

import './App.css'

function App() {

    function popup() {
        alert("You are hired!!!");
    }
    return (
        <div className="app main mb-3">
            <aside>
                <header>
                    <div className="profile-component">
                        <img
                            className="profile"
                            src={user9}
                            alt=""
                        />
                        <h4 className="texttt">Diana</h4>
                    </div>
                </header>

                <div className="contact-boxes">
                    <div className="contact-box">
                        <div className="profile-component">
                            <img
                                className="profile"
                                src="https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
                                alt="" />
                        </div>

                        <div className="right-section">
                            <div className="contact-box-header">
                                <h3 className="profile-title">Sarah</h3>
                                <span className="time-mark">11:45pm</span>

                            </div>
                            <div className="last-msg">
                                <img src={doubleCheck} alt="" className="icon-small" />
                                <span className="text">Hey</span>
                                <span className='dot'>.</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="contact-boxes">
                    <div className="contact-box">
                        <div className="profile-component">
                            <img
                                className="profile"
                                src="https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
                                alt=""
                            />
                        </div>
                        <div className="right-section">
                            <div className="contact-box-header">
                                <h3 className="profile-title">Michael</h3>
                                <span className="time-mark">11:45 pm</span>

                            </div>
                            <div className="last-msg">
                                <img src={doubleCheck} alt="" className="icon-small" />

                                <span className="text">Ok Bye</span>
                                <span className='pending'>2</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-boxes">
                    <div className="contact-box">
                        <div className="profile-component">
                            <img
                                className="profile"
                                src="https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
                                alt=""
                            />
                        </div>
                        <div className="right-section">
                            <div className="contact-box-header">
                                <h3 className="profile-title">James</h3>
                                <span className="time-mark">12:00PM</span>
                            </div>
                            <div className="last-msg">
                                <img src={doubleCheck} alt="" className="icon-small" />
                                <span className="text">Get those to me immediately</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-boxes">
                    <div className="contact-box">
                        <div className="profile-component">
                            <img
                                className="profile"
                                src="https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
                                alt=""
                            />
                        </div>
                        <div className="right-section">
                            <div className="contact-box-header">
                                <h3 className="profile-title">jessica</h3>
                                <span className="time-mark">01:00AM</span>
                            </div>
                            <div className="last-msg">
                                <img src={doubleCheck} alt="" className="icon-small" />
                                <span className="text">Bye</span>
                                <span className='dot'>.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-boxes">
                    <div className="contact-box">
                        <div className="profile-component">
                            <img
                                className="profile"
                                src="https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
                                alt=""
                            />
                        </div>
                        <div className="right-section">
                            <div className="contact-box-header">
                                <h3 className="profile-title">John</h3>
                                <span className="time-mark">03:00AM</span>
                            </div>
                            <div className="last-msg">
                                <img src={doubleCheck} alt="" className="icon-small" />
                                <span className="text">Hi Sam</span>
                                <span className='pending'>2</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-boxes">
                    <div className="contact-box">
                        <div className="profile-component">
                            <img
                                className="profile"
                                src="https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
                                alt=""
                            />
                        </div>
                        <div className="right-section">
                            <div className="contact-box-header">
                                <h3 className="profile-title">Friend</h3>
                                <span className="time-mark">05:00AM</span>
                            </div>
                            <div className="last-msg">
                                <img src={doubleCheck} alt="" className="icon-small" />
                                <span className="text">Let's go to laddakh</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-boxes">
                    <div className="contact-box">
                        <div className="profile-component">
                            <img
                                className="profile"
                                src="https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
                                alt=""
                            />
                        </div>
                        <div className="right-section">
                            <div className="contact-box-header">
                                <h3 className="profile-title">Trip</h3>
                                <span className="time-mark">01:00PM</span>
                            </div>
                            <div className="last-msg">
                                <img src={doubleCheck} alt="" className="icon-small" />
                                <span className="text">I want to go on a trip</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-boxes">
                    <div className="contact-box">
                        <div className="profile-component">
                            <img
                                className="profile"
                                src="https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
                                alt=""
                            />
                        </div>
                        <div className="right-section">
                            <div className="contact-box-header">
                                <h3 className="profile-title">Manager</h3>
                                <span className="time-mark">09:00AM</span>
                            </div>
                            <div>
                                <img
                                    className="useradd"
                                    src={User_add}
                                    alt=""
                                    onClick={popup}
                                />

                            </div>
                            <div className="last-msg">
                                <img src={doubleCheck} alt="" className="icon-small" />
                                <span className="text">Very Good Amit, I am Impressed</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="icon-bar">
                    <a onClick={popup} href="/"><img className="home" src={Home} alt=''></img></a>
                    <a onClick={popup} href="/"><img className="filter" src={Filter} alt=''></img></a>
                    <a onClick={popup} href="/"><img className="searchicon" src={Search} alt=''></img></a>
                </div>
            </aside>
        </div>
    )
}

export default App
