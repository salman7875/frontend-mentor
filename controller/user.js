const connect = require("../config/db");

const signup = async (req, res) => {
  try {
    const { fname, lname, adhar, email, password, image, role } = req.body;
    const data = await connect.query(
      "INSERT INTO users (fname,lname,adhar,email,password,image,role) VALUES (?,?,?,?,?,?,?)",
      [fname, lname, adhar, email, password, image, role]
    );
    if (data[0].affectedRows < 1) {
      return res.status(400).json({ message: "Something went wrong!" });
    }
    res.status(201).json({ message: "User created success" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [[user]] = await connect.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );
    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid password" });
    }
    res.status(200).json({ user: user });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const userInfo = async (req, res) => {
  try {
    const [users] = await connect.query("SELECT * FROM users WHERE role = ?", [
      "user",
    ]);
    res.status(200).json({ users: users });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const getUserTask = async (req, res) => {
  try {
    const [userTask] = await connect.query(
      "SELECT * FROM tasks INNER JOIN users ON tasks.idusers = ?",
      [req.query.id]
    );
    
    if (!req.query.id) {
      return res.status(400).json({ message: "Not found!" });
    }
    res.status(200).json({ tasks: userTask });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = { signup, signin, userInfo, getUserTask };
