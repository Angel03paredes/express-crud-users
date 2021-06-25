const UserPersistence = require("../Model/UserPersistence");
const { v4: uuidv4 } = require("uuid");

const UP = new UserPersistence();
const UserController = {};

UserController.getUsers = (req, res) => {
  const users = UP.getUsers();
  res.render("index", { users });
};

UserController.getUser = (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.send("user");
};

UserController.addUser = (req, res) => {
  const user = req.body;
  user.id = uuidv4();
  UP.addUser(user);
  res.redirect("/");
};

UserController.deleteUser = (req, res) => {
  const { id } = req.params;
  UP.deleteUser(id);
  res.json({ message: "Delted user" });
};

UserController.updateUser = (req, res) => {
  const { id } = req.params;
  const user = req.body;
  UP.updateUser(id, user);
  console.log(user);
  res.redirect("/");
};

module.exports = UserController;
