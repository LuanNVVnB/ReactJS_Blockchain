import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./CandidateVoteSimpleModal.css";
import { loadContracts } from "../../utils/LoadContracts";
import { Notification } from "element-react";
import * as OutcomeActions from '../../actions/outcome/outComeActions';
import { useDispatch } from 'react-redux';
import { ethers } from 'ethers'

function CandidateVoteSimpleModal(props) {
    console.log("props", props)
    const dispatch = useDispatch();
    const hanldeVoteCandidate = async (candidatevote) => {
        const transaction = await loadContracts('Ballots', props.ballot.ballotAddress);
        console.log('ether--',ethers.utils.formatBytes32String(`${candidatevote.id}`))
        transaction.vote(ethers.utils.formatBytes32String(`${candidatevote.id}`), {
            from: props.accountmm,
            gasLimit: 5000000,
        }).then(function () {
            Notification({
                title: 'Success',
                message: "Connect success",
                type: 'success'
            });
            if (props.ballot.status === 0) dispatch(OutcomeActions.fnUserVoted({ id: props.userinfoid, etherId: [candidatevote.etherId] }))
            else { dispatch(OutcomeActions.fnUserVotedPublic({ userId: props.userinfoid, ballotId: props.ballot.id, etherId: [candidatevote.etherId], time: new Date() })) }
        }).catch((error) => {
            console.log("error", error);
            Notification({
                title: 'Errors',
                message: "Ballot not deployed or execution reverted",
                type: 'error'
            });
        })
        setTimeout(() => {
            props.onHide();
        }, 3000)
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <p>{props.candidatevote?.fullName}</p>

                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div class="container text-center">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card d-flex mx-auto">
                                <div class="card-image">
                                    <img class="img-fluid d-flex mx-auto" src={props.candidatevote?.FileImg} />
                                </div>
                                <div class="card-text">
                                    <div class="card-title">{props.candidatevote?.fullName}</div>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                    Aenean massa. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                    Maecenas nec odio et ante tincidunt tempus
                                    Duis leo. Donec sodales sagittis magna
                                </div>
                                <div class="footer">
                                    <span id="name">{props.candidatevote?.email}<br /></span>
                                    <span id="position">Candidate of <a href="#">Google.com</a></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button onClick={() => { hanldeVoteCandidate(props.candidatevote) }}>Submit</Button>
            </Modal.Footer>
        </Modal>)
}

export default CandidateVoteSimpleModal 