import React from 'react'
import "./Intruction.css";
import RegisterSreen from "../../assets/theme/img/Screenshot.png";
import LoginScreen from "../../assets/theme/img/ScreenshotLogin.png";
import MailScreen from "../../assets/theme/img/ScreenshotMail.png";
import BallotScreen from "../../assets/theme/img/ScreenshotBallot.png";
function Intruction() {
    return (
        <section >
    <div class="container" style={{maxWidth:'1495px'}} >
        
        <div class="row" >
            <div class="history-wrapper" style={{marginTop : "150px"}} >
                <div class="timeline-box one-of-two">
                    <img class="mb-1-6 rounded" src="https://metamask.zendesk.com/hc/article_attachments/4406122968091/mceclip0.png" alt="..."/>
                    <div class="content" style={{padding:0}}>
                        <h3 class="h4 mb-2 mb-md-3">Getting started with MetaMask</h3>
                        <p class="mb-0">MetaMask is a web browser extension and mobile app that allows you to manage your Ethereum private keys.</p>
                        <p class="mb-0">You need a Metamask account</p><a href="https://metamask.io/">Get Started Metamask</a>
                    </div>
                    <div class="year">Step 1</div>
                </div>
                <div class="timeline-box one-of-two">
                    <img class="mb-1-6 rounded" src={RegisterSreen} alt="..."/>
                    <div class="content" style={{padding:0}}>
                        <h3 class="h4 mb-2 mb-md-3">Register new number </h3>
                        <p class="mb-0">you need to register member with metamask wallet check, the account condition is not registered with the system</p>
                    </div>
                    <div class="year">Step 2</div>
                </div>
                <div class="timeline-box one-of-two">
                    <img class="mb-1-6 rounded" src={LoginScreen} alt="..."/>
                    <div class="content" style={{padding:0}}>
                        <h3 class="h4 mb-2 mb-md-3">Login system with metamask account</h3>
                        <p class="mb-0">Your account must be registered on the system before logging into the system. your account is checked with metamask wallet</p>
                    </div>
                    <div class="year">Step 3</div>
                </div>
                <div class="timeline-box one-of-two">
                    <img class="mb-1-6 rounded" src={MailScreen} alt="..."/>
                    <div class="content" style={{padding:0}}>
                        <h3 class="h4 mb-2 mb-md-3">Receive mail from admin </h3>
                        <p class="mb-0">Receive mail from admin when an election is released,here have your account information and with the title of the election.</p>
                    </div>
                    <div class="year">Step 4</div>
                </div>
                 <div class="timeline-box one-of-two">
                    <img class="mb-1-6 rounded" src={BallotScreen} alt="..."/>
                    <div class="content" style={{padding:0}}>
                        <h3 class="h4 mb-2 mb-md-3">Vote for the election</h3>
                        <p class="mb-0">The list of elections for which you are eligible to vote will appear, enter and leave for the candidate of your choice</p>
                    </div>
                    <div class="year">Step 5</div>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}

export default Intruction