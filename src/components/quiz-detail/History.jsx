import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import moment from 'moment'

const History = ({onClick, result, currentResult}) => {
  return (
    <div className={`btn btn-${result == currentResult ? 'primary' : 'dark'} bg-${result == currentResult ? 'primary' : null} w-100 d-flex flex-column text-left my-1`} onClick={onClick} style={{fontSize: '0.8rem', background: '#000'}}>
        <p className='text-white font-bold my-0'>{result.score} point</p>
        <ProgressBar variant="success" now={result.score} />
        <p className='text-white my-0'>{moment(result.createdAt).format('LLL').toString()}</p>
    </div>
  )
}

export default History