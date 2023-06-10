import React from 'react'
import { FaCommentAlt } from 'react-icons/fa'
import { FaPen } from 'react-icons/fa'
import { BsStackOverflow } from 'react-icons/bs'
import './RightSidebar.css'

const Widget = () => {
    return (
        <div className='widget'>
            <h4>The Overflow Blog</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <div>
                        <FaPen className='side-nav-icon' />
                    </div>
                    <p>Observability is key to future of software (and your DevOps career)</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <div>
                        <FaPen className='side-nav-icon' />
                    </div>
                    <p>Padcast 374: How valueable is your screen name? </p>
                </div>
            </div>
            <h4>Featured on Meta</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <div>
                        <FaCommentAlt className='side-nav-icon' />
                    </div>
                    <p>Review queue workflows - Final release...</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <div>
                        <FaCommentAlt className='side-nav-icon' />
                    </div>
                    <p>Please welcome Valued Associates : #958 -v2Blast #959 - SpencerG</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <div>
                        <BsStackOverflow className='side-nav-icon' />
                    </div>
                    <p>Outdated Answers: accepted answer is now unpinned on Stack Overflow</p>
                </div>
            </div>
            <h4>Hot Meta Posts</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    {/* <FaCommentAlt width='18' /> */}
                    <p>38  Why was this spam flag declined, yet the question marked as spam?</p>
                </div>
                <div className='right-sidebar-div-2'>
                    {/* <FaCommentAlt width='18' /> */}
                    <p>20  What is the best course of action when a user has  high enough rep to...</p>
                </div>
                <div className='right-sidebar-div-2'>
                    {/* <BsStackOverflow width={18}/> */}
                    <p> 14 is a link to the "How to ask"  help page a useful comment? </p>
                </div>
            </div>


        </div>
    )
}

export default Widget