import { JOB_LOAD_REQUEST } from "../constants/jobConstant"
import axios from 'axios';

export const jobLoadAction =(pageNumber, keyword='', cat='', location='')=>async(dispatch)=>{
    dispatch({type: JOB_LOAD_REQUEST});
    try {
        const {data} = await axios.get(`/api/jobs?pageNumber=${pageNumber}&keyword${keyword}=&cat${cat}=&location=${location}`)
    } catch (error) {
        
    }

}