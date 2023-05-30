/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
/* eslint-disable no-unused-vars */
const functions = require("firebase-functions");

const { readFileSync } = require("node:fs");
const express = require("express");
const multer = require("multer");
const { diskStorage } = require("multer");
const dotenv = require("dotenv");
dotenv.config();
require("body-parser");

const { fireStorage } = require("./firebase-config.js");
const { uploadBytesResumable, getDownloadURL, ref } = require("firebase/storage");
const path = require("path");
const appDirname = path.resolve(__dirname);
const fs = require("fs");

console.log(appDirname);

const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const port = 3610;

const fire = path.join(appDirname, "./firebase.js");
console.log(fire);
console.log(appDirname);
app.use(express.static("css"));
app.use(express.static("images"));
app.use(express.static(path.join(appDirname, "./public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

const multerStorage = diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(appDirname, "public"));
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
  },
});

const upload = multer({
  storage: multerStorage,
});

app.get("/upload", (req, res) => {
  res.render("upload");
});

app.post("/api/upload", upload.single("myFile"), async (req, res) => {
  console.log(req.file.filename);
  try {
    const filePath = path.join(appDirname, "public", req.file.filename);
    console.log("appDirname: ", appDirname);
    console.log("req.file.filename: ", req.file.filename);
    console.log("filePath: ", filePath);
    const storage = ref(fireStorage, `images/${req.file.filename}`);
    const metadata = {
      contentType: req.file.mimetype,
    };
    const snapshot = await uploadBytesResumable(storage, readFileSync(filePath), metadata);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return res.render("uploaded", { url: downloadURL });
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

app.use((req, res) => {
  res.send("<p> 404 page not found </p>");
});

app.listen(port, () => {
  console.log(`Waiting for further instructions on ${port}`);
});

exports.cartoon = functions.https.onRequest(app);
