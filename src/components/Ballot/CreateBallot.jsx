import { Button } from 'element-react'
import React, { useState } from 'react'
import CompleteBallot from './CompleteBallot'
import FormCreateBallot from './FormCreateBallot'


const instructionBallot = () => {
  return (<>
    <div className="row">
      <div className="col-6">
        <div className="text-info mb-2 " style={{ fontSize: "16px" }}>Adding your Poll Question</div>
        <div className="mb-2">Click into the input box labeled "Enter your poll". As soon as you start entering your poll question you'll see a live preview of how your poll will look like.</div>
        <div className="text-info mb-2 " style={{ fontSize: "16px" }}>Adding a picture or video to your Poll</div>
        <div className="mb-2">You'll notice an "Add Picture" option on the bottom of the input box labeled "Enter your poll". This will enable you to add a picture to your poll that will appear below your Poll question. Currently, we also support a youtube link, if you add a youtube link the video will be embedded below the poll question.</div>
        <div className="text-info mb-2 " style={{ fontSize: "16px" }}>Adding your Poll Choices</div>
        <div className="mb-2">Once you finish adding your poll question, simply click on the next line labeled "Enter your choice" and start typing in the choices you like to have for your poll. You can add more choices by clicking on + Add Choice, or if you fill in all three choices a new choice line will appear automatically!</div>
        <div className="mb-2">Currently you may have up to 150 choices!</div>
        <div className="text-info mb-2 " style={{ fontSize: "16px" }}>Allowing more than once choice selection</div>
        <div className="mb-2">By default the poll only allows each participant to select one choice, If you like the option allow participants to select more than one choice you can simply check the checkbox labeled "Allow selecting more than one choice"</div>
      </div>
      <div className="col-6">
        <img src="https://static.polltab.com/images/poll-form.png" alt="" />
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-12">


        <div className="text-info mb-2 " style={{ fontSize: "16px" }}>Voting security</div>
        <div className="mb-2">The voting security bar determines how each vote is cast. You can slide the security bar to the following settings</div>
        <div className="mb-2 p-2">
          <ul>
            <li>
              <strong>Unlimited</strong>
              <ul>
                <li>This allows unlimited voting from any participant</li>
              </ul>
            </li>
            <li>
              <strong>Cookie</strong>
              <ul>
                <li>This allows votes per browser as its cookie based.</li>
              </ul>
            </li>
            <li>
              <strong>IP Specific (default)</strong>
              <ul>
                <li>Restricts votes per IP address (given by your internet service provider)</li>
              </ul></li><li><strong>Social Authentication (Google, Facebook, Reddit, Twitch)</strong>
              <ul><li>Requires the user to login to their specific accounts before they can cast a vote.
                <br />To learn more about voting security, how each vote is stored, and how you can improve your poll security please read our article on polltab
                <a href="/poll-voting-security">
                  <u>voting security</u>
                </a>
                .</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>

  )

}

const CreateStepOne = (formDataBallot) => {
  const [step, setStep] = useState(1);
 
  const handleNext = () => {
    setStep(prev => prev + 1)
  }

  const handleBack = () => {
    setStep(prev => prev - 1)
  }

  const handleSubmit = () => {
    console.log("formdata",formDataBallot)
  }
  return (<>
    <div className="row mb-4">
      <div className="col-md-12 grid-margin">
        <div className="card-body">
          <div className="row">
            <div className="col-md-2 grid-margin stretch-card ">
              <div className="card">
                <div className="card p-2">
                  <div className="text-info">STEP 1</div>
                  {step > 1 ?
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "4px" }}>
                      <p className="text-dark" style={{ fontWeight: 'bold' }}> Doc cac dieu khoan</p>
                      <img className="" src="https://imgs.search.brave.com/M4Wb_phXhFcOuaIsqwy9DgB1jyV1v3vIiwp1tHWeAc8/rs:fit:840:880:1/g:ce/aHR0cHM6Ly93d3cu/cG5nZmluZC5jb20v/cG5ncy9tLzAtMjI2/X2ltYWdlLWNoZWNr/bWFyay1ncmVlbi1j/aGVjay1tYXJrLWNp/cmNsZS1oZC1wbmcu/cG5n" style={{ width: "16px", height: "16px" }} />
                    </div>

                    :
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "4px" }}>
                      <p className="text-gray"> Doc cac dieu khoan</p>
                      <img className="" src="https://imgs.search.brave.com/-1cHjBTOcsscHVmYTAdGvpkFeGr-LDkVo_J6dVOB74Y/rs:fit:910:863:1/g:ce/aHR0cHM6Ly93MC5w/bmd3YXZlLmNvbS9w/bmcvOTI5LzQ1NC9j/b21wdXRlci1pY29u/cy1jaGVjay1tYXJr/LXJlZC1kZXNrdG9w/LXZvZGFmb25lLW1h/bHRhLXBuZy1jbGlw/LWFydC5wbmc" style={{ width: "16px", height: "16px" }}></img>
                    </div>}

                </div>
                <div className="card p-2">
                  <div className="text-info">STEP 2</div>
                  {step > 2 ?
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "4px" }}>
                      <p className="text-dark" style={{ fontWeight: 'bold' }}> Doc cac dieu khoan</p>
                      <img className="" src="https://imgs.search.brave.com/M4Wb_phXhFcOuaIsqwy9DgB1jyV1v3vIiwp1tHWeAc8/rs:fit:840:880:1/g:ce/aHR0cHM6Ly93d3cu/cG5nZmluZC5jb20v/cG5ncy9tLzAtMjI2/X2ltYWdlLWNoZWNr/bWFyay1ncmVlbi1j/aGVjay1tYXJrLWNp/cmNsZS1oZC1wbmcu/cG5n" style={{ width: "16px", height: "16px" }} />
                    </div>

                    :
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "4px" }}>
                      <p className="text-gray"> Doc cac dieu khoan</p>
                      <img className="" src="https://imgs.search.brave.com/-1cHjBTOcsscHVmYTAdGvpkFeGr-LDkVo_J6dVOB74Y/rs:fit:910:863:1/g:ce/aHR0cHM6Ly93MC5w/bmd3YXZlLmNvbS9w/bmcvOTI5LzQ1NC9j/b21wdXRlci1pY29u/cy1jaGVjay1tYXJr/LXJlZC1kZXNrdG9w/LXZvZGFmb25lLW1h/bHRhLXBuZy1jbGlw/LWFydC5wbmc" style={{ width: "16px", height: "16px" }}></img>
                    </div>}

                </div>
                <div className="card p-2">
                  <div className="text-info">STEP 3</div>
                  {step > 3 ?
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "4px" }}>
                      <p className="text-dark" style={{ fontWeight: 'bold' }}> Doc cac dieu khoan</p>
                      <img className="" src="https://imgs.search.brave.com/M4Wb_phXhFcOuaIsqwy9DgB1jyV1v3vIiwp1tHWeAc8/rs:fit:840:880:1/g:ce/aHR0cHM6Ly93d3cu/cG5nZmluZC5jb20v/cG5ncy9tLzAtMjI2/X2ltYWdlLWNoZWNr/bWFyay1ncmVlbi1j/aGVjay1tYXJrLWNp/cmNsZS1oZC1wbmcu/cG5n" style={{ width: "16px", height: "16px" }} />
                    </div>

                    :
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "4px" }}>
                      <p className="text-gray"> Doc cac dieu khoan</p>
                      <img className="" src="https://imgs.search.brave.com/-1cHjBTOcsscHVmYTAdGvpkFeGr-LDkVo_J6dVOB74Y/rs:fit:910:863:1/g:ce/aHR0cHM6Ly93MC5w/bmd3YXZlLmNvbS9w/bmcvOTI5LzQ1NC9j/b21wdXRlci1pY29u/cy1jaGVjay1tYXJr/LXJlZC1kZXNrdG9w/LXZvZGFmb25lLW1h/bHRhLXBuZy1jbGlw/LWFydC5wbmc" style={{ width: "16px", height: "16px" }}></img>
                    </div>}

                </div>
               
              </div>
            </div>
            <div className="col-md-8 grid-margin card">
              <div className="row border-bottom p-4 bg-primary">
                <div className=" col-12 text-center text-info"> Title Voting</div>
                <div className="col-12  text-center" style={{ fontSize: "24px" }}>{formDataBallot.name}</div>
                <div className="ml-4 col-12  text-center text-info" style={{ fontSize: "16px" }}> Create a real-time poll free! Use the form below to create your poll</div>
              </div>
              {(() => {
                switch (step) {
                  case 1:
                    return instructionBallot()
                  case 2:
                    return <FormCreateBallot formDataBallot={formDataBallot} />
                  case 3:
                    return <CompleteBallot formDataBallot={formDataBallot} />
                  default:
                    instructionBallot()
                }
              })()}
              <div className="row">
                {step > 1 && <Button variant="secondary" className="btn btn-secondary ml-2 mb-2" onClick={handleBack}>Back</Button>}
             {step == 4 ? <Button variant="secondary" className="btn btn-primary ml-auto mt-2" onClick={handleSubmit}>Submit</Button>:
            <Button variant="primary" className="btn btn-primary ml-auto mr-2 mb-2" onClick={handleNext}>Next</Button>}
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>

  </>)
}
function CreateBallot({ formDataBallot }) {
  
  return (
    <div>{CreateStepOne(formDataBallot)}</div>
  )
}

export default CreateBallot