import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as ProvinceActions from '../../actions/province-manager/provinceAction'
import RModal from './Modal';
import { Trans } from 'react-i18next';
import { loadContracts } from "../../utils/LoadContracts";
const Table = () => {

    // State
    const [show, setShow] = useState(false);
    const [type, setType] = useState('edit');
    const [formData, setFormData] = useState()
    const province = useSelector(state => state.ProvinceManagerReducer.provinceData);
    // Dispatch
    const dispatch = useDispatch()

    // Effect
    useEffect(() => {
        dispatch(ProvinceActions.fnGetAllProvinces())
    }, [dispatch])


    // Function
    function handleUpdate(item) {
        setShow(true)
        setFormData(item)
    }
    console.log("province--", province)
    const loadcontracts = async () => {
        const contracts = await loadContracts('Ballots');
        contracts.ContractsInfura.options.address = '0x3eAAB470D80761322Aa4B82f4d056428cB4875b9';
        console.log("connd", contracts.ContractsInfura.events.giveVotersLength());

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
                    <th className='w-10'>electionDate</th>
                    <th className='w-10'>pollClose </th>
                    <th className='w-10'>name</th>
                    <th className='w-10'>codeName</th>
                    <th className='w-10'>lastUpdated</th>
                    <th style={{ width: "15%" }}><Trans i18nKey={'class.operation'} /></th>
                </tr>
            </thead>
            <tbody>

                {province?.length > 0 && province.map((item, index) =>
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.electionDate ? item.electionDate: '...'}</td>
                        <td>{item.pollClose ? item.pollClose: '...'}</td>
                        <td>{item.name}</td>
                        <td>{item.codeName}</td>
                        <td>{item.lastUpdated ? item.lastUpdated: '...'}</td>
                        <td>
                            <button className='btn btn-primary mx-1' onClick={() => { setType('edit'); handleUpdate(item); loadcontracts() }} >
                                <i className="fa fa-pencil" aria-hidden="true"></i>
                            </button>
                            <button className='btn btn-danger mx-1'>
                                <i className="fa fa-trash-o" aria-hidden="true" onClick={() => { dispatch(ProvinceActions.fnDeleteProvince(item.id)) }}></i>
                            </button>

                        </td>
                    </tr>)}
            </tbody>
            {show && <RModal show={show} onHide={() => setShow(false)} type={type} data={formData} />}
        </table>
    </>
    )
}

export default Table