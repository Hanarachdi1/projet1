import axios from "axios";
import {
  SIGN_IN_FAIL,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_UP_SUCCESS,
} from "../constants/constUser";

export const signUp = (newUser, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/user/register",
      newUser
    );
    dispatch({ type: SIGN_UP_SUCCESS, payload: response.data });
    navigate("/signin");
  } catch (error) {
    console.log(error);
    dispatch({ type: SIGN_UP_FAIL, payload: error });
  }
};

//sign in

export const signIn = (user, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/user/login",
      user
    );
    console.log(response.data);
    dispatch({ type: SIGN_IN_SUCCESS, payload: response.data });
    navigate("/dashboard");
  } catch (error) {
    console.log(error);
    dispatch({ type: SIGN_IN_FAIL, payload: error });
  }
};

//get current user
/*const token = '..your token..'

axios.post(url, {
  //...data
}, {
  headers: {
    'Authorization': `Basic ${token}` 
  }
})
*/

export const getCurrentUser = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({ type: "LOADING_USER" });
  try {
    const response = await axios.get("http://localhost:5000/api/user/current", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: "GET_CURRENT_USER_SUCCESS", payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_CURRENT_USER_FAIL", payload: error });
  }
};

// log out

export const logOut = () => {
  return { type: "LOG_OUT" };
};