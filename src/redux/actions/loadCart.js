import { LOAD_CART, API_DB } from "./actionTypes";
import axios from "axios";

export const loadCart = (mail) => {
    return async function(dispatch) {
        try {
            let result = await axios.get(`${API_DB}/carts/${mail}`);
            return dispatch({
                type: LOAD_CART,
                payload: result.data,
            });
        } catch (err) {
            console.log(err);
        }
    };
};