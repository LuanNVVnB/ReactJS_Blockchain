import React, { useState } from 'react';
import CandidateDetail from '../CandidateDetail/CandidateDetail';

import "./Blog.css";
import BlogModal from './BlogModal';

function Blog(candidate) {
	const [modalShow, setModalShow] = useState(false);
	const [candidateDetail, setCandidateDetail] = useState();
	const [openDetail, setOpenDetail] = useState(false);

	const hanldeDisplay = (item) => {
		console.log("item--", item)
		setCandidateDetail(item);
		setModalShow(true);
	};

	const handleOpenDetail=(item) => {
		setCandidateDetail(item);
		setOpenDetail(true);
	}

	console.log("candidate", candidate.candidate);
	return (
		<>{
			!openDetail ?<section className="dark">
				<div className="container py-4">
					{candidate.candidate.length > 0 && candidate.candidate.map((item, index) => {
						if (index / 2 == 0) {

							return (

								<article className="postcard dark blue" key={index}>
									<a className="postcard__img_link" href="#">
										<img className="postcard__img" src={item.FileImg} alt="Image Title" />
									</a>
									<div className="postcard__text">
										<h1 className="postcard__title blue"><a href="#">Podcast Title</a></h1>
										<div className="postcard__subtitle small">
											<time datetime="2020-05-25 12:00:00">
												<i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
											</time>
										</div>
										<div className="postcard__bar"></div>
										<div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
										<ul className="postcard__tagbox" >
											<li className="tag__item"  onClick={()=>{handleOpenDetail(item)}}><i className="fas fa-tag mr-2"></i>Podcast</li>
											<li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
											<li className="tag__item play blue" onClick={() => { hanldeDisplay(item) }} >
												<i className="fas fa-play mr-2"></i>Play Episode
											</li>
										</ul>
									</div>
								</article>)
						}
						else {
							return (
								<article className="postcard dark red">
									<a className="postcard__img_link" href="#">
										<img className="postcard__img" src={item.FileImg} alt="Image Title" />
									</a>
									<div className="postcard__text">
										<h1 className="postcard__title red"><a href="#">Podcast Title</a></h1>
										<div className="postcard__subtitle small">
											<time datetime="2020-05-25 12:00:00">
												<i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
											</time>
										</div>
										<div className="postcard__bar"></div>
										<div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
										<ul className="postcard__tagbox">
											<li className="tag__item" onClick={()=>{handleOpenDetail(item)}}><i className="fas fa-tag mr-2" ></i>Podcast</li>
											<li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
											<li className="tag__item play red" onClick={() => { hanldeDisplay(item) }}>
												<i className="fas fa-play mr-2"></i>Play Episode
											</li>
										</ul>
									</div>
								</article>
							)

						}

					})

					}

					<BlogModal
						show={modalShow}
						onHide={() => setModalShow(false)}
						candidatedetail={candidateDetail}
					/>
					
				</div>
			</section>:<CandidateDetail candidateDetail= {candidateDetail}/>

		}
			


		</>
	)
}

export default Blog