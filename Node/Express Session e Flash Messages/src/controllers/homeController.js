const HomeModel = require("../models/HomeModel");

exports.paginaInicial = (req, res) => {
  console.log(req.flash('success'),req.flash("info"), req.flash("error"));
  res.render("index");
};

exports.trataPost = (req, res) => {
  res.send(req.body);
};
