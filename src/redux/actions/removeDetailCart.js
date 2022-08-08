import { REMOVE_DETAIL_CART, API_DB } from "./actionTypes";
import axios from "axios";

export const removeDetailCart = (id, mail) => {
    return async function(dispatch) {
        try {
            let result = await axios.delete(`${API_DB}/cartdetails/${id}`);
            let resp = await axios.get(`${API_DB}/carts/${mail}`);

            return dispatch({
                type: REMOVE_DETAIL_CART,
                payload: resp.data
            });
        } catch (err) {
            console.log(err);
        }
    };
};