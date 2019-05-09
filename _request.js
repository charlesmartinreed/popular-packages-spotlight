// just used to make HTTP requests

const request = require("request");

const getPosts = () => {
  const options = {
    uri: "https://jsonplaceholder.typicode.com/posts",
    method: "GET",
    headers: {
      "user-agent": "node.js"
    }
  };
  //takes in the options, callback
  request(options, (err, res, body) => {
    if (err) throw err;

    console.log(JSON.parse(body));
  });
};

getPosts();
