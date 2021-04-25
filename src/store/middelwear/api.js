import axios from "axios";
import * as actions from "../api";
export const api = ({ dispatch }) => (next) => async (action) => {
  console.log(action);
  if (action.type !== actions.apiCallBegan.type) return next(action);
  const { url, method, data, onStart, onSucess, onError } = action.payload;
  if (onStart) dispatch({ type: onStart });
  next(action);
  try {
    const response = await axios.request({
      baseURL: `http://localhost:9001/api/`,
      url,
      method,
      data,
    });
    console.log("response", response);
    // general succes action from api actions
    dispatch(actions.apiCallSuccess(response.data));
    // specific success action
    if (onSucess) dispatch({ type: onSucess, payload: response.data });
  } catch (e) {
    // general Error action
    dispatch(actions.apiCallFailed(e));
    // specific Error action
    if (onError) dispatch({ type: onError, payload: { data: e.message } });
  }
};
