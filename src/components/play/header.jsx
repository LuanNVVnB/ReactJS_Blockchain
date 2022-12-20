import React, { useEffect, useState, useRef } from 'react'
import { Badge, Button, ProgressBar } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import * as http from '../../utils/httpProvider'
import * as CONFIG from '../../config/configUrl'

const Header = ({ id, current, total, setEnd, quiz, result }) => {
    const [time, setTime] = useState()
    const [now, setNow] = useState()
    const remain = useRef()
    const history = useHistory()
    
    useEffect(() => {
        setNow(parseFloat(parseFloat(result?.time)) * 60 * 10)

        return () => {
            if(result && remain.current){
                http.putData(CONFIG.API_BASE_URL + `/rest/result/${result?.id}`, {
                    time: remain.current.toString(),
                })
            }
        }
    }, [result])

    useEffect(() => {
        setTime(parseFloat(parseFloat(quiz?.time) * 60 * 10))
    }, [quiz])

    useEffect(() => {
        if (now > 0) {
            setTimeout(() => {
                let a = now - 1
                setNow(Math.floor(a))
                remain.current = a/60/10
            }, 100)
        }
        if(now == 0) setEnd(true)
    }, [now])
    
    useEffect(() => {
        setNow(null)
    }, [])

    return (
        <div className='p-3'>
            <ProgressBar variant='primary' now={(now / time) * 100} />
            <div className='d-flex align-items-center justify-content-between mt-3'>
                <div>
                    <Button variant='secondary'><i className="fa fa-pause"></i></Button>
                    <Badge className='p-2 mx-2' variant="dark">{current + 1}/{total}</Badge>
                </div>
                <Button onClick={() => history.goBack()} variant='secondary'><i className="fa fa-times"></i></Button>
            </div>
        </div>
    )
}

export default Header