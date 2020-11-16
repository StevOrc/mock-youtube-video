import axios from "axios";

const KEY = "??????";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search",
  params: {
    part: "snippet",
    maxResults: 25,
    key: KEY,
    type: "video",
    order: "viewCount",
  },
});
