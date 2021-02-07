import axios from "axios";

const API = axios.create({
  baseURL: "https://api.uberchord.com/v1/chords/",
});

export default API;
