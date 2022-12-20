import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import * as UserActions from '../../actions/user-manager/userManagerActions';
// import { Trans } from 'react-i18next';
// import { Notification } from "element-react";
// import * as BallotActions from '../../actions/ballot-manager/ballotActions';
// import { loadContracts } from "../../utils/LoadContracts";
// import { doConnectMetaMask } from '../../utils/checkConnectMM';
import ModalRegiserVote from './ModalRegiserVote';

export default React.memo( function  ListUserMetamask(props) {
const [modalShow, setModalShow] = React.useState(false);
// const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(BallotActions.fnGetAllBallotVote(0));
//   }, []);

//     const ballotVote = useSelector(state => state.BallotManagerReducer.ballotVote);
//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(UserActions.fnGetAllUserMetaMask());
//         dispatch(BallotActions.fnGetAllBallotVote());
//     }, dispatch);

//     const userMetaMask = useSelector(state => state.UserManager.userMetamask);
//     const ballotVote = useSelector(state => state.BallotManagerReducer.ballotVote);

//     const handleRegister = async (user) => {
//         console.log("user", user);
//         if (user.activeVoted === 1) {
//             Notification({
//                 title: 'Error',
//                 message: 'user voted ',
//                 type: 'error'
//             })
//         } else {
//             const account = await doConnectMetaMask();
//             console.log(account);
//             if (account) {
//                 if (ballotVote) {
//                     const transaction = await loadContracts('Ballots');
//                     await transaction.registerVote(user.codeMetaMask, {
//                         from: account[0],

//                     }).then(function () {
//                         Notification({
//                             title: 'Success',
//                             message: "Connect success",
//                             type: 'success'
//                         });
//                          dispatch(UserActions.fnPostRigisterUserVoted(user));

//                     }).catch((error) => {
//                         console.log("error", error);
//                         Notification({
//                             title: 'Errors',
//                             message: "Connect Meta Mask amout",
//                             type: 'error'
//                         });
//                     })
//                 }
//             } else {
//                 alert("you can't decentralization")
//             }
           
//         }

//     }


    return (
        //handleRegister({ id: item.id, codeMetaMask: item.code_meta_mask, activeVoted: item.activeVoted })
        // <table className="table table-hover">
        //     <thead>
        //         <tr>
        //             <th>No</th>
        //             <th>status</th>
        //             <th><Trans i18nKey={'UserList.thdead-username'} /></th>
        //             <th>Metamask</th>
        //             <th>Operations</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {userMetaMask.map(function (item, index) {
        //             return (
        //                 <tr key={index}>
        //                     <td><span>{index + 1}</span></td>
        //                     <td>{item?.activeVoted == '1' ? <div className='' style={{ 'width': '16px', 'height': '16px', 'borderRadius': '50%', 'backgroundColor': 'green' }}></div> : 
        //                     item?.activeVoted == '0' ? <div className='' style={{ 'width': '16px', 'height': '16px', 'borderRadius': '50%', 'backgroundColor': 'orange' }}></div>:
        //                     <div className='' style={{ 'width': '16px', 'height': '16px', 'borderRadius': '50%', 'backgroundColor': 'red' }}></div>}</td>

        //                     <td><span>{item.username}</span></td>
        //                     <td><span style={{ color: 'green' }}>{item.code_meta_mask?.slice(0, 6)}...${item.code_meta_mask?.slice(item.code_meta_mask.length - 5)}</span></td>
        //                     <td></td>
        //                 </tr>
        //             )
        //         }
        //         )}
        //     </tbody>
        // </table>
        <>
       
         <button onClick={() => setModalShow(true)} className='btn btn-info'><i class="fa fa-check-square" aria-hidden="true"></i></button>
         <ModalRegiserVote
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    item = {props.item}
                  
                  />
                  </>
       
    )
})
