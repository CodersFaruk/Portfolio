import axios from "axios";

class RestClient {
  //Get Request Here
  static GetRequest = getUrl => {
    return axios
      .get(getUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return null;
      });
  };

  //Post Request Here
  static PostRequest = (postUrl, postJson) => {
    let config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };

    return axios
      .post(postUrl, postJson, config)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return null;
      });
  };
}

export default RestClient;
