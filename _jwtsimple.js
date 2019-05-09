const jwt = require("jwt-simple");
const config = require("config");

// get token
const getToken = () => {
  const payload = { id: 1, name: "Charles" };

  // using config package, we can setup and pull global variables
  const token = jwt.encode(payload, config.get("jwtSecret"));

  return { token };
};

// validate the token
const validateToken = token => {
  // using config package, we can setup and pull global variables
  const decoded = jwt.decode(token, config.get("jwtSecret"));

  return decoded;
};

// console.log(getToken());
const { token } = getToken();
console.log(validateToken(token)); //returns the payload
