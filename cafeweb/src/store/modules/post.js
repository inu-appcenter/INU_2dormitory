import { createAction, handleActions } from "redux-actions";
import axios from "axios";

function getPostAPI(postId) {
  return axios.get("http://localhost.com:3300/get");
}

const GET_POST_PENDING = "post/GET_POST_PENDING";
const GET_POST_SUCCESS = "post/GET_POST_SUCCESS";
const GET_POST_FAILURE = "post/GET_POST_FAILURE";

export const getPost = postId => async dispatch => {
  dispatch({ type: GET_POST_PENDING });

  try {
    const reponse = await getPostAPI(postId);
    dispatch({ type: GET_POST_SUCCESS, payload: response });
    return response;
  } catch (err) {
    dispatch({ type: GET_POST_FAILURE, payload: err });
  }
};

const initialState = {
  fetching: false,
  error: false,
  title: "",
  body: ""
};

export default handleActions(
  {
    [GET_POST_PENDING]: state => ({ ...state, fetching: true, error: false }),
    [GET_POST_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      fetching: false,
      title: data.title,
      body: data.body
    }),
    [GET_POST_FAILURE]: state => ({ ...state, fetching: false, error: true })
  },
  initialState
);
