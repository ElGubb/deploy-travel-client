import {
    GET_OFFERS,
    API_DB
} from "./actionTypes";

import axios from 'axios';


function getOffers() {
    return async function(dispatch) {
        try {
            let result = await axios.get(`${API_DB}/packages`);
            return dispatch({
                type: GET_OFFERS,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
}

export default getOffers