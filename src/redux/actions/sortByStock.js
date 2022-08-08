import { SORT_BY_STOCK, API_DB } from "./actionTypes";
import axios from 'axios'

export const sortByStock = (stock, destination, start, end) => {
    return async(dispatch) => {
        try {
            let result = await axios.get(
                `${API_DB}/packages?stock=${stock}&destination=${destination}&start=${start}`
            );
            return dispatch({
                type: SORT_BY_STOCK,
                payload: result.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};