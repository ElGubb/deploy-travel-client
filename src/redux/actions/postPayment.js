import { POST_PAYMENT, API_DB } from "./actionTypes";
import axios from "axios";

export const postPayment = (payment) => {
    return async function(dispatch) {
        try {
            console.log(payment);
            let result = await axios.post(`${API_DB}/payment`, payment);
            console.log(result.data);
            return dispatch({
                type: POST_PAYMENT,
                payload: result.data,
            });
        } catch (err) {
            console.log(err);
        }
    };
};