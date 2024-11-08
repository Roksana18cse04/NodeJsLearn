require("dotenv").config();
const express = require("express");

const dev = {
    app:{
        port : process.env.PORT || 4000,
    },
    db:{
        url : process.env.DB_URL || "mongodb://localhost:29017/userDemoDB",

    },
};

module.exports = dev;