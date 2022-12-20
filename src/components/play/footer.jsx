import React from 'react'

const Footer = ({ correct, show }) => {
    return (
        <div
            className={`d-flex justify-content-center align-items-center py-2 text-white bg-${correct ? 'success' : 'danger'} ${show ? 'visible' : 'invisible'}`}
            style={{
                fontSize: '1.5rem',
                position: 'fixed',
                bottom: '0',
                left: '0',
                width: '100%'
            }}
        >
            {correct ? 'CORRECT' : 'INCORRECT'}
        </div>
    )
}

export default Footer