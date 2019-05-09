const jwt = require("jwt-simple");
const config = require("config");
const uuid = require("uuid");

// get token
const getToken = () => {
  // generate a fresh id with UUID
  const payload = { id: uuid.v4(), name: "Charles" };

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
