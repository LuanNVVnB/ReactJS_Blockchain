import React, { useEffect } from 'react';
import { Pagination } from 'element-react';
import { useSelector, useDispatch } from 'react-redux';

import * as QuizActions from "../../actions/quiz-management"
const Paging = () => {
    const { maxResults, current } = useSelector(state => state.QuizManagement.paging)
    const { categoryTotal, filter } = useSelector(state => state.QuizManagement)

    // Dispatch
    const dispatch = useDispatch()

    // Effect
    useEffect(() => {
        dispatch(QuizActions.fnCountCategory(filter))
    }, [dispatch])

    // Function
    function handleChangePage(page) {
        dispatch(QuizActions.fnFetchCategory(filter, page, maxResults))
    }

    function handleChangePageSize(size) {
        dispatch(QuizActions.fnFetchCategory(filter, current, size))
    }

    return (
        <div className="last">
            <div className="block">
                <span className="demonstration">&nbsp;</span>
                <Pagination
                    onCurrentChange={handleChangePage}
                    onSizeChange={handleChangePageSize}
                    layout="total, sizes, prev, pager, next, jumper"
                    total={categoryTotal}
                    pageSizes={[5, 10, 20, 50, 100]}
                    pageSize={maxResults}
                    currentPage={current}
                />
            </div>
        </div>
    )
}

export default Paging;