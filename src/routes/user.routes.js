const express = require("express");
const api = express.Router();
const userController = require("../controllers/user.controller");
const md_auth = require("../middleware/autentication");

api.post("/v1", md_auth.ensureAuth, userController.v1);

module.exports = api;
