const express = require("express");
const path = require("path")
const app = express()
const port = 2000;
const hbs = require("hbs")

const static_path = path.join(__dirname, "../public")
const viewPath = path.join(__dirname, "../template/views")
const partials_path = path.join(__dirname, "../template/partials")

app.set("view engine", "hbs")
app.set("views", viewPath);
hbs.registerPartials(partials_path)

app.use(express.static(static_path))



app.get("/", (req, res) => {
    res.render("index")
})
app.get("/about", (req, res) => {
    res.render("about")
})
app.get("/weather", (req, res) => {
    res.render("weather")
})
app.get("about/*", (req, res) => {
    res.render("404")
})
app.get("*", (req, res) => {
    res.render("404")
})

app.listen(port, () => {
    console.log(`listing the port is number is ${port}`)
})