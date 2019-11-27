const functions = require('firebase-functions');
const admin = require('firebase-admin');
const app = admin.initializeApp();

const uidFromUrl = (url) => {
  const [, uid] = url.match(/\/api\/log\/([A-Za-z0-9]+).*/);
  return uid;
};

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.logWebhook = functions.https.onRequest(async (request, response) => {
  try {
    const {body, method, query, originalUrl} = request;
    const uid = uidFromUrl(originalUrl);
    console.log(body, method, query, uid);
    await app.firestore()
    .collection("webhooks")
    .doc(uid)
    .collection("logs")
    .add({
      date: new Date(),
      originalUrl,
      method,
      body,
      query,
      uid
    });

    return response
      .status(200)
      .send("Logged");
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .send("Borked it");
  }

});
