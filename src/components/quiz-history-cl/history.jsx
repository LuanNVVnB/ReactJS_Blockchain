import React, { Component } from "react";
import Narbar from "../quiz-navbar-cl/nav-bar";
import "./history.css";
import moment from "moment";
import * as http from '../../utils/httpProvider'
import * as CONFIG from '../../config/configUrl'

import ModalPlay from "../quiz-detail/ModalPlay";

export class History extends Component {
  state = {
    running: [],
    completed: [],
    show: false,
    playId: null,
    achievement: [],
  }

  componentDidMount() {
    http.getData(CONFIG.API_BASE_URL + '/rest/quiz')
      .then(response => {
        response.data.forEach(i => {
          if (!i.Results[0].finish) {
            this.setState({
              ...this.state,
              running: [
                ...this.state.running,
                {
                  id: i.id,
                  name: i.name,
                  questions: i.questions,
                  imageUrl: i.imageUrl,
                  questions_left: i.Results[0].PlayHistories.length
                }
              ]
            })
          } else {
            let highest_result = i.Results.sort((a, b) => b.score - a.score)[0]
            this.setState({
              ...this.state,
              completed: [
                ...this.state.completed,
                {
                  id: i.id,
                  name: i.name,
                  questions: i.questions,
                  imageUrl: i.imageUrl,
                  score: highest_result.score
                }
              ]
            })
          }
        })
      })
      .catch(err => console.log(err));
    http.getData(CONFIG.API_BASE_URL + '/v1/rest/achievement/reward').then((response) => {
      console.log("history---",response)
      this.setState({ ...this.state, achievement: response.data })
    }).catch((err) => console.log(err))
  }

  render() {
    return (
      <div className="full-screen">
        <div className="col-lg-12 white-bg full-screen history">
          <Narbar />
          {this.state.show && <ModalPlay show={this.state.show} onHide={() => this.setState({ ...this.state, show: false })} id={this.state.playId} />}
          <div className="nav-quiz-category">
            <div class="container px-4 px-lg-5">
              <nav className="nav-category">
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <div
                    class="nav-item nav-link active"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    <a> Runing</a>
                    <span className="fa fa-hourglass-half"></span>
                  </div>
                  <div
                    class="nav-item nav-link"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="#nav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    <a>Completed</a>
                    <span className="fa fa-hourglass-end"></span>
                  </div>
                  <div
                    class="nav-item nav-link"
                    id="nav-contact-tab"
                    data-toggle="tab"
                    href="#nav-contact"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    <a>Achievements</a>
                    <span className="fa fa-trophy"></span>
                  </div>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="container-category">
                    <div className="row">
                      {this.state.running.map((i, index) =>
                        <div className="col-sm-3" key={index}>
                          <div class="btn card card-history" onClick={() => this.setState({ ...this.state, show: true, playId: i.id })} >
                            <img
                              class="card-img-top"
                              src={i.imageUrl}
                              alt="Card image cap"
                            />
                            <div class="card-body history" >
                              <p class="card-text">{i.name}</p>
                            </div>
                            <div class="game-progress-bar-background">
                              <div class="game-progress-bar flex-view flex-row" style={{ minWidth: `${i.questions_left / i.questions * 100}%` }}  ></div>
                              <span class="game-progress-bar-text">
                                {i.questions_left} questions left
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div className="container-category">
                    <div className="row">
                      {this.state.completed.map((i, index) =>
                        <div className="col-sm-3" key={index}>
                          <div class="btn card card-history" onClick={() => this.setState({ ...this.state, show: true, playId: i.id })}>
                            <img
                              class="card-img-top"
                              src={i.imageUrl}
                              alt="Card image cap"
                            />
                            <div class="card-body history">
                              <p class="card-text">{i.name}</p>
                            </div>
                            <div class="game-progress-bar-background-poor">
                              <span class="game-progress-bar-text">
                                {i.score}% accuracy
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  <ul className="content-block-list">
                    {this.state.achievement.length > 0 ? this.state.achievement.map((v, idx) =>
                      <li class="grid-50 tablet-grid-50" key={idx}>
                        <div class="content-block">
                          <div class="grid-70 tablet-grid-70 mobile-grid-70 content-meta">
                            <strong>Achievement</strong>
                            {/* <h3>{v.Achievement?.name}</h3> */}
                            <p>Quickstart</p>
                            <div class="content-actions-container">
                              <span class="icon icon-complete"></span>
                              <strong>Achieved</strong>
                              <p>{moment(v.created_at).format('DD-MM-YYYY')}</p>
                            </div>
                          </div>
                          <div class="grid-30 tablet-grid-30 mobile-grid-30 achievement-hero">
                            {/* <img
                              alt="Achievement for people"
                              src={v.Achievement.image}
                            /> */}
                          </div>
                        </div>
                      </li>
                    ) : <p className="h3 text-danger">No Achievement ! Wish you luck next time :((((</p>}
                  </ul>
                </div>
                <div className="col-sm-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default History;
