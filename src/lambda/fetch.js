import axios from "axios";
import config from "../../config";

exports.handler = function(event, context, callback) {
  const apiRoot = "https://api.unsplash.com";
  const accessKey = process.env.ACCESS_KEY || config.accessKey;

  const catEndpoint = `${apiRoot}/photos/random?client_id=${accessKey}&count=${5}&collections='3489189,602283,8336796'`;

  axios.get(catEndpoint).then(res => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        images: res.data
      })
    });
  });
};
