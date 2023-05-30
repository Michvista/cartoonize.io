/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-spacing */
/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

const express = require('express');
require('body-parser');
const cors = require('cors');
const path = require('path');

// const { fileURLToPath } = require('url');

// const appFilename = path.basename(fileURLToPath(__filename));

// console.log(appFilename);
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const port = 3005;

const appDirname = path.resolve(__dirname);
console.log(appDirname);
app.use(express.static(path.join(appDirname)));
app.use(express.static('css'));
app.use(express.static('dist'));
app.use(express.static('src'));
app.use(express.static('images'));
app.use(express.static('JavaScript'));

app.use(express.static(`${appDirname}/public`));

app.get('/', (_req, res) => {
  res.sendFile('./index.html', { root: appDirname });
});
app.get('/linkUserAccount', (_req, res) => {
  res.sendFile('./linkAccount.html', { root: `${appDirname}/dist` });
});
app.get('/signIn', (_req, res) => {
  res.sendFile('./signIn.html', { root: `${appDirname}/dist` });
});
app.get('/dashboard', (_req, res) => {
  res.sendFile('./dashboard.html', { root: `${appDirname}/dist` });
});
app.use((_req, res) => {
  res.send("<p> 404 page not found </p>");
});

app.listen(port, () => {
  console.log(`We are running on ${port}`);
});

module.exports = app;

