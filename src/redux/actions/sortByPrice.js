import { SORT_BY_PRICE, API_DB } from "./actionTypes";
import axios from 'axios'

export const sortByPrice = (price, destination, start) => {
    return async(dispatch) => {
        try {
            let result = await axios.get(
                `${API_DB}/packages?price=${price}&destination=${destination}&start=${start}`
            );
            return dispatch({
                type: SORT_BY_PRICE,
                payload: result.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};