import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import './Homemainbar.css'
import Questions from './Questions'
import QuestionList from './QuestionList'

const HomeMainbar = () => {
  var questionList = [{
    id: 1,
    votes: 3,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "It ment to be",
    questionTags: ["java", "node js", "react js", "mongodb"],
    userPosted: "mano",
    time: "jan 1"

  },
  {
    id: 2,
    votes: 0,
    noOfAnswers: 0,
    questionTitle: "What is a function?",
    questionBody: "It ment to be",
    questionTags: ["javascript", "react js", "python"],
    userPosted: "mano",
    time: "jan 1"

  },
  {
    id: 3,
    votes: 1,
    noOfAnswers: 0,
    questionTitle: "What is a function?",
    questionBody: "It ment to be",
    questionTags: ["java", "R", "Python"],
    userPosted: "mano",
    time: "jan 1"

  },
  ]
  const loaction = useLocation();
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          loaction.pathname === '/Home' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <Link to="/AskQuestion" className='ask-btn'>Ask Question</Link>
      </div>
      <div className=''>
        {
          questionList === null ?
            <h1>Loading...</h1> :
            <>
            <p>{questionList.length} question</p>
              <QuestionList questionList={questionList} />
            </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar