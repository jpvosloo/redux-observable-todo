import { pipe, map } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

const BASE_URL =
  "http://localhost:5001/jpv-t7/us-central1/api";

export const getUser = () => ajax.getJSON(`${BASE_URL}/user`);
export const getTodos = () => ajax.getJSON(`${BASE_URL}/todo`);
export const addTodo = text =>
  ajax({
    url: `${BASE_URL}/todo`,
    method: "POST",
    body: { text }
  }).pipe(map(data => data.response));

export const completeTodo = id =>
  ajax({
    url: `${BASE_URL}/todo/${id}/complete`,
    method: "POST"
  }).pipe(map(data => data.response));
