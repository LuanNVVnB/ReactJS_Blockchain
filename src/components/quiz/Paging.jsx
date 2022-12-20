import React, { useEffect } from 'react';
import { Pagination } from 'element-react';
import { useSelector, useDispatch } from 'react-redux';

import * as QuizActions from "../../actions/quiz-management"
const Paging = () => {
    const { maxResults, current } = useSelector(state => state.QuizManagement.paging)
    const { quizTotal, filter } = useSelector(state => state.QuizManagement)

    // Dispatch
    const dispatch = useDispatch()

    // Effect
    useEffect(() => {
        dispatch(QuizActions.fnCountQuiz(filter))
    }, [dispatch])

    // Function
    function handleChangePage(page) {
        dispatch(QuizActions.fnFetchQuiz(filter, page, maxResults))
    }

    function handleChangePageSize(size) {
        dispatch(QuizActions.fnFetchQuiz(filter, current, size))
    }

    return (
        <div className="last">
            <div className="block">
                <span className="demonstration">&nbsp;</span>
                <Pagination
                    onCurrentChange={handleChangePage}
                    onSizeChange={handleChangePageSize}
                    layout="total, sizes, prev, pager, next, jumper"
                    total={quizTotal}
                    pageSizes={[5, 10, 20, 50, 100]}
                    pageSize={maxResults}
                    currentPage={current}
                />
            </div>
        </div>
    )
}

export default Paging;