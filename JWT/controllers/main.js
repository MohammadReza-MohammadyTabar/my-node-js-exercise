const jwt = require("jsonwebtoken");
const { BadRequestError } = require("../errors/index");
const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    throw new BadRequestError("Please provide username or password");
  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const { username } = req.user;
  const rn = Math.floor(Math.random() * 100);
  res.status(200).json({ msg: `hi ${username} `, secret: rn });
};

module.exports = { login, dashboard };
