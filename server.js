const express = require("express");
const path = require("path");
const fs = require("fs");

// Set up Express app to listen on port 3000
let app = express();
let PORT = process.env.PORT || 3000;