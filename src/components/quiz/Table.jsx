import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as QuizActions from "../../actions/quiz-management"
import RModal from "./Modal";

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
        dispatch(QuizActions.fnFetchQuiz("", 1, 5))
    }, [dispatch])

    useEffect(() => {
        setShow(false)
    }, [quiz.quiz])

    // Function
    function handleUpdate(item) {
        setShow(true)
        let data = { ...item }
        data.Categories = data.Categories.map(i => i.id)
        setFormData(data)
    }

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>No</th>
                    <th className="w-25"><Trans i18nKey={'quiz.name'} /></th>
                    <th className="w-35"><Trans i18nKey={'quiz.category'} /></th>
                    <th className="text-left"><Trans i18nKey={'quiz.time'} /></th>
                    <th className="text-right"><Trans i18nKey={'quiz.question'} /></th>
                    <th className="text-center"><Trans i18nKey={'quiz.image'} /></th>
                    <th><Trans i18nKey={'quiz.visibility'} /></th>
                    <th><Trans i18nKey={'class.operation'} /></th>
                </tr>
            </thead>
            <tbody>
                {quiz.quiz.map((item, index) =>
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>
                            <div className="d-flex flex-wrap">
                                {item.Categories.map((item, index) =>
                                    <span key={index} className="badge badge-pill badge-primary m-1 p-2">
                                        {item.name}
                                    </span>
                                )}
                            </div>
                        </td>
                        <td className="text-left">
                            {item.time} min
                        </td>
                        <td className="text-right">
                            {item.Questions.length}
                        </td>
                        <td className="text-center">
                            <img src={item.imageUrl ? item.imageUrl : 'https://quizizz.com/media/resource/gs/quizizz-media/quizzes/ab2f3f30-dc6f-4927-b59d-de24d95a1004'} alt="Image" className="imageIcon" style={{ width: "34px", height: "34px" }} />
                        </td>
                        <td>{item.visibility ? "Public" : "Private"}</td>
                        <td>
                            <a href={`#/quiz?id=${item.id}`}>
                                <button className="btn btn-info mx-1">
                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                </button>
                            </a>
                            <button className="btn btn-primary mx-1" onClick={() => handleUpdate(item)}>
                                <i className="fa fa-pencil" aria-hidden="true"></i>
                            </button>
                            <button className="btn btn-danger mx-1" onClick={() => dispatch(QuizActions.fnDeleteQuiz(item.id))}>
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