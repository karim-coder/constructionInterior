import createDataContext from "./createDataContext";
import axios from "axios";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

const signup =
  (dispatch) =>
  async ({ userName, password }) => {
    try {
      const response = await axios.post("/signup", { userName, password });
      await localStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sing up",
      });
    }
  };

const signin =
  (dispatch) =>
  async ({ userName, password }) => {
    dispatch.preventDefault();
    try {
      const response = await axios.post("/http://localhost:3000/signin", {
        userName,
        password,
      });
      await localStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sing up",
      });
    }
  };

const signout = (dispatch) => async () => {
  await localStorage.removeItem("token");
  dispatch({ type: "signout" });
};
export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: "" }
);
