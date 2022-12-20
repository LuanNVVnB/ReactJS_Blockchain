import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as CandidateActions from '../../actions/candidate-manager/candidateActions'
import RModal from './Modal';
import { Trans } from 'react-i18next';
import { loadContracts } from "../../utils/LoadContracts";
// import './Table.css';
const Table = () => {

    // State
    const [show, setShow] = useState(false);
    const [type, setType] = useState('edit');
    const [formData, setFormData] = useState()
    const candidate = useSelector(state => state.CandidateManagerReducer.candidateData);
    // Dispatch
    const dispatch = useDispatch()

    // Effect
    useEffect(() => {
        dispatch(CandidateActions.fnGetAllCandidates())
    }, [dispatch])


    // Function
    function handleUpdate(item) {
        setShow(true)
        setFormData(item)
    }
    console.log("candidate--", candidate.data)
    // const loadcontracts = async () => {
    //     const contracts = await loadContracts('Ballots');
    //     contracts.ContractsInfura.options.address = '0x3eAAB470D80761322Aa4B82f4d056428cB4875b9';
    //     console.log("connd",contracts.ContractsInfura.events.giveVotersLength());
   
    // }
    return (<>
        <div className="btn-group btn-sm ml-auto">
            <button className="btn btn-primary" onClick={() => { setShow(true); setType('add') }}><i className="fa fa-plus-circle"></i> <Trans i18nKey={'quiz.add'} /></button>
        </div>
        <hr />
        <div className="" style={{ maxHeight: '50vh', overflow: 'auto' }}>
        <table className="table table-hover"  >
            <thead>
                <tr>
                    <th>No</th>
                    <th className='w-10'><Trans i18nKey={'Candidates.name'} /> </th>
                    <th className='w-30'><Trans i18nKey={'class.description'} /></th>
                    <th>Selected</th>
                    <th><Trans i18nKey={'Candidates.image-icon'} /></th>
                    <th> Total Voted</th>
                    <th style={{ width: "15%" }}><Trans i18nKey={'class.operation'} /></th>
                    
                </tr>
            </thead>
            <tbody>

                {candidate?.length > 0 && candidate.map((item, index) =>
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.fullName}</td>
                        <td className='description'  ><div  dangerouslySetInnerHTML={{ __html:`${item.description?.slice(0, 200)}...${item.description?.slice(item.description?.length - 200)}` }}></div></td>
{/* { `${item.description?.slice(0, 200)}...${item.description?.slice(item.description?.length - 200)}`}</td> */}
                        <td>{item.ballotId != null ? <span style={{ color: 'green', fontWeight: 900 }}>YES</span> : <span style={{ color: '#ccc', fontWeight: 900 }}>NO</span>}</td>
                        <td>
                            <img src={item.FileImg ? item.FileImg : 'https://quizizz.com/media/resource/gs/quizizz-media/quizzes/ab2f3f30-dc6f-4927-b59d-de24d95a1004'} alt="icon" className="imageIcon" style={{ width: "34px", height: "34px" }} />
                        </td>
                        <td>{item.totalVote}</td>
                        <td>
                            <button className='btn btn-primary mx-1' onClick={() => { setType('edit'); handleUpdate(item)}} >
                                <i className="fa fa-pencil" aria-hidden="true"></i>
                            </button>
                            <button className='btn btn-danger mx-1'>
                                <i className="fa fa-trash-o" aria-hidden="true" onClick={() => { dispatch(CandidateActions.fnDeleteCandidate(item.id)) }}></i>
                            </button>

                        </td>
                    </tr>)}
            </tbody>
            {show && <RModal show={show} onHide={() => setShow(false)} type={type} data={formData} />}
        </table>
        </div>
    </>
    )
}

export default Table