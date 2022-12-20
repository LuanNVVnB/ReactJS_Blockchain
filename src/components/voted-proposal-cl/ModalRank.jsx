
import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./CandidateVoteSimpleModal.css";
import "./ModalRank.css"

function ModalRank
    (props) {
    console.log("props", props)
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <section class="wrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col text-center mb-5">
                                <h1 class="display-4">Rank With Background {props.ballot?.title}</h1>
                                <p class="lead"> your elections will be fair and anonymous thanks to blockchain technology and undelying cryptoalgorithms. </p>
                            </div>
                        </div>
                        <div class="row">
                            {props.ballot?.candidates.length > 0 && props.ballot?.candidates?.map((candidates, index) => {
                                return (
                                    <div class="col-sm-12 col-md-6 col-lg-4 mb-4 p-4" key={index}>
                                        <div class="cards text-white cards-has-bg click-col" >
                                            <img class="cards-img d-none" src={"https://source.unsplash.com/600x900/?tree,nature"} alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?" />
                                            <div class="cards-img-overlay d-flex flex-column">
                                                <div class="cards-body">
                                                    <small class="cards-meta mb-2">Thought Leadership</small>
                                                    <h4 class="cards-title mt-0 "><a class="text-white" >After the vote ends, you can instantly see the results and upload a report with statistics.</a></h4>
                                                    <small><i class="far fa-clock"></i> Let everyone vote</small>
                                                </div>
                                                <div class="cards-footers">
                                                    <div class="media">
                                                        <img class="mr-3 rounded-circle" src={candidates?.FileImg} alt="Generic placeholder image" style={{ maxWidth: '50px' }} />
                                                        <div class="media-body">
                                                            <h6 class="my-0 text-white d-block">{candidates.fullName}</h6>
                                                            <small>Director of UI/UX</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <h1 style={{color: 'black'}}> {candidates.totalVote}</h1>
                                            </div>
                                        </div>

                                    </div>)
                            })}

                        </div>
                    </div>
                </section>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>)
}

export default ModalRank
