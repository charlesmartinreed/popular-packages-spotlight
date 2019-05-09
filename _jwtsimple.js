const jwt = require("jwt-simple");

// get token
const getToken = () => {
  const payload = { id: 1, name: "Charles" };

  // takes in a payload and a secret, which is normally stored in an env variable
  const token = jwt.encode(payload, "secret");

  return { token };
};

// validate the token
const validateToken = token => {
  // takes in the token and a secret, again, normally stored in an env variable
  const decoded = jwt.decode(token, "secret");

  return decoded;
};

// console.log(getToken());
const { token } = getToken();
console.log(validateToken(token)); //returns the payload
