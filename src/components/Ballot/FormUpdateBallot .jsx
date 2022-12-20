import React, { useEffect, useState, useLayoutEffect } from 'react'
import RichTextEditor from './RichTextEditor';
import DatePicker from 'react-date-picker';
import * as $http from "../../utils/httpProvider";
import * as CONFIG from "../../config/configUrl";
import { Container } from 'reactstrap';
// import { useDispatch, useSelector } from 'react-redux';
import { Notification } from "element-react";
import ImgNotOff from "../../assets/theme/img/empty-state-search.png";
import "./FormCreateBallot.css";
import { Message, Upload } from "element-react";
import ModalType from './ModalType';

const content = "are you sure to Udapte?"
const action = "Update";
const FormUpdateBallot = ({ formDataBallot }) => {

    console.log("formDataBallot ", formDataBallot)
    const [modalShow, setModalShow] = useState(false);
    const [background, setBackground] = useState(formDataBallot.background);
    const [value, setValue] = useState(formDataBallot.description);
    const [valueDateStart, setValueDateStart] = useState(new Date(formDataBallot.dateStart));
    const [valueDateEnd, setValueDateEnd] = useState(new Date(formDataBallot.dateEnd));
    const [candidateArr, setCandidateArr] = useState(formDataBallot.candidates);
    const [typeBallot, setTypeBallot] = useState(0);
    const [type, setType] = useState(formDataBallot.typeBallot);
    const [numberBallot, setNumberBallot] = useState(formDataBallot.numberBallot);
   // const [statusBallot, setStatusBallot] = useState(formDataBallot.status);
    const [ballot, setBallot] = useState();

    
    // set background
    function handleAvatarScucess(res, file) {
        let iconUrl = res.data.url;
        if (iconUrl !== null) {
            setBackground(iconUrl);
        }
    }


    function beforeAvatarUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            Message("Icon picture size can not exceed 2MB!");
        }
        return isLt2M;
    }

    const handleConfirm = () => {
        if (numberBallot >= candidateArr.length) {
            Notification({
                title: 'Errors',
                message: "number is less candidate",
                type: 'error'
            });
        }
        else {
            const ballot = {
                id:formDataBallot.id,
                title: formDataBallot.title,
                description: value,
                dateStart: valueDateStart,
                dateEnd: valueDateEnd,
                // status: statusBallot,
                typeBallot: type,
                numberBallot,
                background,
                deployed: 1
            }
            setBallot(ballot);
            setModalShow(true);
        }


    }

    return (
        <>
            <div className="row my-4">
                <div className="col-md-12 mb-2">
                    <div className="row p-4">
                        <div className="card col-10">
                            <div className="text-info"> Title Voting</div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" readOnly={true} value={formDataBallot.title} />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="d-flex flex-column align-items-center text-center mb-2" style={{ width: "125px", background: "gray", borderStyle: "dotted" }}>
                                <Upload
                                    className="icon-uploader"
                                    action={CONFIG.API_BASE_URL + "/v1/rest/upload"}
                                    showFileList={false}
                                    onSuccess={(res, file) => handleAvatarScucess(res, file)}
                                    beforeUpload={(file) => beforeAvatarUpload(file)}
                                    headers={$http.getAuthenHeader()}
                                >
                                    {background !==null ? (
                                        <img
                                            src={background}
                                            alt="icon"
                                            className="FileImg"
                                            style={{ width: "125px", height: "125px" }}
                                        />
                                    ) : (
                                        <i className="el-icon-plus avatar-uploader-icon pt-5"></i>
                                    )}
                                </Upload>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-12">
                    <div className="card p-2">
                        <div className="text-info">Decrition voting</div>
                        <RichTextEditor setValue={setValue} value={value} />
                    </div>
                </div>
            </div>
            <div className="row mb-2 p-4">
                <div className="card p-2 mr-4 col-5">
                    <div className="text-info">Date Start</div>
                    <div className="input-group mb-3">
                        <DatePicker onChange={setValueDateStart} value={valueDateStart} minDate={new Date()} />
                    </div>
                </div>
                <div className="card p-2 col-5">
                    <div className="text-info">Date End</div>
                    <div className="input-group mb-3">
                        <DatePicker onChange={setValueDateEnd} value={valueDateEnd} minDate={new Date()} />
                    </div>

                </div>
                <div className="card p-2 col-5 mt-4 mr-4">
                    <div className="text-info">BALLOT TYPE</div>
                    <select class="custom-select mb-3" id="inputGroupSelect01" value={type} onChange={(e) => setTypeBallot(e.target.value)}>
                        <option value="1">Single choice</option>
                        <option value="2">Multiple choice</option>
                        <option value="3">For, Against, Abstain</option>
                    </select>
                    {
                        typeBallot == 2 ?
                            <> <label>Set the maximum number of choices:</label>
                                <div className=''>

                                    <input type="text" className='ml-2 input-text-ballot' name='number' onChange={(e) => { setNumberBallot(e.target.value); }} /> choices <button className="btn btn-info" onClick={() => { setType(2); setTypeBallot(0); }}>Done</button></div>
                            </>
                            :
                            typeBallot == 3 ?
                                <>

                                    <label>Choose how voters will vote on the proposals:</label>
                                    <div className=''>

                                        <input type="text" className='ml-2 input-text-ballot' name='number' onChange={(e) => { setNumberBallot(e.target.value); }} /> choices <button className="btn btn-info" onClick={() => { setType(3); setTypeBallot(0) }}>Done</button></div>
                                </>
                                :
                                typeBallot == 1 ?
                                    <>
                                        <label>Choose one on the proposals:</label>
                                        <div className=''>

                                            <input type="text" className='ml-2 input-text-ballot' value="single choice" /> choices <button className="btn btn-info" onClick={() => { setType(1); setTypeBallot(0) }}>Done</button></div>
                                    </>
                                    :
                                    <></>}
                </div>
                {/* <div className="card p-2 col-5 mt-4">
                    <div className="text-info">STATUS</div>
                    <select class="custom-select mb-3" id="inputGroupSelect01" onChange={(e) => setStatusBallot(e.target.value)}>
                        <option value="1">Public</option>
                        <option value="0">Private</option>

                    </select>
                </div> */}



                {candidateArr?.length > 0 ?
                    <>
                        <Container className="row my-4" fluid>
                            {candidateArr.map((candidate, index) => {
                                return (
                                    <div className={`col-md-${candidate?.length !== NaN && candidate?.length > 0 ? 12 / candidate?.length : 3}`} key={index}>
                                        <div className={`bg-success w-100 h-100 rounded d-flex flex-column`}>
                                            <div className="p-2 d-flex justify-content-between">

                                                <span className="btn btn-white badge badge-white rounded-circle d-flex justify-content-center" style={{ width: '20px', height: '20px' }} >
                                                    {candidate.id}
                                                </span>
                                               
                                            </div>
                                            <div className="h-100 p-1">
                                                <img src={candidate.FileImg} className="text-left form-control border-0 w-100 h-100 bg-dark text-white font-weight-bold" ></img>
                                            </div>
                                        </div>
                                    </div>)
                            })}
                        </Container>
                        <button variant="primary" className="btn btn-primary m-auto mt-2 row px-4" onClick={handleConfirm}>Confirm</button>
                    </> :
                    <>
                        <div className="col-12  text-center">
                            <img className="" src={ImgNotOff} style={{ width: '150px', height: '150px' }} />
                        </div>
                        <div className="text-info col-12  text-center">Not find candidation</div>
                    </>

                }
            </div>
            <ModalType
                show={modalShow}
                onHide={() => setModalShow(false)}
                content={content}
                action={action}
                ballot={ballot}
            />

        </>
    )
}

export default FormUpdateBallot