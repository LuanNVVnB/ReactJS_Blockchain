
import Tab  from './Tab';
import Narbar from '../quiz-navbar-cl/nav-bar'
import React, { useEffect, useState } from 'react'
import * as BallotActions from '../../actions/ballot-manager/ballotActions';
import { useDispatch, useSelector } from 'react-redux';
import * as userProfileActions from '../../actions/user-profile/userProfileActions';
import FooterClient from '../quiz-footer-cl/footer';

function Index(props) {
    const [ballotArr, setBallotArr] = useState();
    const dispatch = useDispatch();
    const ballot = useSelector(state => state.BallotManagerReducer.ballotVote);
    const userInfo = useSelector(state => state.UserProfile.userInfo);
    console.log("userInfo", props.userInfo)
    useEffect(() => {
        // dispatch(userProfileActions.fnGetUserInfo())
        console.log("userInfo ##", props.userInfo   )
            dispatch(BallotActions.fnPostAllBallotVote({ status: 'ALL', userId: props.userInfo?.id }))
            setBallotArr(ballot);
            console.log('ballot ', ballotArr);

    }, [dispatch]);

  
  return (
      <div className="full-screen">
          <Narbar userInfo={userInfo} />
          <Tab ballot ={ballot && ballot}/>
          <FooterClient />
          </div>
  )
}

export default Index