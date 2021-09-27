import axios from 'axios';
//import { server } from '../mocks/server';

export const FETCH_SMURFS_LOADING = "FETCH_SMURFS_LOADING";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";
export const ADD_SMURFS = "ADD_SMURFS";
export const ERROR_VALUE = "ERROR_VALUE";

export const fetchSmurfs = () => {

    return dispatch => {
      dispatch({ type: FETCH_SMURFS_LOADING })
      axios.get(``)
        .then(res => {
          dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data.results[0]})
        })
        .catch(err => {
          dispatch({ type: FETCH_SMURFS_FAIL, payload: err.error })
        }) 
    }
};

export const addSmurfs = (smurfsAdded)=>{
    return({type: ADD_SMURFS, payload:smurfsAdded});
};
export const errorValue = (value)=>{
    return({type: ERROR_VALUE, payload:value});
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.