import axios from "axios";

export default function fireAPI(method, url, data) {
  let URL = "https://api.gyftr.net/smartbuyapi/smartbuyapi/hdfc/api/v1/" + url;
  let config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (method == "POST") {
    return axios.post(URL, data, config);
  } else if (method == "GET") {
    return axios.get(URL, config);
  } else if (method == "PUT") {
    return axios.put(URL, data, config);
  }
}
