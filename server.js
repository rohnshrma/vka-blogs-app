import express from "express";
import bodyParser from "body-parser";
const app = express();
const PORT = 3000;

var blogs = [];

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
    blogs.push(req.body);
    res.redirect("/blogs");
  });

// blogs
app.route("/blogs").get((req, res) => {
  res.render("Blogs", {
    data: blogs.length > 0 ? blogs.reverse() : "No Blogs Found",
  });
});
app.route("/delete/:id").get((req, res) => {
  const deleteId = parseInt(req.params.id);
  blogs = blogs.filter((blog, index) => index !== deleteId);
  res.redirect("/blogs");
});

app.listen(PORT, () => {
  console.log("Server Started on PORT : ", PORT);
});
