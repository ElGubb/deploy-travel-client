import { ADD_ONE_PEOPLE, API_DB } from "./actionTypes";
import axios from "axios";

export const addOnePeople = (id, numberPeople, email) => {
    return async function(dispatch) {
        try {

            let respuesta = await axios.put(`${API_DB}/cartdetails/add`, { id, numberPeople })

            let resp = await axios.get(`${API_DB}/carts/${email}`);
            return dispatch({
                type: ADD_ONE_PEOPLE,
                payload: resp.data
            });
        } catch (err) {
            console.log(err);
        }
    };
};