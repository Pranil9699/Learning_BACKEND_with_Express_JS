const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
// const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, `public`)));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  fs.readdir("./files", (err, files) => {
    res.render("index", { files: files });
  });
});

app.get("/", (req, res) => {
  fs.readdir("./files", (err, files) => {
    res.render("index", { files: files });
  });
});

app.get(`/file/:filename`, (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, filedata) => {
    res.render("show", {
      title: req.params.filename.split(".")[0],
      content: filedata,
    });
  });
});
app.get(`/edit/:filename`, (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, filedata) => {
    res.render("update", {
      title: req.params.filename.split(".")[0],
      content: filedata,
    });
  });
});

app.post(`/edit/:filename`, (req, res) => {
  fs.unlink(`./files/${req.params.filename}`, (err) => {
    if (err) console.error(err);
    else {
      fs.writeFile(`files/${req.body.title.split(" ").join("")}.txt`, req.body.content, (err) => {
        if (err) console.error(err);
        else res.redirect("/");
      });
    }
  });
});

app.post("/create", (req, res) => {
  const dir = "files";

  fs.mkdir(dir, { recursive: true }, (err) => {
    fs.writeFile(
      `${dir}/${req.body.title.split(" ").join("")}.txt`,
      req.body.content,
      (err) => {
        if (err) console.error(err);
        else res.redirect("/");
      }
    );
  });
});

app.listen(3000, () => console.log(`Server Running http://localhost:3000`));
