import React from 'react'

const Answer = ({ quiz, index }) => {
    if(!quiz) return null

    function checkCorrect() {
        let correct = false
        quiz.answers.forEach(i => (i.correct && i.choose) ? correct = true : null)
        return correct
    }

    return (
        <div className={`answer-card rounded border-${checkCorrect() ? 'success' : 'danger'} bg-white p-3 mt-2`} style={{ borderLeft: '5px solid' }}>
            <h6 className='py-2 border-bottom text-primary'>{index + 1}. {quiz.question}</h6>
            {quiz.answers.map((i, index) =>
                <p
                    key={index}
                    className={`position-relative pl-3 ${(i.correct && i.choose) ? 'correct' : ''} ${i.choose ? 'choose' : ''}`}
                    style={{ fontSize: '0.8rem' }}
                >
                    {i.content}
                </p>
            )}
        </div>
    )
}

export default Answer