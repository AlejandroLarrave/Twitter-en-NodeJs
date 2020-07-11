"use strict";
const jwt = require("jwt-simple");
const moment = require("moment");
const key = "ClaveSecreta";

exports.createToken = (user) => {
  const payload = {
    sub: user._id,
    name: user.name,
    username: user.username,
    lat: moment().unix(),
    exp: moment().add(23, "hours").unix(),
  };
  return jwt.encode(payload, key);
};
