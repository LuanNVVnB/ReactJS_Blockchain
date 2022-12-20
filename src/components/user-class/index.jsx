import React, { Component } from 'react';
import Narbar from "../quiz-navbar-cl/nav-bar";
import "./class.css"
import * as CONFIG from '../../config/configUrl'
import * as $http from '../../utils/httpProvider'
class UserClass extends Component {
    state = {
        class: []
    }

    componentDidMount() {
        this.getAllClassUser()
    }

    async getAllClassUser(classname, startAt, pageSize) {
        var us = classname ? classname : '';
        var sa = startAt ? startAt : 0;
        var ps = pageSize ? pageSize : 10;
        await $http.getData(CONFIG.API_BASE_URL + "/v1/rest/class?classname=" + us + "&startAt=" + sa + "&maxResults=" + ps)
            .then((res) => {
                this.setState({ class: res.data })
            }).catch((err) => console.log(err))
    }
    render() {
        return (
            <div className="full-screen">
                <div className="col-lg-12 white-bg full-screen history">
                    <Narbar />
                    <div className="nav-quiz-category">
                        <div class="container px-4 px-lg-5">
                            <div class="classes-container" data-v-52d02b34="">
                                <div class="with-classes" data-v-52d02b34="">
                                    <div class="header" data-v-52d02b34=""><p class="heading" data-v-52d02b34="">Your Classes</p>
                                        <button class="join-btn" data-v-52d02b34="">Join a New Class</button>
                                    </div>
                                    <div className="row">
                                        {
                                            this.state.class.map((i, index) =>
                                                <div className="col-sm-3" key={index}>
                                                    <div class="classes" data-v-52d02b34="">
                                                        <div class="class" data-v-52d02b34="">
                                                            <div class="class-container" data-v-52d02b34="">
                                                                <div class="class-name" data-v-52d02b34="">{i.className}</div><div class="teacher-name" data-v-52d02b34=""><span class="grey" data-v-52d02b34="">By : </span>
                                                                    <span class="black" data-v-52d02b34="">{i.created_by} {i.description}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div class="bottom-heading" data-v-52d02b34="">
                                        <p data-v-52d02b34="">Assignments from these classes, if any, will be visible on the Home Page</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default UserClass;
