import React, { Component } from 'react';
import defaultAvatar from "../../assets/theme/img/default-avatar.png";
import imgbackground from "../../assets/theme/img/imgbackground.svg";
import { Notification } from "element-react";
import { bindActionCreators } from 'redux';
import { getuseUpdate } from '../../reducers/user-profile';
import { connect } from 'react-redux';
import * as userProfileActions from '../../actions/user-profile/userProfileActions';
import { Trans, withTranslation } from 'react-i18next';
import Achievement from './Achievement';
// import { getUserInfo, getImageUrl, getShowUploadAvatar} from '../../reducers/user-profile';
class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activebutton: true,
            fullName: "",
            password: "",
            confirmpassword: "",
            confirm_password: "",
            phone: "",

        };
    }

    componentWillReceiveProps(nextProps) {
        console.log("WillReceiveProps", this.props.getuseUpdate)
        if (nextProps.getuseUpdate !== this.props.getuseUpdate) {
            if (nextProps.getuseUpdate == true) {
                console.log("WillReceiveProps 1")
                this.setState({
                    activebutton: true,
                })
            } else {

                console.log("WillReceiveProps 2")
                this.setState({
                    activebutton: false,
                })
            }
        } else {
            this.setState({
                activebutton: true,
            })
        }
    }

    //   componentDidUpdate() {
    //       console.log("didupdate",this.props.getuseUpdate)
    //     if (nextProps.getuseUpdate !== this.props.getuseUpdate) {
    //         if (nextProps.getuseUpdate == true) {
    //             this.setState({
    //                 activebutton: false,
    //             })
    //         } else {
    //             this.setState({
    //                 activebutton: true
    //             })
    //         }
    //       }
    //   }

    handleOnlick() {
        this.setState({
            activebutton: !this.state.activebutton
        })
        console.log('checkse', this.props.getuseUpdate)
    }
    handleUpdateProfile() {
        this.setState({
            activebutton: true
        })
    }
    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({
            [name]: value
        }
        );
    }

    handleUpdateProfile = () => {

        let data = {
            fullname: this.state.fullName,
            password: this.state.password,
            phone: this.state.phone,
            email: this.props.userInfo.email,
            username: this.props.userInfo.username
        }
        if (this.state.confirm_password !== data.password) {
            Notification({
                title: 'Errors',
                message: "confirm password error",
                type: 'error'
            })
        } else {
            this.props.fnUpdateProfile(data);
            console.log("userpofile: ", this.props.getuseUpdate);
        }
    }


    render() {
        const { userInfo, fnOpenUploadAvatar, achievement } = this.props;
        const { activebutton } = this.state;
        return (
            <div className="row">
                <div className="col-lg-3">
                    <div className="py-4">
                        <p className="clearfix">
                            <span className="float-left"><Trans i18nKey='Profile.picture' />:</span>
                            <span className="float-right text-muted">
                                <img width="50px" height="50px" src={userInfo.photo !== undefined ? userInfo.photo : defaultAvatar} alt="avatar" onClick={() => fnOpenUploadAvatar()} />
                            </span>
                        </p>
                        <p className="clearfix">
                            <span className="float-left"><Trans i18nKey='Profile.username' />:</span>
                            <span className="float-right text-muted">{userInfo.username}</span>
                        </p>
                        <p className="clearfix">
                            <span className="float-left">Email:</span>
                            <span className="float-right text-muted">{userInfo.email}</span>
                        </p>
                        <p className="clearfix">
                            <span className="float-left"><Trans i18nKey='Profile.fullname' />:</span>
                            <span className="float-right text-muted">{userInfo.name}</span>
                        </p>
                        <p className="clearfix">
                            <span className="float-left"><Trans i18nKey='Profile.role' />:</span>
                            <span className="float-right text-muted">{userInfo.role !== undefined ? userInfo.role.map((item, i) => <span key={i}> {item} </span>) : ''}</span>
                        </p>
                        <p className="clearfix">
                            <span className="float-left"><Trans i18nKey='Profile.status' />:</span>
                            <span className="float-right text-muted">{userInfo.active ? "Active" : "Inactive"}</span>
                        </p>
                    </div>
                    <button className="btn btn-primary mt-auto" onClick={() => this.handleOnlick()}><Trans i18nKey='Profile.button-edit' /></button>
                </div>
                <div className="col-lg-1">
                </div>
                {activebutton == false ?
                    <div className="col-lg-8">
                        <div className="card border-primary h-100">
                            <h4 className="card-title text-primary title-profile" style={{ margin: '10px' }}><Trans i18nKey='Profile.editTitle' /></h4>
                            <div className="card-body">

                                <div className="list-group">

                                    <form>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputEmail4">Email</label>
                                                <input type="email" className="form-control" id="inputEmail4" readOnly={true} value={userInfo.email} ></input>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputPassword4"><Trans i18nKey='Profile.fullname' /></label>
                                                <input type="text" className="form-control" id="inputAddress" name="fullName" onChange={(e) => { this.handleChange(e) }}></input>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputEmail4"><Trans i18nKey='Profile.username' /></label>
                                                <input type="email" className="form-control" id="inputEmail4" readOnly={true} value={userInfo.username} ></input>
                                            </div>
                                            <div className="form-group col-md-6 ">
                                                <label htmlFor="inputAddress"><Trans i18nKey='Profile.phone' /></label>
                                                <input type="text" className="form-control" id="inputAddress" name="phone" onChange={(e) => { this.handleChange(e) }}></input>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6 ">
                                                <label htmlFor="inputAddress"><Trans i18nKey='Profile.pass' /></label>
                                                <input type="password" className="form-control" id="password" name="password" onChange={(e) => { this.handleChange(e) }}></input>
                                            </div>
                                            <div className="form-group col-md-6 ">
                                                <label htmlFor="inputAddress"><Trans i18nKey='Profile.repass' /></label>
                                                <input type="password" className="form-control" id="confirm_password" name="confirm_password" onChange={(e) => { this.handleChange(e) }}></input>
                                            </div>
                                        </div>



                                        <div className="form-group">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck"></input>
                                                <label className="form-check-label" htmlFor="gridCheck">
                                                    Check me out
                                                </label>
                                            </div>
                                        </div>
                                    </form>
                                    <button className="btn btn-primary mt-auto" onClick={() => this.handleUpdateProfile()}><Trans i18nKey='Profile.buttonUpdate' /></button>

                                </div>


                            </div>


                        </div>
                    </div> :
                    <div className="col-lg-8">
                        <Achievement achievement={achievement} />
                    </div>

                }
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    getuseUpdate: getuseUpdate(state)
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            fnUpdateProfile: userProfileActions.fnUpdateProfile,

        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(UserInfo));
