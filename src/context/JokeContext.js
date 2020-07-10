import createDataContext from "./createDataContext";
import api from "../api";

const GET_JOKE = "GET_JOKE";
const jokeStore = {}

const jokeReducer = (jokeStore, action) => {
  switch (action.type) {
    case GET_JOKE:
      return { ...jokeStore, joke: action.payload };
    default:
      return jokeStore;
  }
};

const getJoke = dispatch => async () => {
  const response = await api.get("/Any?type=twopart");
  dispatch({ type: GET_JOKE, payload: response.data });
};


export const { Provider, Context } = createDataContext(
  jokeReducer,
  { getJoke },
  { joke: jokeStore.joke }
);
