import {
    createBallotOpens, getAllBallots, getAllBallotsVote, createBallotClosses,getBallotDeploy
} from "./index";

import * as CONFIG from "../../config/configUrl";
import * as $http from "../../utils/httpProvider";
import { Notification, MessageBox } from "element-react";


// CLASS DETAIL 
export const fnCreateBallotOpen = (formData) => {
    return dispatch => {
        dispatch(createBallotOpens(formData));
    }
};

export const fnCreateBallotClosses = () => {
    return dispatch => {
        dispatch(createBallotClosses());
    }
};

export const fnGetAllBallot = () => {
    return dispatch => {
        $http.getData(CONFIG.API_META_MASK_URL + "/get-all-ballots").then((response) => {
       
            dispatch(getAllBallots(response.data));

        }).catch((error) => {
            Notification({
                title: 'Errors',
                message: "error user exits or parameters are invalid",
                type: 'error'
            });
        })
    }
};

export const fnGetAllBallotVote = (status) => {
    
    return dispatch => {
        $http.getData(CONFIG.API_META_MASK_URL + `/get-all-ballotsvote/${status}`).then((response) => {
            console.log("candidate, ", response.data)
            dispatch(getAllBallotsVote(response.data));

        }).catch((error) => {
            Notification({
                title: 'Errors',
                message: "error user exits or parameters are invalid",
                type: 'error'
            });
        })
    }
};

export const fnPostAllBallotVote = (ballot)=> {

    return dispatch => {
        $http.postData(CONFIG.API_META_MASK_URL + `/post-all-ballotsvote/`,ballot).then((response) => {
            console.log("candidate, ", response.data)
            dispatch(getAllBallotsVote(response.data));

        }).catch((error) => {
            Notification({
                title: 'Errors',
                message: "error user exits or parameters are invalid",
                type: 'error'
            });
        })
    }
};

export const fnCreateBallot = (ballot) => {
    return dispatch => {
        $http.postData(CONFIG.API_META_MASK_URL + "/create-ballot/", ballot).then((response) => {
            if (response.data.code === 'Success') {
                dispatch(fnGetAllBallot());
                Notification({
                    title: 'Successfull',
                    message: "Successfull",
                    type: 'success'
                });
            }
            else {
                Notification({
                    title: 'Errors',
                    message: " create ballot fail",
                    type: 'error'
                });
            }


        }).catch((error) => {
            Notification({
                title: 'Errors',
                message: "error user exits or parameters are invalid",
                type: 'error'
            });
        })
    }
};

export const fnDeleteBallot = (id) => {
    return dispatch => {
        $http.deleteData(CONFIG.API_META_MASK_URL + `/delete-ballot/${id}`).then((response) => {
            if (response.data.code === 'Success') {
                dispatch(fnGetAllBallot());
                Notification({
                    title: 'Successfull',
                    message: "Successfull",
                    type: 'success'
                });
            }
            else {
                Notification({
                    title: 'Errors',
                    message: "update fail",
                    type: 'error'
                });
            }

        }).catch((error) => {
            Notification({
                title: 'Errors',
                message: "error try catch",
                type: 'error'
            });
        })
    }
};

export const fnDeloyBallot = (deployBallot) => {
    return dispatch => {
        $http.putData(CONFIG.API_META_MASK_URL + `/deploy-ballot/`,deployBallot)
        .then((response) => {
            if (response.data.code === 'Success') {
                console.log("ballot, ",response.data.data)
                dispatch(getBallotDeploy(response.data.data))
                dispatch(fnGetAllBallot());
                Notification({
                    title: 'Successfull',
                    message: "Successfull deploy",
                    type: 'success'
                });
            }
            else {
                Notification({
                    title: 'Errors',
                    message: "update fail",
                    type: 'error'
                });
            }

        }).catch((error) => {
            Notification({
                title: 'Errors',
                message: "error try catch",
                type: 'error'
            });
        })
    }
};

export const fnUpdateBallot = (ballot) => {
    return dispatch => {
        $http.putData(CONFIG.API_META_MASK_URL + "/update-ballot/", ballot).then((response) => {
            if (response.data.code === 'Success') {
                dispatch(fnGetAllBallot());
                Notification({
                    title: 'Successfull',
                    message: "Successfull",
                    type: 'success'
                });
            }
            else {
                Notification({
                    title: 'Errors',
                    message: " create ballot fail",
                    type: 'error'
                });
            }


        }).catch((error) => {
            Notification({
                title: 'Errors',
                message: "error user exits or parameters are invalid",
                type: 'error'
            });
        })
    }
};

export const fnSendEmail = (data) => {
    return dispatch => {
        $http.postData(CONFIG.API_META_MASK_URL + "/sent-mail/", data).then((response) => {
            if (response.data.code === 'Success') {
                dispatch(fnGetAllBallot());
                Notification({
                    title: 'Successfull',
                    message: "Successfull",
                    type: 'success'
                });
            }
            else {
                Notification({
                    title: 'Errors',
                    message: " create ballot fail",
                    type: 'error'
                });
            }


        }).catch((error) => {
            Notification({
                title: 'Errors',
                message: "error user exits or parameters are invalid",
                type: 'error'
            });
        })
    }
};







