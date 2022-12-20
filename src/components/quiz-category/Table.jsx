import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as QuizActions from '../../actions/quiz-management'
import RModal from './Modal';
import { Trans } from 'react-i18next';

const Table = () => {
    // State
    const quiz = useSelector((state) => state.QuizManagement)
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState()

    // Dispatch
    const dispatch = useDispatch()

    // Effect
    useEffect(() => {
        dispatch(QuizActions.fnFetchCategory('', 1, 5))
    }, [dispatch])

    useEffect(() => {
        setShow(false)
    }, [quiz.category])

    // Function
    function handleUpdate(item) {
        setShow(true)
        setFormData(item)
    }

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>No</th>
                    <th className='w-25'><Trans i18nKey={'quiz-category.name'} /> </th>
                    <th className='w-35'><Trans i18nKey={'class.description'} /></th>
                    <th>Icon</th>
                    <th><Trans i18nKey={'quiz-category.image-icon'} /></th>
                    <th><Trans i18nKey={'class.status'} /></th>
                    <th><Trans i18nKey={'class.operation'} /></th>
                </tr>
            </thead>
            <tbody>
                {quiz.category.map((item, index) =>
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>
                            {item.icon && <i className={item.icon}></i>}{" "}{item.icon}
                        </td>
                        <td>
                            <img src={item.imageIcon ? item.imageIcon : 'https://quizizz.com/media/resource/gs/quizizz-media/quizzes/ab2f3f30-dc6f-4927-b59d-de24d95a1004'} alt="icon" className="imageIcon" style={{ width: "34px", height: "34px" }} />
                        </td>
                        <td>{item.status ? 'ON' : 'OFF'}</td>
                        <td>
                            <button className='btn btn-primary mx-1' onClick={() => handleUpdate(item)}>
                                <i className="fa fa-pencil" aria-hidden="true"></i>
                            </button>
                            <button className='btn btn-danger mx-1' onClick={() => dispatch(QuizActions.fnDeleteCategory(item.id))}>
                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                            </button>
                        </td>
                    </tr>)}
            </tbody>
            {show && <RModal show={show} onHide={() => setShow(false)} type='edit' data={formData} />}
        </table>
    )
}

export default Table