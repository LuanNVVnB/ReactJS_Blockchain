import React, { useEffect, useState } from 'react'
import * as BallotActions from '../../actions/ballot-manager/ballotActions';
import { useDispatch, useSelector } from 'react-redux';
import "./Tab.css"
import VoteAll from './VoteAll'
// import VotePrivate from './VotePrivate';
// import VotePublic from './VotePublic';

function Tab(props) {

//   const dispatch = useDispatch();
//   const ballot = useSelector(state => state.BallotManagerReducer.ballotVote);

 

//   useEffect(() => {

//     dispatch(BallotActions.fnGetAllBallotVote('ALL'));
//     setBallotArr(ballot);
//     console.log('ballot ', ballotArr);

//   }, [dispatch]);
	
  return (
    <section id="tabs">
	<div className="container">
		<div className="row">
			<div className="col-xs-12 ">
				<nav>
					<div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
						<a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">ALL</a>
						<a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">PUBLIC</a>
						<a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">PRIVATE</a>
						<a className="nav-item nav-link" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-controls="nav-about" aria-selected="false">QUIZZ</a>
					</div>
				</nav>
				<div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
					<div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
						<VoteAll ballotAll = {props.ballot}/>
					</div>
					<div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
						<VoteAll ballotAll = {props.ballot.filter(item => item.status === 1)}/>
					</div>
					<div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
						<VoteAll ballotAll = {props.ballot.filter(item => item.status === 0)}/>
					</div>
					<div className="tab-pane fade" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
						Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
					</div>
				</div>
			
			</div>
		</div>
	</div>
</section>
  )
}

export default Tab