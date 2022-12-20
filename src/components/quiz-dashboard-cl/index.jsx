import React, { Component } from "react";
import "./quizlet.css";
import quizet from "../../assets/theme/img/quizet2.png";
import categoryimg from "../../assets/theme/img/category.png";
import Narbar from "../quiz-navbar-cl/nav-bar";
import FooterClient from "../quiz-footer-cl/footer";
import Carousel from "../Carousel/carousel";
import * as CONFIG from '../../config/configUrl'
import * as $http from '../../utils/httpProvider';
import axios from 'axios';
import ModalPlay from "../quiz-detail/ModalPlay";
class Quizlet extends Component {
  state = {
    category: [],
    show: false,
    playId: null
  }

  componentDidMount() {
    this.getAllcategory()
  }

  async getAllcategory() {
    const { data } = await $http.getData(CONFIG.API_BASE_URL + '/rest/category');
    this.setState({ category: data })
  }

  render() {
    console.log(this.state.category, "efwefwefwefwefwefwefwefwe")
    return (
      <div className="full-screen">
        <div className="white-bg full-screen">
          <Narbar />
          <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 align-items-center  my-5 ">
              <div class="col-lg-7">
                <img
                  class="img-fluid rounded mb-4 mb-lg-0"
                  src={quizet}
                  alt="..."
                />
              </div>
              <div class="col-lg-5">
                <h1 class="font-weight-light">WHAT WILL YOUR TEACH TODAY ? </h1>
                <p>
                  A quiz is a quick and informal assessment of student
                  knowledge. Quizzes are often used in North American higher
                  education environments to briefly test a students level of
                  comprehension regarding course material, providing teachers
                  with insights into student progress and any existing knowledge
                  gaps.
                </p>
                <a class="btn btn-primary" href="#!">
                  Start Now !
                </a>
              </div>
            </div>
            <div class="card text-white bg-secondary my-5 py-4 text-center">
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-4">
                    <img
                      class="rounded-circle"
                      src="https://cf.quizizz.com/img/course-assets/title_imgs/1%20-%20English%20and%20Language%20Arts.png"
                      alt="Generic placeholder image"
                      width="140"
                      height="140"
                    />
                    <h2>English</h2>
                    <p>
                      Donec sed odio dui. Etiam porta sem malesuada magna mollis
                      euismod. Nullam id dolor id nibh ultricies vehicula ut id
                      elit. Morbi leo risus, porta ac consectetur ac, vestibulum
                      at eros. Praesent commodo cursus magna.
                    </p>
                    <p>
                      <a class="btn btn-secondary" href="#" role="button">
                        View details »
                      </a>
                    </p>
                  </div>
                  <div class="col-lg-4">
                    <img
                      class="rounded-circle"
                      src="https://cf.quizizz.com/img/course-assets/title_imgs/3%20-%20Social%20Studies.png"
                      alt="Generic placeholder image"
                      width="140"
                      height="140"
                    />
                    <h2>Social Studies</h2>
                    <p>
                      Duis mollis, est non commodo luctus, nisi erat porttitor
                      ligula, eget lacinia odio sem nec elit. Cras mattis
                      consectetur purus sit amet fermentum. Fusce dapibus,
                      tellus ac cursus commodo, tortor mauris condimentum nibh.
                    </p>
                    <p>
                      <a class="btn btn-secondary" href="#" role="button">
                        View details »
                      </a>
                    </p>
                  </div>
                  <div class="col-lg-4">
                    <img
                      class="rounded-circle"
                      src="https://cf.quizizz.com/img/course-assets/title_imgs/2%20-%20Mathematics.png"
                      alt="Generic placeholder image"
                      width="140"
                      height="140"
                    />
                    <h2>Math</h2>
                    <p>
                      Donec sed odio dui. Cras justo odio, dapibus ac facilisis
                      in, egestas eget quam. Vestibulum id ligula porta felis
                      euismod semper. Fusce dapibus, tellus ac cursus commodo,
                      tortor mauris condimentum nibh, ut fermentum massa justo
                      sit amet risus.
                    </p>
                    <p>
                      <a class="btn btn-secondary" href="#" role="button">
                        View details »
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {
            this.state.category?.map((item, index) => (
              <div class="container">
                <h2>
                  <i className="fa fa-star" id="icon-menu"></i>
                  {item.name}
                </h2>

                <Carousel show={4}>
                  {
                    item.Quizzes?.map((item, index) => (

                      <div style={{ padding: 8, maxWidth: '25%' }}>
                        <div class="card h-100">
                          <div className="img-category">
                            <img
                              className="image-category"
                              src={item.imageUrl}
                              alt=""
                            />
                          </div>

                          <div class="card-body position-relative">
                            <p class="card-text">Quiz</p>
                            <h3 class="card-title">{item.name}</h3>
                            <div className="categor-total position-absolute">
                              <h6>{item.Questions.length} Questions </h6>
                              <h6> . </h6>
                              <h6> {item.Results.length} Plays</h6>
                            </div>
                          </div>
                          <div class="card-footer">
                            <a
                              name="top"
                              class="btn btn-primary btn-sm"
                              onClick={() => this.setState({ ...this.state, show: true, playId: item.id })}
                            >
                              More Info
                            </a>
                          </div>
                        </div>
                      </div>

                    ))
                  }
                </Carousel>
              </div>
            ))
          }
          <FooterClient />
          {this.state.show && <ModalPlay show={this.state.show} onHide={() => this.setState({ ...this.state, show: false })} id={this.state.playId} />}
        </div>
      </div>
    );
  }
}

export default Quizlet;
