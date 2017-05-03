var admin = require("firebase-admin");
var serviceAccount = require("./webtesting-9ee92-firebase-adminsdk-8pabg-b90afdfa0b.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://webtesting-9ee92.firebaseio.com"
});


var registrationToken = "dRJ4uhyGw0I:APA91bF8_CkeiyES-BeIPHPYAjKYL5LPvj76z1h7oEVFbdvY3L6T-Rr4g1heL3aseDlAhcyMBIZ5knKEHt1AcBulWZltK4opiIL9-F67OVYfS1teE1t0aABaie4n9ed2XLK1wr84qp_9";
var topic ='webbear';
// See the "Defining the message payload" section below for details
// on how to define a message payload.
var topic1 = 'webfinsh';

var payload = {
  notification: {
    body: "hello 321",
    title: "Portugal vs. Denmark"
  }
};


admin.messaging().sendToTopic(topic1, payload)
  .then(function(response) {
    // See the MessagingDevicesResponse reference documentation for
    // the contents of response.
    console.log("Successfully sent message:", response);
  })
  .catch(function(error) {
    console.log("Error sending message:", error);
  });


  // admin.messaging().subscribeToTopic(registrationToken, topic)
  // .then(function(response) {
  //   // See the MessagingTopicManagementResponse reference documentation
  //   // for the contents of response.
  //   console.log("Successfully subscribed to topic:", response);
  // })
  // .catch(function(error) {
  //   console.log("Error subscribing to topic:", error);
  // });