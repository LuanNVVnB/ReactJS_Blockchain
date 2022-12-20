import React from 'react'

const QuizCard = ({ quiz, setQuestion, quizQues, question }) => {
    const questionAllow = quiz?.Questions.filter(i => !quizQues.map(j => j.id).includes(i.id))

    function handleClick() {
        setQuestion([])
        setTimeout(() => {
            setQuestion(quiz?.Questions)
        }, 500)
    }

    return (
        <div className={`btn btn-outline-primary p-2 d-flex my-2 ${quiz?.Questions === question && 'bg-primary text-white'}`} onClick={handleClick}>
            <div className="container-fluid">
                <div className="row w-100">
                    <div className="col-4">
                        <img className="w-100" height={120} src={quiz?.imageUrl ? quiz?.imageUrl : 'https://quizizz.com/media/resource/gs/quizizz-media/quizzes/ab2f3f30-dc6f-4927-b59d-de24d95a1004'} alt="quizImg" />
                    </div>
                    <div className="col-8 d-flex flex-column justify-content-between" style={{ fontSize: '0.9rem' }}>
                        <span className="text-left font-weight-bold" style={{ fontSize: '1.1rem' }}>{quiz?.name}</span>
                        <span className="text-left text-truncate">{quiz?.Categories.map(i => i.name).join(' | ')}</span>
                        <span className="text-left">{questionAllow.length} / {quiz?.Questions.length} Question</span>
                        <span className="text-left">{quiz?.createdBy}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizCard