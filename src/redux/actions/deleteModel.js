import { DELETE_MODEL, API_DB } from "./actionTypes";
import axios from "axios";

export const deleteModel = (id, model) => {
    return async function(dispatch) {
        try {
            let result = await axios.delete(`${API_DB}/${model}/${id}`);
            return dispatch({
                type: DELETE_MODEL,
            });
        } catch (err) {
            console.log(err);
        }
    };
};