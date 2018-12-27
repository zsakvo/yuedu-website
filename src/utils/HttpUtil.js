var HTTPUtil = {};

// const APIBaseURL = "http://qr.daguduiyuan.xyz/";

HTTPUtil.get = function(param) {
  //   var url = APIBaseURL + param;
  return fetch(param, {
    method: "GET",
    mode: "cors"
  }).then(function(response) {
    return response.json();
  });
};

HTTPUtil.post = function(param, formData) {
  return fetch(param, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: formData
  }).then(response => {
    return response.json();
  });
};

export default HTTPUtil;
