import React from 'react'
import { Link } from 'react-router-dom'

const Questions = ({ question }) => {

    const Tags = question.questionTags
    return (
        <div className='display-ans-container'>
            <div className='display-votes-ans'>
                <p>{question.votes}</p>
                <p>Votes</p>
            </div>
            <div className='display-votes-ans'>
                <p>{question.noOfAnswers}</p>
                <p>answers</p>
            </div>
            <div className='display-question-details'>
                <Link to={`/Question/${question.id}`}>{question.questionTitle}</Link>
                <div className='display-tags-time'>
                    <div className='display-tags'>
                        {/* {
                            question.questionTag.map((tag) => (
                               <p key={tag}>{tag}</p>
                            ))
                        } */}
                        {
                            Tags.map((tag) => (
                                <p key={tag}>{tag}</p>
                            ))
                        }
                    </div>
                    <p className='display-time'>
                        asked {question.time} {question.userPosted}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Questions