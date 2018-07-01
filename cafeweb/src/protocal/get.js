import axios from "axios";

export function getDate(Date) {
  return axios.get("http://localhost:3300/get");
}
