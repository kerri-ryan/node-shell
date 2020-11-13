const request = require("request");

const curl = (done, URL) => {
  request(URL, function (error, response, body) {
    if (error) {
      done(`error: ${error}`);
    } else {
      done(`statusCode: ${response} & ${response.statusCode}, body: ${body}`);
    }
  });
};

module.exports = curl;