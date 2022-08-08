import { ADD_DETAIL_CART, API_DB } from "./actionTypes";
import axios from "axios";

export const addDetailCart = (idCart, id, email) => {
    return async function(dispatch) {
        try {

            let respuesta = await axios.post(`${API_DB}/cartdetails`, { idCart: idCart, idPackage: id, numberPeople: 1, isQualified: false })
            console.log("RESPUESTA ADDDETAILCART:", respuesta.data)
            let resp = await axios.get(`${API_DB}/carts/${email}`);
            return dispatch({
                type: ADD_DETAIL_CART,
                payload: resp.data
            });
        } catch (err) {
            console.log(err);
        }
    };
};