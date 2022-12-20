export const HIDE_SIDE_BAR = 'THEME/HIDE_SIDE_BAR';

export const setHideSideBar = hideSideBar => ({
    type: HIDE_SIDE_BAR,
    hideSideBar
});

export default function reducer(state = {
    hideSideBar: false
},action){
    switch (action.type) {
        case HIDE_SIDE_BAR:
            return {
                ...state,
                hideSideBar: action.hideSideBar
            };
        default:
            return state;
    }
}