import React, { useState } from 'react';
// import "./CandidateList.css";
import BlogModal from './BlogModal';

import CandidateDetail from '../CandidateDetail/CandidateDetail';

function CandidateList(candidate) {
    const [modalShow, setModalShow] = useState(false);
    const [candidateDetail, setCandidateDetail] = useState();
    const [openDetail, setOpenDetail] = useState(false);

    const hanldeDisplay = (item) => {
        console.log("item--", item)
        setCandidateDetail(item);
        setModalShow(true);
    };

    const handleOpenDetail = (item) => {
        setCandidateDetail(item);
        setOpenDetail(true);
    }

    console.log("candidate", candidate.candidate);
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return (
        <>{
            !openDetail ?
                // <section className="dark">
                <>
                    
                    {/* {
                            candidate.candidate.length > 0 && candidate.candidate.map((item, index) => {
                                return (
                                    <div class="container mt-5" key={index}>

                                        <div class="row d-flex justify-content-center">

                                            <div class="col-md-7">

                                                <div class="card p-3 py-4">

                                                    <div class="text-center">
                                                        <img src={item.FileImg} width="100" class="rounded-circle" />
                                                    </div>

                                                    <div class="text-center mt-3">
                                                        <span class="bg-secondary p-1 px-4 rounded text-white">Pro</span>
                                                        <h5 class="mt-2 mb-0">Alexender Schidmt</h5>
                                                        <span>UI/UX Designer</span>

                                                        <div class="px-4 mt-1">
                                                            <p class="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

                                                        </div>

                                                        <ul class="social-list">
                                                            <li className="tag__item" onClick={() => { handleOpenDetail(item) }}><i className="fas fa-tag mr-2" ></i>Podcast</li>
                                                            <li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
                                                            <li className="tag__item play red" onClick={() => { hanldeDisplay(item) }}>
                                                                <i className="fas fa-play mr-2"></i>Play Episode
                                                            </li>
                                                        </ul>

                                                        <div class="buttons">

                                                            <button class="btn btn-outline-primary px-4">Message</button>
                                                            <button class="btn btn-primary px-4 ms-3">Contact</button>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                )
                            })
                        } */}

                    <BlogModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        candidatedetail={candidateDetail}
                    />
                </>

                // </section > 
                : <CandidateDetail candidateDetail={candidateDetail} />

        }


        </>

    )
}

export default CandidateList


