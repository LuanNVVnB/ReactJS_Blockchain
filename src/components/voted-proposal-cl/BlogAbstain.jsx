import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import CandidateDetail from '../CandidateDetail/CandidateDetail';
import { Button, Notification } from "element-react";
import "./Blog.css";
import BlogModal from './BlogModal';
import { GetAccountMetaMask } from '../../utils/checkConnectMM';
import CandidateVoteAbstainModal from './CandidateVoteAbstainModal';

function BlogAbstain(candidate) {
	const [modalShow, setModalShow] = useState(false);
	const [candidateDetail, setCandidateDetail] = useState();
	const [openDetail, setOpenDetail] = useState(false);
	const [openVote, setOpenVote] = useState(false);
	const [candidateVote, setCandidateVote] = useState([]);
	const [voted, setVoted] = useState([]);
	const [accountMM, setAccountMM] = useState()
	const userInfo = useSelector(state => state.UserProfile.userInfo);

	const hanldeDisplay = (item) => {
		console.log("item--", item)
		setCandidateDetail(item);
		setModalShow(true);
	};

	const handleOpenDetail = (item) => {
		setCandidateDetail(item);
		setOpenDetail(true);
	}

	const hanldeOpenVote = (item) => {
		setCandidateVote(prev => prev.concat([item]));
		setVoted(prev => prev.concat([item.id]))

		console.log("candidate", candidateVote);
		console.log("vote", voted)
	}

	const hanldeSubmit = async () => {
		if (candidateVote.length == 0 || candidateVote.length !== candidate.number) {
			Notification({
				title: 'Errors',
				message: "Please select a candidate",
				type: 'error'
			});
		} else if (await GetAccountMetaMask(userInfo) != null) {
			setAccountMM(await GetAccountMetaMask(userInfo))
			setCandidateVote(candidateVote)
			setOpenVote(true)
		} else {
			Notification({
				title: 'Errors',
				message: "select a candidate Error",
				type: 'error'
			});

		}

	}

	const handleNotVote = (ballot) => {
		setCandidateVote(prev => prev.filter(item => item.id !== ballot.id));
		setVoted(prev => prev.filter(item => item !== ballot.id));
	}


	return (
		<>{
			!openDetail ?
				<section className="dark">
					<div className="container py-4">
						{candidate.candidate.length > 0 && candidate.candidate.map((ballot, index) => {
							if (index / 2 == 0) {

								return (

									<article className="postcard dark blue" key={index}>
										<a className="postcard__img_link" href="#">
											<img className="postcard__img" src={ballot.FileImg} alt="Image Title" />
										</a>
										<div className="postcard__text">
											<h1 className="postcard__title blue"><a href="#">{ballot.fullName}</a></h1>
											<div className="postcard__subtitle small">
												<time datetime="2020-05-25 12:00:00">
													<i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020/{ballot.old}
												</time>
											</div>s
											<div className="postcard__bar"></div>
											<div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!
											 </div>
											<ul className="postcard__tagbox" >
												<li className="tag__item" onClick={() => { handleOpenDetail(ballot) }}><i className="fas fa-tag mr-2"></i>Podcast</li>
												<li className="tag__item"><i className="fas fa-clock mr-2"></i>Vote: {ballot.totalVote}</li>
												<li className="tag__item play blue" onClick={() => { hanldeDisplay(ballot) }} >
													<i className="fas fa-play mr-2"></i>Play Episode
												</li>
												{
													voted.length > 0 && voted?.find(item => item === ballot.id) ?
														<li className="tag__item play blue" onClick={() => {
															handleNotVote(ballot)
														}}>
															<i class="fa fa-eraser" aria-hidden="true"></i>Abstained
														</li>
														:
														<li className="tag__item play blue" onClick={() => { hanldeOpenVote(ballot) }} >
															<i class="fa fa-trash" aria-hidden="true"></i>Abstain
														</li>
												}

											</ul>
										</div>
									</article>)
							}
							else {
								return (
									<article className="postcard dark red">
										<a className="postcard__img_link" href="#">
											<img className="postcard__img" src={ballot.FileImg} alt="Image Title" />
										</a>
										<div className="postcard__text">
											<h1 className="postcard__title blue"><a href="#">{ballot.fullName}</a></h1>
											<div className="postcard__subtitle small">
												<time datetime="2020-05-25 12:00:00">
													<i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020/{ballot.old}
												</time>
											</div>
											<div className="postcard__bar"></div>
											<div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!
					</div>
											<ul className="postcard__tagbox">
												<li className="tag__item" onClick={() => { handleOpenDetail(ballot) }}><i className="fas fa-tag mr-2" ></i>Podcast</li>
												<li className="tag__item"><i className="fas fa-clock mr-2"></i>Vote: {ballot.totalVote}</li>
												<li className="tag__item play red" onClick={() => { hanldeDisplay(ballot) }}>
													<i className="fas fa-play mr-2"></i>Play Episode
												</li>
												{
													voted.length > 0 && voted?.find(item => item === ballot.id) ?
														<li className="tag__item play blue" onClick={() => {
															handleNotVote(ballot)
														}}>
															<i class="fa fa-eraser" aria-hidden="true"></i>Abstained
														</li>
														:
														<li className="tag__item play blue" onClick={() => { hanldeOpenVote(ballot) }} >
															<i class="fa fa-trash" aria-hidden="true"></i>Abstain
														</li>
												}

											</ul>
										</div>

									</article>
								)

							}

						})

						}
						<Button variant="primary" onClick={() => { hanldeSubmit() }}>Primary</Button>

						<BlogModal
							show={modalShow}
							onHide={() => setModalShow(false)}
							candidatedetail={candidateDetail}
						/>
						<CandidateVoteAbstainModal
							show={openVote}
							onHide={() => setOpenVote(false)}
							candidate={candidate.candidate.filter(item => !voted.includes(item.id))}
							accountmm={accountMM}
							ballot={candidate.ballot} 
							userinfoid = {userInfo.id}/>

					</div>
				</section> :
				<CandidateDetail candidateDetail={candidateDetail} />

		}



		</>
	)
}

export default BlogAbstain