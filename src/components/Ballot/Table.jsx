import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notification } from "element-react";
import * as BallotActions from '../../actions/ballot-manager/ballotActions';
import RModal from './Modal';
import { Trans } from 'react-i18next';
import { loadContracts, deployContract } from "../../utils/LoadContracts";
import { doConnectMetaMask } from '../../utils/checkConnectMM';
import moment from 'moment';
import { ethers } from 'ethers';
import ModalSendMail from './ModalSendMail';

const Table = ({ ballot }) => {

    // State
    const [show, setShow] = useState(false);
    const [type, setType] = useState('edit');
    const [formData, setFormData] = useState();
    const [openModal,setOpenModal] = useState(false);
    const [data,setData] = useState();

    // const ballot = useSelector(state => state.BallotManagerReducer.ballotData);


    // const ballotVote = useSelector(state => state.BallotManagerReducer.ballotVote);
    const userInfo = useSelector(state => state.UserProfile.userInfo);
    // const ballotdeploy = useSelector(state => state.BallotManagerReducer.ballotDeploy);


    // Dispatch

    const dispatch = useDispatch()
    // Effect
    // useEffect(() => {
    //     dispatch(BallotActions.fnGetAllBallot());

    // }, [dispatch ])

    const SendEmail= (item)=>{

        setData({
            idBallot:item,
            emailTo:userInfo.email,
    
        });
        setOpenModal(true)
    }
    const  hanldeSendMailed = () => {
        Notification({
            title: 'Error',
            message: "you Send mail for user",
            type: 'error'
        });
    }
  

    // Function
    function handleUpdate(item) {
        setShow(true)
        setFormData(item)
    }

    const hanldeDeploy = () => {
        Notification({
            title: 'Error',
            message: "you deployed",
            type: 'error'
        });
    }
    const loadcontracts = async (item) => {
        const account = await doConnectMetaMask();
        console.log(account);
        if (account != null) {
            if (account[0].toLowerCase() === userInfo?.code_meta_mask.toLowerCase() && userInfo?.code_meta_mask !== 0) {

                if (item?.candidates.length > 1) {
                    const candidateArr = item.candidates.map(item => {
                        return ethers.utils.formatBytes32String(`${item.id}`);
                        // return item.id;
                    })
                    console.log("candidateArr---", candidateArr)
                    const deploy = await deployContract('Ballots');
                    if (deploy !== false) {
                        const transaction = await loadContracts('Ballots', deploy);
                        await transaction.registerProposalNames(candidateArr, {
                            from: account[0],
                            gasLimit: 5000000,
                        })
                            .then(function () {
                                dispatch(BallotActions.fnDeloyBallot({ id: item.id, ballotAddress: deploy }));
                                Notification({
                                    title: 'Success',
                                    message: "deploy ballot with metamask success",
                                    type: 'success'
                                });

                            })
                            .catch((error) => {
                                console.log("error", error);
                                Notification({
                                    title: 'Errors',
                                    message: "Connect Meta Mask amout",
                                    type: 'error'
                                });
                            })

                    } else {
                        Notification({
                            title: 'Errors',
                            message: " deploy error",
                            type: 'error'
                        });
                    }
                } else {
                    Notification({
                        title: 'Errors',
                        message: " ballot error",
                        type: 'error'
                    });

                }
            } else {
                Notification({
                    title: 'Errors',
                    message: " Account MetaMask Error",
                    type: 'error'
                });
                return
            }

        } else {
            Notification({
                title: 'Errors',
                message: "check connect MetaMask, please",
                type: 'error'
            });
        }


    }

    return (<>
        <div className="btn-group btn-sm ml-auto">
            <button className="btn btn-primary" onClick={() => { setShow(true); setType('add') }}><i className="fa fa-plus-circle"></i> <Trans i18nKey={'quiz.add'} /></button>
        </div>
        <hr />
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>No</th>
                    <th className='w-10'>title </th>
                    <th className='w-30'><Trans i18nKey={'class.description'} /></th>
                    <th>Status</th>
                    <th>deployed</th>
                    <th>Type Ballot</th>
                    <th style={{ width: "15%" }}>dateStart</th>
                    <th style={{ width: "15%" }}>dateEnd</th>
                    <th style={{ width: "15%" }}>Operations</th>
                </tr>
            </thead>
            <tbody>

                {ballot?.length > 0 && ballot.map((item, index) =>
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.status == 1 ? <span style={{ color: 'green', fontWeight: 900 }}>Public</span> : <span style={{ color: 'red', fontWeight: 900 }}>Private</span>}</td>
                        <td>{item.deployed == 1 ? <span style={{ color: 'green', fontWeight: 900 }}>ON</span> : item.deployed == 0 ? <span style={{ color: 'red', fontWeight: 900 }}>OFF</span> :
                            <span style={{ color: '#ccc', fontWeight: 900 }}>End</span>}</td>
                        <td>{item.typeBallot == 1 ? <span style={{ color: 'green', fontWeight: 900 }}>Single</span> :
                            item.typeBallot == 2 ? <span style={{ color: 'green', fontWeight: 900 }}>Multiple</span> :
                                <span style={{ color: 'green', fontWeight: 900 }}>Against, Abstain</span>}</td>
                        <td>{moment(item.dateStart).format('MM/DD/YYYY')}</td>
                        <td>{moment(item.dateEnd).format('MM/DD/YYYY')}</td>
                        <td >
                            <button className='btn btn-primary mx-1 ' onClick={() => { setType('edit'); handleUpdate(item); }} >
                                <i className="fa fa-pencil" aria-hidden="true"></i>
                            </button>
                            <button className='btn btn-danger mx-1 '>
                                <i className="fa fa-trash-o" aria-hidden="true" onClick={() => { dispatch(BallotActions.fnDeleteBallot(item.id)) }}></i>
                            </button>{
                                item.deployed ? <button className='btn btn-info px-2 mx-1' onClick={() => { hanldeDeploy() }}
                                ><i class="fa fa-level-down" aria-hidden="true"></i>

                                </button> : <button className='btn btn-success px-2 mx-1' onClick={() => { loadcontracts(item) }} >
                                    <i class="fa fa-level-up" aria-hidden="true"></i>
                                </button>
                            }
                            {item.deployed == 2 ?    <button className='btn btn-success px-2 mx-1' onClick={() => { SendEmail(item.id) }} >
                                   <i class="fa fa-envelope" aria-hidden="true"></i>
                                </button>:
                                item.deployed == 3 ? <button className='btn btn-success px-2 mx-1' onClick={() => { hanldeSendMailed() }} >
                                 <i class="fa fa-quora" aria-hidden="true"></i>
                                </button>:  ""}
                        </td>
                    </tr>)}
            </tbody>
            {show && <RModal show={show} onHide={() => setShow(false)} type={type} data={formData} />}
             <ModalSendMail
                show={openModal}
                onHide={() => setOpenModal(false)}
                data = {data}
            />
        </table>
    </>
    )
}

export default Table