const {
  findUserSignUp,
  findUserSignIn,
  findDetailUser,
} = require("./user.repository");

const userSignUp = async (username, password) => {
  const { user } = await findUserSignUp(username, password);

  if (user) {
    throw new Error("User already exists");
  }

  if (!username) {
    throw new Error("Username is required");
  }

  if (!password) {
    throw new Error("Password is required");
  }
};

const userSignIn = async (username, password) => {
  const { user, checkedPassword, token, tokenOption } = await findUserSignIn(
    username,
    password
  );

  if (!user) {
    throw new Error("User Is Not Found");
  }

  if (!token) {
    throw new Error("You Must Login First");
  }

  if (!username) {
    throw new Error("Username Required");
  }

  if (!password) {
    throw new Error("Password Required");
  }

  if (!checkedPassword) {
    throw new Error("Wrong password");
  }
  return [token, tokenOption];
};

const userDetail = async (id) => {
  const user = await findDetailUser(id);

  return user;
};

module.exports = { userSignUp, userSignIn, userDetail };
