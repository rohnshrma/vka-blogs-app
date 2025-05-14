import express from "express";
import bodyParser from "body-parser";
const app = express();
const PORT = 3000;

// middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// routes
// home | root

app.route("/").get((req, res) => {
  res.render("Home");
});

// compose
app
  .route("/compose")
  .get((req, res) => {
    res.render("Compose");
  })
  .post((req, res) => {
    console.log(req.body);
  });

// blogs
app.route("/blogs").get((req, res) => {
  res.render("Blogs");
});

app.listen(PORT, () => {
  console.log("Server Started on PORT : ", PORT);
});
