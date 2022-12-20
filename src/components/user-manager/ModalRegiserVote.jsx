import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as UserActions from '../../actions/user-manager/userManagerActions';
import { Trans } from 'react-i18next';
import { Notification } from "element-react";
import * as BallotActions from '../../actions/ballot-manager/ballotActions';
import { loadContracts } from "../../utils/LoadContracts";
import { doConnectMetaMask,GetAccountMetaMask } from '../../utils/checkConnectMM';
import Form from 'react-bootstrap/Form';
import { memo } from 'react';
import { useState } from 'react';


function ModalRegiserVote(props) {
  const [eye, setEye] = useState(false);
  const [passwordEmail, setPasswordEmail] = useState();
  const [ballotSelected, setBallotSelected] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(BallotActions.fnGetAllBallotVote(0));
  }, []);

  const ballotVote = useSelector(state => state.BallotManagerReducer.ballotVote);
  
  const userProfile = useSelector(state => state.UserProfile.userInfo);
 

  const handleRegister = async () => {
    console.log("balllot ", ballotSelected);
    let user = {
      emailFrom: userProfile.email,
      id: props.item.id,
      codeMetaMask: props.item.code_meta_mask,
      passwordEmail: passwordEmail,
      ballotId: ballotSelected ? ballotVote[ballotSelected].id: ballotVote[0].id,
      ballotTitle: ballotSelected ? ballotVote[ballotSelected].title: ballotVote[0].title

    }
    const account = await GetAccountMetaMask(userProfile);
      console.log(account);
      if (account !== null) {
        if (ballotVote) {
          console.log("fadsa",ballotSelected ? ballotVote[ballotSelected].ballotAddress: ballotVote[0].ballotAddress)
          console.log("user.codeMetaMask",user.codeMetaMask)
          const transaction = await loadContracts('Ballots',ballotSelected ? ballotVote[ballotSelected].ballotAddress: ballotVote[0].ballotAddress);
          transaction.registerVote(user.codeMetaMask, {
            from: account,
             gasLimit: 5000000,
          }).then(function (data) {
            console.log("data--",data)
            Notification({
              title: 'Success',
              message: "Connect success",
              type: 'success'
            });
            dispatch(UserActions.fnPostRigisterUserVoted(user));

          }).catch((error) => {
            console.log("error", error);
            Notification({
              title: 'Errors',
              message: "Ballot not deployed or execution reverted" ,
              type: 'error'
            });
          })
        }else{
            Notification({
              title: 'Errors',
              message: "ballot not exit",
              type: 'error'
            });
        }
      } else {
        Notification({
              title: 'Errors',
              message: "you can't decentralization",
              type: 'error'
            });
       
      }
        props.onHide();
      
  }

  return (


    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        {props.item.code_meta_mask != "0" ?
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address Admin</Form.Label>
              <Form.Control type="email" placeholder={userProfile?.email} readOnly />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address User</Form.Label>
              <Form.Control type="email" placeholder={props.item.email} readOnly />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Code MetaMask User</Form.Label>
              <Form.Control type="text" placeholder={props.item.code_meta_mask} readOnly />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>PassWord email Admin</Form.Label>
              <div className="row py-2 px-3">
                <Form.Control type="password" className="col-11 mr-2" onChange={item => { setPasswordEmail(item.target.value) }} />
                {eye ?
                  <i className="fa fa-eye pt-2" onClick={() => { setEye(false) }} aria-hidden="true"></i> :

                  <i className="fa fa-eye-slash pt-2" aria-hidden="true" onClick={() => { setEye(true) }} ></i>}
              </div>


            </Form.Group>
           
            <Form.Group >
               <label for="inputState">gender</label>
                  <select
                    class="form-select"
                    name="gander"
                    className="form-control"
                    style={{ color: "blueviolet;" }}
                    value={ballotSelected?.title}
                    onChange={(event) => {
                      setBallotSelected(event.target.value)
                    }}
                  >
                     {ballotVote?.length > 0 ? ballotVote.map((item, index) => {
    
                  return <option key={index} value={index}>{item.title}</option>
                } ) : <></>}
                  </select>
            </Form.Group>


          </Form> : <span> user not  connect metamask</span>}

      </Modal.Body>
      <Modal.Footer>
        {props.item.code_meta_mask != "0" ?
          <>
            <Button onClick={props.onHide}>Close</Button>
            <Button onClick={() => handleRegister()}>Submit</Button>
          </> :
          <Button onClick={props.onHide}>Close</Button>}

      </Modal.Footer>
    </Modal>
  );
}

export default memo(ModalRegiserVote, (prev, nextPrev) => {
  return prev.onHide === nextPrev.onHide
});