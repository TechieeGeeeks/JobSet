import axios from 'axios';
import { JOB_TYPE_LOAD_FAIL, JOB_TYPE_LOAD_REQUEST, JOB_TYPE_LOAD_SUCCESS } from '../constants/jobTypeConstant';

const host = "https://jobset-api.onrender.com"

export const jobTypeLoadAction = () => async (dispatch) => {
    dispatch({ type: JOB_TYPE_LOAD_REQUEST });
    try {
        const { data } = await axios.get(`${host}/api/type/jobs`);
        dispatch({
            type: JOB_TYPE_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: JOB_TYPE_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}

export const createJobTypeAction = () => async (dispatch) => {
    console.log("good");
}

export const editJobTypeAction = () => async (dispatch) => {
    console.log("good");
}

