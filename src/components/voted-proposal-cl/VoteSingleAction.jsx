
import React, { useState }from 'react'
import { useSelector } from 'react-redux';

import './VotedProposal.css';
// import * as BallotActions from '../../actions/ballot-manager/ballotActions';
// import * as OutcomeActions from '../../actions/outcome/outComeActions';
import defaultAvatar from "../../assets/theme/img/default-avatar.png";
import { Link } from 'react-router-dom';
import { Button, Notification } from "element-react";
import { GetAccountMetaMask } from '../../utils/checkConnectMM';
import CandidateVoteSimpleModal from './CandidateVoteSimpleModal';

function VoteSingleAction(props) {
  const [modalShow, setModalShow] = useState(false);
  const [candidateVote, setCandidateVote] = useState();
  const [accountMM, setAccountMM] = useState();

  const userInfo = useSelector(state => state.UserProfile.userInfo);
  
  const hanldeClickVote = async(item) => {
      if (item.length == 0 || item.length !== props.ballot?.number) {
        Notification({
          title: 'Errors',
          message: "Please select a candidate",
          type: 'error'
        });
      } else if (await GetAccountMetaMask(userInfo) != null) {
        setAccountMM(await GetAccountMetaMask(userInfo));
        setCandidateVote(item)
        setModalShow(true)
      } else {
        Notification({
          title: 'Errors',
          message: "select a candidate Error",
          type: 'error'
        });
      }

    }

  return (
    <>
      <div style={{ width: '120%', margin: 'auto', marginTop: '20px' }}>
        <div className="row">
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

              <section className="mt-4 mb-4">

                <div className="row d-flex justify-content-center">
                  <div className="col-md-10 col-xl-8 text-center">
                    <h3 className="mb-4">Testimonials</h3>
                    <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
                      numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
                      quisquam eum porro a pariatur veniam.
                    </p>
                  </div>
                </div>
                
                <div className="row text-center">
                  {props.ballot?.candidates?.map((item, index) => {
                    return (
                      <div className={`col-md-${12/props.ballot?.candidates.length} mb-5 mb-md-0 text-center`} key={index}>
                        <div className="d-flex justify-content-center mb-4">
                          <img src={item.FileImg}
                            className="rounded-circle shadow-1-strong" width="150" height="100" />
                        </div>
                        <h5 className="mb-3">{item.fullName}</h5>
                        <h5 className="mb-3">{item.email}</h5>
                        <div className="text-primary mb-3 text-center" dangerouslySetInnerHTML={{ __html: `${item.certification}` }}></div>
                        <p className="px-xl-3">
                          <i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur
                          adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
                          tenetur.
                        </p>
                        <ul className="list-unstyled d-flex justify-content-center mb-0">
                          <li>
                            <i className="fas fa-star fa-sm text-warning"></i>
                          </li>
                          <li>
                            <i className="fas fa-star fa-sm text-warning"></i>
                          </li>
                          <li>
                            <i className="fas fa-star fa-sm text-warning"></i>
                          </li>
                          <li>
                            <i className="fas fa-star fa-sm text-warning"></i>
                          </li>
                          <li>
                            <i className="fas fa-star-half-alt fa-sm text-warning"></i>
                          </li>
                        </ul>
                        <Button variant="primary" onClick={() => { hanldeClickVote(item) }}>Primary</Button>

                      </div>

                    )
                  })
                  }

                </div>


                <CandidateVoteSimpleModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  candidatevote={candidateVote}
                  accountmm = {accountMM && accountMM}
                  status = {props.ballot?.status}
                  userinfoid = {userInfo.id}
                  ballot = {props.ballot}
                />


              </section>


            </div>

          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-body">
                <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
                  <div className="card p-4">
                    <div className=" image d-flex flex-column justify-content-center align-items-center">
                      <button className="btn-img btn-secondary">
                        <img src={userInfo.photo === undefined ? defaultAvatar : userInfo.photo} height="100" width="100" />
                      </button>
                      <span className="name mt-3">{userInfo.name}</span>
                      <span className="idd">{userInfo.email}</span>
                      <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                        <span className="idd1">{userInfo.code_meta_mask == '0' ? '0x0...' : `${userInfo?.code_meta_mask?.slice(0, 5)}...${userInfo?.code_meta_mask?.slice(userInfo.code_meta_mask.length - 4)}`}</span>
                        <span><i className="fa fa-copy"></i></span>
                      </div> <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                        <span className="number">1069 <span className="follow">Followers</span></span>
                      </div> <div className=" d-flex mt-2">
                        <Link to='/profile' className="btn1 btn-dark text-center pt-3">Edit Profile</Link>
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
        </div>

      </div>
    </>

  )
}

export default VoteSingleAction