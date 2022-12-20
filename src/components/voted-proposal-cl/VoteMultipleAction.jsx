import moment from 'moment'
import React from 'react'
import  BlogMutiple from './BlogMutiple'
import { useSelector } from 'react-redux';

function VoteMultipleAction(props) {
    const userInfo = useSelector(state => state.UserProfile.userInfo);
    console.log("ballot", props.ballot)
    return (
        <div>
            <section className=" text-center text-white row">
                <h1 className="col-12">{props.ballot.title}</h1>
                <p className="font-italic mb-1 col-12">Using Bootstrap 4 custom checkboxes, build an elegant food form.</p>
                <p className="font-italic col-12"> Snippet By {moment(props.ballot.dateStart).format('MM/DD/YYYY')} - {moment(props.ballot.dateEnd).format('MM/DD/YYYY')}</p>

            </section>


            <section>
               < BlogMutiple candidate={props.ballot?.candidates} number={props.ballot?.numberBallot} ballot = {props.ballot}  userinfoid = {userInfo.id}/>
            </section></div>
    )
}

export default VoteMultipleAction