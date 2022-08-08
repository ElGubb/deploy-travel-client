import { POST_REVIEW, API_DB } from "./actionTypes";
import axios from "axios";

export const postReview = (review) => {
    return async function(dispatch) {
        try {
            let result = await axios.post(`${API_DB}/reviews`, review);
            return dispatch({
                type: POST_REVIEW,
                payload: result.data,
            });
        } catch (err) {
            console.log(err);
        }
    };
};