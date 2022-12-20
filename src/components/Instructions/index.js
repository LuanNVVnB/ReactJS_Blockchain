import React from 'react'
import Intruction from './Intruction'
import Narbar from '../quiz-navbar-cl/nav-bar'
import FooterClient from '../quiz-footer-cl/footer'
function Instruction() {
  return (
      <div className="full-screen" style={{ width: '100vw' }}>

          <Narbar/>
    <Intruction/>
          <FooterClient />
    </div>
  )
}

export default Instruction