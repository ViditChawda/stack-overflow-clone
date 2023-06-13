import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import './Homemainbar.css'
import Questions from './Questions'
import QuestionList from './QuestionList'

const HomeMainbar = () => {
  const navigate = useNavigate()
  const user = 1;

  var questionList = [{
    _id: 1,
    upVotes: 3,
    downVotes: 2,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "It ment to be",
    questionTags: ["java", "node js", "react js", "mongodb"],
    userPosted: "manoj",
    userId: 1,
    time: "jan 1",
    answer: [{
      answerBody: "Answer",
      userAnswered: 'kumar',
      answeredOn: "jan 2",
      userId: 2,
    }]

  },
  {
    _id: 2,
    upVotes: 3,
    downVotes: 2,
    noOfAnswers: 0,
    questionTitle: "What is a function?",
    questionBody: "It ment to be",
    questionTags: ["javascript", "react js", "python"],
    userPosted: "manoj",
    time: "jan 1",
    userId: 2,
    answer: [{
      answerBody: "Answer",
      userAnswered: 'kumar',
      answeredOn: "jan 2",
      userId: 2,
    }]
  },
  {
    _id: 3,
    upVotes: 3,
    downVotes: 2,
    noOfAnswers: 0,
    questionTitle: "What is a function?",
    questionBody: "It ment to be",
    questionTags: ["java", "R", "Python"],
    userPosted: "manoj",
    time: "jan 1",
    userId: 3,
    answer: [{
      answerBody: "Answer",
      userAnswered: 'kumar',
      answeredOn: "jan 2",
      userId: 2,
    }]

  },
  ]
  const checkAuth = () => {
    if (user === null) {
      alert("Login or Signup to Ask Questions")
      navigate('/Auth')
    } else {
      navigate('/AskQuestion')
    }
  }
  const loaction = useLocation();
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          loaction.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
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