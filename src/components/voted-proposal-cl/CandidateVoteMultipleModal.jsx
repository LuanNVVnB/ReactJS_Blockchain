import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { loadContracts } from "../../utils/LoadContracts";
import { Notification } from "element-react";
import * as OutcomeActions from '../../actions/outcome/outComeActions';
import { useDispatch } from 'react-redux';
import { ethers } from 'ethers';

function CandidateVoteMultipleModal(props) {
    console.log("props", props)
    const dispatch = useDispatch();
    const hanldeVoteCandidate = async (candidatevote) => {

        const candidateArr = candidatevote.map(item => { return ethers.utils.formatBytes32String(`${item.id}`) })
        console.log("candidate--", candidatevote.map(item => { return item.etherId }));
        const transaction = await loadContracts('Ballots', props.ballot.ballotAddress);
        //  transaction.voters('0xe9fdf21eaa44b77568cb9fdf21d8ad67b7566a6c',{
        //      from: props.accountmm,
        //      gasLimit: 5000000,
        //  }).then(function (data) {
        //     Notification({
        //         title: 'Success',
        //         message: "Connect success",
        //         type: 'success'
        //     });
        //     console.log("data",data);
        // })

        await transaction.voteArray(candidateArr, {
            from: props.accountmm,
            gasLimit: 5000000,
        }).then(function (data) {
            console.log("data",data);
            if (props.status === 0) dispatch(OutcomeActions.fnUserVoted({ id: props.userinfoid, etherId: candidatevote.map(item => item.etherId) }))
            else { dispatch(OutcomeActions.fnUserVotedPublic({ userId: props.userinfoid, ballotId: props.ballot.id, etherId: candidatevote.map(item => item.etherId), time: new Date() })) }


        }).catch((error) => {
            console.log("error", error);
            Notification({
                title: 'Errors',
                message: "Ballot not deployed or execution reverted",
                type: 'error'
            });
        })

        // setTimeout(() => {
        //     props.onHide();
        // }, 3000)


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
                    {props.candidate?.map(item => {
                        return <p>{item.fullName} {" "}</p>
                    })}

                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div class="row">
                    {props.candidate?.map(item => {
                        return (
                            <div class="container text-center col-md-4">
                                <div class="card d-flex mx-auto">
                                    <div class="card-image">
                                        <img class="img-fluid d-flex mx-auto" src={item.FileImg} />
                                    </div>
                                    <div class="card-text">
                                        <div class="card-title">{item.fullName}</div>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                        Aenean massa. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                        Maecenas nec odio et ante tincidunt tempus
                                        Duis leo. Donec sodales sagittis magna
                                    </div>
                                    <div class="footer">
                                        <span id="name">{item.email}<br /></span>
                                        <span id="position">Candidate of <a href="#">Google.com</a></span>
                                    </div>
                                </div>
                            </div>)


                    })}
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button onClick={() => { hanldeVoteCandidate(props.candidate) }}>Submit</Button>
            </Modal.Footer>
        </Modal>)
}

export default CandidateVoteMultipleModal 