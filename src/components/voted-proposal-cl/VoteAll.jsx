import React, { useEffect, useState } from 'react'
import * as BallotActions from '../../actions/ballot-manager/ballotActions';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import VoteMultipleAction from './VoteMultipleAction';
import VoteSingleAction from './VoteSingleAction';
import VoteAbstainAction from './VoteAbstainAction';
import ModalRank from './ModalRank';

function VoteAll(props) {
  const [openVote, setOpenVote] = useState(false);
  const [ballot, setBallot] = useState();
  const [openRank, setOpenRank] = useState(false);
  const [ballotRank, setBallotRank] = useState();

  const hanldeBallot = (ballot) => {
    setOpenVote(true);
    setBallot(ballot);

  }
  console.log("openVote ", openVote)
  // const dispatch = useDispatch();
  // const ballot = useSelector(state => state.BallotManagerReducer.ballotVote);

  // useEffect(() => {

  //   dispatch(BallotActions.fnGetAllBallotVote('ALL'));
  //   setBallotArr(ballot);
  //   console.log('ballot ', ballotArr);

  // }, [dispatch]);
  console.log("ballAll", props.ballotAll);

  return (


    <>
      {
        !openVote ?
          <div className=" mt-4 text-center">
            <h4 style={{ color: 'blue' }} className='mt-4 '>Know more about</h4>
            <h2 style={{ fontWeight: 'bold' }} className='mt-4 '>Our mission & vision</h2>
            <h3 className='mt-4 '>Together we the people achieve more than any single
              person could ever do alone.</h3>
            <Row className="">
              {props.ballotAll?.length > 0 ? props.ballotAll.map((ballot, index) => {
                return (
                  <Col xs lg="4" className='mt-4 ' key={index}>
                    <Card bg={ballot.outcomepublics[0].active ? 'secondary' : ""} >
                      <Card.Img variant="top" src={ballot.background ? ballot.background : "https://wp.xpeedstudio.com/electionify/wp-content/uploads/2019/12/mission-and-vission-1.png"} />
                      <Card.Body>
                        <Card.Title><span style={{ color: 'black' }}>{ballot.title}</span></Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.  {ballot.status == 1 ? <span style={{ color: 'green', fontWeight: 900 }}>Public</span> : <span style={{ color: 'red', fontWeight: 900 }}>Private</span>}
                        </Card.Text>
                        {ballot.outcomepublics[0].active ?
                          <Button variant="dark" onClick={() => { setOpenRank(true); setBallotRank(ballot) }}><i class="fa fa-lock" aria-hidden="true"></i>{" "}Voted just</Button>
                          :
                          <Button variant="dark" onClick={() => { hanldeBallot(ballot) }}>Go somewhere</Button>
                        }

                      </Card.Body>
                    </Card>
                  </Col>
                )

              }) : <p>Find not ballots </p>}
            </Row>
          </div> : openVote &&
            ballot?.typeBallot === 1 ?
            < VoteSingleAction ballot={ballot} /> :
            ballot?.typeBallot === 2 ?
              <VoteMultipleAction ballot={ballot} /> :
              <VoteAbstainAction ballot={ballot} />
      }
      <ModalRank
        show={openRank}
        onHide={() => setOpenRank(false)}
        ballot={ballotRank}
      />

    </>
  )
}

export default VoteAll