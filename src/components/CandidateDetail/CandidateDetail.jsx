import React, { useState} from 'react';
// import "./CandidateDetail.css";
import Narbar from '../quiz-navbar-cl/nav-bar';
import {Link} from'react-router-dom'


function CandidateDetail(props) {
  const [candidate, setCandidate] = useState();
  console.log("-este", candidate)
   console.log("-estessss",setCandidate)
    console.log("props.candidateDetail",props.candidateDetail)
    return (
        <>
        <div className="full-screen">
        <Narbar  />
        <div style={{ width: '80%', margin: 'auto', marginTop: '20px' }}>
          <div className="row">
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
                    <div className="card p-4">
                      <div className=" image d-flex flex-column justify-content-center align-items-center">
                        <button className="btn-img btn-secondary">
                          <img src={props.candidateDetail?.FileImg} height="100" width="100" />
                        </button>
                        <span className="name mt-3">{props.candidateDetail?.fullName}</span>
                        <span className="idd">{props.candidateDetail?.email}</span>
                        <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                          <span className="idd1">0x00{props.candidateDetail?.id}</span>
                          <span><i className="fa fa-copy"></i></span>
                        </div> <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                          <span className="number">{props.candidateDetail?.old} <span className="follow">Old</span></span>
                        </div> <div className="text mt-3">
                          <span>Eleanor Pena is a creator of minimalistic x bold graphics and digital artwork.
                            Artist/ Creative Director by Day #NFT minting@ with FND night.
                          </span>
                        </div>
                        <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                          <span><i className="fa fa-twitter"></i></span> <span><i className="fa fa-facebook-f">
                          </i></span> <span><i className="fa fa-instagram"></i>
                          </span> <span><i className="fa fa-linkedin"></i></span>
                        </div> <div className=" px-2 rounded mt-4 date ">
                          <span className="join">Joined May,2021</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="card">
                <div className="card-body">
                  <div className="">
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
                </div>
              </div>
              <div className="card mt-4">


              </div>

            </div>
            
          </div>

        </div>

      </div>
    </>
    )
}

export default CandidateDetail