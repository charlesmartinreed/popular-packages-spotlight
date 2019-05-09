const bcrypt = require("bcryptjs");

// bcrypt methods return a promise
const hashPassword = async plainText => {
  const user = {
    name: "Charles",
    email: "charles@fakeemails.com",
    password: plainText
  };

  // first create the salt
  const salt = await bcrypt.genSalt(10);

  // hash the password, using the salt generated above
  user.password = await bcrypt.hash(plainText, salt);

  console.log(user);
};

const comparePasswords = async (plainText, hash) => {
  const isMatch = await bcrypt.compare(plainText, hash);

  if (isMatch) {
    console.log("Match");
  } else {
    console.log("Not Match");
  }
};

// hashPassword("12345678");
comparePasswords(
  "12345678",
  "$2a$10$Y4drrBRWeqheBi2GKWLwEeQmCCsn.xe6ZPJdE/r7RVvPkndmLqKVu"
); //match

comparePasswords(
  "123",
  "$2a$10$Y4drrBRWeqheBi2GKWLwEeQmCCsn.xe6ZPJdE/r7RVvPkndmLqKVu"
); //not match
