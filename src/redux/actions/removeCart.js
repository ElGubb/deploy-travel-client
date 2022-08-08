import { REMOVE_CART, API_DB } from "./actionTypes";
import axios from "axios";

export const removeCart = (id, email) => {
    return async function(dispatch) {
        try {
            let result = await axios.delete(`${API_DB}/carts/${id}`);
            let resp = await axios.get(`${API_DB}/carts/${email}`);

            return dispatch({
                type: REMOVE_CART,
                payload: resp.data
            });
        } catch (err) {
            console.log(err);
        }
    };
};