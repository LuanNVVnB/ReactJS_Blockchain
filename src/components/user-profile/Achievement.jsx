import React, { Component } from "react";
import "./achievement.css";
import moment from "moment";
import ImgNotOff from "../../assets/theme/img/empty-state-search.png";
class Achievement extends Component {
    render() {
        const { achievement } = this.props;
        return (
            <div className="container achievement">
                <div className="col-lg-12 history">
                    <div className="nav-quiz-category">
                        <div class="container">
                            <div>
                                <div>
                                    {<ul className="content-block-list">
                                        {achievement.length > 0 ? achievement.map((v, idx) =>
                                            <li class="grid-50 tablet-grid-50" key={idx}>
                                                <div class="card content-block">
                                                    <div class="grid-70 tablet-grid-70 mobile-grid-70 content-meta">
                                                        <strong>Achievement</strong>
                                                        {/* <h3>{v.Achievement.name}</h3> */}
                                                        <p>Quickstart</p>
                                                        <div class="content-actions-container">
                                                            <span class="icon icon-complete"></span>
                                                            <strong>Achieved</strong>
                                                            <p>{moment(v.created_at).format('DD-MM-YYYY')}</p>
                                                        </div>
                                                    </div>
                                                    <div class="grid-30 tablet-grid-30 mobile-grid-30 achievement-hero">
                                                        <img
                                                            alt="Achievement for people"
                                                            // src={v.Achievement.image}
                                                        />
                                                    </div>
                                                </div>
                                            </li>
                                        ) : <div className='status-card-not-off-achievement'>
                                            <div>
                                                <img className="not-off-img-achievement" src={ImgNotOff} />
                                            </div>
                                            <div>
                                                <strong>No Achievement ! Wish you luck next time</strong>
                                            </div>
                                        </div>}
                                    </ul>}
                                </div>
                                <div className="col-sm-6"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Achievement;