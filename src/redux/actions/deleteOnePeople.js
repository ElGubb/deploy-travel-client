import { DELETE_ONE_PEOPLE, API_DB } from "./actionTypes";
import axios from "axios";

export const deleteOnePeople = (id, numberPeople, email) => {
    return async function(dispatch) {
        try {

            let respuesta = await axios.put(`${API_DB}/cartdetails/delete`, { id, numberPeople })

            let resp = await axios.get(`${API_DB}/carts/${email}`);
            return dispatch({
                type: DELETE_ONE_PEOPLE,
                payload: resp.data
            });
        } catch (err) {
            console.log(err);
        }
    };
};