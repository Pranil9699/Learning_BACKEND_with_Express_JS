const fs = require("fs");
fs.unlink("xyz.txt", (err) => {
  if (err) console.error(err);
  else console.log("file removed");
});
fs.writeFile("abc.txt", "Hey  Side Pranil Takawane", (err) => {
  if (err) console.error(err);
  else console.log("done");
});
// fs.appendFile("abc.txt", "Today I'm Bored Yar", (err) => {
//   if (err) console.error(err);
//   else console.log("done");
// });
// fs.rename("abc.txt", "xyz.txt", (err) => {
//   if (err) console.error(err);
//   else console.log("done");
// });
// fs.copyFile("xyz.txt", "./copy/xyz.txt", (err) => {
//   if (err) console.error(err);
//   else console.log("done");
// });
// fs.unlink("xyz.txt", (err) => {
//   if (err) console.error(err);
//   else console.log("done");
// });
// fs.rm("./copy",{recursive:true}, (err) => {
//   if (err) console.error(err);
//   else console.log("done");
// });

// fs.readFile("abc.txt", (err, data) => {
//   if (err) console.error(err);
//   else {
//     console.log("done");
//     console.log(JSON.stringify(data.toString()));
//   }
// });

// var http = require("http");
// var server = http.createServer((req, res) => {
//   res.end("hello");
// });
// server.listen(3000);
// const epxress = require("express");
// const app = epxress();
// app.use((req, res, next) => {
//   console.log("Checked");
//   next();
// });
// app.get("/", (req, res) => {
//   res.json({
//     Check: "Working the express server",
//   });
// });
// app.get("/profile", (req, res) => {
//   return new Error("Unexcepted Condition occured");
// });

// app.use((err, req, res,next) => {
//   console.error(err.stack);
//   res.status(500).send("Something went Wrong");
// });
// app.listen(3000);
