const express = require("express");
const app = express();
const path = require("path");
const User = require("./models/user.model");
const mongoose = require("mongoose");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get(["/:id", "/"], async (req, res) => {
  if (req.params?.id) {
    const id = req.params?.id;
    const user = await User.findById(id);
    const users = await User.find();
    res.render("index", { user: user, id: user._id, users: users });
  } else {
    const users = await User.find();
    res.render("index", { users: users, id: null, user: new User({}) });
  }
});

app.get("/edit/:id", async (req, res) => {
  const id = req.params.id;
  res.redirect(`/${id}`);
});
app.post("/edit/:id", async (req, res) => {
  const id = req.params.id;
  const { name, address, phoneNo } = req.body;

  try {
    const user = await User.findById(id);
    if (user) {
      user.name = name;
      user.address = address;
      user.phoneNo = phoneNo;
      const newUser = await user.save();
    }
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    if (id) {
      await User.deleteOne({_id:id});
    }
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.post("/create", async (req, res) => {
  const { name, address, phoneNo } = req.body;
  const newUser = new User({
    name,
    address,
    phoneNo,
  });
  const updatedUser = await newUser.save();
  res.redirect("/");
});

app.listen(3000, async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://takawanepranil22:8NGjkDwhtAVL4wDO@cluster0.lsnczkt.mongodb.net/"
    );
    console.log("Successfully MongoDB Connected!!!");
  } catch (error) {
    console.log("Error getting To Connect DB: ", error.message);
  }
  console.log(`Server running http://localhost:3000`);
});
