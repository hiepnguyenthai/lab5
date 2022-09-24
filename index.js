//khai báo module express framework
const express = require("express");
const app = express();
//khai báo module path
const path = require("path");

//khai báo server port
const port = process.env.PORT || 3000;

//set thư mục chứa view
app.set("views", path.join(__dirname, "views"));

//set view engine (template engine)
//=> giúp gõ code của back-end ngay trong front-end dễ hơn
//hbs: handle bar => nếu dùng view engine khác thì thay đổi giá trị này
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  var name = "Cloud Computing"; //string
  var code = 1644; //int
  //pass dữ liêu từ back-end sang front-end
  //cú pháp: name (data) : value (data)
  //gửi dữ liệu là value và nhận với tên là name
  res.render("index", {name: name, ma: code, ky: "Fall 2022"});
});

app.get("/mobile", (req, res) => {
  var list = ["IPhone", "SamSung", "Oppo", "Huewai"]
  res.render("mobile", {mobiles: list});
});

app.get("/laptop", (req, res) => {
  res.render("laptop");
});

//listen port để chạy server
app.listen(port);
