import React from 'react'
import moment from 'moment'

const Card = ({ quizDetail }) => {
    return (
        <div className="card">
            <img className="card-img-top w-100 h-100" src={quizDetail?.imageUrl ? quizDetail?.imageUrl : 'https://quizizz.com/media/resource/gs/quizizz-media/quizzes/ab2f3f30-dc6f-4927-b59d-de24d95a1004'} alt="Card" />
            <div className="card-body">
                <h5 className="card-title text-primary" style={{ fontSize: '1.5rem' }}>{quizDetail?.name}</h5>
                <p className="text-dark">{quizDetail?.Categories?.map(i => i.name).join(' | ')}</p>
                <p className="text-dark">{quizDetail?.time} Minutes</p>
                <p className="text-dark">{quizDetail?.Questions ? quizDetail?.Questions.length : quizDetail?.questions} Questions</p>
                <p className="text-dark">{quizDetail?.createdBy}</p>
            </div>
        </div>
    )
}

export default Card